# Module 01 — WP0 baseline and instructional design contract
Date: 2026-11-25. Disposition: WP0 desk-level design contract; module HOLD. This is not a final lesson design, technical approval, measured learner result or authorization to operate equipment. Follow MODULE_01_PEDAGOGY_REVISION_PLAN.md and QUALITY_GATE.md.

## 1. Immutable comparison baseline
Application source at a82d53ef834e178e16cc884ceaa48f27604d8382; workflow 45736950760: build and deploy succeeded, 21 unit and 11 browser tests passed (build job 139632458973). Docs-only revision aa5766b82db886622d948862e3de4227b09dc707: workflow 45737419736 completed successfully, checked during WP0. No application edits in WP0. module01.ts blob 4c0a55a12c37828b719a97d9f0574fd831896259 (22 lesson IDs and ten questions inspected). Original local files read or fingerprinted in current session; these are private baseline references, not files for public distribution. Preserve original bytes; do not overwrite. Record SHA-256 for comparison, not a claim of long-term backup availability.

| Original artifact (role only) | Bytes | SHA-256 |
|---|---:|---|
| Audited expanded HTML | 71185 | 980033ba69e5ce742efb3fffe0e4086970c6d91c6e9090daaf0e99e85fc6cd23 |
| Original mandatory quality gate | 11283 | 1eb2e57f5153ef57c681fb6f438958214dc221e8468afeb7cb60f0be399d7531 |
| Original audit review | 7919 | 3fa3d8691d25fc78cb55e0573d316e8ed72f02783c75f2b6d703f3a9f2641319 |
| Restricted SCAR companion | 9241 | fc6ea58750cec637f6fbdb1d9d4ee234cf74dd4849a851cb97b6099755a49f67 |
| Prior rendered review ZIP (45b46e5; not final mobile revision) | 4473331 | 129385743df2a3737060c4974bee78608b69aa50ff3276c35ee887fcaf182b0c |

Original HTML section IDs, headings and counts independently extracted. Original gate read; all critical checks remain binding, including controller applicability, process vs safety distinction, no unsupervised operation, source traceability and instructor evidence. Original audit and companion fingerprinted, not newly reviewed in full. Public repo may contain fictional examples and generic teaching specifications only.

## 2. Entry assumptions, scope and objective-to-evidence matrix
No INFORM or general programming proficiency assumed. Basic reading and ability to use a browser and write short notes assumed; verify through a non-graded entry task. Do not require a PLC programming background or knowledge of a particular machine. Core is reading, reasoning and explaining, not creating executable robot jobs. Prior electrical or maintenance experience may inform examples but must not be assumed.

Objectives below are proposed design requirements. Existing quiz references Q1–Q10 describe current baseline coverage, not endorsement of question quality. Planned evidence is not yet implemented. Critical misconception means correct it before instructor acceptance; a score cannot compensate for it. Core O1–O10 are required; X1/X2 are previews with separate guided evidence.

