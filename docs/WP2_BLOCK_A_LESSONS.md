# Module 01 / Block A — Programming foundations
Learner draft, WP2. Six lessons, in prerequisite order. Allow 22–29 minutes as a provisional estimate; use the stopping point and do not rush. Actual duration to be measured. Paper/browser only; examples are fictional. Answer guides are for self-check after attempting the task. The source notes are author/reviewer metadata, not part of the learner reading route.

## A1 — What you will learn and how to practice
ID: objectives | O1–O10 | prerequisites: none | independent, 2–3 min (estimate)

You do not need to know INFORM yet. Imagine opening a robot job and finding that the machine has stopped halfway through a cycle. Before changing anything, you need to know what the job is trying to do, what it is waiting for, and what you can actually establish from the information in front of you. That is what this module teaches.

By the end you should be able to break a task into steps, identify who sends and receives information, explain the difference between a request and a completed action, trace a decision or wait, write a plain-language plan, read a short INFORM excerpt, follow a called job, investigate a stopped sequence, and apply the method to an unfamiliar example. You should also know where classroom reasoning ends and authorized equipment work begins.

This module does not teach you to jog a robot, teach positions, force signals, edit or transfer jobs, run equipment or bypass faults. Study away from the machine; actual equipment observation is instructor-approved and read-only. Do not put private production details into public exercises. A completed reading checklist is not qualification to operate equipment.

**Worked example — how to study.** Someone asks for a document to be printed. They have asked for an action, but you have not yet seen the printed page. Predict what would happen if the printer had no paper, then look at the explanation: the requested action and its result are different facts. The purpose of prediction is to make your own reasoning visible, not to guess the right answer immediately.

**Try it with help.** Complete: “I asked for a document to be printed. I know ___, but I do not yet know ___.”
- Hint: separate the request from the outcome.
- Check: I know a request was made; I do not know whether a page was printed. A printer status may provide more evidence, but is itself a report.

**Before continuing — entry diagnostic (not graded).** On paper, describe making a cup of tea in three or four steps. What would stop you from reaching the last step? If you have never written a sequence, start with the goal and one thing that must happen first.
- Example answer: prepare cup and tea, obtain hot water, add water, allow tea to steep. Missing hot water prevents the planned method from progressing. Other valid sequences are fine; no practical task needs to be performed.
- Common mistake: treating a request as proof of a result or treating this diagnostic as an exam. It is only a starting point.
- Evidence: keep your short sequence to compare against the one you write at the end of Block A.
- Next: break a familiar task into individual instructions.

Author notes: scope and safety from WP0 contract; no controller-specific behavioral claims. Map original objectives. Do not promise a full module in one hour.

## A2 — Break a task into steps
ID: mental-model | O1 | prerequisites: objectives | independent, 3–4 min (estimate)

A controller is the device that carries out programmed instructions. A program describes what that controller is meant to do. A robot job is a named robot program. An instruction is one command within that program. In plain language, “place the document in the tray” describes an action. “Is the tray empty?” describes a condition: a statement that can be satisfied or not satisfied at the point you check it. The condition supplies information; it does not make the tray empty.

Think about making a sandwich. “Put the filling on the bread” and “place the sandwich in the bag” are both valid instructions, but the goal determines which goes first. A robot job has the same basic problem of expressing the intended order and deciding when to advance. Unlike a sandwich, real equipment involves separate devices and risks, which is why our examples stay on paper.

**Worked example — fictional inspection station, first pass.** The goal is to request an inspection of a part and report when the assigned work is finished. No physical robot motion is represented. Before writing commands, answer six questions:
| Question | Example answer |
|---|---|
| What starts the cycle? | A new cycle request. |
| What must already be ready? | The defined process-ready condition and reported part presence. |
| What action happens next? | Ask the inspection system to inspect. |
| How do we know it finished? | Receive the defined completion report for this cycle. |
| What if that evidence does not arrive? | The normal path cannot claim completion; this lesson leaves the detailed response unspecified. |
| What tells the rest of the station? | The job sends its own normal-completion report. |

Notice that the request is an action, the reported completion is information, and the job's final report is another action. The details of the exchange come in Block B. You do not need to know signal numbers or robot syntax yet.

**Supported practice.** For the same station, classify “part present?”, “request inspection” and “report job complete” as condition or action.
- Hint: does the phrase ask for information or describe something the program does?
- Check: the first is a condition; the next two are actions.

