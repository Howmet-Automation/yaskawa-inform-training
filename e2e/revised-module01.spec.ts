import {test,expect} from '@playwright/test'
const route='/yaskawa-inform-training/#/module/01/revised'
test('revised reading restores position without modifying existing progress',async({page})=>{
 await page.goto(route)
 await expect(page.getByRole('heading',{name:'What you will learn and how to practice'})).toBeVisible()
 const answer=page.getByText('I know a request was made; I do not know whether a page was printed.',{exact:false})
 await expect(answer).toBeHidden()
 await page.getByText('Reveal answer guide',{exact:true}).first().click()
 await expect(answer).toBeVisible()
 await page.getByRole('button',{name:'Mark reviewed and continue'}).click()
 await expect(page.getByRole('heading',{name:'Break a task into steps'})).toBeFocused()
 await page.reload()
 await expect(page.getByRole('heading',{name:'Break a task into steps'})).toBeVisible()
 await expect(page.getByText('Core lessons reviewed: 1/19',{exact:true})).toBeVisible()
 await page.goto('/yaskawa-inform-training/#/module/01')
 await expect(page.getByText('Sections reviewed: 0/22',{exact:false})).toBeVisible()
})
test('revised mobile lessons render all core and extension content without horizontal overflow',async({page})=>{
 await page.setViewportSize({width:390,height:844})
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message))
 await page.goto(route)
 for(let i=0;i<22;i++){
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'lesson '+(i+1)).toBe(true)
  if([5,10,13,18].includes(i))await expect(page.getByRole('heading',{name:'Stop and retrieve'})).toBeVisible()
  if(i<21)await page.getByRole('button',{name:'Mark reviewed and continue'}).click()
 }
 await expect(page.getByText('Core lessons reviewed: 19/19',{exact:true})).toBeVisible()
 await expect(page.getByRole('heading',{name:'Reference glossary'})).toBeVisible()
 expect(errors).toEqual([])
})

async function openLesson(page:import('@playwright/test').Page,block:string,title:string){await page.goto(route);const nav=page.getByRole('navigation',{name:'Revised lesson sections'});const group=nav.locator('details').filter({has:page.getByText(block,{exact:true})});if(!await group.evaluate(el=>(el as HTMLDetailsElement).open))await group.locator('summary').click();await nav.getByRole('button',{name:title,exact:true}).click()}
test('branch comparison retains both predictions until reveal',async({page})=>{await openLesson(page,'B · Machine logic','Waiting is not choosing');const compare=page.getByRole('button',{name:'Compare both traces'});await expect(compare).toBeDisabled();await page.getByLabel('Part present: which instructions run?').fill('task, wait, report');await page.getByLabel('Part absent: which instructions run?').fill('report only');await compare.click();await expect(page.getByRole('heading',{name:'Absent: skips task, still reports'})).toBeVisible();await expect(page.getByLabel('Part present: which instructions run?')).toHaveValue('task, wait, report')})
test('normal trace includes separate ACK, DONE, REPORT and reset',async({page})=>{await openLesson(page,'B · Machine logic','Follow the normal cycle');const next=page.getByRole('button',{name:'Reveal next snapshot'});await expect(next).toBeDisabled();for(let i=0;i<9;i++){await page.getByLabel('What changes next?').fill('Prediction '+i);await next.click();if(i===3)await expect(page.getByRole('heading',{name:'N4 · Accepted'})).toBeVisible()}await expect(page.getByRole('heading',{name:'N9 · Idle again'})).toBeVisible();await expect(next).toBeDisabled();await expect(page.getByText('REPORT OFF; part still present does not start another cycle.',{exact:false})).toBeVisible()})
test('deadline equality faults and later feedback cannot clear latch',async({page})=>{await openLesson(page,'D · Troubleshoot and transfer','Explain why a sequence is waiting');await page.getByLabel('DONE arrives').selectOption('3');await page.getByLabel('Deadline',{exact:true}).selectOption('3');await page.getByLabel('Predict normal outcome or timeout, and explain why.').fill('Timeout at equality');await page.getByRole('button',{name:'Start paper trace'}).click();for(let i=0;i<3;i++)await page.getByRole('button',{name:'Advance 1 second'}).click();await expect(page.getByRole('status').filter({hasText:'Timeout — fault latched'})).toBeVisible();await page.getByRole('button',{name:'Reset timing trace'}).click();await page.getByLabel('DONE arrives').selectOption('7');await page.getByLabel('Predict normal outcome or timeout, and explain why.').fill('Late completion');await page.getByRole('button',{name:'Start paper trace'}).click();for(let i=0;i<7;i++)await page.getByRole('button',{name:'Advance 1 second'}).click();await expect(page.getByRole('status').filter({hasText:'7 s · Timeout — fault latched'})).toBeVisible()})
test('already-on feedback satisfies the simple level wait',async({page})=>{await openLesson(page,'C · Read INFORM','Step through WAIT and DOUT');await page.getByRole('button',{name:'Load already-ON case'}).click();const step=page.getByRole('button',{name:'Step instruction'});for(let i=0;i<6;i++)await step.click();await expect(step).toBeDisabled();await expect(page.getByText('a satisfied level check does not prove a fresh completion event.',{exact:false})).toBeVisible()})

test('fictional worksheet retains notes within the module and prints full text',async({page})=>{await openLesson(page,'D · Troubleshoot and transfer','Document evidence and explain your trace');const notes=page.getByRole('textbox',{name:'Current wait / reported values / missing evidence'});await notes.fill('Fictional input remains OFF.');await page.getByRole('button',{name:'Previous',exact:true}).click();await page.getByRole('button',{name:'Mark reviewed and continue'}).click();await expect(notes).toHaveValue('Fictional input remains OFF.');await page.emulateMedia({media:'print'});await expect(page.locator('.worksheet-print-value').filter({hasText:'Fictional input remains OFF.'})).toBeVisible()})
