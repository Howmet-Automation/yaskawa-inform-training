# Module 01 baseline inventory
Status: HOLD. Original HTML inspected: 21 sections. Current React draft has 12 lessons. Mapping below is preliminary; partial does not mean equivalent.
| Original section | React mapping | Status |
|---|---|---|
| objectives | Module01 introduction | Partial |
| mental-model | sequence | Partial |
| sequence | sequence/pseudocode | Partial |
| signals-and-roles | signals | Partial |
| machine-example | pseudocode | Partial; fictional equivalent needed |
| walkthrough | trace | Partial |
| inform-preview | reading | Partial; syntax verification needed |
| trace-inform | fault | Partial |
| job-reading | reading | Partial |
| debug | fault | Partial |
| scar-patterns | compare | Partial; fictional equivalent |
| parallel-graph | TimingDiagram | Partial |
| fault-simulator | FeedbackSimulator | Partial; timed scenarios missing |
| workshop | desk | Partial; four activities needed |
| practice | lesson tasks | Partial |
| quiz | KnowledgeCheck | Partial; 3 vs 5 questions |
| glossary | none | Missing |
| scar-reading | transfer/worksheet | Missing equivalent detailed lab; restricted original required internally |
| field-notes | worksheet/checkpoint | Partial; print and rubric missing |
| resources | single link | Partial; verify references |
| next-module | checkpoint | Partial; completion gate missing |
## Evidence requirements
For each row record migrated content location, comparison notes, technical reference, test evidence and reviewer status. No row passes based on section count alone. No public production excerpts or private source identifiers.

## Latest implementation checkpoint
20 ordered lessons; objectives, mental model, roles, walkthrough, INFORM preview/trace and glossary restored. Five-question quiz. CodeLab provides fictional parallel/sequential excerpts and variable/call tracing; Workshop provides four activities; FieldWorksheet provides editable printable form; FeedbackSimulator provides early/missing/late feedback; Module01 shows reading/quiz readiness and instructor rubric. All remain partial until direct baseline comparison and browser validation. Restricted source lab outstanding. No production source published. Latest implementation commit 0688f8e03b4b97f1fa1672dd7b7efe8b94db5aba.

## Direct baseline comparison: code lab and references
Original section word counts measured from HTML: scar-patterns 510, scar-reading 887, resources 252, next-module 142. Restored conditional recheck, source identification, variable tracing, called-job investigation and cross-cell comparison in 975445a. Restored all seven original reference destinations in dd120e2 and integrated in 893c45e. Public lab still requires instructor-provided restricted source for full investigation; no private code published. Technical and live link checks pending. Original completion required 4/5 plus explicit lab and instructor confirmations; current 5/5 and reading status differ. Restore explicit lab/instructor workflow and decide threshold before release. HOLD.

## Current 21-section inventory — direct HTML extraction
Baseline: Yaskawa_INFORM_Module_01_Audited_Expanded.html, section text counts via BeautifulSoup get_text(' ', strip=True). Counts include headings and answers, not a quality metric. Current mapping at ed49ccb. All rows provisional, not reviewer-approved.

| Original ID | Words | Current location | Comparison / gap |
|---|---:|---|---|
| objectives | 200 | objectives | Goals and study method |
| mental-model | 296 | mental-model / pseudocode | Definitions retained; six process questions need explicit restoration |
| sequence | 212 | sequence / order | Ordering exercise retained; motion completion caveat added |
| signals-and-roles | 235 | signals / roles | Request and feedback, controller roles |
| machine-example | 341 | machine-example | Fictional production sequence; internal SCAR context needed |
| walkthrough | 245 | walkthrough / CycleTrace | Five snapshots and missing completion exercise restored |
| inform-preview | 297 | inform-preview | Header and pendant distinction; exact export format pending |
| trace-inform | 175 | trace-inform | Missing feedback trace retained |
| job-reading | 237 | reading | Expanded entry/setup/path/calls/exits |
| debug | 274 | fault / logic / reading | Restore explicit missing-part path exercise |
| scar-patterns | 510 | compare / CodeLab | Fictional parallel/sequential/recheck; advanced syntax pending |
| parallel-graph | 281 | TimingDiagram | Conceptual timing diagram |
| fault-simulator | 216 | FeedbackSimulator | Early/missing/late scenarios |
| workshop | 456 | Workshop / FieldWorksheet | Four activities and teach-back; print pagination pending |
| practice | 302 | practice | Three exercises; verify full answer depth |
| quiz | 229 | KnowledgeCheck | Five objectives and 80% threshold restored |
| glossary | 156 | glossary | Definitions retained; review term coverage |
| scar-reading | 887 | CodeLab / transfer | Internal source exercise required; fictional public equivalent |
| field-notes | 267 | worksheet / instructor checkpoint | Rubric and local confirmation; instructor validation pending |
| resources | 252 | References | Reference collection; verify every destination |
| next-module | 142 | assessment / completion | Explicit review, 80%, lab and instructor checks; next-module preview |

Verified CI at c3885d5: 19 unit and 4 browser tests passed (45698172803). Latest run 45698519755 pending at inspection. Internal lab, exact advanced operands, full row-level review and instructor acceptance remain HOLD.

## WP1 instructional revision checkpoint
The WP0 design contract maps all 21 original sections and all 22 current lesson IDs. WP1 learning architecture (23743cd) preserves all those targets and moves advanced previews to an accessible guided extension; restricted SCAR material remains separate. Proposed reordered route and stable signal dictionary are design evidence only; no lesson text removed or changed. Original coverage remains subject to WP2 implementation and WP5 row-level review. HOLD.

