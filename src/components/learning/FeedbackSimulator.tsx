import {useState} from 'react'
import {nextState} from '../../lib/sequence'
export default function FeedbackSimulator(){
 const [feedback,setFeedback]=useState(false)
 const [timeout,setTimeoutState]=useState(false)
 return <section className="panel"><h2>Try it: request versus feedback</h2><p>A fictional clamp request has been issued. Change the feedback and observe the result.</p><label><input type="checkbox" checked={feedback} onChange={e=>setFeedback(e.target.checked)}/> Clamp feedback received</label><label><input type="checkbox" checked={timeout} onChange={e=>setTimeoutState(e.target.checked)}/> Timeout occurred</label><p role="status"><strong>{nextState(feedback,timeout)}</strong></p><button onClick={()=>{setFeedback(false);setTimeoutState(false)}}>Reset simulation</button><p className="muted">Conceptual simulation only. Not a machine safety circuit or executable robot logic.</p></section>
}