# Module 01 — WP1 learning architecture and fictional station specification
Date: 2026-11-25. Status: desk-level architecture candidate / HOLD. Prerequisite: WP0 design contract (982709c). Follow mandatory quality gate and E01–E20 revision plan. This is the authoring reference for WP2, not a robot/PLC implementation, safety design, approved operating sequence or technical signoff. No application edits in WP1.

## 1. Scope and teaching intent
Use a recurring fictional inspection station for the foundational route. The robot controller runs a classroom job requesting an inspection; a PLC coordinates an external inspection device and receives a part sensor's status. The robot does not perform physical motion in this model. The PLC handles the inspection device interface; the robot sees reported states rather than the raw physical sensor. Inspection result/pass/fail, device logic, communication faults, scanning, physical safeguarding, live recovery, actual timing, signal numbers and positions are outside the model. DONE means reported completion, not that a part passed inspection. READY is a process status, not a safety permission. Physical motion and approved machine operations remain outside classroom work. All public examples are fictional; actual SCAR source remains separate and instructor-guided. Contrast examples must be identified as different models, never silently change signal semantics.

## 2. Signal dictionary and viewpoint
Introduce only the signals needed in each lesson; add later signals after concepts are established. All listed signals are fictional binary levels. ON/OFF represent reported states, not proof of physical reality. For robot controller perspective:
| Signal | Sender | Receiver | Robot perspective | Meaning |
|---|---|---|---|---|
| START | PLC | robot | input | PLC requests a new classroom cycle; held through that cycle |
| READY | PLC | robot | input | PLC reports defined process-ready conditions |
| PART_PRESENT | PLC | robot | input | PLC reports part presence from its model sensor path |
| REQUEST | robot | PLC | output | Robot requests inspection |
| ACK | PLC | robot | input | PLC reports acceptance of this request, not completion |
| DONE | PLC | robot | input | PLC reports inspection finished, not quality/pass status |
| REPORT | robot | PLC | output | Robot reports its normal classroom job path completed |

Device-level signals deliberately unnamed. Robot input is PLC output and vice versa for this interface. No implication that all field devices connect through a PLC on actual equipment. Direction, reported meaning, sequence history and applicability are distinct questions.

## 3. Paper-model lifecycle
Model A = complete classroom story, not controller programming recipe. Each transition is a separate paper snapshot; order is illustrative and not measured scan timing. Conditions are sampled at the depicted decision. Use a clean initial example START=0, REQUEST=0, ACK=0, DONE=0, REPORT=0; READY and PART_PRESENT may be either. New START must be observed after the previous classroom cycle reset; START remains ON for this cycle until PLC reset. START alone does not imply READY or PART_PRESENT. Entry gate is START=1, READY=1, PART_PRESENT=1, ACK=0 and DONE=0, assuming the clean idle robot output state. Order of independent prerequisite observations is not uniquely required. If START=0, stay idle. When START=1 and ACK or DONE is already ON, stop the paper attempt as inconsistent initial feedback and record why; no request/report, no automatic restart. If START=1, feedback clear but READY or PART_PRESENT missing, wait/recheck entry prerequisites in this model; do not report success or treat that as a fault latch. Once conditions satisfied, proceed only in the paper trace. READY/PART changes during active inspection, lost ACK, communication failure and other combinations outside the described cases are not modeled; do not extrapolate behavior.

Normal story (0=OFF, 1=ON):
| Snapshot | START | READY | PART_PRESENT | REQUEST | ACK | DONE | REPORT | Meaning |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| N0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | Idle; no requested cycle |
| N1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | Wait/recheck: part not present |
| N2 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | Entry prerequisites satisfied |
| N3 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | Request issued; acceptance unknown |
| N4 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | Acknowledged; completion unknown |
| N5 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | Reported completion received before model deadline |
| N6 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | Report normal job completion in classroom model |
| N7 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | Request released, PLC observes release/report |
| N8 | 0 | 1 | 1 | 0 | 0 | 0 | 1 | PLC clears ACK/DONE/START in this model |
| N9 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | Robot report cleared; clean idle, next START required |

The reset portion is an illustrative agreement between actors, not a universal handshake. No automatic cycle merely because part remains present. Model A assumes PLC holds ACK and DONE as indicated until reset; if a signal drops unexpectedly the model has not specified a transition. N8 represents a single paper snapshot after PLC clear events, not a claim of atomic electrical behavior. A complete normal trace must include the separate evidence and reporting stages; neither ACK nor REQUEST permits claiming finished.

