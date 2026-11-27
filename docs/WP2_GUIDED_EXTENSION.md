# Module 01 / Guided extension and reference
WP2 draft. Core Blocks A–D first. This extension preserves original advanced examples but does not require a beginner to master variables, structured INFORM or multitasking before Module 2. Instructor guidance recommended; actual SCAR lab requires instructor authorization and restricted storage. All public examples fictional.

## X1 — Preview two tasks running concurrently
ID: parallel | X1
Sequential means one task completes before the next begins in this example. Concurrent tasks may overlap. A subtask is a separate execution task; a task-start instruction is not a completion report. Assume two independent fictional tasks A (4 time units) and B (3), zero startup overhead, no resource conflicts. No physical motion or actual cell coordination is modeled.

Worked comparison:
| Time | Sequential | Concurrent |
|---|---|---|
| 0 | Start A | Start A and B |
| 3 | A active | B finished, A active |
| 4 | A finishes; start B | A finishes; both finished |
| 7 | B finishes; both finished | Both already finished |

The idealized totals are 7 and 4 units. A master waiting for A and then B must pass both waits before reaching the following instruction, even if B finishes first. Actual overlap, subtask behavior and safety depend on controller options, assignments and equipment design; this is not a performance estimate.
Supported practice: if B takes 6 units instead, which task determines the overlapping duration? Key: B; 6 units under the stated assumptions.
Independent: draw sequential and concurrent timelines for tasks lasting 2 and 5 units. Mark where both waits are satisfied. Key: 7 sequential, 5 concurrent; both finished at those points. Explain why duration is not proof of safe simultaneous operation.
Evidence: compare execution patterns and identify three assumptions (independence, timing, no overhead/resource constraints).

## X2 — Preview contrasting master jobs
ID: compare | X1/X2
Introduce vocabulary before excerpts. A variable stores a value. Integer variables (I in the illustrated format) hold whole-number values; byte variables (B) are a different controller-defined type. Verify actual ranges, scope and controller rules later. SWITCH/CASE illustrates selecting a path based on a value; INC illustrates adding one; <> illustrates not equal. PSTART and PWAIT illustrate starting and waiting for a separate task with applicable independent-control functionality. CALL invokes a job in the normal caller model taught in C3. JUMP directs execution to a label when its condition is met. These are preliminary reading aids, not syntax mastery; exact operands, structured instruction forms and options require WP5 confirmation.

### Fictional excerpt A
```text
SWITCH I001 CASE 1
  PSTART JOB:DEMO_A SUB1
  PSTART JOB:DEMO_B SUB2
  PWAIT SUB1
  PWAIT SUB2
  INC I002
```
Assume this is the selected case and both subtasks finish normally. Trace: start A, start B, wait for SUB1, wait for SUB2, increment I002. Other cases and closing structure omitted. If B finishes first, the master still must pass both waits. We cannot know what I002 represents without initialization, writes and reads.

### Fictional excerpt B
```text
PSTART JOB:DEMO_C SUB1
PWAIT SUB1
PSTART JOB:DEMO_D SUB2
PWAIT SUB2
CALL JOB:DEMO_CHECK
```
Here the first wait precedes the second start. The check call follows both waits. The name DEMO_CHECK is not proof of a particular physical check.
Supported: underline starts, waits and subsequent instructions in both. Key: A permits overlapping tasks; B's second start follows the first wait.
Independent: draw a hypothetical trace where SUB2 finishes first in A; state which instruction must still be satisfied, and identify what must be inspected before assigning process meaning to I001 and I002. Key: master may still be at PWAIT SUB1; both waits before INC; inspect definitions/initialization, all writes/reads, selection cases, associated jobs and later uses.

### Conditional recheck preview
```text
IFTHEN B001<>42
  CALL JOB:DEMO_SETDOWN
  CALL JOB:DEMO_CHECK
  CALL JOB:DEMO_MESSAGE IF B001<>42
  JUMP *RECHECK IF B001<>42
ENDIF
```
Assume the initial comparison is true. The first two calls occur inside the branch. The later conditional instructions examine the value again. If B001 becomes 42 after the check, the message condition is false; if unchanged at the jump check, that condition is also false. If B001 remains different, the message is eligible. Inspect that job before assuming the value still differs at the subsequent jump. Separate evaluation points matter. The label and surrounding logic are omitted; no claim about physical setdown, the meaning of 42, or actual recovery. Exact exported syntax varies with controller/settings. YRC1000 INFORM section 1.7.4 documents different exported forms for structured expressions. Treat this fragment as a conceptual reading aid in a mirror-style notation, not a verified universal export template; the precise IFTHEN comparison form still needs confirmation on the applicable controller.

