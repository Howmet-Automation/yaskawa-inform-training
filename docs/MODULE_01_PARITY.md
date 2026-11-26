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
