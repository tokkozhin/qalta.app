import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
const site = fileURLToPath(new URL('..', import.meta.url));
const generator = path.join(site, 'site/build-consent.mjs');
test('consent config rejects secret, service-role JWT and malformed keys without overwriting public config', () => {
 const dir=mkdtempSync(path.join(tmpdir(),'qalta-consent-'));
 try {
  mkdirSync(path.join(dir,'public/oauth/consent'),{recursive:true});
  const target=path.join(dir,'public/oauth/consent/config.js');
  const token=role=>`eyJhbGciOiJIUzI1NiJ9.${Buffer.from(JSON.stringify({role})).toString('base64url')}.test`;
  for (const key of ['sb_secret_test',token('service_role'),'malformed']) {
   writeFileSync(target,'original public config');
   const run=spawnSync(process.execPath,[generator],{cwd:dir,env:{...process.env,SUPABASE_URL:'https://review.supabase.co',SUPABASE_PUBLISHABLE_KEY:key},encoding:'utf8'});
   assert.equal(run.status,1); assert.equal(readFileSync(target,'utf8'),'original public config');
  }
  for (const key of ['sb_publishable_review',token('anon')]) {
   const run=spawnSync(process.execPath,[generator],{cwd:dir,env:{...process.env,SUPABASE_URL:'https://review.supabase.co',SUPABASE_PUBLISHABLE_KEY:key},encoding:'utf8'});
   assert.equal(run.status,0,run.stderr); assert.ok(readFileSync(target,'utf8').includes(key));
  }
 } finally { rmSync(dir,{recursive:true,force:true}); }
});
test('OAuth consent route bypasses language redirects and preserves the authorization query', async()=>{
 const worker=(await import(path.join(site,'src/index.ts'))).default;
 for(const suffix of ['', '/', '/consent.js']){
  const url=`https://qalta.app/oauth/consent${suffix}?authorization_id=test-authorization`;
  let assetUrl;
  const response=await worker.fetch(new Request(url,{headers:{'accept-language':'ru',cookie:'lang=kk'}}),{ASSETS:{fetch(request){assetUrl=request.url;return new Response('consent asset');}}});
  assert.equal(response.status,200);assert.equal(response.headers.get('location'),null);assert.equal(assetUrl,url);
 }
 const redirect=await worker.fetch(new Request('https://qalta.app/tutorials/',{headers:{'accept-language':'ru'}}),{});
 assert.equal(redirect.status,302);assert.equal(redirect.headers.get('location'),'https://qalta.app/ru/tutorials/');
});
