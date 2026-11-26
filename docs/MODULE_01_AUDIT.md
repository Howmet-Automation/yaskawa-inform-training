# Module 1 migration audit — HOLD

This increment is a condensed public development draft, not a replacement for the expanded internal module.

| Gate | Status | Evidence / remaining work |
|---|---|---|
| Technical accuracy | HOLD | Verify all syntax and controller-specific claims against applicable references. |
| Safety | Partial | Read-only boundaries, no bypass guidance, process versus safety distinction. Instructor review pending. |
| Teaching progression | Partial | Six ordered lessons with examples, tasks and answers. Full original depth and one-hour pilot pending. |
| Assessment | Partial | Three questions, immediate feedback, pass invalidation on edits; practical instructor checkpoint remains external. |
| Company relevance | HOLD | Public examples fictional; private source lab and machine comparisons require restricted delivery. |
| Interaction/accessibility | HOLD | Local progress and controls implemented; browser, keyboard, mobile and persistence tests pending. |
| Release | HOLD | Build verification, full migration, instructor sign-off and novice pilot outstanding. |

Never mark READY based on a green deployment alone.

## Expansion increment

Added six practical lessons (12 total), paper tracing, fictional master comparison, accessible SVG timing diagram, missing-confirmation investigation, desk exercise and field observation worksheet. Public examples are fictional; no production excerpts added. Static content review: idealized timing arithmetic 4 versus 7 is consistent; no automatic recovery or safety bypass implied. Remaining gaps: lesson ordering needs refinement, printable worksheet styling, richer quiz coverage, full original quality gate migration, reference verification, browser and build testing, novice pilot and instructor approval. Release remains HOLD.

## Practical parity increment — HOLD
Static review: timeout at 5 s, early feedback 2 s, late 7 s, fault takes precedence; fictional assumptions labeled. Four workshop activities, code lab, worksheet, five instructor criteria and reading/quiz readiness added. Remaining defects/gaps: quiz persistence versus fresh answers needs reconciliation; worksheet print behavior and textarea clipping require browser testing; simulator timer and completion state require automated tests; technical syntax review, exact baseline comparison, reference verification, novice pilot, instructor approval and restricted source lab remain open. Build not verified. Next: test and fix these gaps before release.

## Defect correction increment
Assessment now persists selected answers and grading together; pass is derived, not stored separately. Legacy visits retained but legacy pass discarded. Reset no longer reloads. Five assessment and five feedback model tests added; simulator consumes tested model. Existing three sequence tests retained. Tests authored, not independently executed. Intermediate commits may fail typecheck while component interfaces change; final integrated commit e202e721b56a14e1e39e4706eb5432217b990d51 requires green CI. Browser timer, refresh, reset, print and accessibility checks outstanding. Content parity, technical review and instructor acceptance remain HOLD.

## Verified baseline and content comparison
Workflow 45695002311 at 9a075d68a7518991f6ba8f9135a791ee72853861: build and deploy jobs successful; logs confirm 3 test files, 13 tests passed, production build succeeded. Original HTML inspected directly: 21 sections, approximately 6,000 visible words; React lesson source approximately 2,250 whitespace-separated tokens before this increment, excluding separate components (not a like-for-like word count). Restored six-stage production model and three independent exercises in a334a611a77f0a7d1c870eef797f6f60772d30c4. New build pending verification. Next in order: compare remaining original sections, especially detailed code lab and resources; verify syntax; improve learner navigation; browser tests; instructor pilot. HOLD remains. Do not treat green CI as educational parity.

## Completion parity increment
Restored 80% threshold, explicit reviewed-section action, lab and instructor self-records, and gated completion. Existing v2 quiz answers retained; v2 visits reset because opening a lesson was not evidence of review. Editing assessment or checkpoint invalidates completion. Six new tests (19 total expected); latest execution not yet verified. Local instructor checkbox is not authenticated sign-off. Integrated revision 0d2007c. Next: verify CI, complete direct content comparison, verify technical references and syntax, then refine navigation and browser-test. HOLD.

## Browser validation increment
Contextual navigation now retains worksheet notes in module memory; no localStorage for notes. Print text mirrors full textarea content. Reset requires confirmation. Added four Chromium Playwright tests for navigation/focus/review persistence, worksheet navigation and print-media visibility, assessment persistence and blocked completion, and mobile overflow. Deployment now requires browser tests after unit tests/build. Tests authored, not yet executed or verified. Print media visibility is not physical print pagination validation. Simulator resets on leaving its lesson by design; worksheet resets on reload/route exit by design. Technical operand and educational parity review remain open. HOLD.

## Verified browser gate and content restoration
Run 45698172803 at c3885d5: build and deploy success; logs confirm 19 unit tests, 4 browser tests, production build 1.26s. Subsequent commits 200809c, a2f870c, 2be7511, 7cb1e14 expand job reading, restore interactive five-snapshot trace, and prepare for Module 2. Fifth browser test added; new revision not yet verified. Table snapshots are fictional and omit reset logic. Full original-source parity and advanced operand review remain open; HOLD.

