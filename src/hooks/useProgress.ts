import {useState,useEffect} from 'react'
import {questions} from '../content/module01'
import {emptyAssessment,restoreAssessment,passed,type Assessment} from '../lib/assessment'
type Progress={visited:string[];assessment:Assessment}
const key='inform-training-module01-v2'
export function useProgress(){const [progress,setProgress]=useState<Progress>(()=>{try{const p=JSON.parse(localStorage.getItem(key)||'null');if(p&&Array.isArray(p.visited)&&p.visited.every((v:unknown)=>typeof v==='string'))return {visited:p.visited,assessment:restoreAssessment(p.assessment,questions)};const old=JSON.parse(localStorage.getItem('inform-training-module01-v1')||'null');if(old&&Array.isArray(old.visited))return {visited:old.visited.filter((v:unknown)=>typeof v==='string'),assessment:emptyAssessment()}}catch{}return {visited:[],assessment:emptyAssessment()}})
useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(progress))}catch{}},[progress])
return {progress:{...progress,quizPassed:passed(questions,progress.assessment)},visit:(id:string)=>setProgress(p=>({...p,visited:[...new Set([...p.visited,id])]})),setAssessment:(assessment:Assessment)=>setProgress(p=>({...p,assessment})),reset:()=>setProgress({visited:[],assessment:emptyAssessment()})}}