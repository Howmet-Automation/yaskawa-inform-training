# Module 01 / Block B — Follow the inspection cycle
WP2 learner draft. Prerequisite: Block A. Allow roughly 30–40 minutes provisionally; stop after any lesson. Model A from WP1 controls all examples. Paper/browser only. No production signal assignments or equipment operation.

## B1 — Meet the inspection cycle
ID: machine-example | O1/O2/O5 | independent

An inspection request and its completion report are two different messages. Imagine the robot job asking the PLC to arrange an inspection. The PLC exchanges information with a separate inspection device. There is no robot motion in this model. A handshake is the agreed exchange of signals; reset is the defined return to the initial state before another cycle.

Recall START, READY, PART_PRESENT and REQUEST from Block A. Add three signals:
| Signal | Direction at robot | Meaning when ON |
|---|---|---|
| ACK | Input from PLC | This inspection request has been accepted |
| DONE | Input from PLC | Inspection finished; not a pass result |
| REPORT | Output to PLC | Robot job's normal classroom path completed |

The initial robot outputs REQUEST and REPORT are OFF. Previous ACK and DONE must be OFF, and START must be newly observed after the previous reset. READY and PART_PRESENT are process reports, not safety permissions.

**Worked example.** START, READY and PART_PRESENT become ON while ACK and DONE are OFF. The job requests inspection. ACK arrives first: the request was accepted, but work is not yet reported finished. DONE arrives before the model deadline: the job may report normal completion under these assumptions. The job clears REQUEST, the PLC clears ACK/DONE/START, and the job clears REPORT. A new START is needed for another cycle. This is one fictional agreement, not a universal handshake.

**Supported practice.** REQUEST=1, ACK=1, DONE=0. Fill in: the request is ___; the work is ___.
Hint: separate acceptance and completion.
Answer: accepted according to the report; completion is not yet established.

**Independent practice.** All three entry prerequisites are ON, but DONE is already ON before REQUEST. Should you trace the normal cycle? What evidence is missing?
Answer: no. Stop this paper attempt and record inconsistent initial feedback. The ON level is not evidence of completion for a request not yet issued. The model defines no automatic recovery. On real equipment obtain authorized documentation and evidence; do not force or clear signals.

Common mistake: treating DONE as inspection pass. The signal definition only says finished.
Evidence: explain the seven signal meanings and why reset matters.
Next: distinguish waiting and selecting a path.

## B2 — Waiting is not choosing
ID: logic | O4/O5 | independent

A branch chooses between paths based on a condition. A wait prevents progress until a specified condition or defined alternate outcome occurs. A flowchart is a diagram of steps and their connections. A decision can be drawn as a diamond with separate labeled outcomes. A wait can be drawn with a return arrow showing that the condition is checked again.

**Worked example.** In the clean idle inspection model, START is ON, feedback is clear, READY is ON and PART_PRESENT is OFF. The missing prerequisite means stay in entry wait/recheck. If presence is later reported, check the entry conditions again before advancing. There is no entry timeout in this model. Compare a deliberately broken branch:
```text
IF part present
    Request task
    Wait for completion
ENDIF
Report complete
```
If part is absent, the indented body is skipped; the report is still reached. ENDIF closes the branch, not the job. This is defective pseudocode, not INFORM or a machine fix.

**Supported practice.** Draw the YES arrow through request and wait. Draw the NO arrow around both. Where do they join?
Answer: at the report. This explains the false completion.

**Independent practice.** A fictional label job checks PACKAGE_PRESENT. If absent, it should remain at entry. If present, it may request printing and wait for finished status. Draw a flowchart with both paths, including the recheck and normal report.
Hint: the absent path must not connect directly to normal completion.
Answer: entry → package present? NO → entry recheck; YES → request → wait for finished evidence → report. Assume other prerequisites met, clean feedback, and no timeout in this separate example. If finished remains false, the wait does not advance.
Common mistake: assuming every false condition causes a fault. Behavior depends on the defined path.
Evidence: trace both branches and identify where the wait blocks.

## B3 — Write what the station should do
ID: pseudocode | O5 | independent

Pseudocode expresses intended logic in readable words before choosing controller syntax. Indentation shows which actions belong to a path. It does not run on a robot. A timeout is a defined time-limit outcome; a latched fault persists until defined clearing logic. The following paper model does not specify real equipment recovery.

**Worked example — full Model A outline.**
```text
Start from clean idle outputs
Wait for new START
If ACK or DONE already ON:
    Stop this paper attempt and record unexpected feedback
Otherwise:
    Recheck entry until READY and PART_PRESENT are ON
    While rechecking, stop if ACK or DONE becomes unexpectedly ON
    If START drops before request, stop this trace as outside the model
    Set REQUEST ON when all entry conditions are met
    Wait for ACK and DONE before the model deadline
    If deadline reached first:
        Record latched fault; stop normal path
    Otherwise:
        Set REPORT ON
        Set REQUEST OFF
        Wait for PLC to clear START, ACK and DONE
        Set REPORT OFF
        Return to clean idle
```
The deadline starts with REQUEST in this lesson. The model assumes signals stay as defined during the active cycle. Unexpected active signal changes and actual reset/fault-output behavior are outside scope. On fault, no normal REPORT is issued. There is no automatic retry or physical action implied. If START drops during entry, this trace stops as outside the specified model; no equipment response or reset is inferred.

**Supported practice.** Complete the successful path after DONE: set ___ ON; set ___ OFF; wait for ___; clear ___.
Answer: REPORT; REQUEST; START/ACK/DONE clear; REPORT. Keep normal reporting separate from reset.

