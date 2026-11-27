import RevisedWorksheet from '../components/learning/RevisedWorksheet'
import InspectionTrace from '../components/learning/InspectionTrace'
import InspectionTiming from '../components/learning/InspectionTiming'
import BranchComparison from '../components/learning/BranchComparison'
import InstructionTrace from '../components/learning/InstructionTrace'
import TimingDiagram from '../components/learning/TimingDiagram'
import {useState,useRef,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {revisedLessons,revisedBlocks} from '../content/revisedLessons'
import RevisedLessonContent from '../components/learning/RevisedLessonContent'
import References from '../components/learning/References'
const key='inform-module01-revision-preview-v1'
const core=revisedLessons.filter(l=>l.block!=='X')
type Reading={id:string;reviewed:string[]}
function initial():Reading{try{const raw=JSON.parse(localStorage.getItem(key)||'null');if(raw&&Array.isArray(raw.reviewed))return {id:revisedLessons.some(l=>l.id===raw.id)?raw.id:core[0].id,reviewed:raw.reviewed.filter((id:unknown)=>revisedLessons.some(l=>l.id===id))}}catch{}return {id:core[0].id,reviewed:[]}}
export default function Module01Revised(){
 const [reading,setReading]=useState(initial),[open,setOpen]=useState(false)
 const [notes,setNotes]=useState<Record<string,string>>({})
 const heading=useRef<HTMLHeadingElement>(null)
 const index=Math.max(0,revisedLessons.findIndex(l=>l.id===reading.id)),lesson=revisedLessons[index]
 const count=core.filter(l=>reading.reviewed.includes(l.id)).length
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(reading))}catch{}},[reading])
 function go(id:string,mark=false){setReading(p=>({id,reviewed:mark?[...new Set([...p.reviewed,p.id])]:p.reviewed}));setOpen(false);requestAnimationFrame(()=>heading.current?.focus())}
 const next=revisedLessons[index+1]
 return <><header className="module-header"><p className="muted">MODULE 01 / REVISED CURRICULUM PREVIEW</p><h1>Programming fundamentals</h1><p>Work through four core learning blocks. Guided advanced examples and glossary are separate. Read-only fictional practice; no equipment operation.</p><p className="preview-notice">Review draft. Revised practice activities are available; assessment is not yet connected. Reading progress is separate from the <Link to="/module/01">existing module</Link> and cannot complete training.</p><p>Core lessons reviewed: {count}/{core.length}</p><progress aria-label="Core lessons reviewed" value={count} max={core.length}/></header><div className="learning-layout"><button className="mobile-lesson-toggle" aria-expanded={open} aria-controls="revised-navigation" onClick={()=>setOpen(o=>!o)}>{open?'Hide lesson navigation':'Browse lessons'} · {lesson.block}</button><nav id="revised-navigation" aria-label="Revised lesson sections" className={'lesson-nav'+(open?' navigation-open':'')}>{revisedBlocks.map(b=><details key={b.id} open={b.id===lesson.block}><summary>{b.id} · {b.title}</summary>{revisedLessons.filter(l=>l.block===b.id).map(l=><button key={l.id} aria-current={lesson.id===l.id?'step':undefined} onClick={()=>go(l.id)}>{reading.reviewed.includes(l.id)?'✓ ':''}{l.title}</button>)}</details>)}<details className="reference-drawer"><summary>Reference library</summary><References/></details></nav><article className="lesson-content"><section className="lesson-reading"><p className="muted">{lesson.block==='X'?'GUIDED EXTENSION / REFERENCE':'BLOCK '+lesson.block} · {index+1} of {revisedLessons.length}</p><h2 ref={heading} tabIndex={-1}>{lesson.title}</h2><RevisedLessonContent key={lesson.id} source={lesson.body}/></section>{lesson.id==='logic'&&<BranchComparison/>}{lesson.id==='walkthrough'&&<InspectionTrace/>}{lesson.id==='trace-inform'&&<InstructionTrace revised/>}{lesson.id==='fault'&&<InspectionTiming/>}{lesson.id==='parallel'&&<TimingDiagram/>}{lesson.id==='worksheet'&&<RevisedWorksheet notes={notes} onChange={(key,value)=>setNotes(n=>({...n,[key]:value}))}/>}{lesson.retrieval&&<section className="panel retrieval-panel" key={'retrieval-'+lesson.id}><h2>Stop and retrieve</h2><p>Try from memory before comparing your answers. This is a stopping point, not a timed test.</p><RevisedLessonContent source={lesson.retrieval}/></section>}{lesson.id==='worksheet'&&<section className="panel"><h2>Core study route ends here</h2><p>Revisit unfamiliar examples before continuing. The revised assessment and instructor checkpoint will be introduced after review. The following guided extension is not required for core reading progress.</p></section>}<div className="lesson-actions"><button disabled={index===0} onClick={()=>go(revisedLessons[index-1].id)}>Previous</button><button onClick={()=>go(next?.id??lesson.id,true)}>{next?'Mark reviewed and continue':'Mark reviewed'}</button></div></article></div><footer className="module-footer"><button onClick={()=>{if(window.confirm('Reset revised reading progress and clear fictional worksheet notes?'))goReset()}}>Reset revised progress</button><p className="muted">Local reading record only. Technical and instructor acceptance outstanding.</p></footer></>
 function goReset(){setNotes({});setReading({id:core[0].id,reviewed:[]});setOpen(false);requestAnimationFrame(()=>heading.current?.focus())}
}
