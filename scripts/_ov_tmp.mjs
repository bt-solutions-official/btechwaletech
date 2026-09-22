import { readFileSync } from "node:fs";
import { transformSync } from "esbuild";
const dir = "E:/BtechWaleService/src/data/cities/content/";
async function load(s){const {code}=transformSync(readFileSync(dir+s+".ts","utf8"),{loader:"ts",format:"esm"});return (await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`)).default;}
const strip=(s)=>s.replace(/<[^>]+>/g," ");
function parts(c){return [c.hero.eyebrow,c.hero.h1,c.hero.lede,...c.hero.pills,c.quickAnswer,...c.snapshot.flatMap(r=>[r.label,r.value]),...Object.values(c.serviceNotes),c.whyUsIntro,c.pricingIntro,...c.sections.flatMap(s=>[s.heading,...s.paragraphs,...(s.list??[])]),...c.localities.flatMap(l=>[l.name,l.note]),...c.industries.flatMap(i=>[i.name,i.need,i.build]),...c.faqs.flatMap(f=>[f.question,f.answer])].map(strip);}
const W=(t)=>t.toLowerCase().replace(/[^\p{L}\p{N}₹ ]/gu," ").split(/\s+/).filter(Boolean);
function sh(t){const w=W(t),s=new Set();for(let i=0;i+8<=w.length;i++)s.add(w.slice(i,i+8).join(" "));return s;}
const [a,b]=process.argv.slice(2);const A=await load(a),B=await load(b);
const bs=sh(parts(B).join(" "));const full=sh(parts(A).join(" "));
let tot=0;for(const x of full)if(bs.has(x))tot++;console.log("overall",tot,full.size,(tot/full.size*100).toFixed(1));
for(const p of parts(A)){const s=sh(p);let n=0;const hits=[];for(const x of s)if(bs.has(x)){n++;hits.push(x)}if(n)console.log(n,"|",p.slice(0,90),"\n   ->",hits.slice(0,3).join(" / "));}
