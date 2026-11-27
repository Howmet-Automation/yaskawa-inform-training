import {useState} from 'react'
import {normalTrace,signals} from '../../lib/inspectionModel'
export default function InspectionTrace(){
 const [index,setIndex]=useState(0),[prediction,setPrediction]=useState(''),[seen,setSeen]=useState(false)
 const row=normalTrace[index],previous=normalTrace[index-1]
 const changed=previous?signals.filter(s=>row.values[s]!==previous.values[s]):[]
 return <section className="panel"><h2>Walk the ten snapshots</h2><p>Predict the next change before stepping. This is Model A's normal path, not a live controller scan.</p><h3>{row.title}</h3><dl className="signal-grid">{signals.map(s=><div key={s} className={changed.includes(s)?'signal-changed':''}><dt>{s}</dt><dd>{row.values[s]?'ON (1)':'OFF (0)'}</dd>{changed.includes(s)&&<small>Changed</small>}</div>)}</dl><p role="status">{row.actor}: {row.reason}</p>{index<9&&<><label htmlFor="next-snapshot-prediction">What changes next?</label><textarea id="next-snapshot-prediction" rows={2} value={prediction} onChange={e=>setPrediction(e.target.value)}/></>}{seen&&<p className="muted">Compare your prediction with the changed signals above. No automatic scoring.</p>}<div className="lesson-actions"><button disabled={index===0} onClick={()=>{setIndex(i=>i-1);setPrediction('');setSeen(false)}}>Previous snapshot</button><button disabled={index===9||!prediction.trim()} onClick={()=>{setIndex(i=>i+1);setPrediction('');setSeen(true)}}>Reveal next snapshot</button><button onClick={()=>{setIndex(0);setPrediction('');setSeen(false)}}>Reset snapshots</button></div></section>
}