**Independent practice — different task.** A fictional label station receives an order, checks that a package is present, requests printing and receives a printer-finished status. Write answers to the six questions. What fact is still missing if the printer has only accepted the request?
- Hint: use the six-question table, not robot syntax.
- Example solution: order starts cycle; package present is a prerequisite; request printing; obtain finished status for this cycle; if it is absent, don't claim normal completion and identify the unspecified abnormal response; send the station's completion report only after the required evidence. Acceptance alone does not show printing finished or that the label is correct.
- Common mistake: “check package present” is not the same action as making a package appear. Checking a condition does not change it.
- Evidence: your six answers must identify separate start, prerequisite, action, confirmation, missing-evidence response and completion reporting.
- Next: decide which steps depend on which others.

Author notes: original mental-model retained, including sandwich analogy and six questions. Transfer model explicitly different; no assumed production sequence.

## A3 — Put instructions in the right order
ID: sequence | O1/O3 | prerequisites: mental-model | independent, 3–4 min (estimate)

A sequence is an ordered set of steps. A prerequisite is a condition or step that must be satisfied before something that depends on it. When arranging steps, ask “What would become incorrect if these two were reversed?” Some steps have a required relative order; other checks may be independent.

**Worked example — inspection station.** For this short slice of the fictional station, assume a new cycle has been requested, the previous cycle is clear and the process-ready and part-presence reports are stable while we examine entry. The full entry/reset story comes in Block B.

| Step | Why it belongs here |
|---|---|
| Check process ready | Required before requesting inspection. |
| Check reported part presence | Also required before requesting inspection. |
| Request inspection | Only after both prerequisite checks are satisfied. |
| Obtain defined completion evidence for this cycle | Sending the request does not establish completion. |
| Report normal job completion | Only after the required evidence. |

The first two checks may be reversed under these stated assumptions. The inspection request cannot move ahead of either. “Report normal completion” cannot move ahead of the completion evidence. Real machines may need additional conditions and monitoring. Instruction execution order does not necessarily equal physical action completion order; later modules examine instructions and options that can overlap.

**Supported practice.** A learner writes “request inspection, check part presence, obtain completion evidence, report completion.” What prerequisite is missing altogether, and what instruction is too early?
- Hint: compare against both prerequisite checks in the table.
- Check: process-ready check is missing, and request inspection must come after both prerequisite checks.

**Independent practice.** A separate fictional label station has a job request, printer-ready and package-present checks (both stable and required at entry), print request, print-finished evidence and normal completion report. Write one valid sequence and a second valid sequence, changing only the order of independent checks. What goes wrong if you move the report before print-finished evidence?
- Hint: draw arrows from each prerequisite to the action that depends on it.
- Example solution: job request → printer ready → package present → print request → print-finished evidence → report. Another valid answer swaps the two checks. Reporting before finished evidence can falsely claim normal completion. Any answer satisfying all stated ordering constraints is valid; no motion authorization follows from these checks.
- Common mistake: treating a correct instruction anywhere in a list as sufficient. Its position relative to dependencies matters.
- Evidence: identify both prerequisite dependencies and the completion dependency; explain why the two independent checks can change order here.
- Next: identify the devices responsible for the information.

Author notes: maps original sequence/order; original arbitrary order key corrected through explicit constraints, no physical execution. E07 addressed in draft only.

## A4 — Who does what in the station?
ID: roles | O2 | prerequisites: mental-model | independent, 3–4 min (estimate)

A robot controller runs robot jobs and controls the robot. A programmable logic controller (PLC) is a controller often used to coordinate equipment. A sensor reports a condition, such as part presence. An actuator is a device that performs a physical action. An inspection device may perform a separate measurement and provide a status or result. In our classroom station, the robot job asks for an inspection, the PLC coordinates it, and a separate inspection device performs it. The PLC receives the part sensor's reported state. We do not model robot motion.

**Worked example — follow the information.**
| From | To | Information |
|---|---|---|
| Part sensor | PLC | Reported part presence |
| Robot controller | PLC | Inspection request |
| PLC | Inspection device | Device-level request (unnamed in this model) |
| Inspection device | PLC | Reported inspection status |
| PLC | Robot controller | Reported inspection status |

The PLC is an intermediary in this example. The robot controller does not necessarily see the raw sensor directly. Another cell might connect devices differently. For an unfamiliar machine, actual program files, electrical drawings and signal documentation establish the real responsibilities. You cannot infer them just from a similar machine's layout.

**Supported practice.** If the robot has asked for an inspection but has not received a completion report, which device sends the reported status back to the robot in this model?
- Hint: follow the last row in the table.
- Check: the PLC. The inspection device supplies status to the PLC; the PLC reports it to the robot.

