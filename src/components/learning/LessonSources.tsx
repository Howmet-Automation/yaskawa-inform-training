const root='https://knowledge.motoman.com/hc/en-us/articles/'
const language={path:'4407425435927-YRC1000-INFORM-LANGUAGE',title:'YRC1000 INFORM language',note:'Manual index; confirm the installed controller and approved revision.'}
const examples={path:'4408792981015-MotoSim-Inform-Commands-and-Syntax',title:'WAIT, DOUT and CALL examples',note:'Illustrative command forms; some simulation-specific commands do not transfer.'}
const references:Record<string,{path:string;title:string;note:string}[]>={
 roles:[{path:'1500012236161-Concurrent-I-O-Overview',title:'Concurrent I/O overview',note:'Controller background only; the fictional signal dictionary is not a production I/O map.'}],
 sequence:[{path:'4415229488023-Sending-an-Output-During-a-MOV',title:'Output during motion',note:'Explains why instruction order alone does not prove physical completion.'}],
 'inform-preview':[{path:'21577951275031-INFORM-Header-Fields',title:'INFORM header fields',note:'File header, position and instruction sections.'},{...language,note:'Sections 2.2 and 2.4: NOP, comments, END and movement instruction context. The full approved manual is required.'},{path:'20895894514455-MOV-UNTIL-Instruction',title:'Pendant movement display example',note:'MOVJ/VJ display only; not motion practice.'}],
 'trace-inform':[{...language,note:'Section 2.1: DOUT and WAIT; distinguish condition-only WAIT from optional time limit.'},examples],
 reading:[{...language,note:'Section 2.2: CALL and job-flow instructions. Normal return is the stated model assumption.'},examples],
 fault:[{...language,note:'Section 2.1: actual timed WAIT behavior. The lesson fault latch is fictional, not a controller feature claim.'}],
 transfer:[examples,language],
 parallel:[{path:'34805519233170-YRC1000-Options-Instructions-for-Independent-Coordinated-Control-Function',title:'Independent/coordinated control option',note:'Sections 7.6 and 9.2; confirm option support and control-group setup.'}],
 compare:[{path:'34805519233170-YRC1000-Options-Instructions-for-Independent-Coordinated-Control-Function',title:'Independent/coordinated control option',note:'PSTART and PWAIT preview; exact installed support still requires approval.'},{...language,note:'Sections 1.7.4, 2.2 and 2.3: export forms, conditional flow and arithmetic. Exact advanced forms remain a guided preview.'},{path:'33634309555730-Programming-Languages-Developer-Tools',title:'Variable terminology',note:'Byte and integer terminology only; ranges and scope are deferred.'}]
}
export default function LessonSources({id}:{id:string}){
 const sources=references[id];if(!sources)return null
 return <details className="lesson-source-notes"><summary>References for this lesson</summary><p>For review, not permission to operate equipment. Use the applicable approved controller manual; some full downloads were inaccessible during the technical review.</p><ul>{sources.map(s=><li key={s.path}><a href={root+s.path}>{s.title}</a> — {s.note}</li>)}</ul></details>
}
