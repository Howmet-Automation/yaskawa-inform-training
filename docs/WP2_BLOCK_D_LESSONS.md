# Module 01 / Block D — Explain a stopped sequence
WP2 learner draft; prerequisites A–C. Allow approximately 35–50 minutes provisionally; stop between activities. Fictional, read-only, paper/browser. No diagnosis or recovery instructions for actual equipment. Ask an authorized instructor about real equipment.

## D1 — Explain why a sequence is waiting
ID: fault | O3/O8/O10 | independent

Start with the current instruction, then the reported state, then the missing evidence. Observation: the trace shows a value or instruction. Inference: your explanation supported by evidence. A hypothesis is a possible explanation still requiring evidence. Avoid replacing a missing fact with a guess.

Model B is the timed slice of the inspection station: REQUEST goes ON at time zero; ACK goes ON at 1 fictional second. DONE arrives at 2 seconds (early), never (missing), or 7 seconds (late). Choose a 3 or 5 second deadline. Both required reports must be received strictly before the deadline; if completion and deadline coincide, timeout wins in this teaching model. A fault latch records the timeout until the paper simulation is reset. No normal REPORT after timeout. REQUEST is held in the graph for observation only, not a prescribed fault output state. Reset clears the simulation, not a machine. Unexpected active signal changes are outside this model.

**Worked example — 5-second deadline**
| Time | Early DONE | Missing DONE | Late DONE |
|---|---|---|---|
| 0 | Request, awaiting ACK | Same | Same |
| 1 | ACK, awaiting DONE | Same | Same |
| 2 | Completion evidence received | Awaiting DONE | Awaiting DONE |
| 5 | Normal outcome recorded | Timeout latched | Timeout latched |
| 7 | Normal outcome recorded | Fault remains | DONE ON, fault remains |

ACK is ON in all three after second 1. This table describes the timed slice, not the full Model A reset sequence. The latch is a deliberate classroom policy, not an intrinsic INFORM WAIT timeout behavior. An actual YRC1000 WAIT with a time limit may advance on expiry without the condition being satisfied; the surrounding approved logic must determine the response. For the early case, a normal outcome is recorded once both reports arrive; subsequent graph time is just history.

**Supported practice.** Change deadline to 3 seconds. Does the early case change? Does late feedback clear the fault?
Key: early at 2 is still before deadline; late misses either deadline. No automatic clearing.

**Independent practice.** A separate paper scenario has ACK at 1, DONE at exactly 3 and deadline 3. Then repeat with deadline 5. Explain both results and why these aren't actual controller timing rules.
Key: timeout in the first (strict before); normal outcome in the second. These are chosen discrete model conventions. Actual controller behavior and timing require applicable documentation and approved review.
Troubleshooting transfer: REQUEST=1 ACK=1 DONE=0 before deadline. Name two hypotheses and evidence. Possible ongoing device work (approved device history), or reporting/mapping problem (approved I/O documentation and read-only diagnostics). Neither establishes a failed component. Do not force signals.
Misconception: late feedback automatically authorizes continuation.
Evidence: identify current wait, missing evidence, timed outcome and limits. Explain process status vs safety authorization.

## D2 — Practice the reasoning away from the machine
ID: desk | O1/O2/O4/O5/O9 | independent; optional partner

Use paper cards or write the steps in a notebook. Do not use an actual pendant. Four activities reuse Model A; a partner may play the controller but is not necessary.

**Activity 1: build the cycle.** Shuffle these cards: new START, verify clean ACK/DONE and idle outputs, check READY, check PART_PRESENT, REQUEST ON, ACK received, DONE received before deadline, REPORT ON, REQUEST OFF, PLC clears START/ACK/DONE, REPORT OFF. Assume start and feedback stay valid through entry, both prerequisites stable, normal ACK before DONE. Arrange them. Mark missing-part and timeout exits on paper.
Hint: draw dependencies rather than guess one fixed order.
Key: START and valid entry before REQUEST; ready/presence checks may swap; clean feedback must be established when advancing. REQUEST → ACK → DONE → REPORT → release → PLC clear → report clear. Missing part: entry recheck without request; timeout: stop normal path and record latched fault, no REPORT. No automatic restart. Other orders meeting stated dependencies accepted.

