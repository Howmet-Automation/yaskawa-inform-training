# Module 01 — WP4 assessment blueprint
Status: design draft, not yet integrated or approved. Functional baseline 5e25f39 (run 45999407659, 32 unit and 18 browser tests passed; deploy succeeded). WP3 remaining visual/keyboard review and dependency findings remain open. No change to learner completion until revised assessment is implemented, reviewed and tested. Follow WP0 O1–O10 objective contract; advanced X1/X2 remain guided previews, not core mastery.

## Knowledge and application matrix
Use ten scored scenario items with 80% threshold, all answered. In each, plausible alternatives should represent different reasoning errors, not obviously silly choices. Do not reuse a complete practice answer verbatim. All scenarios fictional, with explicit starting conditions. Answer keys independently reviewed before publication. Critical misconceptions require correction even if 8/10 is reached.

| Item | Objective | New scenario / evidence | Correct reasoning | Critical misconception to remediate |
|---|---|---|---|---|
| K1 | O1 | Packaging prerequisites, request, finish evidence, report; choose valid causal order | Both required checks before request; completion evidence before report; independent checks may swap | Normal report without completion evidence |
| K2 | O2 | New controller/device arrow diagram with request and ready messages | Direction relative to named receiver/sender, distinct from meaning | Confusing a sent request with received evidence |
| K3 | O3 | New request and acceptance ON, completion OFF; contrast already-ON old status | Acceptance only; new completion unconfirmed; reported state not physical proof | Request/ACK/stale signal proves completion |
| K4 | O4 | Unseen branch with normal report outside the branch | False condition skips body, reaches following report | False branch automatically ends job |
| K5 | O5 | Missing prerequisite in new paper model, explicit entry recheck | Recheck without request or normal report, distinguish unspecified cases | Silent progression or normal completion with missing prerequisite |
| K6 | O6 | New incomplete INFORM excerpt; classify header/comment and trace false WAIT | Metadata/comment not executable; wait blocks; later output command not reached | WAIT auto-clears output or advances when false |
| K7 | O7 | Two fictional jobs with ordinary synchronous CALL and normal END | Called wait blocks caller; normal return resumes next line | Caller executes subsequent line before normal return |
| K8 | O8 | Delayed reported completion; select evidence-based next investigation | Identify missing report; distinguish device state and reporting-path hypotheses; use approved read-only evidence | Guess failed device or force signals |
| K9 | O9 | Unfamiliar cell with same job name but different I/O context | Verify exact source/revision, controller, signal meaning and applicability | Copy addresses or assume same behavior from name |
| K10 | O10 | Ready reported ON before approach in a hypothetical excerpt | Process condition alone does not establish safety-rated permission or ongoing clearance | Treat process-ready as safe-motion authorization |

Critical items K1, K3, K5, K6, K8, K10 must have correct responses on a passing attempt. K2/K4/K7/K9 missed answers still require review; practical rubric can block approval for any misconception. This is a design decision: retain 80% overall while disallowing compensation for identified high-consequence errors. Score and critical-item status displayed separately. No automatic certification.

## Independent practical evidence (new transfer, not memorized)
Provide a different fictional job pair, explicit initial signal levels and signal meanings. Task has no live equipment component. Learner must: (1) identify caller and current instruction in false and already-true wait cases; (2) trace logical output before/after return; (3) write a missing-prerequisite and missing-completion path in pseudocode; (4) identify observations, two plausible hypotheses and evidence sources; (5) explain process-ready versus safety authorization and model limitations. Do not reuse the exact D4 exercise as scored transfer. Learner submits reasoning on paper/approved internal system; public website does not store real source or employee details.

### Observable practical rubric
Score each of five criteria 0 = not demonstrated or materially incorrect, 1 = partial with prompting/correction, 2 = independently correct with reasoning. Report the five ratings, not only aggregate. Require all five independently demonstrated (2 each) after remediation for instructor approval; a first attempt is diagnostic, not punitive. Record revised demonstration using a new equivalent variation rather than copying the key.
- Ordered sequence/conditions and normal vs abnormal path (O1/O4/O5).
- Signal direction, acceptance, completion, stale report and logical output state (O2/O3/O6).
- Caller/called wait and normal return with source context (O6/O7/O9).
- Observation, plausible hypotheses and specific evidence (O8/O9).
- Process versus safety boundary, read-only limits and no unsupported physical claims (O10).

Example of acceptable reasoning: “The called job is waiting for the defined status. The caller has not reached its OFF command in this simplified trace. The missing report could reflect unfinished work or a reporting problem; the source and approved diagnostics distinguish these. This does not establish physical state or permission to move.” Non-example: “The sensor is broken; force it and continue.” The non-example is a misconception to reject, never a recommended action.

## Completion and versioning design
Separate core reading (19 IDs), knowledge attempt (new assessment version), practical evidence reviewed and instructor approval recorded in the approved process. Optional advanced extension does not block public core mastery. Internal SCAR lab is separate instructor-guided delivery with exact source applicability and distinct-cell comparison; public local checklist cannot sign it off. Store local fictional answers only; local checkbox is self-report, not authenticated instructor approval. Changing answers invalidates graded attempt and local completion; changing evidence or assessment version invalidates affected local review records. Keep old module progress separate. No migration of old passing quiz to new assessment. Remediation prompts link to relevant lesson and require reattempt. Reset explicitly clears only revised records. Actual formal approval remains external.

## Validation requirements
Independent author/key desk trace for each question and practical case; confirm every O1–O10 mapped, critical items tagged, options distinct, no answer leakage before grading. Unit tests: 8/10 plus all critical correct passes; 8/10 with critical miss fails; incomplete/invalid fails; edit invalidates; restore validates version/index and answer validity; extension not required. Browser: correct and incorrect attempts, remediation, revisit/refresh, keyboard and mobile, local checklist cannot complete before practical/instructor requirements, reset and isolated old progress. Record technical source verification (WP5), pilot and actual instructor acceptance (WP6). Do not mark READY from a test result.