**Independent practice — contrast.** In another fictional station, a temperature sensor reports directly to a local controller, which sends a ready status to a robot controller. Draw two arrows showing where information travels. Does a ready status establish the actual measured temperature?
- Hint: distinguish the measured value from a summary status.
- Example solution: sensor → local controller → robot controller. Ready is a reported status defined by that design; it is not necessarily the temperature value or proof that the physical condition matches the report. The documentation would establish how ready is derived.
- Common mistake: assuming every field sensor is directly wired to the robot or that every machine assigns the same decisions to the PLC.
- Evidence: name the three actors, both information directions and at least one source needed to verify a real architecture.
- Next: learn the words input and output from each device's point of view.

Author notes: retain original robot/PLC/device roles and field example; generic controller architecture, exact Yaskawa concurrent I/O and real machine configurations reserved for later contextual reference.

## A5 — Read signals from the right perspective
ID: signals | O2/O3 | prerequisites: roles, sequence | independent, 4–5 min (estimate)

A signal carries information between devices or within a control system. An input is information received by the device you are discussing; an output is information sent by it. In this lesson we use binary signals: only two represented states, ON and OFF (also written 1 and 0 in our classroom tables). Their meaning comes from the signal definition, not from the number alone.

A request is information asking for an action. Feedback is reported information about a response or condition. An output can be a request, but can also be a status or completion report. An input can be a command from another device as well as feedback. These are different classifications: direction tells you where information travels; meaning tells you what that information represents.

**Worked example — four signals from our fictional station.** Additional acknowledgement, completion and report names will be introduced together in Block B.
| Signal | Sender → receiver | Robot viewpoint | ON means in this model |
|---|---|---|---|
| START | PLC → robot | input | New cycle requested (held through the cycle) |
| READY | PLC → robot | input | Defined process prerequisites reported ready |
| PART_PRESENT | PLC → robot | input | Part presence reported |
| REQUEST | robot → PLC | output | Inspection requested |

From the PLC's viewpoint, REQUEST is an input, while START, READY and PART_PRESENT are outputs. The same exchange can have different direction labels at its two ends.

If REQUEST is ON, the robot has sent its defined request. It has not established that the PLC accepted it, that the inspection device acted, or that the work finished. If PART_PRESENT is ON, we know that presence is reported. We do not automatically know that the physical part is present. A real investigation may require approved evidence from other sources. Do not create a fault or force an input to test this.

**Supported practice.** READY is ON and REQUEST is OFF. Complete: READY is an ___ to the robot; REQUEST is an ___ from the robot; inspection is not yet requested in this snapshot.
- Hint: trace arrows from the robot's perspective.
- Check: input; output. READY alone does not establish a cycle request or task completion.

**Independent practice — new label station.** In this fictional design the robot sends PRINT_REQUEST and JOB_COMPLETE to the PLC. The PLC sends PACKAGE_PRESENT and PRINTER_READY to the robot. Classify all four from both devices' viewpoints. PRINT_REQUEST is ON but no other evidence is supplied: what can you conclude, and what remains unknown?
- Hint: write sender, receiver and meaning in three separate columns.
- Solution: PRINT_REQUEST and JOB_COMPLETE are robot outputs/PLC inputs; PACKAGE_PRESENT and PRINTER_READY are robot inputs/PLC outputs. ON for PRINT_REQUEST reports a request, not printer acceptance or physical completion. Need defined status, signal history and relevant source to establish the rest. Do not equate ON with truth of an unverified physical condition.
- Common mistake: assigning direction according to which device performs the work, or assuming every output makes something move. JOB_COMPLETE is a status output.
- Evidence: correct four directions from both viewpoints; explain the request/feedback distinction with one concrete example.
- Next: use signal values to decide whether a step may advance in the paper model.

Author notes: generic I/O concepts, no real addresses, polarity or wiring assumptions. Maps original signals-and-roles and practice classification. E18 has draft evidence; verify first-use definitions and transfer key.

## A6 — Know what must be true before advancing
ID: order | O1/O10 | prerequisites: sequence, signals | independent, 4–5 min (estimate)

A condition is evaluated using the information available at the point where it is checked. A statement about a reported signal is true when the reported value matches the condition being checked; otherwise it is false. This does not independently establish the physical state. For example, if READY is OFF, the statement “READY is ON” is false. Checking that statement does not change the signal.

