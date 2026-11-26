/// <reference types="vite/client" />
import a from '../../docs/WP2_BLOCK_A_LESSONS.md?raw'
import b from '../../docs/WP2_BLOCK_B_LESSONS.md?raw'
import c from '../../docs/WP2_BLOCK_C_LESSONS.md?raw'
import d from '../../docs/WP2_BLOCK_D_LESSONS.md?raw'
import x from '../../docs/WP2_GUIDED_EXTENSION.md?raw'
export type BlockId='A'|'B'|'C'|'D'|'X'
export type RevisedLesson={id:string;title:string;block:BlockId;body:string;retrieval?:string}
export function parseDraft(raw:string,block:BlockId):RevisedLesson[]{
 const result:RevisedLesson[]=[]
 for(const section of raw.replace(/\r\n/g,'\n').split(/^## /m).slice(1)){
  const [heading,...lines]=section.trim().split('\n')
  const match=lines[0]?.match(/^ID: ([\w-]+)/)
  if(match){
   const body=lines.slice(1).filter(line=>!/^Author notes:|^References for WP5:/.test(line)).join('\n').trim()
   result.push({id:match[1],title:heading.replace(/^[A-DX]\d+ — /,''),block,body})
  }else if(/^Block [A-D].*(retriev|stopping point)/i.test(heading)&&result.length){
   result[result.length-1].retrieval=lines.join('\n').trim()
  }
 }
 return result
}
export const revisedLessons=[...parseDraft(a,'A'),...parseDraft(b,'B'),...parseDraft(c,'C'),...parseDraft(d,'D'),...parseDraft(x,'X')]
export const revisedBlocks=[{id:'A',title:'Programming foundations'},{id:'B',title:'Machine logic'},{id:'C',title:'Read INFORM'},{id:'D',title:'Troubleshoot and transfer'},{id:'X',title:'Guided extension and reference'}] as const
export type ContentBlock={kind:'text'|'code'|'table'|'heading'|'list'|'answer'|'hint';text:string;rows?:string[][];ordered?:boolean}
const solution=/(?:^|\s)(?:Example answer|Example solution|Answer example|Key criteria|Check after answering|Answer|Solution|Check|Key)\s*:/i
export function lessonBlocks(source:string):ContentBlock[]{
 const lines=source.split('\n');const out:ContentBlock[]=[]
 for(let i=0;i<lines.length;i++){
  const line=lines[i].trim();if(!line)continue
  if(line.startsWith('```')){const code:string[]=[];while(++i<lines.length&&!lines[i].trim().startsWith('```'))code.push(lines[i]);out.push({kind:'code',text:code.join('\n')});continue}
  if(line.startsWith('|')){const rows:string[][]=[];let j=i;while(j<lines.length&&lines[j].trim().startsWith('|')){const row=lines[j].trim().replace(/^\||\|$/g,'').split('|').map(v=>v.trim());if(!row.every(v=>/^:?-+:?$/.test(v)))rows.push(row);j++}i=j-1;out.push({kind:'table',text:'',rows});continue}
  if(line.startsWith('### ')){out.push({kind:'heading',text:line.slice(4)});continue}
  const plain=line.replace(/^[-*]\s+/,'')
  if(/^Hint:/i.test(plain)){out.push({kind:'hint',text:plain.replace(/^Hint:\s*/i,'')});continue}
  const m=solution.exec(plain)
  if(m){const prefix=plain.slice(0,m.index).trim();if(prefix)out.push({kind:'text',text:prefix});out.push({kind:'answer',text:plain.slice(m.index+m[0].length).trim()});continue}
  if(/^[-*] |^\d+\. /.test(line)){const ordered=/^\d+\. /.test(line);const items=[line.replace(/^[-*] |^\d+\. /,'')];while(i+1<lines.length&& (ordered?/^\d+\. /:/^[-*] /).test(lines[i+1].trim())&&!solution.test(lines[i+1])&&!/^[-*] Hint:/i.test(lines[i+1]))items.push(lines[++i].trim().replace(/^[-*] |^\d+\. /,''));out.push({kind:'list',text:items.join('\n'),ordered});continue}
  out.push({kind:'text',text:line})
 }
 return out
}
