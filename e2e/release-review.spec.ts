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