A process interlock is a required process condition that controls whether a dependent step may proceed. A safety-rated function is a separately engineered function designed to reduce risk. A normal process-ready signal is not, by itself, a safety-rated permission to move. Our classroom station has no physical motion in its model. Actual equipment work requires authorization, site procedures, and the applicable safety architecture and documentation.

**Worked example — a narrow entry decision.** Assume a new cycle request is present, prior-cycle feedback is clear, and robot outputs are in the stated idle condition. We are examining only two remaining prerequisite checks in this fictional inspection station. These checks must both be satisfied before requesting inspection. Block B will give the complete entry conditions.

| READY | PART_PRESENT | Both required conditions met? | Model response |
|---|---|---|---|
| OFF | OFF | No | Wait/recheck; no request |
| OFF | ON | No | Wait/recheck; no request |
| ON | OFF | No | Wait/recheck; no request |
| ON | ON | Yes | Entry checks satisfied in this slice |

This table does not establish a universal real-machine interlock. It shows why looking at one favorable signal is insufficient when two conditions are required. In the missing-part case, the paper model remains at entry and rechecks; it does not claim success or create an automatic fault. We will distinguish waiting from choosing a path in the next block.

**Supported practice.** READY is ON but PART_PRESENT is OFF. Which statement is true? Which is false? Can the two-check slice proceed?
- Hint: test each statement against the reported value.
- Check: “READY is ON” true; “PART_PRESENT is ON” false; entry checks not both satisfied. Request must not be issued in this model.

**Independent practice — prerequisite timing and safety.** An unrelated fictional fixture example checks fixture clear, starts an approach, then checks fixture clear again. Explain what the second check cannot prevent. Does the first check prove the fixture will stay clear? Does either check alone establish a safety-rated authorization?
- Hint: distinguish what is evaluated before the action, what can change afterward, and what is outside the program excerpt.
- Solution: the second check occurs after approach began and cannot prevent that initial approach. A first true condition does not establish that the state remains true. Neither process check by itself establishes a safety-rated authorization. Examine approved design, monitoring and safety functions with an authorized instructor; no live test or bypass proposed. Any equivalent explanation distinguishing timing, change of state and safety is valid.
- Common mistake: “the signal was ON, so the robot can safely move.” A process state is not sufficient evidence of that.
- Evidence: explain all three distinctions aloud or in writing before moving on.
- Next: Block B builds the complete inspection-cycle story, with acceptance, completion and reset.

Author notes: retains original incorrect-order/clamp scenario intent and fixture-clear practice, uses clearly labeled contrast rather than implying motion in the recurring station. Safety-critical; instructor/technical review required.

## Block A — stop and retrieve (without looking first)
Suggested 2–3 minutes in addition to lesson estimates; stop here if needed. Write or say:
1. One instruction and one condition for the inspection station.
2. Two arrows: PLC → robot (START) and robot → PLC (REQUEST). Which are input/output from the robot viewpoint?
3. If READY is ON and PART_PRESENT OFF, what does the paper model do (assuming the other entry conditions are satisfied)?
4. What does REQUEST ON establish? What does it not establish?
5. Why does process-ready not authorize physical motion by itself?

Check after answering: 1 request inspection vs reported part-present condition; 2 START input, REQUEST output; 3 wait/recheck no request; 4 defined request, not acceptance or completion; 5 separate safety-rated functions and approved procedures are required, a process status alone is insufficient. If one is unclear, revisit the relevant lesson and solve its transfer example again; do not memorize this key. Save fictional notes on paper; no actual equipment data needed.

## Author coverage and draft gate
Six IDs retained: objectives, mental-model, sequence, roles, signals, order. O1/O2/O3/O10 taught at introductory depth; O4–O9 orientation only until later blocks. Each lesson has explanation, worked example, supported task, independent task or non-graded diagnostic, hint, complete key, misconception, evidence and next step. Original objectives, mental model, six questions, order, signal/role and prerequisite safety material explicitly retained. Advanced and full handshake details intentionally deferred to specified later lessons, not deleted. Original full parity, actual learner timing, technical reviewer confirmation and independent reviewer signoff remain pending. The initial WP1 20–25 min block estimate may be optimistic: per-lesson estimates plus retrieval total 21–28 min (2–3 + 3–4 + 3–4 + 3–4 + 4–5 + 4–5 + 2–3); allow approximately 22–29 min provisionally until WP6 pilot. No app integration or test execution in this content draft. All E01–E20 remain open; draft evidence E02/E03/E07/E10/E11/E15/E18. Next WP2 Block B, preserve original coverage and this signal dictionary.
