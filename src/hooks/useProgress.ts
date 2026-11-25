import {useState} from 'react'
type Progress={visited:string[];quizPassed:boolean}
const key='inform-training-module01-v1'
export function useProgress(){const [progress,setProgress]=useState<Progress>(()=>{try{const p=JSON.parse(localStorage.getItem(key)||'null');if(p&&Array.isArray(p.visited)&&p.visited.every((v:unknown)=>typeof v==='string')&&typeof p.quizPassed==='boolean')return p}catch{}return {visited:[],quizPassed:false}})
function update(fn:(p:Progress)=>Progress){setProgress(p=>{const next=fn(p);try{localStorage.setItem(key,JSON.stringify(next))}catch{}return next})}
return {progress,visit:(id:string)=>update(p=>({...p,visited:[...new Set([...p.visited,id])]})),setQuiz:(quizPassed:boolean)=>update(p=>({...p,quizPassed})),reset:()=>update(()=>({visited:[],quizPassed:false}))}}