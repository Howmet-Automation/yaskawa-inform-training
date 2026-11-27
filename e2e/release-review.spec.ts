import {test,expect,type Page,type TestInfo} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import {writeFile} from 'node:fs/promises'
const route='/yaskawa-inform-training/#/module/01/revised'
const tags=['wcag2a','wcag2aa','wcag21a','wcag21aa']
async function audit(page:Page,label:string){const a=await new AxeBuilder({page}).withTags(tags).analyze();return {label,violations:a.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))}}
async function openLesson(page:Page,block:string,title:string){await page.goto(route);const nav=page.getByRole('navigation',{name:'Revised lesson sections'});const group=nav.locator('details').filter({has:page.getByText(block,{exact:true})});if(!await group.evaluate(el=>(el as HTMLDetailsElement).open))await group.locator('summary').click();await nav.getByRole('button',{name:title,exact:true}).click()}
async function capture(page:Page,info:TestInfo,name:string){const bytes=await page.screenshot({path:info.outputPath(name+'.jpg'),type:'jpeg',quality:65});if(process.env.TRAINING_REVIEW_CAPTURE==='1'){const base64=bytes.toString('base64');for(let i=0;i<base64.length;i+=2500)console.log('TRAINING_SCREEN '+name+' '+base64.slice(i,i+2500))}}
test('all revised lessons and assessment meet automated WCAG A and AA checks',async({page},info)=>{
 test.setTimeout(180000)
 await page.setViewportSize({width:1440,height:900});await page.goto(route)
 const results:Awaited<ReturnType<typeof audit>>[]=[]
 for(let i=0;i<22;i++){
  const title=await page.locator('.lesson-reading h2').innerText()
  results.push(await audit(page,title))
  if(i<21)await page.getByRole('button',{name:'Mark reviewed and continue',exact:true}).click()
 }
 await page.getByRole('navigation',{name:'Revised lesson sections'}).getByRole('button',{name:'Core assessment and checklist',exact:true}).click()
 results.push(await audit(page,'Core assessment'))
 await writeFile(info.outputPath('revised-axe-report.json'),JSON.stringify(results,null,2))
 const failures=results.filter(r=>r.violations.length)
 expect(failures,JSON.stringify(failures,null,2)).toEqual([])
})
test('keyboard bypass, disclosure and prediction comparison',async({page})=>{
 await page.goto(route)
 const skip=page.getByRole('link',{name:'Skip to main content'});await skip.focus();await page.keyboard.press('Enter');await expect(page.locator('#training-main')).toBeFocused()
 const answer=page.getByText('I know a request was made; I do not know whether a page was printed.',{exact:false})
 await expect(answer).toBeHidden()
 await page.getByText('Reveal answer guide',{exact:true}).first().focus();await page.keyboard.press('Enter');await expect(answer).toBeVisible()
 await openLesson(page,'B · Machine logic','Follow the normal cycle')
 await page.getByLabel('What changes next?').fill('START becomes ON')
 await page.getByRole('button',{name:'Reveal next snapshot'}).click()
 await expect(page.getByText('Your prediction: START becomes ON',{exact:true})).toBeVisible()
})
test('capture revised desktop, mobile, timing and assessment visual evidence',async({page},info)=>{
 test.setTimeout(60000)
 await page.setViewportSize({width:1280,height:850});await page.goto(route)
 await capture(page,info,'revised-desktop')
 await openLesson(page,'D · Troubleshoot and transfer','Explain why a sequence is waiting')
 await page.getByLabel('Predict normal outcome or timeout, and explain why.').fill('DONE arrives after the deadline.')
 await page.getByRole('button',{name:'Start paper trace'}).click()
 for(let i=0;i<7;i++)await page.getByRole('button',{name:'Advance 1 second'}).click()
 await page.getByRole('heading',{name:'Compare the deadline and the feedback'}).evaluate(el=>el.scrollIntoView({block:'start'}))
 await capture(page,info,'revised-timing')
 const timing=await audit(page,'Timing trace revealed');expect(timing.violations,JSON.stringify(timing,null,2)).toEqual([])
 await page.getByRole('navigation',{name:'Revised lesson sections'}).getByRole('button',{name:'Core assessment and checklist',exact:true}).click()
 await capture(page,info,'revised-assessment')
 await page.setViewportSize({width:390,height:844});await page.reload()
 await page.evaluate(()=>localStorage.clear());await page.reload()
 await capture(page,info,'revised-mobile')
 const mobile=await audit(page,'Mobile opening lesson');expect(mobile.violations,JSON.stringify(mobile,null,2)).toEqual([])
})

