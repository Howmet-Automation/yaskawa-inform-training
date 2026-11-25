# Mandatory module quality gate
Disposition READY only when every critical check passes, evidence is recorded, and technical and instructor sign-off are complete. HOLD for missing evidence, critical failure or unresolved high-risk issue. REVISE for noncritical defects; rerun affected checks.
## 1. Technical accuracy (critical)
- [ ] Verify every instruction, operand, variable type, syntax and controller behavior against applicable Yaskawa documentation.
- [ ] State controller, software and application differences; avoid universal claims.
- [ ] For restricted company examples record exact machine, repository, path, branch/commit or blob, and embedded header date separately from backup/update dates.
- [ ] Treat authoritative equipment mirrors as source of truth; record access gaps without questioning authority.
- [ ] Preserve differences between machines and verify transfer limits.
- [ ] No invented production signals, positions, timings, interlocks or recovery behavior.
- [ ] Label fictional examples; source behavior claims or flag for instructor verification.
- [ ] Independently check at least one meaningful technical example.
## 2. Safety (critical)
- [ ] Distinguish process interlocks from safety-rated functions.
- [ ] No unsupervised jogging, teaching, editing, transfer, testing or running.
- [ ] Motion prerequisites include tool/frame/position, clearance, speed, payload and approved validation as applicable.
- [ ] No bypassing faults, defeating interlocks or forcing outputs.
- [ ] Live work requires authorization, site procedures, risk controls and exact documentation.
## 3. Teaching
- [ ] Observable objectives; plain-language terms before heavy use.
- [ ] Explanation, worked example, practice and feedback for major concepts.
- [ ] Simple to realistic progression, assumptions explicit, explain why it matters.
- [ ] Independent study duration validated; realistic troubleshooting/code reading.
- [ ] Actual company source used in restricted delivery where useful; distinguish exact excerpts and pseudocode.
- [ ] Practical technician voice, no filler.
## 4. Assessment
- [ ] Exercises align to objectives; trace and explain decisions in own words.
- [ ] Hints/keys for graded exercises; independently verify scoring key.
- [ ] Passing threshold defined; reasoning required.
- [ ] Completion requires knowledge and practical/instructor checkpoints, not a button alone.
- [ ] Observable instructor rubric.
## 5. Relevance and privacy
- [ ] Prioritize primary machine family in restricted training; preserve cell differences.
- [ ] Teach locating and verifying exact machine program.
- [ ] No secrets or proprietary code in public release; equivalent fictional labs clearly labeled.
## 6. Page and interactions
- [ ] Desktop/mobile navigation and links work.
- [ ] Expandable answers, quiz grading/reset/invalidation, actual visits, truthful completion.
- [ ] No dead controls, duplicate IDs, console errors or misleading indicators.
- [ ] Narrow-screen code/tables, contrast, focus, keyboard and print usable.
- [ ] Clear start, progression, recap, references and handoff; duration based on pilot.
- [ ] Reproducible build, automated tests and browser evidence.
## 7. Independent evidence
- [ ] Technical reviewer/date and applicable references recorded.
- [ ] Instructor reviewer/date and practical criteria recorded.
- [ ] Novice/peer dry run and duration recorded.
- [ ] Restricted source revisions recorded where applicable.
- [ ] Validation results, commit, limitations and disposition recorded.
## Instructional design
Use at least three methods beyond passive reading where appropriate: worked examples, visual models, interactive scenarios, troubleshooting, desk activities, teach-back, supervised read-only observation, retrieval practice. Quizzes supplement rather than replace teaching. Label all conceptual diagrams and simulations.
## Standard package
Trainee page, instructor notes/key, sources and applicability, completed gate, next-module handoff. For migrations also require baseline parity inventory and evidence for every row.
## Release record
Module/version/date; controller/application; source references; open issues; technical reviewer; instructor reviewer; novice pilot; test evidence; final disposition. Public and restricted internal versions reviewed separately.