## UI workspace redesign
5ec54b4, b51eca5, 277ea7b: compact course header, roadmap home, sticky grouped navigation, focused reading column, practice styling, collapsible references, resume by lesson ID, responsive layout and updated print rules. Browser tests adjusted for resume. No visual browser inspection or new CI results yet. Existing content and completion rules retained by source edits; regression validation required. Next: semantic lesson components and remaining exercises. HOLD.

## Visual learning increment
Run 45699576678 at 9919cfe confirmed successful. Semantic example labels, missing-branch exercise, process decomposition and expanded practice are deployed. New components BranchDiagram, SignalTimeline and InstructionTrace integrated; seventh browser test authored. Signal history uses existing feedbackScenario model, request held for illustration, no reset handshake. Instruction trace assumes initial output OFF and excludes external logic. New revision requires CI and visual review. Original HTML direct parity evidence must be independently rechecked before approval; technical review and internal lab remain outstanding. HOLD.

## Assessment and instructor consolidation
Run 45700040691 at b4560cc completed successfully. Ten-question assessment retains previous five and adds pseudocode, WAIT, missing branch, parallel waits and late feedback. 80% threshold unchanged. v5 migration retains visited lessons and resets old assessment/checkpoints/completion. New threshold unit test authored. MODULE_01_INSTRUCTOR_GUIDE.md provides practical key, proposed 60-minute initial session, internal lab preparation and acceptance rubric. Internal source selection and actual instructor approval not completed. New CI pending. Prior baseline word-count claims require independent source recheck; no final parity approval. HOLD.

## Acceptance review — 2026-11-25
Verified workflow 45733851340 at 81dd533: build, unit tests, browser tests, artifact upload and deploy succeeded (build job 139622237502). Recovered artifact 15077303431. Local Chromium navigation was denied by environment policy for localhost and local files; no visual pass claimed. CI screenshot artifact configured in 603a797. New end-to-end completion, invalidation/reset and all-lessons mobile/console tests authored. Latest CI pending.

Re-read original HTML, including glossary, exercises, simulator controls, worksheet, quiz and handoff. Restored selectable 3/5-second teaching timeout and physical observation questions. Clarified comment marker, CALL/END behavior, exported conditional variants and position data. Original quiz objectives preserved and extended. Internal SCAR companion recovered separately and exact source revisions checked; do not publish it. Remaining original-content differences are deliberate: public fictional examples, page-by-page navigation with explicit review, persistent browser progress, expanded assessment and practical interactions. Content coverage accepted at desk-review level, subject to latest test and instructor review.

Technical evidence: official Yaskawa INFORM index (4407425435927), independent/coordinated control index (34805519233170), MotoSim command syntax (4408792981015), header fields (21577951275031), MOV UNTIL example (20895894514455), output during MOV/NWAIT (4415229488023). Official YRC1000 Functions Packages overview August 2019, page 53 (Independent Control 181453), confirms PSTART JOB:name SUB1/SUB2 and PWAIT SUB1/SUB2. YRC1000 INFORM manual mirror (Manualzz 84662580), sections 1.7.4, 2.2 CALL and structured-language instructions, supports export variants and END/RET return behavior. YRC1000 option manual mirror (84663344) supports subtask pattern. Official linked manual PDF and corporate homepage returned HTTP 403 in this environment; exact controller/software applicability remains instructor/technical reviewer responsibility. All other seven reference article/index destinations inspected. No live robot testing.

Release disposition: HOLD for latest CI, actual screenshots and visual/keyboard review, technical/instructor acceptance and beginner pilot. No Module 2 advancement yet. See instructor guide for pilot and rubric.

## Rendered acceptance review
Run 45735061962 at 45b46e5 verified successful: 21/21 unit tests, 10/10 browser tests, build 860 ms; build job 139626205183 and deploy job 139626514628. Artifact 15078805746 recovered; 16 screenshots at 1440 and 390 px reviewed as contact sheets, with opening lesson inspected at full size. Desktop hierarchy satisfactory. Mobile screenshot showed long repeated header, navigation occupying most first viewport, tightly wrapped signal table, and stale footer. Long code lab requires scrolling but no content removal warranted. Corrections 4e1f5bb and 46f22bf: mobile navigation toggle, shorter subsequent headers, independently scrolling trace table, footer correction. New keyboard navigation regression test added; new CI and screenshot review pending. Screenshot sample does not establish comprehensive accessibility or interactive usability. Controller-specific technical confirmation, instructor signoff and actual novice pilot remain outstanding. HOLD; freeze feature scope.

## WP1 — learning architecture desk gate
23743cd records the seven-signal fictional inspection station, normal and reset snapshots, missing/stale feedback and deadline cases, separately scoped simple INFORM trace and defective branch exercise. JS desk checks against current module01.ts verified all 22 existing IDs exactly once, 28 prerequisite edges, 32 entry combinations (one eligible with clean idle outputs) and ten timing cases (deadline precedence and fault persistence). These are design checks, not controller or application tests. Latest pre-WP0 documentation workflow 45737419736 succeeded when checked during WP0; WP1 did not run new application validation. Session durations are hypotheses; actual technical/instructor/pilot acceptance still required. E01–E20 remain open. WP1 planning exit satisfied at desk level; WP2 Block A next. HOLD.
