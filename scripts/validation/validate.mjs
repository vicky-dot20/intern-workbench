import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const fail=[];
const taskDir=path.join(root,'curriculum');
const required=['Objective','Context','What You Need to Learn','Requirements','Files / Folders','Implementation Guidance','Restrictions','Acceptance Criteria','How to Run','How to Test','Expected Evidence','Documentation Requirements','AI Usage Requirements','Submission Instructions','Branch Name','Commit Message','Pull Request Requirements','Mentor Review Checklist','Common Mistakes','Definition of Done','Optional Extension'];
const files=[];
const walk=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())walk(p);else files.push(p)}};
walk(taskDir);
const tasks=files.filter(f=>/[\\/]([A-Z]+-\d{3})\.md$/.test(f));
const ids=new Set(); const prereqs=[];
for(const f of tasks){const text=fs.readFileSync(f,'utf8');const name=path.basename(f,'.md');const id=text.match(/^id: ([A-Z]+-\d{3})$/m)?.[1];if(!id)fail.push(`missing ID: ${f}`);else{if(id!==name)fail.push(`filename/ID mismatch: ${f}`);if(ids.has(id))fail.push(`duplicate ID: ${id}`);ids.add(id)}for(const h of required)if(!text.includes(`## ${h}`))fail.push(`${name}: missing section ${h}`);const block=text.match(/prerequisites:\n((?:  - [A-Z]+-\d{3}\n?)*)/);if(block)for(const m of block[1].matchAll(/- ([A-Z]+-\d{3})/g))prereqs.push([name,m[1]]);}
for(const [id,p] of prereqs)if(!ids.has(p))fail.push(`${id}: unknown prerequisite ${p}`);
const requiredFiles=['README.md','ONBOARDING.md','INTERN-GUIDE.md','MENTOR-GUIDE.md','CURRICULUM.md','TASK-AUTHORING-GUIDE.md','CUSTOMIZATION.md','DEVELOPMENT-WORKFLOW.md','AI-USAGE.md','CONTRIBUTING.md','CODE-OF-CONDUCT.md','LICENSE','.github/PULL_REQUEST_TEMPLATE.md'];
for(const f of requiredFiles)if(!fs.existsSync(path.join(root,f)))fail.push(`missing required file: ${f}`);
const forbidden=[/TODO/i,/coming soon/i,/add later/i];
for(const f of files.filter(f=>f.endsWith('.md'))){const t=fs.readFileSync(f,'utf8');for(const r of forbidden)if(r.test(t))fail.push(`placeholder text in ${path.relative(root,f)}: ${r}`)}
const markdown=[]; walk(root); for(const f of files)if(f.endsWith('.md')&&!markdown.includes(f))markdown.push(f);
for(const f of markdown){
  const text=fs.readFileSync(f,'utf8');
  for(const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)){
    const href=match[1].split('#')[0];
    if(!href||/^(https?:|mailto:)/.test(href)||href.includes('<'))continue;
    const target=path.resolve(path.dirname(f),decodeURIComponent(href));
    if(!fs.existsSync(target))fail.push(`broken link in ${path.relative(root,f)}: ${href}`);
  }
}
if(tasks.length<150||tasks.length>250)fail.push(`task count ${tasks.length} outside 150-250 V1 target`);
if(fail.length){console.error(fail.join('\n'));process.exit(1)}
console.log(`Validated ${tasks.length} tasks, unique IDs, prerequisites, required sections, and framework files.`);
