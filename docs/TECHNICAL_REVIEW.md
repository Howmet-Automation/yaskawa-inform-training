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
