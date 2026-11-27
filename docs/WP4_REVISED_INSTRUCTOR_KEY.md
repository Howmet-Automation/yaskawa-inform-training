# Module 01 — Revised instructor key
Review draft. Companion to WP4 blueprint and module01-core-1 assessment. Classroom only. Actual approval must be recorded through approved internal processes; no website score or checkbox grants equipment authorization. Do not assign the public checklist as a certification. Source and controller verification WP5; independent key review and observed pilot WP6.

## Scenario key
| Item | Answer | Reason / misconception to examine |
|---|---|---|
| K1 | A | Both prerequisites precede request; completion evidence precedes report. Independent checks may swap. Critical. |
| K2 | B | Direction depends on the named device; sender output is receiver input. |
| K3 | C | ACK is acceptance, not completion. DONE OFF alone does not diagnose physical failure. Critical. |
| K4 | A | False IF skips body; subsequent report is still reached. IF is not WAIT. |
| K5 | B | Stated entry recheck remains waiting; no request or success report; no invented timeout. Critical. |
| K6 | C | Name metadata; DOUT ON occurs; false WAIT blocks later OFF in model. Critical. |
| K7 | A | Synchronous caller waits for normal return; called job remains at WAIT. |
| K8 | B | Identify missing evidence, distinguish hypotheses with approved history and mapping/diagnostics. Critical. |
| K9 | C | Exact applicable revision, controller, mapping and called logic establish behavior, not name/date alone. |
| K10 | A | Reported process-ready does not establish safety-rated permission or continued clearance. Critical. |

Score: at least 8/10 and all K1/K3/K5/K6/K8/K10 correct. Review every miss. Knowledge check is open study/remediation, not secure examination. Answers are client-side and public; use fresh instructor-selected equivalent scenarios for actual independent assessment.

## Independent practical task: fictional measuring station
The page shows DEMO_MEASURE and DEMO_RESULT, with invented addresses, assumed synchronous CALL, normal END return, no external logic, initial output OFF. Under these assumptions:
- Input 90 remains OFF: caller at first WAIT, output 91 OFF, no request/call reached.
- 90 ON, 92 OFF: caller sets output 91 ON, calls result job, which stays at WAIT. Caller OFF instruction not reached.
- 92 already ON: called level WAIT satisfied when reached, normal return, caller OFF then END. This does not establish fresh completion.
- 92 arrives later: called wait blocks until level becomes true, normal return and caller clears output. Defined completion report observed, not independently verified physical result. No timeout/ACK/reset shown.
- Robot receives 90/92, sends 91; PLC viewpoint reversed if it is the counterpart. Request, acceptance and finished evidence distinct; ACK absent in this excerpt.
- Separate pseudocode task: clean starting feedback, entry prerequisites before request, missing prerequisite recheck or explicitly stated stop without normal report; defined deadline and missing completion response; normal reporting only after required evidence; no implied production recovery.
- Observation: report missing, current WAIT and logical output state. Hypotheses: work unfinished versus status path issue, for example; authorized device history vs approved signal documentation/read-only diagnostics. Do not infer exact failed component.
- Verify actual machine, controller/option context, source revision, I/O meaning, called paths and external writers. Process condition is not safety permission; no equipment operation authorized.

## Practical rating criteria
Use 0 (not demonstrated / materially incorrect), 1 (partial or prompted), 2 (independent with reasoning). Mark not observed separately. Require 2 in each category after remediation; do not compensate a critical error with unrelated score.
| Criterion | Rating 2 evidence | Rating 1 example | Rating 0 example |
|---|---|---|---|
| Sequence and conditions | Identifies required entry and completion dependencies and abnormal paths | Corrects missing branch with prompting | Normal report without evidence |
| Signals and output | Both directions correct; distinguishes stale/acceptance/finished; output trace correct | Direction corrected with reminder | ACK treated as completion or false WAIT clears output |
| Calls and source | Active job/current wait and normal return correct; names exact context needed | Return path correct after cue | Caller advances while called wait blocked |
| Evidence | Separates observation and two hypotheses with specific authorized evidence | One hypothesis and generic source | Unsupported failure diagnosis |
| Safety and limits | Explicit process/safety distinction and no actual operation; identifies omitted assumptions | Limits identified only after prompting | Process-ready treated as safety permission |

Use a fresh variation after remediation (different invented numbers, first prerequisite false, old finished status ON, alternate evidence missing). Observe explanation without showing key. Record version, date, objective ratings, specific observed evidence, remediation and instructor decision in approved internal records. Keep actual employee names, machine identifiers and program details out of the public site. Public local ratings and checkbox are self-records, not authenticated. Separate internal SCAR lab and distinct-cell comparison remain required for internal acceptance, not the public core checklist.

## Handoff
Scenario author key desk-checked against WP0 and WP4 blueprint; independent technical reviewer and novice pilot not yet obtained. Verify controller syntax in WP5 before release. Existing older instructor guide applies to prior module route only; this key applies to revised assessment.
