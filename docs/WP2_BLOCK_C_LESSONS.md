# Module 01 / Block C — Read INFORM without running a job
WP2 learner draft; prerequisites Blocks A and B. Approximately 25–35 minutes, provisional. Use paper or browser only. All code below is fictional and incomplete, not for loading, editing, teaching or running. Technical claims require WP5 controller-specific verification.

## C1 — Find the instructions in a job
ID: inform-preview | O6/O10 | independent

INFORM is Yaskawa's robot programming language. A job is a named program. When opening an exported job file, do not read every line as a command. A header identifies the file and its associated metadata; position records describe taught data; the instruction section contains the program instructions. An exported representation and the pendant's displayed instructions need not look identical.

**Worked reading example — selected fragments, not a complete job**
```text
/JOB
//NAME DEMO_INSPECT
...
//POS
...
//INST
...
NOP
END
```
The ellipses represent omitted records, not actual INFORM instructions. /JOB and //NAME identify the job file and name; //POS and //INST identify sections. NOP is a no-operation instruction; END marks the end of the job. A comment is a human-readable explanation, not an action. In the classic INFORM format, a single apostrophe introduces a comment; for example, `'Check intent` is a note, not a check. The double-slash header fields above are not ordinary executable-section comments. Do not assume a comment accurately describes the current code. Read the instructions as evidence.

Motion preview only: a pendant may show a line such as MOVJ VJ=25.00. MOVJ indicates joint-interpolated motion; VJ is a joint-speed percentage setting in this example. The taught position is omitted from this display fragment. Tool, coordinate frame (reference system), position, payload, path clearance and applicable speed limits must be established from the actual approved setup. The line alone tells you neither where the robot moves nor whether motion is authorized. No motion practice belongs in this module.

**Supported practice.** Classify //NAME DEMO_INSPECT, NOP, and the plain-English note “Wait for inspection finished.”
Hint: distinguish metadata, command and explanation.
Key: name metadata; executable no-operation instruction; explanation only (not an example of exact INFORM comment syntax).

**Independent practice.** A different export is labeled //NAME DEMO_LABEL. Its instruction fragment contains NOP and END. A note says “Verify package.” What do you know? What would you need to establish that a check really occurs?
Key: file names the job DEMO_LABEL; the shown instructions perform no operation and end the job. The note alone does not demonstrate any check. Obtain full applicable instruction section and called logic; confirm exact revision and context. No position or physical behavior can be inferred from this fragment.
Misconception: a job title or comment is an executable condition.
Evidence: distinguish metadata, instruction and explanation without relying on their English meanings.
References for WP5: YRC1000 INFORM Language, INFORM Header Fields, applicable operator manual; motion display example and exact export format pending claim-level check.

## C2 — Step through WAIT and DOUT
ID: trace-inform | O3/O4/O6 | independent

A WAIT checks the specified condition. In our simple level-check example, if the condition is not satisfied the next instruction is not reached. DOUT changes the specified logical output in this classroom trace. An operand is the part of an instruction that identifies its data, target or value. IN# and OT# refer to numbered signals in the illustrated formats. These addresses are fictional, not SCAR assignments.

Model C is a deliberately reduced example, not the complete inspection handshake from Block B. IN#(10) represents one start prerequisite report; OT#(20) is a request; IN#(11) is a finished report. ACK, other entry conditions, REPORT, reset handshake and timeout are omitted. Initial output is OFF; external logic is excluded. The YRC1000 INFORM manual also describes an optional WAIT time tag: expiry can advance execution even if the condition is false. A timed WAIT alone must not be interpreted as proof of completion or as an automatic fault latch. The separate timed classroom model in Block D is not that instruction's implementation.

```text
NOP
WAIT IN#(10)=ON
DOUT OT#(20) ON
WAIT IN#(11)=ON
DOUT OT#(20) OFF
END
```
**Worked trace.**
| Observation | Current instruction / outcome | OT#(20) |
|---|---|---|
| Initial inputs OFF | NOP then WAIT input 10 | OFF |
| Input 10 remains OFF | Still at first WAIT | OFF |
| Input 10 ON | First wait satisfied; next DOUT executes | ON |
| Input 11 remains OFF | Second WAIT blocks progress | ON |
| Input 11 ON | Second wait satisfied; next DOUT executes | OFF |
| END reached | Normal end of this fragment | OFF |

A different starting case: input 11 is already ON before the request. When the second WAIT is reached, the stated level condition is already satisfied. This is not evidence that a new inspection finished. Contrast Model A, which checks for unexpected prior-cycle feedback before issuing the request. Do not copy this excerpt as a production handshake.

