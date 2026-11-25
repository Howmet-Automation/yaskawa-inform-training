import {useState,useEffect} from 'react'
import {questions,lessons} from '../content/module01'
import {emptyAssessment,restoreAssessment,passed,type Assessment} from '../lib/assessment'
import {completionStatus,canComplete,type Checkpoints} from '../lib/completion'
type Progress={visited:string[];assessment:Assessment;checks:Checkpoints;completed:boolean}
const key='inform-training-module01-v4'
const empty=():Progress=>({visited:[],assessment:emptyAssessment(),checks:{labReviewed:false,instructorReviewed:false},completed:false})
const status=(p:Progress)=>completionStatus(lessons.map(l=>l.id),p.visited,passed(questions,p.assessment),p.checks)
export function useProgress(){const [progress,setProgress]=useState<Progress>(()=>{try{const p=JSON.parse(localStorage.getItem(key)||'null');if(p&&Array.isArray(p.visited)){const next:Progress={visited:p.visited.filter((v:unknown)=>typeof v==='string'),assessment:restoreAssessment(p.assessment,questions),checks:{labReviewed:p.checks?.labReviewed===true,instructorReviewed:p.checks?.instructorReviewed===true},completed:false};next.completed=p.completed===true&&canComplete(status(next));return next}const old=JSON.parse(localStorage.getItem('inform-training-module01-v3')||'null');if(old&&Array.isArray(old.visited))return {...empty(),visited:old.visited.filter((v:unknown)=>typeof v==='string')}}catch{}return empty()})
useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(progress))}catch{}},[progress])
return {progress:{...progress,quizPassed:passed(questions,progress.assessment)},requirements:status(progress),visit:(id:string)=>setProgress(p=>({...p,visited:[...new Set([...p.visited,id])]})),setAssessment:(assessment:Assessment)=>setProgress(p=>({...p,assessment,completed:false})),setCheckpoint:(name:keyof Checkpoints,value:boolean)=>setProgress(p=>({...p,checks:{...p.checks,[name]:value},completed:false})),complete:()=>setProgress(p=>({...p,completed:canComplete(status(p))})),reset:()=>setProgress(empty())}}