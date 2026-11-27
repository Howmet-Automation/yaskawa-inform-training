# Module 01 technical review — 2026-11-25
Disposition: partial verification / HOLD.
Official Yaskawa sources accessed:
- https://knowledge.motoman.com/hc/en-us/articles/4407425435927-YRC1000-INFORM-LANGUAGE — section 2.1 DOUT, WAIT; 2.2 CALL, JUMP, NOP, COMMENT, SWITCH, CASE, IFTHEN; 2.3 INC; 2.4 MOVJ; 2.6 IF.
- https://knowledge.motoman.com/hc/en-us/articles/34805519233170-YRC1000-Options-Instructions-for-Independent-Coordinated-Control-Function — sections 7.6.1 PSTART, 7.6.2 PWAIT, 9.2 independent control instructions. These are option-dependent, not assumed standard.
- https://knowledge.motoman.com/hc/en-us/articles/4408154827415-YRC1000micro-INFORM-LANGUAGE
- https://knowledge.motoman.com/hc/en-us/articles/4408164529815-YRC1000-General-Operators
- https://knowledge.motoman.com/hc/en-us/articles/37612915659410-YRC1000-GENERAL-OPERATOR-S-MANUAL-R24
- https://knowledge.motoman.com/hc/en-us/sections/4404868703383-Inform
Evidence: public manual index pages establish instruction names, categories and independent-control option documentation. They do not establish exact operand syntax. Full manual sections for WAIT IN#, DOUT OT#, VJ, variable types, exported job headers, conditional expressions and PSTART/PWAIT operands remain to be read. Do not mark technical gate passed. Fictional snippets are incomplete and not executable jobs. Restricted equipment mirrors remain authoritative for machine-specific behavior. No live controller validation attempted.

## Operand evidence — second pass
Official examples https://knowledge.motoman.com/hc/en-us/articles/4408792981015-MotoSim-Inform-Commands-and-Syntax confirm WAIT IN#(n)=ON, DOUT OT#(n) ON/OFF and CALL JOB:name forms. https://knowledge.motoman.com/hc/en-us/articles/20895894514455-MOV-UNTIL-Instruction confirms pendant MOVJ VJ=25.00 display form, not exported position format. https://knowledge.motoman.com/hc/en-us/articles/4415229488023-Sending-an-Output-During-a-MOV documents exceptions to waiting for motion completion, including NWAIT. https://knowledge.motoman.com/hc/en-us/articles/24943774676242-Missing-INFORM-Commands confirms instruction availability depends on software and settings. Remaining: exact exported headers, structured conditional and subtask operand formats. HOLD.

## Training integration
b207518: separate job header and instruction excerpts; identify //POS and //INST; distinguish pendant display from exported representation; explain NWAIT caveat. a29f23d: explicit optional independent-control functionality and separate conditional evaluations. Structured conditional and subtask exact operands remain pending independent manual-format verification; examples remain read-only fictional previews. Workflow 45696997098 at f84a5a9 succeeded; newer changes pending CI. No technical release approval. Next: finish operand verification and then stage learner navigation.