| ID | Observable exit behavior | Existing teaching / activity | Existing assessment gap | Planned independent evidence and acceptable result |
|---|---|---|---|---|
| O1 | Decompose a task into ordered actions and conditions | mental-model, sequence, order, workshop cards | Q1 and Q5 recognition; ordering key too rigid | New desk station: arrange steps, explain causal constraints; accept all valid orders, identify missing completion evidence |
| O2 | Identify source, receiver, input/output perspective and signal meaning | signals, roles, practice B, handshake drawing | Q2 only indirect; no direction trace | Label arrows on a new PLC/robot/device diagram; correct ownership and perspective, distinguish request/status/feedback |
| O3 | Distinguish request, observed signal and physical completion; interpret stale, absent or delayed feedback | sequence, walkthrough, trace, fault, feedback simulator | Q2/Q10; stale/ack/reset not taught | Given two time snapshots or traces, identify what is known and unknown; no claim request or ON alone proves physical completion (critical) |
| O4 | Evaluate a simple condition, trace IF and unbounded WAIT, explain blocked and skipped paths | logic, BranchExercise, InstructionTrace | Q7/Q8 recall known example | Unseen short trace under two input cases; identify current instruction, skipped lines, output state and reason (critical for wait) |
| O5 | Express normal and abnormal paths in plain-language pseudocode | pseudocode, machine-example, walkthrough, practice | Q6 recognizes purpose; no constructed response | Write finite classroom trace with explicit wait/recheck or defined stop path; explain why normal report cannot occur after missing prerequisite (critical) |
| O6 | Identify job header vs instructions/comment; read NOP/WAIT/DOUT/END in an excerpt | inform-preview, trace-inform | Q4/Q7; no independent line trace | Annotated unfamiliar excerpt: classify header/comment/command, trace signal state and wait; no executable job creation |
| O7 | Follow CALL and normal END return; locate entry and needed source | reading, transfer, worksheet | Q3 source selection; no caller-return task | Two fictional jobs: follow execution into called job and back to next caller line; identify omitted facts; record source context |
| O8 | Investigate a stopped sequence using observations and evidence, not guesses | fault, simulator, trace, worksheet | Q10 specific model; no troubleshooting reasoning | Symptom plus trace: name blocked condition, two plausible explanations and evidence distinguishing them; no forcing or unsafe intervention (critical) |
| O9 | Transfer reading method to unfamiliar example, identify applicability and unknowns | transfer, CodeLab, internal lab, worksheet | Q3; instructor rubric general | Public: unfamiliar fictional cell variant; compare assumptions and cite evidence. Internal: instructor-approved real source read-only, exact revision and limits; separate approval |
| O10 | Explain process logic versus safety-rated functions and boundaries of classroom work | order, practice C, module safety banner | Q2/Q5 implicit; not a dedicated explanation | Scenario: explain why process-ready does not establish safe motion; identify appropriate authorized source/escalation; no live operation/bypass (critical) |
| X1 | Describe parallel vs sequential start/wait patterns conceptually | parallel, compare, TimingDiagram | Q9 currently mandatory, moves to extension | Draw fictional two-task timeline and explain both waits; no physical coordination claim |
| X2 | Recognize variable selection/counting, conditional re-evaluation and subtask instructions with guidance | CodeLab, restricted SCAR companion | no valid independent mastery measure | Instructor-led source walk; teach prerequisites first, record unknowns. Detailed variable/structured syntax mastery deferred to Modules 3/4/8 and SCAR applications to 9 |

For O9 public and internal evidence are separate: fictional transfer is required core; actual equipment investigation is an instructor-supported internal requirement, not an unsupervised prerequisite for the public route. Retain existing restricted companion and prior advanced lab depth. Full internal approval still requires an instructor-reviewed distinct-cell comparison. No private source details in public examples.

## 3. Current 22-lesson inventory and proposed disposition
All IDs accounted for. Keep source/previous revision. These are proposed allocations; WP1 determines exact ordering and learner-facing names; do not delete a lesson merely because it is condensed or regrouped.

| Current ID | Objective | Disposition |
|---|---|---|
| objectives | O1–O10 | core orientation; show session route and scope |
| mental-model | O1 | core; everyday analogy then recurring station |
| sequence | O1/O3 | core; causal constraints and evidence |
| order | O1/O10 | core; prerequisites vs safeguarding |
| signals | O2/O3 | core; binary state, reported vs physical |
| roles | O2 | core; diagram, terminology |
| pseudocode | O5 | core; worked/faded/independent solutions |
| machine-example | O1/O2/O5 | core running station; explicitly fictional |
| walkthrough | O3/O4 | core; coherent initial, normal and missing-part paths |
| trace | O3/O4/O8 | core; separate traces, do not append new cycle to prior success |
| logic | O4/O5 | core; teach branch vs wait before unsupported tasks |
| inform-preview | O6/O10 | core minimal header/comment/instruction reading; MOVJ conceptual preview, no motion programming |
| trace-inform | O3/O4/O6 | core; blocked and already-true cases |
| reading | O7/O8/O9 | core; two-job worked return example |
| fault | O3/O8/O10 | core; observation vs inference, model timeout/latched state |
| parallel | X1 | optional conceptual extension after core; preserve |
| compare | X1/X2 | optional scaffolded extension; retain code lab separately from core |
| desk | O1/O2/O4/O5/O9 | core practice; partner activity optional |
| transfer | O7/O8/O9 | core fictional transfer; distinct restricted instructor lab |
| practice | O1/O2/O4/O10 | core independent work, complete answer/rubric |
| worksheet | O8/O9/O10 | core fictional worksheet; private actual observation companion |
| glossary | O1–O10/X1/X2 | reference at point of need; not isolated mandatory memorization |