**Supported practice.** First WAIT is satisfied, output ON has executed, input 11 OFF. Which instruction is current? Which output instruction has not been reached?
Key: WAIT IN#(11)=ON; DOUT OT#(20) OFF has not been reached. In this model output stays ON. No timeout shown.

**Independent practice — new numbers, same reasoning.**
```text
NOP
WAIT IN#(31)=ON
DOUT OT#(41) ON
WAIT IN#(32)=ON
DOUT OT#(41) OFF
END
```
Assume output OFF, input 31 ON. Trace two separate cases: (a) input 32 stays OFF, (b) input 32 was already ON at entry and remains ON. Identify the current instruction or exit, output state, and what the trace cannot prove.
Hint: test each WAIT at the point it is reached; don't invent a transition requirement.
Key: (a) first wait satisfied, output ON, blocked at second wait, OFF not reached. (b) both waits satisfied when encountered, output ON then OFF, END reached; no fresh completion event established. Neither case establishes physical output state, safe operation, actual signal mapping or behavior of other controller logic. No timeout is present.
Misconception: WAIT automatically clears outputs or requires a new rising edge in this simple level form.
Evidence: correctly trace both cases and explain why a true reported level may be old information.
References for WP5: YRC1000 INFORM Language DOUT and WAIT instruction sections; official MotoSim command examples. Verify exact operands and semantics against applicable documentation before release.

## C3 — Follow a called job and return
ID: reading | O7/O8/O9 | independent

A CALL invokes a named job. Think of temporarily leaving the caller to read the called instructions, then resuming at the caller's next instruction after normal return. The example below assumes ordinary synchronous CALL and normal END behavior, no jumps, alarms, aborts, other tasks or unusual return options. A master job may organize several sub-jobs, but names alone do not establish a hierarchy.

**Worked example — two separate instruction excerpts**
```text
DEMO_MAIN (label for this example)
NOP
CALL JOB:DEMO_CHECK
DOUT OT#(50) ON
END

DEMO_CHECK (label for this example)
NOP
WAIT IN#(51)=ON
END
```
The explanatory labels are not instructions. Assume output 50 starts OFF. The main job reaches CALL. The called job reaches its WAIT. While input 51 is OFF, the caller's output instruction has not been reached. Once input 51 is ON and the called job ends normally, control returns to the next main instruction and output 50 is set ON in this model. No claim about what input 51 physically means.

When reviewing actual source, record the exact machine, controller, job, file path, revision (specific source version), and embedded header date separately from backup date. Trace entry, initialization, calls, conditions, waits, normal exit and abnormal paths. Find where values are written and read. A name may help locate a job but does not establish what it does. An I/O map describes signal assignments; ladder logic is one representation of PLC logic; CIO is Yaskawa concurrent I/O logic. Use approved versions where applicable.

**Supported practice.** Input 51 is OFF and the caller has entered DEMO_CHECK. Is it correct to say that DEMO_MAIN completed the CALL?
Key: no. The called path is waiting; the caller's next instruction has not executed in this model.

**Independent practice.** A fictional caller requests a task (output 60 ON), calls DEMO_FINISH, then clears output 60 and ends. DEMO_FINISH contains a wait for input 61 ON and END. Draw the trace when input 61 stays OFF and when it later becomes ON. List three facts to verify before interpreting this on actual equipment.
Key: output 60 ON in both cases until normal return; while input 61 OFF, called job at WAIT, caller paused; when input ON, called job ends normally, caller resumes, clears output and ends. Need actual source/revision, signal meaning/ownership, applicable call/return behavior and abnormal paths, other writers or external logic. Any three relevant evidence categories accepted. No actual inspection or forcing.
Misconception: assuming a job named DEMO_FINISH proves that physical work finished.
Evidence: show caller → called wait → normal return → next caller instruction; separate observed instructions from assumptions.
References for WP5: CALL, END, NOP and WAIT sections and applicable job-format/return rules.

## Block C stopping point
Without looking: identify one header field; explain why a comment is not a check; trace a false WAIT and an already-true WAIT; draw a caller/called-job/return path. Check against C1–C3 keys. If the trace is unclear, repeat the independent example with new fictional numbers. No actual controller work.
## Draft gate
Three IDs retained; original INFORM preview, trace and job-reading content mapped. Adds minimal level-versus-event contrast and explicit caller-return reasoning. O3/O4/O6/O7/O8/O9/O10 supported. Exact syntax and controller behavior remain WP5 technical claims, not verified by this authoring step. No website change or new application tests. Next Block D.
