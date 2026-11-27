import LessonSources from '../components/learning/LessonSources'
import RevisedAssessment from '../components/learning/RevisedAssessment'
import {newRecord,restoreRecord,type RevisedRecord} from '../lib/revisedProgress'
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
const assessmentKey='inform-module01-revised-assessment-v1'
function readRecord(coreReviewed:boolean):RevisedRecord{try{return restoreRecord(JSON.parse(localStorage.getItem(assessmentKey)||'null'),coreReviewed)}catch{return newRecord()}}
type Reading={id:string;reviewed:string[]}
function initial():Reading{try{const raw=JSON.parse(localStorage.getItem(key)||'null');if(raw&&Array.isArray(raw.reviewed))return {id:raw.id==='assessment'||revisedLessons.some(l=>l.id===raw.id)?raw.id:core[0].id,reviewed:raw.reviewed.filter((id:unknown)=>revisedLessons.some(l=>l.id===id))}}catch{}return {id:core[0].id,reviewed:[]}}
export default function Module01Revised(){
 const [reading,setReading]=useState(initial),[open,setOpen]=useState(false)
 const [record,setRecord]=useState(()=>readRecord(core.every(l=>reading.reviewed.includes(l.id))))
 const assessmentPage=reading.id==='assessment'
 const [notes,setNotes]=useState<Record<string,string>>({})
 const heading=useRef<HTMLHeadingElement>(null)
 const index=Math.max(0,revisedLessons.findIndex(l=>l.id===reading.id)),lesson=revisedLessons[index]
 const count=core.filter(l=>reading.reviewed.includes(l.id)).length
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(reading))}catch{}},[reading])
 useEffect(()=>{try{localStorage.setItem(assessmentKey,JSON.stringify(record))}catch{}},[record])
 function go(id:string,mark=false){setReading(p=>({id,reviewed:mark?[...new Set([...p.reviewed,p.id])]:p.reviewed}));setOpen(false);requestAnimationFrame(()=>heading.current?.focus())}
 const next=revisedLessons[index+1]
 return <><header className="module-header revised-header"><p className="muted">MODULE 01 · REVIEW DRAFT</p><h1>Programming fundamentals</h1><p className="scope-notice">Fictional, read-only practice. No equipment operation or qualification.</p><details className="preview-notice"><summary>Study route and review status</summary><p>Work through four core learning blocks at your own pace. Stop at the retrieval activities. Guided advanced examples and glossary are separate. Assessment and local checklist are for review, not formal acceptance. Progress is separate from the <Link to="/module/01">existing module</Link>.</p></details><div className="revised-progress"><p>Core lessons reviewed: {count}/{core.length}</p><progress aria-label="Core lessons reviewed" value={count} max={core.length}/></div></header><div className="learning-layout"><button className="mobile-lesson-toggle" aria-expanded={open} aria-controls="revised-navigation" onClick={()=>setOpen(o=>!o)}>{open?'Hide lesson navigation':'Browse lessons'} · {assessmentPage?'Assessment':lesson.block}</button><nav id="revised-navigation" aria-label="Revised lesson sections" className={'lesson-nav'+(open?' navigation-open':'')}>{revisedBlocks.map(b=><details key={b.id} open={!assessmentPage&&b.id===lesson.block}><summary>{b.id} · {b.title}</summary>{revisedLessons.filter(l=>l.block===b.id).map(l=><button key={l.id} aria-current={!assessmentPage&&lesson.id===l.id?'step':undefined} onClick={()=>go(l.id)}>{reading.reviewed.includes(l.id)?'✓ ':''}{l.title}</button>)}</details>)}<button aria-current={assessmentPage?'step':undefined} onClick={()=>go('assessment')}>Core assessment and checklist</button><details className="reference-drawer"><summary>Reference library</summary><References/></details></nav><article className="lesson-content">{assessmentPage?<><h2 ref={heading} tabIndex={-1}>Core assessment and checklist</h2><RevisedAssessment record={record} onChange={setRecord} coreReviewed={count===core.length} onReview={go}/><button onClick={()=>go('worksheet')}>Return to core worksheet</button></>:<><section className="lesson-reading"><p className="muted">{lesson.block==='X'?'GUIDED EXTENSION / REFERENCE':'BLOCK '+lesson.block} · {index+1} of {revisedLessons.length}</p><h2 ref={heading} tabIndex={-1}>{lesson.title}</h2><RevisedLessonContent key={lesson.id} source={lesson.body}/><LessonSources key={'source-'+lesson.id} id={lesson.id}/></section>{lesson.id==='logic'&&<BranchComparison/>}{lesson.id==='walkthrough'&&<InspectionTrace/>}{lesson.id==='trace-inform'&&<InstructionTrace revised/>}{lesson.id==='fault'&&<InspectionTiming/>}{lesson.id==='parallel'&&<TimingDiagram/>}{lesson.id==='worksheet'&&<RevisedWorksheet notes={notes} onChange={(key,value)=>setNotes(n=>({...n,[key]:value}))}/>}{lesson.retrieval&&<section className="panel retrieval-panel" key={'retrieval-'+lesson.id}><h2>Stop and retrieve</h2><p>Try from memory before comparing your answers. This is a stopping point, not a timed test.</p><RevisedLessonContent source={lesson.retrieval}/></section>}{lesson.id==='worksheet'&&<section className="panel"><h2>Core study route ends here</h2><p>Revisit unfamiliar examples before continuing. The assessment and practical review follow the core lessons. The guided extension is optional for the public core checklist.</p><button onClick={()=>go('assessment',true)}>Review this lesson and open core assessment</button></section>}<div className="lesson-actions"><button disabled={index===0} onClick={()=>go(revisedLessons[index-1].id)}>Previous</button><button onClick={()=>go(next?.id??lesson.id,true)}>{next?'Mark reviewed and continue':'Mark reviewed'}</button></div></>}</article></div><footer className="module-footer"><button onClick={()=>{if(window.confirm('Reset revised reading, assessment, local checklist and fictional worksheet notes?'))goReset()}}>Reset revised progress</button><p className="muted">Local reading and assessment records only. Technical and instructor acceptance outstanding.</p></footer></>
 function goReset(){setNotes({});setRecord(newRecord());setReading({id:core[0].id,reviewed:[]});setOpen(false);requestAnimationFrame(()=>heading.current?.focus())}
}