## 4. Original HTML retention map (21 sections)
Word counts include headings and answers and are inventory evidence only. All rows planned; none marks parity passed. Preserve the original learning intent and substantive material even when moving advanced concepts outside core mastery.

| Original ID | Words | Target / retained intent |
|---|---:|---|
| objectives | 200 | orientation and O1–O10 matrix |
| mental-model | 296 | mental-model, six process questions, worked decomposition O1 |
| sequence | 212 | sequence/order, incorrect ordering and reasoning O1/O10 |
| signals-and-roles | 235 | signals/roles, request and confirmation O2/O3 |
| machine-example | 341 | recurring fictional station, SCAR context restricted O1/O5 |
| walkthrough | 245 | walkthrough/trace/CycleTrace, normal and abnormal O3/O4 |
| inform-preview | 297 | annotated headers/instructions, conceptual MOVJ preview O6/O10 |
| trace-inform | 175 | InstructionTrace, blocked and already-true WAIT O4/O6 |
| job-reading | 237 | reading/transfer, caller and source trace O7/O9 |
| debug | 274 | logic/BranchExercise/fault, missing checks and feedback O4/O8 |
| scar-patterns | 510 | compare/CodeLab and restricted lab X1/X2 |
| parallel-graph | 281 | TimingDiagram and guided comparison X1 |
| fault-simulator | 216 | FeedbackSimulator/SignalTimeline, two timeout settings O3/O8 |
| workshop | 456 | desk/Workshop and worksheet, four methods/teach-back O1/O2/O4/O9 |
| practice | 302 | independent practice, order/I/O/prerequisites O1/O2/O10 |
| quiz | 229 | knowledge and application blueprint O1–O10; original 80% retained |
| glossary | 156 | inline glossary plus reference O1–O10/X1/X2 |
| scar-reading | 887 | restricted original source companion and fictional transfer; retain depth, X2 guided not unsupported core mastery |
| field-notes | 267 | fictional worksheet, approved private observation and instructor criteria O8/O9/O10 |
| resources | 252 | contextual references and library, applicability WP5 |
| next-module | 142 | completion criteria, next-shift recall and Module 2 prerequisites |