**Activity 2: be the controller.** Read B3 outline one instruction at a time; write current step and seven signal values. Start at N0. First repeat N1 with missing part; then, in a separate active case, hold DONE OFF after ACK. 
Key: N1 remains entry; active case waits for DONE and reaches the model timeout if deadline arrives. Do not combine these into the same successful trace.

**Activity 3: draw the handshake.** Draw robot and PLC boxes; label all seven arrows and state what each ON means. Compare with B1 and state one difference between ACK, DONE and REPORT.
Key: START/READY/PART_PRESENT/ACK/DONE PLC→robot; REQUEST/REPORT robot→PLC. Acceptance, device completion report and job completion report are distinct.

**Activity 4: teach it back.** Explain Model C's false WAIT and already-true WAIT without reading the solution. Identify at least two facts missing from that code fragment.
Key: false condition blocks; already true permits level check to pass, not evidence of fresh completion. Other prerequisites, ACK, REPORT, reset, timeout, actual signal definitions and external logic omitted.
**Next-shift retrieval.** At the beginning of your next study session, take five minutes without notes: redraw the request and feedback exchange, explain why an output is not physical completion, and predict where a false WAIT stops. Compare with the lesson keys afterward. If your instructor has covered the guided extension, also explain both task starts and waits from memory, then check the source.

Evidence: keep four fictional artifacts. If a partner participates, swap roles; if alone, read the answer after each attempt and correct the trace. No real source needed for this activity.

## D3 — Solve a new problem independently
ID: practice | O1/O2/O4/O10 | independent

Do the exercises on paper before viewing the key. They deliberately change context from the inspection station.

A. Package label station: place the following in dependency order: (1) normal completion report, (2) package present check, (3) printer ready check, (4) print request, (5) printer-finished evidence. Assume a new order, clean feedback, stable independent checks, no other prerequisites in this model. Give two valid orders. If package presence remains OFF, write the entry response.
Hint: both checks precede the request, not necessarily each other.
Key: 2→3→4→5→1 or 3→2→4→5→1. Wait/recheck entry without issuing request. Actual machines may need other conditions.

B. The robot sends PRINT_REQUEST and JOB_COMPLETE; PLC sends PACKAGE_PRESENT and PRINTER_READY. Classify all four from both viewpoints. PRINT_REQUEST ON: what can be concluded?
Key: first two robot outputs/PLC inputs, last two robot inputs/PLC outputs. Request reported, not acceptance, physical printing or completion.

C. Unrelated fictional fixture example: a job checks fixture clear, begins approach, then checks fixture clear again. Explain the timing defect, whether the first condition remains valid and whether process-ready establishes a safety-rated authorization.
Key: second check cannot prevent the initial approach, first check does not establish continued validity, neither alone establishes safety-rated permission. Review applicable authorized design and safeguarding; no live test, bypass or motion suggested.

D. In another defective paper branch, a failed package check skips printing but a normal report follows the branch. Draw both paths and repair the paper logic.
Key: false path bypasses task yet reaches normal report; put normal report after successful required evidence inside the successful path, and specify missing-part recheck/stop without reporting success. No production implementation implied.
Evidence: explain dependencies, direction, timing and missing branch; correct any safety or completion misconception before proceeding.

## D4 — Read an unfamiliar fictional sequence
ID: transfer | O7/O8/O9 | independent

The following is a new paper-code reading task, not a full exported job. The model uses generic fictional signal addresses and normal synchronous CALL/END as taught in C3. Other logic excluded; output 71 initially OFF.

```text
DEMO_PACKAGE (example label)
NOP
WAIT IN#(70)=ON
DOUT OT#(71) ON
CALL JOB:DEMO_STATUS
DOUT OT#(71) OFF
END

DEMO_STATUS (example label)
NOP
WAIT IN#(72)=ON
END
```

