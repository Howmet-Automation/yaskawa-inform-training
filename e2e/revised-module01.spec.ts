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
