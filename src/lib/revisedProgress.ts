import {assessmentVersion,scenarioQuestions,practicalCriteria} from '../content/revisedAssessment'
import {emptyAssessment,restoreAssessment,passed,score,selectAnswer,type Assessment} from './assessment'
export type Rating=0|1|2
export type RevisedRecord={version:string;attempt:Assessment;ratings:(Rating|null)[];instructorRecorded:boolean;completed:boolean}
export const newRecord=():RevisedRecord=>({version:assessmentVersion,attempt:emptyAssessment(),ratings:practicalCriteria.map(()=>null),instructorRecorded:false,completed:false})
export function criticalMisses(attempt:Assessment){return scenarioQuestions.filter((q,i)=>q.critical&&attempt.answers[i]!==q.correct).map(q=>q.id)}
export function knowledgePassed(attempt:Assessment){return passed(scenarioQuestions,attempt)&&criticalMisses(attempt).length===0}
export function requirements(record:RevisedRecord,coreReviewed:boolean){return {reading:coreReviewed,knowledge:knowledgePassed(record.attempt),practical:record.ratings.length===practicalCriteria.length&&record.ratings.every(x=>x===2),instructor:record.instructorRecorded}}
export const eligible=(r:RevisedRecord,coreReviewed:boolean)=>Object.values(requirements(r,coreReviewed)).every(Boolean)
export function editAnswer(r:RevisedRecord,i:number,value:number):RevisedRecord{return {...r,attempt:selectAnswer(r.attempt,i,value),instructorRecorded:false,completed:false}}
export function gradeAttempt(r:RevisedRecord):RevisedRecord{return {...r,attempt:restoreAssessment({...r.attempt,graded:true},scenarioQuestions),instructorRecorded:false,completed:false}}
export function editRating(r:RevisedRecord,i:number,value:Rating|null):RevisedRecord{return {...r,ratings:r.ratings.map((old,j)=>j===i?value:old),instructorRecorded:false,completed:false}}
export function restoreRecord(raw:unknown,coreReviewed:boolean):RevisedRecord{
 if(!raw||typeof raw!=='object')return newRecord()
 const v=raw as Partial<RevisedRecord>
 if(v.version!==assessmentVersion)return newRecord()
 const next:RevisedRecord={...newRecord(),attempt:restoreAssessment(v.attempt,scenarioQuestions),ratings:practicalCriteria.map((_,i)=>{const n=Array.isArray(v.ratings)?v.ratings[i]:null;return n===0||n===1||n===2?n:null})}
 next.instructorRecorded=v.instructorRecorded===true&&knowledgePassed(next.attempt)&&next.ratings.every(n=>n===2)
 next.completed=v.completed===true&&eligible(next,coreReviewed)
 return next
}
export function resultText(a:Assessment){return score(scenarioQuestions,a)+'/'+scenarioQuestions.length+' correct'}
