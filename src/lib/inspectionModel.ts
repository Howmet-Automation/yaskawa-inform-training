export const signals=['START','READY','PART_PRESENT','REQUEST','ACK','DONE','REPORT'] as const
export type Signal=typeof signals[number]
type Levels=Record<Signal,0|1>
export type Entry='idle'|'wait'|'unexpected-feedback'|'eligible'
export function entryState(input:Pick<Levels,'START'|'READY'|'PART_PRESENT'|'ACK'|'DONE'>):Entry{
 if(!input.START)return 'idle'
 if(input.ACK||input.DONE)return 'unexpected-feedback'
 return input.READY&&input.PART_PRESENT?'eligible':'wait'
}
const snapshot=(title:string,actor:string,reason:string,values:Levels)=>({title,actor,reason,values})
const idle:Levels={START:0,READY:1,PART_PRESENT:0,REQUEST:0,ACK:0,DONE:0,REPORT:0}
const n1:Levels={...idle,START:1}
const n2:Levels={...n1,PART_PRESENT:1}
const n3:Levels={...n2,REQUEST:1}
const n4:Levels={...n3,ACK:1}
const n5:Levels={...n4,DONE:1}
const n6:Levels={...n5,REPORT:1}
const n7:Levels={...n6,REQUEST:0}
const n8:Levels={...n7,START:0,ACK:0,DONE:0}
const n9:Levels={...n8,REPORT:0}
export const normalTrace=[
 snapshot('N0 · Idle','PLC / robot','No new cycle requested.',idle),
 snapshot('N1 · Entry wait','PLC','START is ON but part presence is missing. No request.',n1),
 snapshot('N2 · Eligible','PLC','All stated entry conditions are satisfied.',n2),
 snapshot('N3 · Request','Robot','REQUEST ON; acceptance unknown.',n3),
 snapshot('N4 · Accepted','PLC','ACK ON; completion still unknown.',n4),
 snapshot('N5 · Finished report','PLC','DONE ON before deadline; not an inspection pass result.',n5),
 snapshot('N6 · Job report','Robot','REPORT ON after required evidence.',n6),
 snapshot('N7 · Release','Robot','REQUEST OFF in the normal reset sequence.',n7),
 snapshot('N8 · PLC clear','PLC','START, ACK and DONE cleared; illustrative snapshot, not atomic events.',n8),
 snapshot('N9 · Idle again','Robot','REPORT OFF; part still present does not start another cycle.',n9)
]
export type CompletionTime=2|3|7|null
export type Deadline=3|5
export function timedInspection(doneAt:CompletionTime,deadline:Deadline,elapsed:number){
 const request=true,ack=elapsed>=1,done=doneAt!==null&&elapsed>=doneAt
 const successful=doneAt!==null&&doneAt<deadline&&elapsed>=doneAt
 const fault=!successful&&elapsed>=deadline
 const state=fault?'Timeout — fault latched':successful?'Completion evidence received — normal outcome recorded':ack?'Waiting for DONE':'Waiting for ACK'
 return {request,ack,done,fault,successful,state}
}