test('course home opens revised review candidate and keeps legacy route',async({page})=>{
 await page.goto('/yaskawa-inform-training/#/')
 await page.getByRole('link',{name:'Open revised Module 1 · review draft →',exact:true}).click()
 await expect(page.getByRole('heading',{name:'What you will learn and how to practice'})).toBeVisible()
 await page.getByText('Study route and review status',{exact:true}).click()
 await page.getByRole('link',{name:'existing module',exact:true}).click()
 await expect(page.getByRole('heading',{name:'What you should be able to do'})).toBeVisible()
})
test('compact mobile opening retains scope and shows first lesson heading',async({page},info)=>{
 await page.setViewportSize({width:390,height:844});await page.goto(route)
 await expect(page.getByText('Fictional, read-only practice. No equipment operation or qualification.',{exact:true})).toBeVisible()
 const heading=page.getByRole('heading',{name:'What you will learn and how to practice'})
 const rect=await heading.boundingBox();expect(rect).not.toBeNull();expect(rect!.y+rect!.height).toBeLessThan(650)
 await expect(page.getByText('Study route and review status',{exact:true})).toBeVisible()
 await capture(page,info,'compact-mobile')
})
test('contextual reference opens and links to appropriate official source',async({page})=>{
 await openLesson(page,'C · Read INFORM','Step through WAIT and DOUT')
 const notes=page.locator('.lesson-source-notes')
 await notes.locator('summary').focus();await page.keyboard.press('Enter')
 await expect(notes.getByRole('link',{name:'YRC1000 INFORM language',exact:true})).toHaveAttribute('href','https://knowledge.motoman.com/hc/en-us/articles/4407425435927-YRC1000-INFORM-LANGUAGE')
 await expect(notes.getByText('Section 2.1: DOUT and WAIT; distinguish condition-only WAIT from optional time limit.',{exact:false})).toBeVisible()
 const a=await audit(page,'Contextual reference open');expect(a.violations,JSON.stringify(a,null,2)).toEqual([])
})
test('revised worksheet print excludes navigation and preserves lengthy notes',async({page},info)=>{
 await page.setViewportSize({width:820,height:1056})
 await page.goto(route)
 await page.getByRole('button',{name:/Browse lessons/}).click().catch(()=>{})
 await openLesson(page,'D · Troubleshoot and transfer','Document evidence and explain your trace')
 const fields=page.locator('.print-sheet textarea')
 await expect(fields).toHaveCount(8)
 for(let i=0;i<8;i++)await fields.nth(i).fill('Fictional evidence '+(i+1)+': '+('The observed report does not establish the physical result. '.repeat(6))+'END-'+(i+1))
 await page.emulateMedia({media:'print'})
 await expect(page.locator('.print-sheet')).toBeVisible()
 await expect(page.locator('.lesson-nav')).toBeHidden()
 await expect(page.locator('.lesson-reading')).toBeHidden()
 await expect(page.getByRole('button',{name:'Print fictional worksheet'})).toBeHidden()
 const values=page.locator('.worksheet-print-value')
 for(let i=0;i<8;i++){await expect(values.nth(i)).toBeVisible();await expect(values.nth(i)).toContainText('END-'+(i+1))}
 const white=await page.locator('html').evaluate(el=>getComputedStyle(el).backgroundColor)
 expect(white).toBe('rgb(255, 255, 255)')
 await page.evaluate(()=>window.scrollTo(0,0));await capture(page,info,'worksheet-print')
 await page.pdf({path:info.outputPath('fictional-worksheet-print.pdf'),preferCSSPageSize:true,printBackground:false})
})
