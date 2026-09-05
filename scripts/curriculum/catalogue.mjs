import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const tasks=[];
const walk=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/^[A-Z]+-\d{3}\.md$/.test(e.name))tasks.push(p)}};
walk(path.join(root,'curriculum'));
const rows=tasks.sort().map(file=>{
  const text=fs.readFileSync(file,'utf8');
  const get=key=>text.match(new RegExp(`^${key}: (.+)$`,'m'))?.[1]??'';
  return {id:get('id'),phase:get('phase'),title:get('title'),type:get('type'),difficulty:get('difficulty'),guidance:get('guidance'),status:get('status'),file:path.relative(root,file).replaceAll('\\','/')};
});
process.stdout.write(JSON.stringify(rows,null,2)+'\n');