**Independent practice.** A different paper station requests a document scan. A scan-ready and document-present report must both be true; accepted and finished reports start OFF. Write the normal path and a missing-finished response, with explicit assumptions about reset.
Hint: use the six process questions; don't copy robot syntax.
Answer example: wait for new order and clean feedback; recheck ready and document present; issue scan request; wait for acceptance and finished before chosen deadline; if no evidence by deadline stop normal path and record fault, no success report; otherwise report normal completion, release request, wait for agreed feedback/order clear, clear report. State that the other controller holds the reported levels until reset. Alternatives accepted if causal constraints and distinct abnormal path are clear.
Common mistake: writing a list of actions without saying what prevents progression.
Evidence: explain normal and missing-evidence paths separately.

## B4 — Follow the normal cycle
ID: walkthrough | O3/O4 | independent

A trace is a record of the current instruction or stage and relevant values. A snapshot records one point in the model, not a measured controller scan. Read across a row, then explain what changes before the next row. Values below are fictional levels (0 OFF, 1 ON).

| Stage | START | READY | PART_PRESENT | REQUEST | ACK | DONE | REPORT |
|---|---:|---:|---:|---:|---:|---:|---:|
| N0 idle | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| N1 entry wait | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| N2 eligible | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| N3 request | 1 | 1 | 1 | 1 | 0 | 0 | 0 |
| N4 accepted | 1 | 1 | 1 | 1 | 1 | 0 | 0 |
| N5 finished report | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| N6 job report | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| N7 release | 1 | 1 | 1 | 0 | 1 | 1 | 1 |
| N8 PLC clear | 0 | 1 | 1 | 0 | 0 | 0 | 1 |
| N9 idle again | 0 | 1 | 1 | 0 | 0 | 0 | 0 |

**Worked reasoning.** N1 cannot issue REQUEST because reported presence is missing. At N3 acceptance is unknown; at N4 completion is unknown. At N5 the defined completion evidence has arrived before deadline. N6 reports the job's normal path; N7–N9 finish the illustrative reset. N9 does not start a new cycle merely because part remains present. N8 summarizes PLC clear events, not atomic signal changes.

**Supported practice.** Hide row N4. Predict the values when ACK first arrives and DONE remains OFF.
Answer: same as N3 except ACK=1. REPORT remains OFF.

**Independent practice.** Without looking, draw the sequence from N3 to N9 using only REQUEST, ACK, DONE, REPORT and START. Mark which actor changes each.
Answer: N3 robot REQUEST ON; N4 PLC ACK ON; N5 PLC DONE ON; N6 robot REPORT ON; N7 robot REQUEST OFF; N8 PLC clears ACK/DONE/START; N9 robot clears REPORT. START remains ON before N8. READY/PART unchanged in this trace.
Common mistake: collapsing ACK and DONE into one event.
Evidence: distinguish all three reports (acceptance, inspection completion, job completion) and reset.

## B5 — Trace a different outcome
ID: trace | O3/O4/O8 | independent

Do not append a fault to a successful cycle as if both happened in one run. Start each case with its stated initial snapshot. Distinguish observations from inferences: an observation is what the trace or source shows, an inference is a conclusion supported by it.

**Worked cases.**
| Case | Snapshot | Current stage | What we can establish |
|---|---|---|---|
| Missing part | START=1 READY=1 PART=0 ACK=0 DONE=0 REQUEST=0 REPORT=0 | entry | no request in this model; recheck |
| Missing acceptance | REQUEST=1 ACK=0 DONE=0 REPORT=0 | active wait | acceptance unconfirmed; cause unknown |
| Missing completion | REQUEST=1 ACK=1 DONE=0 REPORT=0 | active wait | acceptance reported, completion unconfirmed |
| Stale initial DONE | START=1 REQUEST=0 ACK=0 DONE=1 REPORT=0 | initial check | inconsistent feedback; stop paper attempt |

For the two active waits, assume entry was valid and deadline has not yet occurred. If deadline arrives without required evidence, normal completion is not reached. Detailed timing comes in Block D. An already-ON signal is a reported level, not proof of a fresh event.

**Supported practice.** ACK is ON but DONE stays OFF. What is the missing evidence? Does this establish a failed inspection device?
Answer: defined completion report; no, possible causes include unfinished inspection or a reporting path issue, and the trace alone cannot distinguish them.

**Independent practice.** A separate station reports PRINT_ACCEPTED=1 and PRINT_FINISHED=0 after a request. Write the observation, two possible explanations, and an evidence source for each. What would be wrong with reporting normal completion now?
Answer example: acceptance reported, finish not reported. Printer may still be working (authorized device status/history); or finished status may not reach the controller (approved I/O mapping and read-only diagnostics). Other supported explanations accepted. Completion evidence is missing; no normal completion claim. No physical inspection or signal forcing proposed.
Common mistake: diagnosing the sensor or PLC merely from one OFF signal.
Evidence: state what is known, unknown and how to distinguish alternatives.

## Block B retrieval / stopping point
Without looking: explain ACK versus DONE; draw a missing-part recheck; describe why a report outside an IF can be reached; explain why already-ON DONE is not fresh completion; draw the reset sequence.
Key: acceptance versus finished; missing part remains entry; false branch skips only body; stale level predates request; release REQUEST, PLC clear START/ACK/DONE, clear REPORT. If uncertain, return to the appropriate worked trace. Next block introduces actual INFORM excerpt reading, not a complete implementation of this station.

## Draft gate
Five IDs retained; objectives O1–O5/O8. Original machine example, walkthrough, trace, pseudocode and missing-part/debug intent mapped. One stable dictionary and explicit separate cases, complete worked/faded/independent answers. Model A is conceptual; START dropping before request is now explicitly outside the trace scope, consistent with WP1. No app edits, new automated test or observed learner outcomes. E02/E03/E05/E06/E10/E11/E15/E18 have draft evidence only; no findings closed. Next WP2 Block C.
