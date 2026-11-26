# Module 1 — Instructor guide

Status: review draft. This guide supports classroom instruction; it does not authorize equipment operation.

## Suggested first session
Allow 60 minutes for an initial learning block, not guaranteed completion of all 22 lessons.
- 0–10 min: objectives, sequence, requests and feedback.
- 10–25 min: cell roles, pseudocode, cycle trace.
- 25–40 min: INFORM excerpts and instruction trace.
- 40–50 min: missing branch and feedback simulator.
- 50–60 min: teach-back and identify remaining questions.
Continue parallel work, code lab, worksheet and assessment in a later block if needed.

## Practical answer guide
| Activity | Expected reasoning | Common error | Follow-up prompt |
|---|---|---|---|
| Process decomposition | Start, prerequisites, action, evidence, abnormal path, report | Treating request as confirmation | What proves the action finished? |
| Cycle trace | Ready and part prerequisites; request before confirmation | Reporting complete while feedback OFF | Which row cannot be reached? |
| Missing branch | False condition skips task but reaches report outside block | Assuming ENDIF ends job | Trace the next instruction after ENDIF. |
| INFORM trace | WAIT blocks; output stays ON in model until OFF executes | Assuming wait changes output | Which instruction changes output? |
| Feedback simulator | Early confirmation normal; missing/late fault at selected 3 or 5 s | Assuming late feedback clears fault | What additional recovery logic would need verification? |
| Parallel comparison | Idealized 4 versus 7 units; both waits required | Assuming physical coordination is safe | What does the example not prove? |
| Code lab | Trace variables, calls, waits and conditional recheck; record unknowns | Guessing job behavior from names | Where is the variable written? |
| Field worksheet | Exact machine, revision, observed path, evidence and unknowns | Transferring assumptions between cells | Which source establishes this signal? |

## Knowledge check key
1 B; 2 A; 3 C; 4 B; 5 A; 6 A; 7 B; 8 C; 9 A; 10 B.
At least 8/10 and all answered. Discuss every missed answer. Quiz score alone is not competence.

## Internal companion lab — instructor prepares privately
Select two approved master jobs from the authoritative equipment mirrors, preferably contrasting SCAR sequences. Keep production files, names, paths, signal mappings and revisions in approved internal storage, not this public repository.
1. Record exact machine, controller, job and revision.
2. Identify entry, initialization and one normal path.
3. Locate task starts, waits, calls and variable writes where present.
4. Compare sequential and overlapping patterns if present.
5. Trace one abnormal path and identify evidence needed for unknowns.
6. Explain differences without assuming that either program transfers to another cell.
Instructor must verify source selection and expected trace before assigning the lab.

## Acceptance
Mark each criterion independently: demonstrated / needs practice / not observed.
- Normal sequence explained without prompting.
- Request distinguished from confirmation.
- False condition and blocking wait traced correctly.
- Parallel and sequential patterns distinguished.
- Source evidence separated from assumptions.
- Read-only boundaries respected.

Any unsafe proposed action or unresolved critical misconception requires review before signoff. Local website checkbox is a self-record, not authenticated instructor approval. Record actual approval through the organization's approved training process.

## Pilot observation
Record elapsed time, navigation difficulties, misunderstood terms, incorrect predictions, assistance needed, and suggested revisions. Do not record employee details in the public repository. Review results before release.
