import {lessonBlocks} from '../../content/revisedLessons'
function Inline({text}:{text:string}){return <>{text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part,i)=>part.startsWith('**')&&part.endsWith('**')?<strong key={i}>{part.slice(2,-2)}</strong>:part.startsWith('`')&&part.endsWith('`')?<code key={i}>{part.slice(1,-1)}</code>:<span key={i}>{part}</span>)}</>}
export default function RevisedLessonContent({source}:{source:string}){return <div className="revised-body">{lessonBlocks(source).map((block,i)=>{
 switch(block.kind){
 case 'heading':return <h3 key={i}><Inline text={block.text}/></h3>
 case 'code':return <figure className="lesson-example" key={i}><figcaption>Illustrative fragment · not executable</figcaption><pre><code>{block.text}</code></pre></figure>
 case 'table':{const [header,...rows]=block.rows??[];return <div key={i} className="trace-scroll" role="region" aria-label="Lesson example table" tabIndex={0}><table className="trace-table revised-table"><thead><tr>{header?.map((v,j)=><th scope="col" key={j}><Inline text={v}/></th>)}</tr></thead><tbody>{rows.map((row,j)=><tr key={j}>{row.map((v,k)=><td key={k}><Inline text={v}/></td>)}</tr>)}</tbody></table></div>}
 case 'answer':case 'hint':return <details key={i} className="revised-disclosure"><summary>{block.kind==='hint'?'Need a hint?':'Reveal answer guide'}</summary><p><Inline text={block.text}/></p></details>
 case 'list':{const Tag=block.ordered?'ol':'ul';return <Tag key={i}>{block.text.split('\n').map((v,j)=><li key={j}><Inline text={v}/></li>)}</Tag>}
 default:return <p key={i}><Inline text={block.text}/></p>
 }
})}</div>}