## WP5 claim-level source review — 2026-11-27
Scope: revised public curriculum, fictional assessment, guided extension. Target reference family YRC1000 classic INFORM; installed machine/controller versions and options require instructor confirmation. Official sources opened or retrieved in this review, not simply copied from earlier notes:
- [YRC1000 INFORM language index](https://knowledge.motoman.com/hc/en-us/articles/4407425435927-YRC1000-INFORM-LANGUAGE), updated May 18 2026, links sections 1.7.4 and 2.1–2.6. Direct 178649-1CD manual download returned HTTP 403.
- [Header fields](https://knowledge.motoman.com/hc/en-us/articles/21577951275031-INFORM-Header-Fields), sections 2.1–2.3 and sample //INST section: confirms header and position/instruction distinctions.
- [Basic command examples](https://knowledge.motoman.com/hc/en-us/articles/4408792981015-MotoSim-Inform-Commands-and-Syntax), examples 1–6, 18–24: supports WAIT input level form, DOUT on/off, CALL named job, RET and INC concept. Do not use its inconsistent variable terminology as the type authority.
- [Programming languages and developer tools](https://knowledge.motoman.com/hc/en-us/articles/33634309555730-Programming-Languages-Developer-Tools): B byte and I integer terminology, MOVJ joint interpolation.
- [MOV UNTIL](https://knowledge.motoman.com/hc/en-us/articles/20895894514455-MOV-UNTIL-Instruction): VJ display example only. [Output during motion](https://knowledge.motoman.com/hc/en-us/articles/4415229488023-Sending-an-Output-During-a-MOV): NWAIT and background I/O demonstrate why program order does not universally establish physical completion.
- [Concurrent I/O overview](https://knowledge.motoman.com/hc/en-us/articles/1500012236161-Concurrent-I-O-Overview) and [Missing INFORM commands](https://knowledge.motoman.com/hc/en-us/articles/24943774676242-Missing-INFORM-Commands): background ladder, configuration-dependent instruction availability.
- [Independent/coordinated control index](https://knowledge.motoman.com/hc/en-us/articles/34805519233170-YRC1000-Options-Instructions-for-Independent-Coordinated-Control-Function), updated April 14 2026, 7.6.1–7.6.2. Direct 178660-1CD download returned HTTP 403.
- Separate YRC1000micro language index, YRC1000 General Operators, R24 index and INFORM article collection retrieved. Motoman root homepage returned 403 in this review; not proof of a broken link for a normal browser.

Secondary evidence (Yaskawa-authored manual copies hosted by third party; revision/applicability to be confirmed):
- [YRC1000 INFORM text copy](https://manualzz.com/doc/84662580/yaskawa-motoman-yrc1000-instructions): pp. 1-33–1-34 structured expression exports, 2-1 DOUT, 2-9–2-13 WAIT, 2-38–2-39 CALL example, 2-51 comment example, 2-55 NOP, MOVJ VJ operand section. WAIT optional T tag can advance after expiry even if comparison remains false. Classroom fault latch is not built-in semantics. Separate feedback evaluation and approved surrounding response necessary. Do not teach this as a production modification.
- [Independent/coordinated control text copy](https://manualzz.com/doc/84663344/yaskawa-motoman-independent-coordinated-control-owner-s-m...), HW1484042, §7.3.1 p.7-7 and §7.6: paired named-job starts and subtask waits supported; master/subtask setup and control-group assignments matter. No assertion that a job's completion proves physical safety.
- [YRC1000 basic operation training manual copy](https://www.scribd.com/document/790767912/MOTOMAN-BASIC-OPERATION-TRAINING-MANUAL-YRC1000-ERC16-U-2004-E01), p.10-12: normal called-job END return supported. This is secondary evidence only; confirm against applicable approved operator manual.

| Claim | Evidence disposition | Location / action |
|---|---|---|
| Header fields vs executable instructions | Official example verified | C1, K6 |
| Apostrophe comment and NOP | Manual-copy supported | C1 clarified; do not treat // headers as comments |
| DOUT logical state and condition-only WAIT | Official example plus manual-copy supported | C2, trace, K6, practical; other writers excluded |
| Timed WAIT vs explicit latch | Manual-copy supported, corrected instructional boundary | C2 and D1; Model B is not controller implementation |
| CALL and normal END return | CALL official example; END return secondary evidence | C3, D4, K7, practical; ordinary synchronous normal case only |
| MOVJ, VJ percentage and position context | Official examples + manual-copy supported | C1; no motion instructions for live use |
| B byte, I integer, INC adds one | Official references support concept; exact ranges and overflow deferred | X2; no ranges taught |
| PSTART/PWAIT named task operands | Official index + manual-copy example supported | X1/X2, option-dependent; exact installed support unknown |
| SWITCH/CASE and conditional re-evaluation | Names official index; conceptual evaluation taught; exact exported fragment not fully verified | X2; explicit export limitation |
| Process vs safety | Conservative design boundary, not safety-circuit validation | A, D, practical; site risk assessment and approved documentation mandatory |
| All invented signal assignments, reset, timing, fault states | Explicit classroom assumptions, not machine claims | A–D, tests; no production recovery implied |

Corrections committed f40e1c6 (comments and timed WAIT), ec6431e (timed model caveat, spaced retrieval and handoff), 593c701 (export form caveat). Independent technical approval remains HOLD: full official PDFs inaccessible, exact advanced comparison operands and applicable controller/options unresolved, no actual controller exercise performed. No production identifiers published. 
