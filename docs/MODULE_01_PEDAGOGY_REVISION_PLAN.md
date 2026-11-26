# Module 01 — Deep instructional audit and controlled revision plan
Baseline: deployed a82d53ef834e178e16cc884ceaa48f27604d8382, verified workflow 45736950760 (21 unit and 11 browser tests passed). Status HOLD / instructional revision. This is a source-level instructional review, not a measured learning outcome, independent technical signoff or trainee pilot. Existing QUALITY_GATE.md remains mandatory. Do not start Module 02 until accepted. Do not change production programs. Public examples fictional; restricted source retained internally.

## Governing principle
The product is a technician's ability to reason about a machine, not the number of lessons, features, words, quizzes or successful deployments. Preserve original audited HTML's educational intent and real-source companion; improve explanations rather than merely migrate them. Teach concepts before vocabulary-dependent tasks. Every core objective needs explanation, worked example, supported practice, independent transfer, feedback and observable evidence. Use approved equipment mirrors for restricted training; verify controller applicability against manufacturer documentation. Do not treat conceptual models as equipment control or safety procedures.

## Findings and closure register
All OPEN at baseline. P1 before novice pilot, P2 before release, P3 polish; critical gate failures always block. Each closure must name change commit, reviewed lesson, evidence, reviewer and unresolved limits.
| ID | Priority | Deficiency | Closure evidence |
|---|---|---|---|
| E01 | P1 | Objectives do not cover all assessed skills; advanced preview conflated with mastery | Objective-to-lesson/exercise/assessment/rubric matrix, core vs preview |
| E02 | P1 | Shifting clamp/inspection/robot examples and perspectives | One fictional cell with explicit actors, signal dictionary, initial states, normal/abnormal path, assumptions |
| E03 | P1 | Pseudocode rewrite lacks worked solution; trace requests fourth row of a new cycle after successful trace | Complete worked solutions; separate normal and abnormal traces; faded then independent tasks |
| E04 | P1 | SWITCH, INC, byte variables, subtasks, conditional CALL/JUMP precede prerequisites | Keep original advanced material as scaffolded extension; prerequisite legend and instructor-led real lab; core objectives limited to fundamentals |
| E05 | P1 | Missing-part response then automatic progression is undefined | Define wait/recheck path explicitly; distinguish latched fault with no automatic continuation |
| E06 | P1 | Already-true feedback, level-based WAIT, signal state vs event, reset omitted | Fictional stale-feedback contrast; teach evidence and limits, no production fix; confirm simple WAIT semantics |
| E07 | P1 | Arbitrary prerequisite ordering and incomplete desk card set | Grade causal constraints, accept valid alternatives, align complete card set |
| E08 | P1 | Obvious quiz distractors, recognition only, 80% allows critical misconception | Scenario-based items, unseen trace and explain task, correct critical misconceptions before approval, explicit scoring |
| E09 | P1 | UI/instructor rubric differ; public lab and restricted lab ambiguous | Aligned observable rubric; distinguish local self-record and approved instructor evidence; separate lab dispositions |
| E10 | P2 | Undefined PLC/CIO, latch, timeout, frame, handshake, subtask | Just-in-time terms, short glossary, scope labels |
| E11 | P2 | Long paragraphs and mismatched auto-format examples | Segment by meaning; deliberate examples, diagrams, concise explanations and tasks |
| E12 | P2 | Answers before activities; prediction cleared on branch switch; generic reveal called check | Predict-observe-explain-compare; retain both predictions in activity, specific self-check feedback |
| E13 | P2 | Timing lacks ON/OFF labels, branch lacks arrows/wait status | Explicit signal levels, direction and blocked state; equivalent text/table, contrast and keyboard check |
| E14 | P2 | First-session guide jumps backwards; no visible stopping points | Lesson order and session route align; mark independent vs instructor-required activities; validate times |
| E15 | P2 | Retrieval concentrated at final quiz | Cumulative recall at boundaries, unseen scenario and next-shift recall |
| E16 | P2 | Public worksheet requests restricted identifiers, warns against them, notes ephemeral | Public fictional worksheet; private companion handles real identifiers; clear print/retention instructions |
| E17 | P2 | Sources grouped, not claim-linked; CodeLab says below when reference is in sidebar | Contextual citations with controller/revision/section; verify each applicable claim/link |
| E18 | P2 | Signals/physical state, output status, acknowledgement vs completion and reset insufficiently distinguished | Consistent vocabulary and model assumptions; contrast examples |
| E19 | P3 | Review count is self-report; instructor check survives changed quiz | Label separate reading/practice/knowledge/instructor evidence; invalidate affected approvals by version |
| E20 | P2 | Public SCAR-style model generic; restricted comparison currently same cell | Approved distinct-cell comparison with verified exact source and differences; retain confidentiality |

## Ordered work packages (do not implement out of order)
Each package ends with a short gate report: finding IDs closed/open, original HTML mapping, changes, tests actually run, limitations and next action. Use a revision branch/PR where available; avoid feature changes during audit and unnecessary deployment churn. No claim of pass from source edits alone.

### WP0 — Baseline and design contract
Freeze current revision; retain original HTML, quality gate, original audit, restricted companion and existing screenshots. Map 21 baseline sections and 22 current lessons. Establish glossary, content schema, core vs extension and safety boundaries. Capture current baseline test logs. Exit: source inventory, finding register, objective map and explicit retained/deferred content recorded; no missing sections silently deleted.