For this task only, input 70 = prerequisite report, output 71 = request, input 72 = finished report. No ACK, reset handshake or timeout shown. These are not actual addresses.

**Worked start:** input 70 OFF, trace at first WAIT; output 71 remains OFF. That is an observation of the model, not proof of physical state.
**Independent trace:** Case 1 input 70 becomes ON and input 72 remains OFF. Case 2 input 72 already ON when caller reaches CALL and stays ON. Case 3 input 72 becomes ON later during the called wait. In each, name active job/instruction, output state and what can be established. Then identify two hypotheses for Case 1 and relevant evidence, and three things you would need to verify before comparing an actual cell.
Hint: follow the called job and normal return; don't invent a timeout or new edge requirement.
Key: Case 1 caller sets output ON, calls DEMO_STATUS, which waits; caller OFF line not reached. Case 2 called level wait already satisfied; normal END returns, output OFF then caller END; fresh completion not established. Case 3 same return path after later input ON; defined report received but physical completion still not independently proved. Possible unfinished process vs missing report path; consult authorized device history and signal mapping/diagnostics. Verify exact machine/controller/source revision, actual I/O meaning, call/wait behavior, other logic and fault paths. Any three relevant categories accepted. No real equipment action.
Evidence: unseen trace without solution first, separate observations/inferences/unknowns. Instructor should ask a fresh variation (e.g. first prerequisite remains false), not merely repeat this key.
Transfer limit: use the authoritative equipment mirror only in the restricted instructor-guided companion. Similar job names do not establish identical behavior across machines.

## D5 — Document evidence and explain your trace
ID: worksheet | O8/O9/O10 | independent fictional record; instructor reviews afterward

Use the D4 fictional case or a new classroom example. Do not enter company job names, production addresses, employee names or confidential observations on the public site. Actual equipment documentation belongs in the approved internal worksheet. Browser worksheet notes are temporary unless implementation explicitly provides approved storage; print or copy fictional work before leaving. No actual machine data needed.

**Worksheet prompts**
- Fictional scenario and assumed starting states:
- Entry and conditions:
- Normal instruction path and called job:
- Current wait / reported values / missing evidence:
- Alternate path and assumptions:
- Two hypotheses and evidence to distinguish:
- Unknowns and references to verify:
- Process vs safety boundary / what this exercise does not authorize:

**Worked miniature record:** D4 Case 1. Assume 70 ON, 72 OFF, output 71 initially OFF. Caller sets request, enters DEMO_STATUS; second job waits, output remains ON in trace. Completion unconfirmed. Device may be unfinished or status path missing; need approved history and mapping. No timeout shown, no physical state or safety permission established.
**Independent:** complete the worksheet for Case 2 or a new instructor-provided fictional trace, then explain it without notes.
Key criteria: correct current instruction and job, outputs and reported values; normal/abnormal paths distinguished; known facts separate from hypotheses; specific evidence sources; correct limits. Case 2 reaches caller END but does not establish fresh completion. The exercise author cannot certify practical competence.
Instructor review: observe an unfamiliar example; require correction of critical misunderstandings about waits, request/feedback, normal completion and process versus safety before approval. Formal rubric and scoring belong to WP4.

## Block D retrieval / stopping point
Without notes: explain observation vs hypothesis; identify what a late DONE changes and does not change; trace a call with a false wait; name two evidence sources; explain why process-ready alone does not authorize motion. Check against D1–D5. Next: core assessment and practical review. Module 02 will develop conditions, branches and loops after Module 01 acceptance. Parallel/structured INFORM is a guided extension, not a prerequisite for core mastery.

## Draft gate
Five IDs retained. Original troubleshooting, simulator, workshop, independent practice, field-notes and transfer intent mapped; four workshop methods preserved and extended. Draft aligns Model B and C assumptions, fictional worksheet privacy, full keys and critical misconceptions. Existing website simulator and worksheet not yet aligned; WP3 must implement and test. O1/O2/O3/O4/O5/O7/O8/O9/O10 supported. No actual learner result or technical approval. Next guided extension and glossary, then full WP2 desk check.
