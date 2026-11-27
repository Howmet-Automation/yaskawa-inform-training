import {useState} from 'react'
import BranchDiagram from './BranchDiagram'
export default function BranchComparison(){
 const [answers,setAnswers]=useState(['','']),[revealed,setRevealed]=useState(false)
 return <section className="panel"><h2>Predict both branch paths</h2><p>Use the deliberately defective pseudocode in the lesson. Assume the wait finishes in the present case.</p>{['Part present','Part absent'].map((label,i)=><div key={label}><label htmlFor={'branch-case-'+i}>{label}: which instructions run?</label><textarea id={'branch-case-'+i} rows={2} value={answers[i]} onChange={e=>{setAnswers(a=>a.map((v,j)=>j===i?e.target.value:v));setRevealed(false)}}/></div>)}<button disabled={answers.some(a=>!a.trim())} onClick={()=>setRevealed(true)}>Compare both traces</button>{revealed&&<div><h3>Present: task and wait</h3><BranchDiagram present/><h3>Absent: skips task, still reports</h3><BranchDiagram present={false}/><p>Both paths reach the report in this broken example. In Model A, missing part remains at entry, not normal reporting. Compare your written predictions; this is not automatic grading.</p></div>}</section>
}