Independent task: draw three cases: initial value 42; initial different then check changes to 42; initial different, check leaves different, message changes to 42. Key: first skips branch; second executes first two calls but no conditional message/jump assuming unchanged; third executes message and then skips jump when comparison is false. Do not assume calls preserve variables.

### Restricted source investigation
Instructor selects approved exact source from authoritative equipment mirrors. Record machine/controller, repository, file/path, branch/blob or commit, header date separately from backup date, and applicability. Open the actual called/started jobs; trace one normal path and one abnormal path, find variable initialization/reads/writes, wait conditions, selection cases, target labels and exits. Mark unknowns, not guessed physical behavior. Compare with a verified distinct SCAR cell: initialization, selection, task coordination, signal handshake, completion and abnormal path. Record at least three evidenced differences where present; if not present record actual similarities and differences rather than invent them. Existing companion contains two same-cell examples; distinct-cell comparison and instructor source approval outstanding. Keep actual identifiers and source out of public repository. Later machine-family examples (Pinner, Dipping, AWG, ACF) require their own source context. No live changes or operation.
Guided evidence: correct timelines, separate conditional evaluations, source trace and limits. No advanced instruction mastery requirement in public core.

## Reference glossary
ID: glossary | reference, available at first use
| Term | Meaning in this course |
|---|---|
| Program/job/instruction | Ordered logic; named robot program; individual command |
| Condition/prerequisite | Statement checked; condition required before a dependent step |
| Sequence/branch/wait | Order; choose path; delay progression until defined condition/outcome |
| PLC/controller | Programmable logic controller; device executing its program |
| Sensor/actuator | Reports condition; performs physical action |
| Signal/input/output | Reported information; received/sent relative to named device |
| ON/OFF | Represented binary levels; meaning comes from signal definition |
| Request/ACK/DONE/REPORT | Ask; acceptance; inspection finished; job normal completion, in Model A only |
| Handshake/reset | Defined signal exchange; agreed return to initial state |
| Timeout/latch | Time-limit outcome; retained state pending defined clearing logic |
| Pseudocode/flowchart/trace | Readable logic; path diagram; current step and values |
| Header/comment | File information; explanation, not an executable check |
| CALL/return | Invoke named job; resume caller after normal return under applicable rules |
| Master/sub-job | Organizing program/called component; names do not prove role |
| I/O map/ladder/CIO | Signal assignments; PLC logic representation; Yaskawa concurrent I/O logic |
| Position/tool/frame/MOVJ | Taught data; tool context; coordinate reference; joint-interpolated motion preview |
| Process interlock/safety-rated function | Required process condition; separately engineered risk-reduction function |
| Teach/Play/Remote | Controller modes with controller-specific permissions; no operational instruction here |
| Recovery | Approved defined return to acceptable state after interruption; not an automatic retry |
| Variable/integer/byte | Stored value and preview data types; exact ranges/scope later |
| Subtask/concurrent | Separate execution task; potentially overlapping execution |
| Revision/observation/inference/hypothesis | Source version; observed fact; supported conclusion; possible explanation to investigate |

Use applicable Yaskawa INFORM manual, operator manual, header-field documentation, official command examples and independent/coordinated-control option manual. Match controller, application, software and options; contextual claim ledger and link verification belong to WP5. Do not treat a glossary as a syntax reference.

## Gate
Three remaining IDs accounted for; original parallel graph, SCAR patterns, glossary and restricted reading intent preserved. Existing advanced examples retained as guided preview with prerequisites and full keys; no proprietary code added. Actual source applicability, exact syntax, distinct-cell comparison, independent reviewer and pilot outstanding. No website changes or new application tests. Proceed to WP2 desk consistency check before integration.