## 4. Separate abnormal cases and simplified teaching models
- A1: Missing READY or PART at entry. Hold in entry wait/recheck, no REQUEST/REPORT. If inputs become eligible and stale feedback remains clear, trace to request. If missing indefinitely, remain in this simplified entry wait; no timeout is defined there.
- A2: Request sent; ACK still OFF. No evidence of acceptance. Within timed model, missing ACK or DONE by deadline yields timeout. Do not claim device failure solely from this observation.
- A3: ACK ON, DONE OFF. Wait for defined completion evidence, not acknowledgement alone.
- A4: Pre-existing ACK or DONE before a new request: stop classroom attempt, record unexpected initial state, no normal completion or automatic retry. This is a chosen paper-model disposition, not an approved equipment recovery. 
- A5: Timed simulation (Model B, an explicitly scoped view of A3): clock starts when REQUEST becomes ON; ACK at 1 fictional second for all standard timing scenarios; DONE at 2 (early), never (missing) or 7 (late). Chosen timeout 3 or 5 seconds; completion must occur strictly before deadline; timeout takes precedence if simultaneous in this teaching model. Fault latch persists for observation through end of simulation. Late feedback changes DONE but does not clear latch or create REPORT. REQUEST is held in this graph solely for observing history, not a recommended fault-output behavior. Reset button resets the paper model, not equipment. Current website simulator has no ACK display; WP2/WP3 must align it or explicitly distinguish scope. Do not claim actual controller time resolution or priority rules.
- Model C: Minimal INFORM trace, deliberately incomplete and not a complete implementation of A or B. Map IN#(10) to a fictional start prerequisite indication, OT#(20) to REQUEST and IN#(11) to DONE ONLY for this teaching excerpt; no actual I/O map. Other prerequisites, ACK, REPORT, clearing and timeout are omitted; initial OT#(20)=OFF is stipulated. NOP, WAIT IN#(10)=ON, DOUT OT#(20) ON, WAIT IN#(11)=ON, DOUT OT#(20) OFF, END. If input 11 OFF the trace stays at WAIT and output OFF instruction is not reached. If input 11 already ON when WAIT is reached, the simple level check is satisfied; that is not evidence of fresh completion. This differs intentionally from A's entry check. Verify exact syntax and level semantics in WP5, teach as a scoped preview until verified. External logic and physical outputs not inferred. 
- Model D: Missing branch exercise, a defective fictional pseudocode excerpt. False IF skips the task and a report after ENDIF is still reached. Compare with Model A's intended normal path and missing-part wait/recheck; show complete possible classroom answer without presenting a production fix.
- Transfer examples: a different fictional task or station with its own stated actors and signal meanings; learner identifies what changes, not blindly applies A. Parallel examples remain explicitly independent-task conceptual extensions. Actual SCAR internal lab uses source evidence, not assumed A mapping.

## 5. Prerequisite-ordered route (22 existing lesson IDs retained)
All prerequisites below must precede the dependent lesson. IDs remain stable for comparison, not a promise of unchanged review completion after revision. Navigation and content changes occur in WP2/WP3. Core assessment follows worksheet; glossary is available at first use and throughout; extension follows core and is not required for public core mastery.
| Order | ID | Learner-facing title proposal | Requires | Outcomes / key introduction | Scope |
|---|---|---|---|---|---|
| 1 | objectives | What you will learn and how to practice | none | O1–O10; entry diagnostic, scope | A |
| 2 | mental-model | Break a task into steps | objectives | O1; program/job/instruction, actions, conditions | A |
| 3 | sequence | Put instructions in the right order | mental-model | O1/O3; sequence, prerequisite, causal order | A |
| 4 | roles | Who does what in the station? | mental-model | O2; PLC, robot controller, sensor, actuator/device | A |
| 5 | signals | Read signals from the right perspective | roles, sequence | O2/O3; signal, input/output, ON/OFF, request/status, reported state | A |
| 6 | order | Know what must be true before advancing | sequence, signals | O1/O10; process vs safety-rated, condition values | A |
| 7 | machine-example | Meet the inspection cycle | signals, order | O1/O2/O5; actors and initial conditions, ACK/DONE/REPORT, handshake/reset | B |
| 8 | logic | Waiting is not choosing | machine-example | O4/O5; true/false, IF/ELSE, simple wait, recheck, flowchart | B |
| 9 | pseudocode | Write what the station should do | logic | O5; pseudocode, indentation, worked/faded/independent | B |
| 10 | walkthrough | Follow the normal cycle | pseudocode | O3/O4; state snapshot and full handshake | B |
| 11 | trace | Trace a different outcome | walkthrough | O3/O4/O8; current instruction, separate abnormal traces, stale reported state | B |
| 12 | inform-preview | Find the instructions in a job | trace | O6/O10; header, comment, NOP/END, excerpt vs job; MOVJ only conceptual preview | C |
| 13 | trace-inform | Step through WAIT and DOUT | inform-preview, logic | O3/O4/O6; operands, level vs event, simulated trace | C |
| 14 | reading | Follow a called job and return | trace-inform | O7/O8/O9; CALL, normal return, revision, source evidence | C |
| 15 | fault | Explain why a sequence is waiting | trace, trace-inform, reading | O3/O8/O10; observation/inference, timeout, latch, diagnostics as sources | D |
| 16 | desk | Practice the reasoning away from the machine | fault | O1/O2/O4/O5/O9; complete desk cards, causal ordering | D |
| 17 | practice | Solve a new problem independently | desk | O1/O2/O4/O10; application, complete solutions, retrieval | D |
| 18 | transfer | Read an unfamiliar fictional sequence | practice, reading | O7/O8/O9; source limits, exact context; real lab separate | D |
| 19 | worksheet | Document evidence and explain your trace | transfer | O8/O9/O10; fictional worksheet, teach-back | D |
| 20 | parallel | Preview two tasks running concurrently | worksheet | X1; conceptual sequential/parallel, no motion coordination claim | X |
| 21 | compare | Preview contrasting master jobs | parallel, reading | X1/X2; guided legend for variable, integer, byte, subtask, comparisons, increment, selection and conditional re-evaluation | X |
| reference | glossary | Words and references you need | none | O1–O10/X1/X2; inline first-use definitions and reference drawer | R |

