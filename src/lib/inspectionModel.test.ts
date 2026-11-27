import {describe,it,expect} from 'vitest'
import {entryState,normalTrace,timedInspection,type CompletionTime,type Deadline} from './inspectionModel'
describe('fictional inspection model',()=>{
 it('only allows entry with all prerequisites and clear feedback',()=>{let eligible=0;for(let mask=0;mask<32;mask++){const bit=(n:number)=>((mask>>n)&1) as 0|1;const input={START:bit(0),READY:bit(1),PART_PRESENT:bit(2),ACK:bit(3),DONE:bit(4)};const result=entryState(input);if(result==='eligible')eligible++;expect(result).toBe(!input.START?'idle':input.ACK||input.DONE?'unexpected-feedback':input.READY&&input.PART_PRESENT?'eligible':'wait')}expect(eligible).toBe(1)})
 it('separates acceptance, completion and normal report',()=>{expect(normalTrace[3].values).toMatchObject({REQUEST:1,ACK:0,DONE:0,REPORT:0});expect(normalTrace[4].values).toMatchObject({ACK:1,DONE:0,REPORT:0});expect(normalTrace[5].values).toMatchObject({DONE:1,REPORT:0});expect(normalTrace[6].values.REPORT).toBe(1)})
 it('finishes reset without creating a new start',()=>expect(normalTrace[9].values).toMatchObject({START:0,PART_PRESENT:1,REQUEST:0,ACK:0,DONE:0,REPORT:0}))
 it.each([3,5] as Deadline[])('tests every completion time across deadline %s',deadline=>{for(const doneAt of [2,3,7,null] as CompletionTime[]){for(let t=0;t<=8;t++){const s=timedInspection(doneAt,deadline,t);const success=doneAt!==null&&doneAt<deadline&&t>=doneAt;expect(s.successful).toBe(success);expect(s.fault).toBe(!success&&t>=deadline);expect(s.ack).toBe(t>=1);expect(s.done).toBe(doneAt!==null&&t>=doneAt)}}})
 it('late feedback never clears the timeout in the model',()=>{expect(timedInspection(7,5,5)).toMatchObject({done:false,fault:true});expect(timedInspection(7,5,7)).toMatchObject({done:true,fault:true,successful:false})})
})