## WP2 Block A content draft
WP2_BLOCK_A_LESSONS.md maps original objectives, mental-model, sequence and signals-and-roles, plus portions of machine-example, practice and debug. Six current IDs retained. Six process questions, sandwich analogy, order dependency, signal direction, device roles, request versus completion and fixture-clear prerequisite reasoning preserved. Independent checks accept both valid orderings under explicit assumptions. Additional worked/faded/independent examples and retrieval added. No app replacement yet; remaining blocks and full original-content review pending. HOLD.

## WP2 full draft inventory
Block A, B, C, D and guided extension drafts now cover all 22 existing lesson IDs: 6 + 5 + 3 + 5 + 3. Programmatic ID comparison against src/content/module01.ts found zero missing, extra or duplicate IDs. C d505478 adds annotated INFORM excerpt reading, already-true WAIT and caller-return cases; D 40c31b4 expands troubleshooting, workshops, independent transfer and fictional worksheet; extension 926690a retains master-job patterns and glossary; c5aa420 limits pre-request START drop to out-of-model trace. Original 21-section retention map remains the governing comparison. Draft coverage is not proof of equivalent delivered teaching or independent technical correctness. Full desk check of answer keys, scope and original content still required before app integration. No application code changed. HOLD.


## WP5 delivered-content comparison — 2026-11-27
Reopened the actual audited standalone HTML locally, verified all 21 section headings and word counts (same counts as earlier inventory), read baseline lesson text and compared with WP0/WP1, revised source drafts, interactive implementation and WP4 key. Earlier 12/20-lesson inventory is historical, superseded by 22 revised IDs (19 core, 3 guided/reference). Functional baseline run 46001601185, commit 52ff57d: 44 unit, 21 browser tests passed and deploy succeeded. New content changes require regression validation. This is author desk review, not independent approval.

| Original section | Revised delivery | Retention / change / open evidence |
|---|---|---|
| objectives | A1, core assessment | Study by predict/explain, observable objectives and read-only scope retained; duration still pilot estimate |
| mental-model | A2 | Sandwich analogy, instruction/condition, six process questions retained; explicit missing-evidence reasoning |
| sequence | A3/A6 | Ordering and prerequisite-before-dependent-action exercise; accepts independent check orders; process/safety distinction |
| signals-and-roles | A4/A5, B1 | Robot/PLC/device ownership, request and feedback, signal directions; no universal ownership assumption |
| machine-example | A2/B1/B3 | Six-stage original generic cycle adapted to stable fictional inspection request, acceptance, completion and reset; actual physical task/context retained in restricted observation/lab |
| walkthrough | B4/B5, InspectionTrace | Ten snapshots including normal reset and separate missing/stale cases; 70 signal values compared to WP1 and draft table previously |
| inform-preview | C1 | Header/position/instruction distinction improved, corrected apostrophe comment, conceptual MOVJ/VJ preview; source ledger records manual scope |
| trace-inform | C2, InstructionTrace | Original false WAIT case and output trace retained, already-true case added; timed WAIT distinction corrected |
| job-reading | C3/D4 | Entry, setup, branches, calls, normal/alternate exits, exact source context; new synchronous call exercise |
| debug | B2/B5/D1/D4 | Missing-part path and missing feedback retained; explicit hypotheses/evidence and timed model distinction |
| scar-patterns | X2 and restricted companion | Parallel/sequential pair and conditional rechecks retained; advanced syntax applicability unresolved; actual source separately retained |
| parallel-graph | X1, TimingDiagram | Conceptual 4 vs 7 time units and both-waits reasoning; no measured durations; actual cell interpretation instructor-guided |
| fault-simulator | D1, InspectionTiming | Early, missing, late, two deadlines; equality case and ACK added; latch explicitly fictional |
| workshop | D2 | All four methods retained; fictional teach-back in core; real source exercise in internal lab; five-minute next-shift retrieval restored ec6431e |
| practice | D3 | Ordering, I/O and fixture-check exercises retained with more complete keys; missing branch added |
| quiz | RevisedAssessment, K1–K10 | 80% threshold retained, six critical items, new transfer and practical evidence; version two validated |
| glossary | glossary | Original nine terms retained as grouped definitions or contextual teaching; expanded |
| scar-reading | X2 restricted investigation, private companion | Original detailed actual-source lab preserved separately; two same-cell source examples verified previously; actual distinct-cell comparison and instructor approval still required |
| field-notes | D5, RevisedWorksheet, WP4 key | Public fictional worksheet + separate restricted real-station checkpoint restored; authorized observation, no fault creation, normal/alternate read-only trace, five observed criteria; actual instructor record outstanding |
| resources | References and TECHNICAL_REVIEW | Seven original destinations retained plus independent-control and six topic resources; direct full manual downloads and site homepage returned 403; verify applicable exact manuals |
| next-module | RevisedAssessment, D retrieval | 19 core reviews, 8/10 plus critical gate, practical and instructor self-record; optional extension distinct from required restricted lab; Module 02 topic and acceptance boundary restored |

Disposition: content coverage demonstrated across all original sections with explicit split between public core, advanced preview and restricted real-source work. No assertion that equivalent physical competence or actual instructor acceptance has been demonstrated. Missing original next-shift exercise and real-station checkpoint restored; original comment syntax corrected, timed WAIT caveat added. Private companion not published. Independent source applicability, advanced exported operands, distinct-cell lab, visual/accessibility and security review, novice pilot and instructor signoff remain open. HOLD; Module 02 blocked.