Boundary rule: core teaches simple decisions and waits by reading and tracing, not full Boolean algebra/loop syntax (Module 2); basic INFORM reading, not executable .JBI creation (Module 3); variables and calculations only guided preview (Module 4); signals as reported states, not address programming/timing implementation (Module 5); motion concepts only (Module 6); CALL/normal return preview, not argument/scope mastery (Module 7); structured syntax/concurrency preview (Module 8); real machine application in approved guided companion and Module 9. Course capstone follows prerequisites. Do not silently move required reasoning into optional material.

## 6. Session structure and evidence
Time estimates are hypotheses to measure in WP6, not a claim of completed student performance. Provide clear stopping points in interface and guide. Independent portions do not require trainer attendance; exercises use paper or fictional browser data. No live observations without instructor approval.
| Block | Route | Estimated independent time | Exit retrieval / artifact |
|---|---|---|---|
| A | 1–6 | 20–25 min | Explain instruction/condition; classify two directional signals and distinguish process-ready from safety permission |
| B | 7–11 | 25–30 min | Draw simple handshake; trace missing-part path and show current state; write one normal/abnormal pseudocode answer |
| C | 12–14 | 25–35 min | Annotate new excerpt, trace wait with false and already-true input, follow a caller-return example |
| D | 15–19 | 30–45 min | Diagnose paper symptom, explain alternate hypothesis/evidence, independent transfer worksheet; do not reveal key until attempted |
| Assessment | core O1–O10 | 15–25 min proposed | scenario questions plus independent reasoning evidence; actual practical acceptance observed separately |
| X | 20–21 | guided, variable | conceptual parallel timeline and guided source-reading extension; no mandatory syntax mastery |
| Internal | approved SCAR lab | instructor determines | actual source evidence and distinct-cell comparison, restricted record |

First available hour: A+B if pace allows (45–55 min study plus short retrieval/break), or stop after A; do not rush or require full module in an hour. Next session begins with brief recall of prior block before C. D may need its own block. Assessment follows independent practice; if the learner cannot explain the model, return to the appropriate concept and retry with a different example. Instructor-led teach-back checks O1–O10 using observable criteria. Next shift: redraw signal exchange and trace a missing/stale feedback case from memory. Actual session lengths, error patterns and needed assistance recorded during pilot.

## 7. Objective/coverage and first-use check
WP0 objective matrix remains the controlling assessment design. Core route covers O1–O10; X1/X2 mapped only to guided extension. Every original section has a retention target in WP0; this architecture retains all 22 current IDs and keeps original parallel/SCAR material accessible. Reference/glossary at point of need, not a terminal memorization lesson. WP2 must define terms before first actual use (e.g., avoid using PLC before lesson 4 unless immediately defined; explain timeout/latch before timed trace, teach variables before advanced snippet). Keep labels consistent and use alternate examples for transfer, not unexplained switching. Safety/read-only boundaries visible from orientation and reinforced contextually.

## 8. Desk validation and disposition
Executed design-only JS checks against current module01.ts IDs: 22/22 IDs mapped without duplicates; all 28 explicit prerequisite edges lead from earlier to later entries. Enumerated 32 combinations of START, READY, PART_PRESENT, ACK and DONE (clean idle outputs assumed): exactly one eligible entry combination. Checked ten paper-timing combinations (timeouts 3/5; DONE at 2/3/5/7/never, ACK at 1): confirmed only before deadline; fault latched at/after deadline and did not revert. These checks establish consistency of the specified subsets, not full controller correctness, actual website implementation, scan behavior or all possible fault/reset transitions. Normal trace/reset manually specified; actual implementation and automated transition tests belong to WP2/WP3, technical claim verification WP5. 
WP1 desk-level exit: architecture, scope, signal ownership, initial/reset/normal/abnormal assumptions, prerequisite graph, objective map and proposed session route documented. E01/E02/E04/E10/E14/E18 have design evidence only; all 20 findings remain open until implementation and verification. No new application tests run in this work package. No application code changed. Technical/instructor and novice-pilot review remain outstanding. Proceed to WP2 content redevelopment in ordered blocks A–D, then extension. First deliverable: Block A complete lessons with worked, supported and independent practice, hints and reasoned solutions; do not modify simulations or quiz first. Module 01 HOLD; Module 02 blocked.