## 5. Glossary contract: introduce before dependent exercise
Working classroom definitions; technical reviewer validates controller-specific terms in WP5. WP1 assigns first-use locations.
| Term | Minimum beginner meaning |
|---|---|
| Program / job / instruction | Ordered logic; a named robot program; individual command. |
| Sequence / prerequisite | Order of steps; condition needed before a dependent step. |
| Condition / true / false | Statement evaluated as satisfied or not satisfied at the relevant point. |
| Signal / input / output / ON / OFF | Reported information; direction relative to named device; two example states, not universal physical meanings. |
| PLC / robot controller / sensor / actuator | Station logic controller; executes robot jobs; reports condition; performs action. |
| Request / acknowledgement / feedback / completion | Ask for action; receipt/acceptance where defined; reported information; defined finished status; not interchangeable. |
| Handshake / reset | Agreed exchange and interpretation of signals; defined return to initial state for next cycle. |
| Wait / branch / timeout / latch | Wait delays progress until its condition or defined outcome; branch selects path; timeout is a time-limit outcome; latched state persists until defined clearing logic. |
| Pseudocode / trace / flowchart | Human-readable logic; record current instruction and state; diagram of ordered/conditional paths. |
| Header / comment / CALL / return | File metadata; human explanation; invoke named job; resume caller where normal behavior specifies. |
| I/O map / ladder / CIO | Mapping of signals; one PLC logic representation; Yaskawa concurrent I/O logic, contextual term not a required programming skill. |
| Process interlock / safety-rated function | Required process condition; separately engineered safety function, not interchangeable. |
| Tool / frame / position / MOVJ | Conceptual motion context, preview only; no motion operation or safety claims. |
| Variable / integer / byte / subtask / parallel | Stored value and preview types/execution tasks; teach in extension before exact syntax; full treatment later. |
| Revision / evidence / inference | Exact source identity; what is observed or documented; conclusion supported by evidence, not a guess. |

## 6. Reusable lesson content schema (authoring contract, not runtime implementation)
Required for core lesson: stable ID; title phrased as a useful task; outcome IDs and scope; prerequisite IDs; estimated independent vs guided time (hypothesis until pilot); context and assumptions; short explanation and why it matters; defined terms at first use; worked example with trace and reasoning; supported practice with partial solution; independent transfer prompt; hint and complete answer with rationale/accepted alternatives; common misconception and correction; evidence method; safety and controller limits where relevant; applicable reference or verification flag; next-step/retrieval prompt. 
Example types must be explicit: plain-language sequence, pseudocode, incomplete INFORM excerpt, exact restricted source excerpt, observation table, conceptual graph. Avoid automatically formatting every example as code. Show normal and abnormal traces separately and use stable signal names and state assumptions. Diagrams require equivalent text; highlight state without relying solely on color. 
Authoring order: define goal/evidence -> verify prerequisites -> write worked example -> solve independent task -> write teaching explanation -> add interaction only if useful -> desk check against gate. Assessment questions must map to outcomes and use plausible errors, not arbitrary distractors. Never treat a review click as skill evidence.

## 7. Scope, safety and session constraints
One recurring fictional station will be specified in WP1 with actor ownership, initial states, named signals and explicit reset/abnormal assumptions. Use other examples only for genuine transfer or contrast. No real signal mapping or production positions in public. Conceptual logic must not imply safety authorization. Classroom/read-only only; no jogging, editing, forcing, transferring, teaching positions or running jobs. Technical applicability and actual machine source confirmed by instructor. Distinguish preview from mandatory core mastery. Independent blocks must have stopping points; time estimates hypotheses, not promises; actual novice observation required. 
Module 2 prerequisite: explain sequence, I/O direction, simple true/false, wait vs branch, trace short pseudocode and recognize uncertainty; no required mastery of SWITCH, variables, PSTART/PWAIT or motion programming yet.

## 8. WP0 disposition and handoff
- Baseline source inventory: complete at desk level; 21 original/22 current IDs accounted for.
- Finding register: E01–E20 retained in revision plan; all OPEN for closure. E01 objective mapping and E04 preview separation have design evidence only, not implemented or validated.
- Design contract: documented for WP1; explicit retained/deferred scope, preliminary glossary and authoring schema.
- Test evidence: latest docs-only workflow success; 32 tests independently verified at app baseline; no tests newly run by WP0.
- Original artifacts exist in current working context; hashes are not a durable archive. Restricted companion and original HTML must remain in approved storage. Independent technical and instructor signoff outstanding.
- No application behavior changed. WP0 planning exit criteria satisfied at desk level. Proceed to WP1 architecture, not WP2 rewrite: establish one internally consistent fictional station, signal dictionary, explicit normal/abnormal/initial/reset model, dependency graph, lesson sequence and staged session route. Verify against these objectives and close no finding until implementation and required evidence are recorded. Module 01 HOLD, Module 02 blocked.
