import {describe,it,expect} from 'vitest'
import {revisedLessons,lessonBlocks} from './revisedLessons'
import {lessons} from './module01'
describe('revised lesson inventory and content',()=>{
 it('preserves each existing lesson exactly once',()=>{const ids=revisedLessons.map(l=>l.id);expect(new Set(ids).size).toBe(22);expect([...ids].sort()).toEqual(lessons.map(l=>l.id).sort())})
 it('has four core stopping points',()=>expect(revisedLessons.filter(l=>l.retrieval).map(l=>l.block)).toEqual(['A','B','C','D']))
 it('does not display author or draft gate sections',()=>{for(const l of revisedLessons)expect(l.body).not.toMatch(/^Author notes:|^## Draft gate/m)})
 it('hides standalone and inline solutions while retaining prompts',()=>{expect(lessonBlocks('**Practice.** Predict first. Key: answer.\n- Hint: think\n- Example solution: next')).toEqual([{kind:'text',text:'**Practice.** Predict first.'},{kind:'answer',text:'answer.'},{kind:'hint',text:'think'},{kind:'answer',text:'next'}])})
 it('preserves code and rectangular tables',()=>{const blocks=lessonBlocks('```text\nWAIT IN#(1)=ON\n```\n| A | B |\n|---|---|\n| 1 | 2 |');expect(blocks[0].text).toBe('WAIT IN#(1)=ON');expect(blocks[1].rows).toEqual([['A','B'],['1','2']])})
})