### WP1 — Learning architecture (E01 E02 E04 E10 E14 E18)
Core route: fundamentals (instruction, order, conditions, binary signals, actors) -> one cell's normal path -> decisions vs waits -> pseudocode/tracing -> minimal INFORM reading -> abnormal paths/evidence -> independent transfer. Parallel concepts are introductory preview; structured variables/concurrency remain accessible as optional scaffolded extension with instructor support, not independent core mastery. Align later modules' prerequisites. Retain real SCAR lab for approved restricted delivery.
Design fictional training station with a PLC, robot/controller and field device; document perspective and stable names. Include explicit initial conditions, request/feedback meaning and reset scope. If comparing alternative handshake designs, label them separately. No implied universal safety or recovery implementation.
Exit: objective map approved at desk level; one consistent scenario, terms introduced before use, no circular prerequisites; session milestones and time ranges are hypotheses.

### WP2 — Rewrite teaching content (E03 E05 E06 E07 E10 E11 E18)
For each core concept: observable objective, plain-language explanation, concrete worked example with reasoning, partially completed practice, fresh independent task, hint and complete answer, misconceptions, limits and reference. Use plain-language condition values before syntax. Include annotated /JOB vs //INST, CALL/END caller-return trace, simple WAIT vs conditional branch, normal/abnormal traces, already-ON feedback and explicit wait/recheck behavior. Teach process logic versus safety-rated functions. Teach I/O as reported states; outputs include requests/status; handshakes have explicit reset assumptions. Complete desk cards, accept all valid prerequisite orders. Preserve and map original practice and advanced material.
Exit: all core tasks answerable from preceding content; every task has a complete solution with reasoning; no contradictions in traces; all examples verified at desk level against documented assumptions; source mapping updated.

### WP3 — Learning interactions and delivery (E12 E13 E14 E15 E16)
Rework only teaching-critical interactions: predict -> observe -> explain -> compare; two-case branch comparison; step trace with already-true input; accessible signal levels and flow direction; cumulative retrieval at milestones. No new libraries or decoration without learning benefit. Session map with stopping point; activities marked independent/instructor-required. Public worksheet uses fictional details; restricted internal worksheet separate. Clear local note retention.
Exit: content and simulation agree; learner can complete activities without guessing controls; keyboard, narrow screens, readable diagrams and print verified; test state transitions and errors. Existing navigation/progress preserved where valid.

### WP4 — Assessment and instructor evidence (E01 E08 E09 E15 E19)
Write assessment blueprint before questions. Test knowledge and application, not recognition alone. Plausible distractors from observed misconceptions, unfamiliar but equivalent trace, explanation and evidence classification. Retain 80% knowledge threshold; require remediation of critical misunderstandings about request/feedback, blocking waits, prerequisite/process/safety distinction, and unsupported claims before instructor signoff. Do not treat website score as certification. Define expected answers, partial-credit rubric for practical work, exemplar and non-example, retry/remediation process and versioned records. Align public/actual internal lab and page/guide rubric. Version assessment and migrate prior progress honestly.
Exit: each core objective assessed; independent key review; all critical misconceptions must be corrected; practical evidence observed and recorded by instructor, not inferred from clicks; tests for grading, invalidation, persistence, reset and completion.

### WP5 — Technical, source and full parity review (E04 E17 E20)
Review every code/header/operand/variable/behavior claim against specific manual section and applicable controller/options. Resolve exact syntax or label as non-executable conceptual preview and remove unverified claim from required mastery. Compare with original HTML section-by-section and original quality gate; retain teaching depth and restricted lab. Select approved contrasting SCAR machine internally; record machine/job/revision/header date, exact evidence, differences and unknowns; no private details public. Review safety/confidentiality with instructor. 
Exit: documented claim ledger and source links, technical reviewer signoff for applicable controller; 21-section parity disposition with rationale; independent internal lab review. No live tests.

### WP6 — Independent acceptance and pilot
Run production build, unit tests, end-to-end core routes, mobile, keyboard, print, broken links, visual inspection and dependency reproducibility check (lockfile). Verify content against blueprint; perform independent desk dry run of exercises and assessment without opening answer first. Then actual novice pilot, with instructor available but not coaching the independent portion. Record time per block, navigation, hints, mistakes, unclear wording and transfer results. Suggested initial block 45–60 min subject to observation, not full-module promise. Follow with instructor practical review and next-shift recall. Keep records in approved internal storage.
Exit: no open P1/P2 or critical failures; all original mandatory gate checks evidenced, technical and instructor signoff, actual pilot completed and findings remediated/retested. READY only then. Separate public and internal release decisions. Module 02 remains blocked until release.

## Reusable course standard
Every later module starts with prerequisite check and objective/evidence matrix; uses consistent scenario(s), terms at first use, worked -> faded -> independent progression, corrective feedback, cumulative retrieval and transfer; records technical applicability and source confidentiality. Preview material explicitly labeled. Author, technical reviewer and instructor roles separated where possible. Review content before polishing interface. No unsupported approval claims, artificial word counts or assumed student learning.

## Release record template
Revision / date / scope; objective matrix; finding IDs and evidence; original parity; source and controller applicability; automated results and rendered evidence; pilot time, misconceptions and remediation; instructor and technical reviewer/date; privacy/safety disposition; remaining limitations; READY/REVISE/HOLD. Keep private learner/source details outside public repository.
