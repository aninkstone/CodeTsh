	.cpu cortex-a9
	.eabi_attribute 27, 3
	.fpu neon
	.eabi_attribute 20, 1
	.eabi_attribute 21, 1
	.eabi_attribute 23, 3
	.eabi_attribute 24, 1
	.eabi_attribute 25, 1
	.eabi_attribute 26, 1
	.eabi_attribute 30, 1
	.eabi_attribute 18, 4
	.file	"System_manager.c"
	.section	.debug_abbrev,"",%progbits
.Ldebug_abbrev0:
	.section	.debug_info,"",%progbits
.Ldebug_info0:
	.section	.debug_line,"",%progbits
.Ldebug_line0:
	.text
.Ltext0:
	.cfi_sections	.debug_frame
	.align	2
	.global	system_manager_get_current_product_info
	.type	system_manager_get_current_product_info, %function
system_manager_get_current_product_info:
	.fnstart
.LFB2:
	.file 1 "System_manager.c"
	.loc 1 301 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
	.loc 1 303 0
	movw	r0, #:lower16:PRODUCT_INFO
	movt	r0, #:upper16:PRODUCT_INFO
	bx	lr
	.cfi_endproc
.LFE2:
	.fnend
	.size	system_manager_get_current_product_info, .-system_manager_get_current_product_info
	.align	2
	.global	system_wallpaper_backup_req
	.type	system_wallpaper_backup_req, %function
system_wallpaper_backup_req:
	.fnstart
.LFB7:
	.loc 1 913 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL0:
	.loc 1 917 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	ldrb	r3, [r3, #0]	@ zero_extendqisi2
	cmp	r3, #0
	beq	.L4
	mov	r0, #0
.LVL1:
	bx	lr
.LVL2:
.L4:
	.loc 1 919 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #1
	strb	r2, [r3, #0]
	.loc 1 921 0
	str	r0, [r3, #4]
	mov	r0, r2
.LVL3:
.LVL4:
	.loc 1 927 0
	bx	lr
	.cfi_endproc
.LFE7:
	.fnend
	.size	system_wallpaper_backup_req, .-system_wallpaper_backup_req
	.align	2
	.global	system_wallpaper_delete_req
	.type	system_wallpaper_delete_req, %function
system_wallpaper_delete_req:
	.fnstart
.LFB8:
	.loc 1 948 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL5:
	.loc 1 951 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	ldrb	r3, [r3, #0]	@ zero_extendqisi2
	cmp	r3, #0
	beq	.L8
	mov	r0, #0
.LVL6:
	bx	lr
.LVL7:
.L8:
	.loc 1 953 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #4
	strb	r2, [r3, #0]
	.loc 1 955 0
	str	r0, [r3, #4]
	mov	r0, #1
.LVL8:
.LVL9:
	.loc 1 962 0
	bx	lr
	.cfi_endproc
.LFE8:
	.fnend
	.size	system_wallpaper_delete_req, .-system_wallpaper_delete_req
	.align	2
	.global	system_set_app_icon_write_callback
	.type	system_set_app_icon_write_callback, %function
system_set_app_icon_write_callback:
	.fnstart
.LFB9:
	.loc 1 990 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL10:
	.loc 1 992 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	str	r0, [r3, #8]
.LVL11:
	.loc 1 993 0
	bx	lr
	.cfi_endproc
.LFE9:
	.fnend
	.size	system_set_app_icon_write_callback, .-system_set_app_icon_write_callback
	.align	2
	.global	system_wallpaper_save_check
	.type	system_wallpaper_save_check, %function
system_wallpaper_save_check:
	.fnstart
.LFB12:
	.loc 1 1108 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
	.loc 1 1108 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	.loc 1 1110 0
	ldrb	r0, [r3, #12]	@ zero_extendqisi2
	bx	lr
	.cfi_endproc
.LFE12:
	.fnend
	.size	system_wallpaper_save_check, .-system_wallpaper_save_check
	.align	2
	.global	system_set_irq
	.type	system_set_irq, %function
system_set_irq:
	.fnstart
.LFB13:
	.loc 1 1131 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
	.loc 1 1145 0
	bx	lr
	.cfi_endproc
.LFE13:
	.fnend
	.size	system_set_irq, .-system_set_irq
	.align	2
	.global	system_mng_restart_mode_set
	.type	system_mng_restart_mode_set, %function
system_mng_restart_mode_set:
	.fnstart
.LFB15:
	.loc 1 1303 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL12:
	.loc 1 1304 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	strb	r0, [r3, #14]
	.loc 1 1305 0
	bx	lr
	.cfi_endproc
.LFE15:
	.fnend
	.size	system_mng_restart_mode_set, .-system_mng_restart_mode_set
	.align	2
	.global	system_mng_restart_mode_get
	.type	system_mng_restart_mode_get, %function
system_mng_restart_mode_get:
	.fnstart
.LFB16:
	.loc 1 1308 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
	.loc 1 1308 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	.loc 1 1310 0
	ldrb	r0, [r3, #14]	@ zero_extendqisi2
	bx	lr
	.cfi_endproc
.LFE16:
	.fnend
	.size	system_mng_restart_mode_get, .-system_mng_restart_mode_get
	.align	2
	.global	system_mng_flash_boot_get_command
	.type	system_mng_flash_boot_get_command, %function
system_mng_flash_boot_get_command:
	.fnstart
.LFB18:
	.loc 1 1346 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
	.loc 1 1346 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	.loc 1 1348 0
	ldrb	r0, [r3, #15]	@ zero_extendqisi2
	bx	lr
	.cfi_endproc
.LFE18:
	.fnend
	.size	system_mng_flash_boot_get_command, .-system_mng_flash_boot_get_command
	.align	2
	.global	PowTimer_AccOnProcGuardTimerSet
	.type	PowTimer_AccOnProcGuardTimerSet, %function
PowTimer_AccOnProcGuardTimerSet:
	.fnstart
.LFB28:
	.loc 1 1532 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL13:
	.loc 1 1533 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r0, asl #3
	add	r3, r3, #16
	strb	r2, [r3, #4]
	.loc 1 1534 0
	str	r1, [r3, #0]
	.loc 1 1535 0
	bx	lr
	.cfi_endproc
.LFE28:
	.fnend
	.size	PowTimer_AccOnProcGuardTimerSet, .-PowTimer_AccOnProcGuardTimerSet
	.align	2
	.global	PowTimer_AccOffProcGuardTimerSet
	.type	PowTimer_AccOffProcGuardTimerSet, %function
PowTimer_AccOffProcGuardTimerSet:
	.fnstart
.LFB30:
	.loc 1 1579 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL14:
	.loc 1 1580 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r0, asl #3
	add	r3, r3, #272
	strb	r2, [r3, #4]
	.loc 1 1581 0
	str	r1, [r3, #0]
	.loc 1 1582 0
	bx	lr
	.cfi_endproc
.LFE30:
	.fnend
	.size	PowTimer_AccOffProcGuardTimerSet, .-PowTimer_AccOffProcGuardTimerSet
	.align	2
	.global	PowTimer_GetTaskState
	.type	PowTimer_GetTaskState, %function
PowTimer_GetTaskState:
	.fnstart
.LFB33:
	.loc 1 1655 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL15:
	.loc 1 1655 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r0, asl #3
	.loc 1 1657 0
	ldrb	r0, [r3, #20]	@ zero_extendqisi2
.LVL16:
	bx	lr
	.cfi_endproc
.LFE33:
	.fnend
	.size	PowTimer_GetTaskState, .-PowTimer_GetTaskState
	.align	2
	.global	PowTimer_TimerCount
	.type	PowTimer_TimerCount, %function
PowTimer_TimerCount:
	.fnstart
.LFB34:
	.loc 1 1660 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
.LVL17:
	.loc 1 1661 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r0, asl #3
	add	r0, r3, #528
.LVL18:
	strh	r1, [r0, #0]	@ movhi
	.loc 1 1662 0
	str	r2, [r3, #532]
	.loc 1 1663 0
	bx	lr
	.cfi_endproc
.LFE34:
	.fnend
	.size	PowTimer_TimerCount, .-PowTimer_TimerCount
	.align	2
	.global	PowTimer_initReset
	.type	PowTimer_initReset, %function
PowTimer_initReset:
	.fnstart
.LFB32:
	.loc 1 1648 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r4, lr}
	.save {r4, lr}
.LCFI0:
	.cfi_def_cfa_offset 8
	.loc 1 1649 0
	movw	r4, #:lower16:.LANCHOR0
	.cfi_offset 14, -4
	.cfi_offset 4, -8
	movt	r4, #:upper16:.LANCHOR0
	add	r0, r4, #16
	mov	r1, #0
	mov	r2, #256
	bl	memset_b
	.loc 1 1650 0
	add	r0, r4, #272
	mov	r1, #0
	mov	r2, #256
	bl	memset_b
	.loc 1 1651 0
	add	r0, r4, #528
	mov	r1, #0
	mov	r2, #40
	bl	memset_b
	.loc 1 1652 0
	ldmfd	sp!, {r4, pc}
	.cfi_endproc
.LFE32:
	.fnend
	.size	PowTimer_initReset, .-PowTimer_initReset
	.align	2
	.global	PowTimer_AccOffProcGuardTimerClear
	.type	PowTimer_AccOffProcGuardTimerClear, %function
PowTimer_AccOffProcGuardTimerClear:
	.fnstart
.LFB31:
	.loc 1 1591 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL19:
	stmfd	sp!, {r4, r5, r6, lr}
	.save {r4, r5, r6, lr}
.LCFI1:
	.cfi_def_cfa_offset 16
	mov	r4, r0
	.cfi_offset 14, -4
	.cfi_offset 6, -8
	.cfi_offset 5, -12
	.cfi_offset 4, -16
	mov	r5, r1
	.loc 1 1598 0
	bl	PowMng_Itron_AccOff_InfoComplete
.LVL20:
	mov	r6, r0
.LVL21:
	.loc 1 1600 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r4, asl #3
	ldrb	r3, [r3, #276]	@ zero_extendqisi2
	cmp	r3, #4
	ldmnefd	sp!, {r4, r5, r6, pc}
	.loc 1 1602 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r4, asl #3
.LVL22:
	add	r3, r3, #272
	strb	r5, [r3, #4]
	.loc 1 1603 0
	mov	r2, #0
	str	r2, [r3, #0]
	.loc 1 1604 0
	bl	PowMng_GetQuicklyAccOffStatus
	cmp	r0, #1
	bne	.L35
	.loc 1 1606 0
	cmp	r4, #24
.LVL23:
	ldmnefd	sp!, {r4, r5, r6, pc}
	.loc 1 1608 0
	bl	PowMng_AccOffComplete
	ldmfd	sp!, {r4, r5, r6, pc}
.LVL24:
.L35:
	.loc 1 1616 0
	cmp	r4, #25
.LVL25:
	bne	.L36
	.loc 1 1618 0
	bl	PowMng_Itron_AccOff_Start
	ldmfd	sp!, {r4, r5, r6, pc}
.L36:
	mov	r3, #0
	mov	r2, #1
.LVL26:
	ldr	r0, .L42
.L39:
	add	r1, r0, r3
	ldrb	r1, [r1, #4]	@ zero_extendqisi2
	cmp	r1, #4
	moveq	r2, #0
.LVL27:
	add	r3, r3, #8
	.loc 1 1621 0
	cmp	r3, #256
	bne	.L39
	.loc 1 1629 0
	cmp	r6, #1
	cmpeq	r2, #1
	ldmnefd	sp!, {r4, r5, r6, pc}
	.loc 1 1631 0
	bl	PowMng_AccOffComplete
.LVL28:
	ldmfd	sp!, {r4, r5, r6, pc}
.L43:
	.align	2
.L42:
	.word	.LANCHOR0+272
	.cfi_endproc
.LFE31:
	.fnend
	.size	PowTimer_AccOffProcGuardTimerClear, .-PowTimer_AccOffProcGuardTimerClear
	.align	2
	.global	PowTimer_AccOnProcGuardTimerClear
	.type	PowTimer_AccOnProcGuardTimerClear, %function
PowTimer_AccOnProcGuardTimerClear:
	.fnstart
.LFB29:
	.loc 1 1544 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL29:
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI2:
	.cfi_def_cfa_offset 8
	.loc 1 1551 0
	movw	r3, #:lower16:.LANCHOR0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	movt	r3, #:upper16:.LANCHOR0
	add	r3, r3, r0, asl #3
.LVL30:
	ldrb	r3, [r3, #20]	@ zero_extendqisi2
	cmp	r3, #5
	ldmnefd	sp!, {r3, pc}
	.loc 1 1553 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	add	r0, r3, r0, asl #3
	add	r0, r0, #16
	strb	r1, [r0, #4]
	.loc 1 1554 0
	mov	r3, #0
	str	r3, [r0, #0]
	mov	r1, #1
.LVL31:
	.loc 1 1558 0
	movw	r0, #:lower16:.LANCHOR0
	movt	r0, #:upper16:.LANCHOR0
	add	r0, r0, #16
.L48:
	add	r2, r0, r3
	ldrb	r2, [r2, #4]	@ zero_extendqisi2
	cmp	r2, #1
	cmpne	r2, #3
	movne	r2, #0
	moveq	r2, #1
	cmp	r2, #0
	moveq	r1, #0
.LVL32:
	add	r3, r3, #8
	.loc 1 1556 0
	cmp	r3, #200
	bne	.L48
	.loc 1 1564 0
	cmp	r1, #1
	ldmnefd	sp!, {r3, pc}
	.loc 1 1566 0
	bl	PowMng_TaskUpComplete
.LVL33:
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE29:
	.fnend
	.size	PowTimer_AccOnProcGuardTimerClear, .-PowTimer_AccOnProcGuardTimerClear
	.align	2
	.global	PowTimer_Cyclic__2ms_Task
	.type	PowTimer_Cyclic__2ms_Task, %function
PowTimer_Cyclic__2ms_Task:
	.fnstart
.LFB26:
	.loc 1 1444 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI3:
	.cfi_def_cfa_offset 8
	.loc 1 1445 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
	mov	r1, #2048
	bl	cmaFlagSet
	.loc 1 1446 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE26:
	.fnend
	.size	PowTimer_Cyclic__2ms_Task, .-PowTimer_Cyclic__2ms_Task
	.align	2
	.global	system_mng_flash_boot_set_command
	.type	system_mng_flash_boot_set_command, %function
system_mng_flash_boot_set_command:
	.fnstart
.LFB20:
	.loc 1 1356 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL34:
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI4:
	.cfi_def_cfa_offset 8
	.loc 1 1357 0
	cmp	r0, #4
	ldrls	pc, [pc, r0, asl #2]
	b	.L54
	.cfi_offset 14, -4
	.cfi_offset 3, -8
.L60:
	.word	.L55
	.word	.L56
	.word	.L57
	.word	.L58
	.word	.L59
.L55:
	.loc 1 1360 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #0
	strb	r2, [r3, #15]
	.loc 1 1361 0
	b	.L61
.L56:
	.loc 1 1363 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #1
	strb	r2, [r3, #15]
	.loc 1 1364 0
	b	.L61
.L57:
	.loc 1 1366 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #2
	strb	r2, [r3, #15]
	.loc 1 1367 0
	b	.L61
.L58:
	.loc 1 1369 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #3
	strb	r2, [r3, #15]
	.loc 1 1370 0
	b	.L61
.L59:
	.loc 1 1372 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #4
	strb	r2, [r3, #15]
	.loc 1 1373 0
	b	.L61
.L54:
	.loc 1 1375 0
	movw	r3, #:lower16:.LANCHOR0
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #0
	strb	r2, [r3, #15]
.L61:
	.loc 1 1378 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL35:
	mov	r1, #4096
	bl	cmaFlagSet
	.loc 1 1379 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE20:
	.fnend
	.size	system_mng_flash_boot_set_command, .-system_mng_flash_boot_set_command
	.align	2
	.global	system_usb_power_req
	.type	system_usb_power_req, %function
system_usb_power_req:
	.fnstart
.LFB11:
	.loc 1 1079 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI5:
	.cfi_def_cfa_offset 8
	.loc 1 1080 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
	mov	r1, #8
	bl	cmaFlagSet
	.loc 1 1081 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE11:
	.fnend
	.size	system_usb_power_req, .-system_usb_power_req
	.align	2
	.global	system_image_uncompress_req
	.type	system_image_uncompress_req, %function
system_image_uncompress_req:
	.fnstart
.LFB6:
	.loc 1 859 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL36:
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI6:
	.cfi_def_cfa_offset 8
	.loc 1 860 0
	movw	r3, #:lower16:.LANCHOR0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	movt	r3, #:upper16:.LANCHOR0
	str	r0, [r3, #568]
	.loc 1 862 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL37:
	mov	r1, #268435456
	bl	cmaFlagSet
	.loc 1 864 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE6:
	.fnend
	.size	system_image_uncompress_req, .-system_image_uncompress_req
	.align	2
	.global	system_mng_recovery_rd_byte
	.type	system_mng_recovery_rd_byte, %function
system_mng_recovery_rd_byte:
	.fnstart
.LFB25:
	.loc 1 1433 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL38:
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI7:
	.cfi_def_cfa_offset 8
	.loc 1 1434 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	flash_boot_recovery_rd_byte
.LVL39:
	.loc 1 1435 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE25:
	.fnend
	.size	system_mng_recovery_rd_byte, .-system_mng_recovery_rd_byte
	.align	2
	.global	system_mng_recovery_write
	.type	system_mng_recovery_write, %function
system_mng_recovery_write:
	.fnstart
.LFB24:
	.loc 1 1422 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL40:
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI8:
	.cfi_def_cfa_offset 8
	.loc 1 1423 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	flash_boot_recovery_wr_byte
.LVL41:
	.loc 1 1424 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE24:
	.fnend
	.size	system_mng_recovery_write, .-system_mng_recovery_write
	.align	2
	.global	system_mng_boot_linux_erase
	.type	system_mng_boot_linux_erase, %function
system_mng_boot_linux_erase:
	.fnstart
.LFB23:
	.loc 1 1410 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI9:
	.cfi_def_cfa_offset 8
	.loc 1 1411 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	flash_boot_linux_recovery_erase
	.loc 1 1412 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE23:
	.fnend
	.size	system_mng_boot_linux_erase, .-system_mng_boot_linux_erase
	.align	2
	.global	system_mng_boot_itron_erase
	.type	system_mng_boot_itron_erase, %function
system_mng_boot_itron_erase:
	.fnstart
.LFB22:
	.loc 1 1399 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI10:
	.cfi_def_cfa_offset 8
	.loc 1 1400 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	flash_boot_itron_recovery_erase
	.loc 1 1401 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE22:
	.fnend
	.size	system_mng_boot_itron_erase, .-system_mng_boot_itron_erase
	.align	2
	.global	system_mng_recovery_erase
	.type	system_mng_recovery_erase, %function
system_mng_recovery_erase:
	.fnstart
.LFB21:
	.loc 1 1388 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI11:
	.cfi_def_cfa_offset 8
	.loc 1 1389 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	flash_boot_recovery_erase
	.loc 1 1390 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE21:
	.fnend
	.size	system_mng_recovery_erase, .-system_mng_recovery_erase
	.align	2
	.global	system_mng_flash_boot_command_clr
	.type	system_mng_flash_boot_command_clr, %function
system_mng_flash_boot_command_clr:
	.fnstart
.LFB19:
	.loc 1 1351 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI12:
	.cfi_def_cfa_offset 8
	.loc 1 1352 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	flash_boot_mode_reset
	.loc 1 1353 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE19:
	.fnend
	.size	system_mng_flash_boot_command_clr, .-system_mng_flash_boot_command_clr
	.align	2
	.global	system_mng_boot_mode_exec
	.type	system_mng_boot_mode_exec, %function
system_mng_boot_mode_exec:
	.fnstart
.LFB17:
	.loc 1 1313 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI13:
	.cfi_def_cfa_offset 8
	.loc 1 1315 0
	.cfi_offset 14, -4
	.cfi_offset 3, -8
	bl	system_mng_flash_boot_get_command
	.loc 1 1316 0
	cmp	r0, #4
	ldrls	pc, [pc, r0, asl #2]
	b	.L80
.L86:
	.word	.L81
	.word	.L82
	.word	.L83
	.word	.L84
	.word	.L85
.L81:
	.loc 1 1319 0
	mov	r0, #0
	bl	flash_boot_mode_set
	.loc 1 1320 0
	mov	r0, #0
	bl	system_mng_restart_mode_set
	.loc 1 1321 0
	b	.L80
.L82:
	.loc 1 1323 0
	mov	r0, #1
	bl	flash_boot_mode_set
	.loc 1 1324 0
	mov	r0, #3
	bl	system_mng_restart_mode_set
	.loc 1 1325 0
	b	.L80
.L83:
	.loc 1 1327 0
	mov	r0, #2
	bl	flash_boot_mode_set
	.loc 1 1328 0
	mov	r0, #1
	bl	system_mng_restart_mode_set
	.loc 1 1329 0
	b	.L80
.L84:
	.loc 1 1331 0
	mov	r0, #3
	bl	flash_boot_mode_set
	.loc 1 1332 0
	mov	r0, #2
	bl	system_mng_restart_mode_set
	.loc 1 1333 0
	b	.L80
.L85:
	.loc 1 1335 0
	mov	r0, #4
	bl	flash_boot_mode_set
	.loc 1 1336 0
	mov	r0, #2
	bl	system_mng_restart_mode_set
.L80:
	.loc 1 1342 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
	mov	r1, #8192
	bl	cmaFlagSet
	.loc 1 1344 0
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE17:
	.fnend
	.size	system_mng_boot_mode_exec, .-system_mng_boot_mode_exec
	.align	2
	.global	TASK_Flash_Write
	.type	TASK_Flash_Write, %function
TASK_Flash_Write:
	.fnstart
.LFB14:
	.loc 1 1251 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL42:
	stmfd	sp!, {r4, r5, r6, r7, r8, r9, sl, fp, lr}
	.save {r4, r5, r6, r7, r8, r9, sl, fp, lr}
.LCFI14:
	.cfi_def_cfa_offset 36
	.pad #20
	sub	sp, sp, #20
.LCFI15:
	.cfi_def_cfa_offset 56
	.loc 1 1259 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	.loc 1 1258 0
	mov	r5, #0
	.cfi_offset 14, -4
	.cfi_offset 11, -8
	.cfi_offset 10, -12
	.cfi_offset 9, -16
	.cfi_offset 8, -20
	.cfi_offset 7, -24
	.cfi_offset 6, -28
	.cfi_offset 5, -32
	.cfi_offset 4, -36
	.loc 1 1259 0
	ldrsh	r4, [r3, #0]
	add	r7, sp, #12
	mvn	r8, #0
	movw	sl, #12320
	mov	r6, #1
	.loc 1 1263 0
	mvn	fp, #32
	.loc 1 1264 0
	movw	r9, #:lower16:.LANCHOR0
	movt	r9, #:upper16:.LANCHOR0
.LVL43:
.L98:
	.loc 1 1258 0
	str	r5, [sp, #12]
.LVL44:
	.loc 1 1259 0
	str	r8, [sp, #0]
	mov	r0, r4
.LVL45:
	mov	r1, sl
	mov	r2, r6
	mov	r3, r7
	bl	cmaFlagTwai
	.loc 1 1261 0
	ldr	r3, [sp, #12]
	tst	r3, #32
	beq	.L90
.LVL46:
	.loc 1 1263 0
	mov	r0, r4
	mov	r1, fp
	bl	cmaFlagClr
.LVL47:
	.loc 1 1264 0
	ldr	r3, [r9, #8]
	cmp	r3, #0
	beq	.L90
	.loc 1 1266 0
	blx	r3
.LVL48:
.L90:
	.loc 1 1269 0
	ldr	r3, [sp, #12]
	tst	r3, #4096
	beq	.L91
.LVL49:
	.loc 1 1271 0
	mov	r0, r4
	mvn	r1, #4096
	bl	cmaFlagClr
.LVL50:
	.loc 1 1272 0
	bl	system_mng_boot_mode_exec
.LVL51:
.L91:
	.loc 1 1274 0
	ldr	r3, [sp, #12]
	tst	r3, #8192
	beq	.L98
.LVL52:
	.loc 1 1276 0
	mov	r0, r4
	mvn	r1, #8192
	bl	cmaFlagClr
.LVL53:
	.loc 1 1279 0
	bl	system_mng_restart_mode_get
	strb	r0, [r9, #572]
	.loc 1 1280 0
	cmp	r0, #3
	ldrls	pc, [pc, r0, asl #2]
	b	.L98
.L96:
	.word	.L92
	.word	.L93
	.word	.L94
	.word	.L95
.L92:
	.loc 1 1283 0
	mov	r0, r5
	bl	keydcd_testmode_detect_data_send
	.loc 1 1284 0
	b	.L98
.L93:
	.loc 1 1286 0
	mov	r0, r6
	bl	keydcd_testmode_detect_data_send
	.loc 1 1287 0
	b	.L98
.L95:
	.loc 1 1289 0
	mov	r0, #3
	bl	keydcd_testmode_detect_data_send
	.loc 1 1290 0
	b	.L98
.L94:
	.loc 1 1292 0
	mov	r0, #2
	bl	keydcd_testmode_detect_data_send
	b	.L98
	.cfi_endproc
.LFE14:
	.fnend
	.size	TASK_Flash_Write, .-TASK_Flash_Write
	.align	2
	.global	system_flash_write_req
	.type	system_flash_write_req, %function
system_flash_write_req:
	.fnstart
.LFB10:
	.loc 1 1013 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL54:
	stmfd	sp!, {r3, lr}
	.save {r3, lr}
.LCFI16:
	.cfi_def_cfa_offset 8
	.loc 1 1014 0
	cmp	r0, #11
	ldrls	pc, [pc, r0, asl #2]
	b	.L114
	.cfi_offset 14, -4
	.cfi_offset 3, -8
.L113:
	.word	.L101
	.word	.L102
	.word	.L103
	.word	.L104
	.word	.L105
	.word	.L106
	.word	.L107
	.word	.L108
	.word	.L109
	.word	.L110
	.word	.L111
	.word	.L112
.L101:
	.loc 1 1017 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL55:
	mov	r1, #1
	bl	cmaFlagSet
	.loc 1 1018 0
	ldmfd	sp!, {r3, pc}
.LVL56:
.L102:
	.loc 1 1020 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL57:
	mov	r1, #2
	bl	cmaFlagSet
	.loc 1 1021 0
	ldmfd	sp!, {r3, pc}
.LVL58:
.L103:
	.loc 1 1023 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL59:
	mov	r1, #4
	bl	cmaFlagSet
	.loc 1 1024 0
	ldmfd	sp!, {r3, pc}
.LVL60:
.L104:
	.loc 1 1026 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL61:
	mov	r1, #16
	bl	cmaFlagSet
	.loc 1 1027 0
	ldmfd	sp!, {r3, pc}
.LVL62:
.L105:
	.loc 1 1029 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL63:
	mov	r1, #32
	bl	cmaFlagSet
	.loc 1 1030 0
	ldmfd	sp!, {r3, pc}
.LVL64:
.L106:
	.loc 1 1033 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL65:
	mov	r1, #64
	bl	cmaFlagSet
	.loc 1 1034 0
	ldmfd	sp!, {r3, pc}
.LVL66:
.L107:
	.loc 1 1036 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL67:
	mov	r1, #128
	bl	cmaFlagSet
	.loc 1 1037 0
	ldmfd	sp!, {r3, pc}
.LVL68:
.L108:
	.loc 1 1039 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL69:
	mov	r1, #256
	bl	cmaFlagSet
	.loc 1 1040 0
	ldmfd	sp!, {r3, pc}
.LVL70:
.L109:
	.loc 1 1042 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL71:
	mov	r1, #512
	bl	cmaFlagSet
	.loc 1 1043 0
	ldmfd	sp!, {r3, pc}
.LVL72:
.L110:
	.loc 1 1045 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL73:
	mov	r1, #1024
	bl	cmaFlagSet
	.loc 1 1046 0
	ldmfd	sp!, {r3, pc}
.LVL74:
.L111:
	.loc 1 1048 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrsh	r0, [r3, #0]
.LVL75:
	mov	r1, #2048
	bl	cmaFlagSet
	.loc 1 1049 0
	ldmfd	sp!, {r3, pc}
.LVL76:
.L112:
	.loc 1 1053 0
	bl	stsMng_mng_disp_save_app_icon_package_name
.LVL77:
.L114:
	ldmfd	sp!, {r3, pc}
	.cfi_endproc
.LFE10:
	.fnend
	.size	system_flash_write_req, .-system_flash_write_req
	.align	2
	.global	TASK_System_Manager
	.type	TASK_System_Manager, %function
TASK_System_Manager:
	.fnstart
.LFB5:
	.loc 1 411 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL78:
	stmfd	sp!, {r4, r5, r6, r7, r8, r9, sl, fp, lr}
	.save {r4, r5, r6, r7, r8, r9, sl, fp, lr}
.LCFI17:
	.cfi_def_cfa_offset 36
	.pad #20
	sub	sp, sp, #20
.LCFI18:
	.cfi_def_cfa_offset 56
	.loc 1 424 0
	movw	r3, #:lower16:FLG_ID_SYSTEM_MANAGER
	movt	r3, #:upper16:FLG_ID_SYSTEM_MANAGER
	ldrh	r8, [r3, #0]
	.cfi_offset 14, -4
	.cfi_offset 11, -8
	.cfi_offset 10, -12
	.cfi_offset 9, -16
	.cfi_offset 8, -20
	.cfi_offset 7, -24
	.cfi_offset 6, -28
	.cfi_offset 5, -32
	.cfi_offset 4, -36
	movw	sl, #:lower16:-268433377
	movt	sl, #:upper16:-268433377
	add	r9, sp, #12
.LBB4:
.LBB5:
	.loc 1 1462 0
	movw	fp, #:lower16:.LANCHOR0
	movt	fp, #:upper16:.LANCHOR0
	add	r6, fp, #16
	.loc 1 1482 0
	add	r7, fp, #272
	.loc 1 1506 0
	add	fp, fp, #528
.LVL79:
.L129:
.LBE5:
.LBE4:
	.loc 1 423 0
	mov	r3, #0
	str	r3, [sp, #12]
.LVL80:
	.loc 1 424 0
	mov	r3, #100
	str	r3, [sp, #0]
	sxth	r0, r8
.LVL81:
	mov	r1, sl
	mov	r2, #1
	mov	r3, r9
	bl	cmaFlagTwai
	.loc 1 426 0
	cmp	r0, #1
	bne	.L129
	.loc 1 428 0
	ldr	r3, [sp, #12]
	tst	r3, #2048
	beq	.L117
.LVL82:
	mov	r4, #0
	mov	r5, r4
.LVL83:
.L120:
.LBB7:
.LBB6:
	.loc 1 1462 0
	ldr	r3, [r6, r4]
	cmp	r3, #0
	ble	.L118
	.loc 1 1464 0
	sub	r3, r3, #1
	str	r3, [r6, r4]
	cmp	r3, #0
	bne	.L118
	.loc 1 1466 0
	add	r3, r6, r4
	ldrb	r3, [r3, #4]	@ zero_extendqisi2
	cmp	r3, #5
	bne	.L118
	.loc 1 1468 0
	mov	r0, r5
	mov	r1, #3
	bl	PowTimer_AccOnProcGuardTimerClear
.L118:
	.loc 1 1482 0
	ldr	r3, [r7, r4]
	cmp	r3, #0
	ble	.L119
	.loc 1 1484 0
	sub	r3, r3, #1
	str	r3, [r7, r4]
	cmp	r3, #0
	bne	.L119
	.loc 1 1486 0
	add	r3, r7, r4
	ldrb	r3, [r3, #4]	@ zero_extendqisi2
	cmp	r3, #4
	bne	.L119
	.loc 1 1488 0
	mov	r0, r5
	mov	r1, #2
	bl	PowTimer_AccOffProcGuardTimerClear
.L119:
	.loc 1 1460 0
	add	r5, r5, #1
.LVL84:
	uxtb	r5, r5
.LVL85:
	add	r4, r4, #8
	cmp	r5, #32
	bne	.L120
	mov	r4, #0
.L122:
	.loc 1 1506 0
	ldrh	r3, [fp, r4]
	cmp	r3, #0
	beq	.L121
	.loc 1 1508 0
	sub	r3, r3, #1
	uxth	r3, r3
	strh	r3, [fp, r4]	@ movhi
	cmp	r3, #0
	bne	.L121
	.loc 1 1510 0
	add	r3, fp, r4
	ldr	r3, [r3, #4]
	cmp	r3, #0
	beq	.L121
	.loc 1 1512 0
	blx	r3
.L121:
	add	r4, r4, #8
	.loc 1 1504 0
	cmp	r4, #40
	bne	.L122
.LBE6:
.LBE7:
	.loc 1 431 0
	sxth	r0, r8
	mvn	r1, #2048
	bl	cmaFlagClr
	b	.L129
.L117:
	.loc 1 486 0
	tst	r3, #1
	beq	.L123
	.loc 1 488 0
	sxth	r0, r8
	mvn	r1, #1
	bl	cmaFlagClr
	.loc 1 489 0
	mov	r0, #225
	bl	cmaFlashMemoryBackupWrite
	b	.L129
.L123:
	.loc 1 491 0
	tst	r3, #2
	beq	.L124
	.loc 1 493 0
	sxth	r0, r8
	mvn	r1, #2
	bl	cmaFlagClr
	.loc 1 494 0
	mov	r0, #226
	bl	cmaFlashMemoryBackupWrite
	b	.L129
.L124:
	.loc 1 496 0
	tst	r3, #4
	beq	.L125
	.loc 1 498 0
	sxth	r0, r8
	mvn	r1, #4
	bl	cmaFlagClr
	.loc 1 499 0
	mov	r0, #227
	bl	cmaFlashMemoryBackupWrite
	.loc 1 500 0
	mov	r0, #228
	bl	cmaFlashMemoryBackupWrite
	.loc 1 501 0
	mov	r0, #229
	bl	cmaFlashMemoryBackupWrite
	b	.L129
.L125:
	.loc 1 503 0
	tst	r3, #16
	beq	.L129
	.loc 1 505 0
	sxth	r0, r8
	mvn	r1, #16
	bl	cmaFlagClr
	.loc 1 506 0
	mov	r0, #230
	bl	cmaFlashMemoryBackupWrite
	b	.L129
	.cfi_endproc
.LFE5:
	.fnend
	.size	TASK_System_Manager, .-TASK_System_Manager
	.align	2
	.type	system_manager_check_product_info, %function
system_manager_check_product_info:
	.fnstart
.LFB0:
	.loc 1 199 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL86:
	stmfd	sp!, {r4, lr}
	.save {r4, lr}
.LCFI19:
	.cfi_def_cfa_offset 8
	mov	r4, r0
	.cfi_offset 14, -4
	.cfi_offset 4, -8
	.loc 1 202 0
	movw	r3, #:lower16:2023117859
	movt	r3, #:upper16:2023117859
	ldr	r2, [r0, #0]
	cmp	r2, r3
	bne	.L131
	.loc 1 207 0
	add	r0, r0, #4
.LVL87:
	mov	r1, #6
	bl	calculate_checksum
	.loc 1 209 0
	ldrb	r3, [r4, #10]	@ zero_extendqisi2
	uxtb	r0, r0
	cmp	r3, r0
	bne	.L131
	.loc 1 214 0
	add	r0, r4, #11
	mov	r1, #6
	bl	calculate_checksum
	.loc 1 216 0
	ldrb	r3, [r4, #17]	@ zero_extendqisi2
	uxtb	r0, r0
	cmp	r3, r0
	bne	.L131
	.loc 1 221 0
	add	r0, r4, #18
	mov	r1, #4
	bl	calculate_checksum
	.loc 1 223 0
	ldrb	r3, [r4, #22]	@ zero_extendqisi2
	uxtb	r0, r0
	cmp	r3, r0
	bne	.L131
	.loc 1 228 0
	mov	r0, r4
	mov	r1, #23
	bl	calculate_checksum
	ldrb	r3, [r4, #23]	@ zero_extendqisi2
	uxtb	r0, r0
	cmp	r3, r0
	movne	r0, #0
	moveq	r0, #1
	ldmfd	sp!, {r4, pc}
.LVL88:
.L131:
	mov	r0, #0
	.loc 1 236 0
	ldmfd	sp!, {r4, pc}
	.cfi_endproc
.LFE0:
	.fnend
	.size	system_manager_check_product_info, .-system_manager_check_product_info
	.align	2
	.type	system_manager_set_product_info_to_default, %function
system_manager_set_product_info_to_default:
	.fnstart
.LFB1:
	.loc 1 239 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL89:
	stmfd	sp!, {r3, r4, r5, lr}
	.save {r3, r4, r5, lr}
.LCFI20:
	.cfi_def_cfa_offset 16
	mov	r4, r0
	.cfi_offset 14, -4
	.cfi_offset 5, -8
	.cfi_offset 4, -12
	.cfi_offset 3, -16
	.loc 1 242 0
	movw	r3, #:lower16:2023117859
	movt	r3, #:upper16:2023117859
	str	r3, [r0, #0]
	.loc 1 246 0
	mvn	r3, #0
	strb	r3, [r0, #4]
	strb	r3, [r0, #5]
	strb	r3, [r0, #6]
	strb	r3, [r0, #7]
	strb	r3, [r0, #8]
	strb	r3, [r0, #9]
	.loc 1 249 0
	add	r0, r0, #4
.LVL90:
	mov	r1, #6
	bl	calculate_checksum
	strb	r0, [r4, #10]
	.loc 1 255 0
	mov	r3, #80
	strb	r3, [r4, #11]
	.loc 1 256 0
	mov	r3, #69
	strb	r3, [r4, #12]
	.loc 1 257 0
	mov	r3, #72
	strb	r3, [r4, #13]
	.loc 1 259 0
	mov	r3, #52
	strb	r3, [r4, #14]
	.loc 1 260 0
	strb	r3, [r4, #15]
	.loc 1 261 0
	mov	r5, #48
	strb	r5, [r4, #16]
	.loc 1 284 0
	add	r0, r4, #11
	mov	r1, #6
	bl	calculate_checksum
	strb	r0, [r4, #17]
	.loc 1 290 0
	mov	r3, #50
	strb	r3, [r4, #18]
	.loc 1 291 0
	strb	r5, [r4, #19]
	.loc 1 292 0
	mov	r3, #49
	strb	r3, [r4, #20]
	.loc 1 293 0
	mov	r3, #53
	strb	r3, [r4, #21]
	.loc 1 295 0
	add	r0, r4, #18
	mov	r1, #4
	bl	calculate_checksum
	strb	r0, [r4, #22]
	.loc 1 297 0
	mov	r0, r4
	mov	r1, #23
	bl	calculate_checksum
	strb	r0, [r4, #23]
	.loc 1 298 0
	ldmfd	sp!, {r3, r4, r5, pc}
	.cfi_endproc
.LFE1:
	.fnend
	.size	system_manager_set_product_info_to_default, .-system_manager_set_product_info_to_default
	.align	2
	.global	system_manager_init
	.type	system_manager_init, %function
system_manager_init:
	.fnstart
.LFB4:
	.loc 1 342 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	stmfd	sp!, {r3, r4, r5, lr}
	.save {r3, r4, r5, lr}
.LCFI21:
	.cfi_def_cfa_offset 16
	.loc 1 346 0
	movw	r3, #:lower16:.LANCHOR0
	.cfi_offset 14, -4
	.cfi_offset 5, -8
	.cfi_offset 4, -12
	.cfi_offset 3, -16
	movt	r3, #:upper16:.LANCHOR0
	mov	r2, #0
	str	r2, [r3, #568]
	.loc 1 347 0
	str	r2, [r3, #576]
	.loc 1 348 0
	str	r2, [r3, #4]
	.loc 1 349 0
	str	r2, [r3, #8]
	.loc 1 351 0
	movw	r4, #:lower16:PRODUCT_INFO
	movt	r4, #:upper16:PRODUCT_INFO
	mov	r0, #56
	mov	r1, r4
	bl	cmaFlashMemorySIDRead
	.loc 1 354 0
	mov	r0, r4
	bl	system_manager_check_product_info
	mov	r5, r0
.LVL91:
	.loc 1 357 0
	add	r0, r4, #28
	bl	system_manager_check_product_info
	.loc 1 359 0
	cmp	r5, #1
	movne	r3, #0
	moveq	r3, #1
	cmp	r0, #1
	cmpeq	r5, #1
.LVL92:
	ldmeqfd	sp!, {r3, r4, r5, pc}
	.loc 1 364 0
	orr	r5, r0, r5
.LVL93:
	tst	r5, #255
	bne	.L138
	.loc 1 368 0
	mov	r5, r4
	mov	r0, r4
.LVL94:
	bl	system_manager_set_product_info_to_default
	.loc 1 369 0
	add	r0, r4, #28
	bl	system_manager_set_product_info_to_default
	.loc 1 371 0
	mov	r0, #56
	mov	r1, r4
	bl	cmaFlashMemorySIDWrite
	ldmfd	sp!, {r3, r4, r5, pc}
.LVL95:
.L138:
	.loc 1 372 0
	cmp	r3, #0
	beq	.L139
	.loc 1 375 0
	ldr	r1, .L141
	mov	r0, r1
.LVL96:
	sub	r1, r1, #28
	mov	r2, #28
	bl	memcpy_b
	.loc 1 377 0
	mov	r0, #56
	mov	r1, r4
	bl	cmaFlashMemorySIDWrite
	ldmfd	sp!, {r3, r4, r5, pc}
.LVL97:
.L139:
	.loc 1 381 0
	movw	r1, #:lower16:PRODUCT_INFO
	movt	r1, #:upper16:PRODUCT_INFO
	mov	r0, r1
.LVL98:
	add	r1, r1, #28
	mov	r2, #28
	bl	memcpy_b
	.loc 1 383 0
	mov	r0, #56
	mov	r1, r4
	bl	cmaFlashMemorySIDWrite
	ldmfd	sp!, {r3, r4, r5, pc}
.L142:
	.align	2
.L141:
	.word	PRODUCT_INFO+28
	.cfi_endproc
.LFE4:
	.fnend
	.size	system_manager_init, .-system_manager_init
	.align	2
	.global	system_manager_set_serial_no
	.type	system_manager_set_serial_no, %function
system_manager_set_serial_no:
	.fnstart
.LFB3:
	.loc 1 306 0
	.cfi_startproc
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
.LVL99:
	stmfd	sp!, {r4, lr}
	.save {r4, lr}
.LCFI22:
	.cfi_def_cfa_offset 8
	.loc 1 306 0
	ldr	r2, .L147
	mov	r3, #0
	.loc 1 310 0
	movw	lr, #:lower16:PRODUCT_INFO
	.cfi_offset 14, -4
	.cfi_offset 4, -8
	movt	lr, #:upper16:PRODUCT_INFO
.L144:
	add	r1, lr, r3
	ldrb	ip, [r0, r3]	@ zero_extendqisi2
	strb	ip, [r1, #4]
	.loc 1 311 0
	ldrb	r1, [r0, r3]	@ zero_extendqisi2
	strb	r1, [r2, #28]
	add	r3, r3, #1
	add	r2, r2, #1
	.loc 1 308 0
	cmp	r3, #6
	bne	.L144
	.loc 1 314 0
	ldr	r4, .L147
	mov	r0, r4
.LVL100:
	mov	r1, #6
	bl	calculate_checksum
	uxtb	r0, r0
	sub	r4, r4, #4
	strb	r0, [r4, #10]
	.loc 1 315 0
	strb	r0, [r4, #38]
	.loc 1 317 0
	mov	r0, r4
	mov	r1, #23
	bl	calculate_checksum
	uxtb	r0, r0
	strb	r0, [r4, #23]
	.loc 1 318 0
	strb	r0, [r4, #51]
	.loc 1 320 0
	mov	r0, #56
	mov	r1, r4
	bl	cmaFlashMemorySIDWrite
	.loc 1 321 0
	ldmfd	sp!, {r4, pc}
.L148:
	.align	2
.L147:
	.word	PRODUCT_INFO+4
	.cfi_endproc
.LFE3:
	.fnend
	.size	system_manager_set_serial_no, .-system_manager_set_serial_no
	.global	wallpaper_mark
	.comm	s_UartCallBack,64,4
	.comm	PRODUCT_INFO,56,4
	.bss
	.align	2
	.set	.LANCHOR0,. + 0
	.type	wallpaper_backup_sts, %object
	.size	wallpaper_backup_sts, 1
wallpaper_backup_sts:
	.space	1
	.space	3
	.type	wallpaper_backup_func, %object
	.size	wallpaper_backup_func, 4
wallpaper_backup_func:
	.space	4
	.type	app_icon_write_func, %object
	.size	app_icon_write_func, 4
app_icon_write_func:
	.space	4
	.type	wallpaper_mark, %object
	.size	wallpaper_mark, 2
wallpaper_mark:
	.space	2
	.type	restart_mode, %object
	.size	restart_mode, 1
restart_mode:
	.space	1
	.type	sys_boot_mode_cmd, %object
	.size	sys_boot_mode_cmd, 1
sys_boot_mode_cmd:
	.space	1
	.type	Pow_AccOnTimer, %object
	.size	Pow_AccOnTimer, 256
Pow_AccOnTimer:
	.space	256
	.type	Pow_AccOffTimer, %object
	.size	Pow_AccOffTimer, 256
Pow_AccOffTimer:
	.space	256
	.type	Pow_TimerCount, %object
	.size	Pow_TimerCount, 40
Pow_TimerCount:
	.space	40
	.type	image_uncompress_func, %object
	.size	image_uncompress_func, 4
image_uncompress_func:
	.space	4
	.type	start_mode_val.26385, %object
	.size	start_mode_val.26385, 1
start_mode_val.26385:
	.space	1
	.space	3
	.type	prg_uncompress_func, %object
	.size	prg_uncompress_func, 4
prg_uncompress_func:
	.space	4
	.text
.Letext0:
	.section	.debug_loc,"",%progbits
.Ldebug_loc0:
.LLST2:
	.4byte	.LVL0-.Ltext0
	.4byte	.LVL1-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL2-.Ltext0
	.4byte	.LVL3-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST3:
	.4byte	.LVL1-.Ltext0
	.4byte	.LVL2-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL3-.Ltext0
	.4byte	.LVL4-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST5:
	.4byte	.LVL5-.Ltext0
	.4byte	.LVL6-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL7-.Ltext0
	.4byte	.LVL8-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST6:
	.4byte	.LVL6-.Ltext0
	.4byte	.LVL7-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL8-.Ltext0
	.4byte	.LVL9-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST8:
	.4byte	.LVL10-.Ltext0
	.4byte	.LVL11-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST17:
	.4byte	.LVL15-.Ltext0
	.4byte	.LVL16-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST19:
	.4byte	.LVL17-.Ltext0
	.4byte	.LVL18-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST20:
	.4byte	.LFB32-.Ltext0
	.4byte	.LCFI0-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI0-.Ltext0
	.4byte	.LFE32-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST21:
	.4byte	.LFB31-.Ltext0
	.4byte	.LCFI1-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI1-.Ltext0
	.4byte	.LFE31-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 16
	.4byte	0x0
	.4byte	0x0
.LLST22:
	.4byte	.LVL19-.Ltext0
	.4byte	.LVL20-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL20-.Ltext0
	.4byte	.LVL22-.Ltext0
	.2byte	0x1
	.byte	0x54
	.4byte	.LVL23-.Ltext0
	.4byte	.LVL24-.Ltext0
	.2byte	0x1
	.byte	0x54
	.4byte	.LVL25-.Ltext0
	.4byte	.LFE31-.Ltext0
	.2byte	0x1
	.byte	0x54
	.4byte	0x0
	.4byte	0x0
.LLST23:
	.4byte	.LVL19-.Ltext0
	.4byte	.LVL20-.Ltext0
	.2byte	0x1
	.byte	0x51
	.4byte	.LVL20-.Ltext0
	.4byte	.LFE31-.Ltext0
	.2byte	0x1
	.byte	0x55
	.4byte	0x0
	.4byte	0x0
.LLST24:
	.4byte	.LVL26-.Ltext0
	.4byte	.LVL28-.Ltext0
	.2byte	0x1
	.byte	0x52
	.4byte	0x0
	.4byte	0x0
.LLST25:
	.4byte	.LFB29-.Ltext0
	.4byte	.LCFI2-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI2-.Ltext0
	.4byte	.LFE29-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST26:
	.4byte	.LVL29-.Ltext0
	.4byte	.LVL30-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST27:
	.4byte	.LVL29-.Ltext0
	.4byte	.LVL31-.Ltext0
	.2byte	0x1
	.byte	0x51
	.4byte	0x0
	.4byte	0x0
.LLST28:
	.4byte	.LVL31-.Ltext0
	.4byte	.LVL33-.Ltext0
	.2byte	0x1
	.byte	0x51
	.4byte	0x0
	.4byte	0x0
.LLST29:
	.4byte	.LFB26-.Ltext0
	.4byte	.LCFI3-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI3-.Ltext0
	.4byte	.LFE26-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST30:
	.4byte	.LFB20-.Ltext0
	.4byte	.LCFI4-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI4-.Ltext0
	.4byte	.LFE20-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST31:
	.4byte	.LVL34-.Ltext0
	.4byte	.LVL35-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST32:
	.4byte	.LFB11-.Ltext0
	.4byte	.LCFI5-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI5-.Ltext0
	.4byte	.LFE11-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST33:
	.4byte	.LFB6-.Ltext0
	.4byte	.LCFI6-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI6-.Ltext0
	.4byte	.LFE6-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST34:
	.4byte	.LVL36-.Ltext0
	.4byte	.LVL37-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST35:
	.4byte	.LFB25-.Ltext0
	.4byte	.LCFI7-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI7-.Ltext0
	.4byte	.LFE25-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST36:
	.4byte	.LVL38-.Ltext0
	.4byte	.LVL39-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST37:
	.4byte	.LVL38-.Ltext0
	.4byte	.LVL39-.Ltext0
	.2byte	0x1
	.byte	0x51
	.4byte	0x0
	.4byte	0x0
.LLST38:
	.4byte	.LVL38-.Ltext0
	.4byte	.LVL39-.Ltext0
	.2byte	0x1
	.byte	0x52
	.4byte	0x0
	.4byte	0x0
.LLST39:
	.4byte	.LFB24-.Ltext0
	.4byte	.LCFI8-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI8-.Ltext0
	.4byte	.LFE24-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST40:
	.4byte	.LVL40-.Ltext0
	.4byte	.LVL41-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST41:
	.4byte	.LVL40-.Ltext0
	.4byte	.LVL41-.Ltext0
	.2byte	0x1
	.byte	0x51
	.4byte	0x0
	.4byte	0x0
.LLST42:
	.4byte	.LVL40-.Ltext0
	.4byte	.LVL41-.Ltext0
	.2byte	0x1
	.byte	0x52
	.4byte	0x0
	.4byte	0x0
.LLST43:
	.4byte	.LFB23-.Ltext0
	.4byte	.LCFI9-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI9-.Ltext0
	.4byte	.LFE23-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST44:
	.4byte	.LFB22-.Ltext0
	.4byte	.LCFI10-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI10-.Ltext0
	.4byte	.LFE22-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST45:
	.4byte	.LFB21-.Ltext0
	.4byte	.LCFI11-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI11-.Ltext0
	.4byte	.LFE21-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST46:
	.4byte	.LFB19-.Ltext0
	.4byte	.LCFI12-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI12-.Ltext0
	.4byte	.LFE19-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST47:
	.4byte	.LFB17-.Ltext0
	.4byte	.LCFI13-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI13-.Ltext0
	.4byte	.LFE17-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST48:
	.4byte	.LFB14-.Ltext0
	.4byte	.LCFI14-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI14-.Ltext0
	.4byte	.LCFI15-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 36
	.4byte	.LCFI15-.Ltext0
	.4byte	.LFE14-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 56
	.4byte	0x0
	.4byte	0x0
.LLST49:
	.4byte	.LVL42-.Ltext0
	.4byte	.LVL45-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST50:
	.4byte	.LVL43-.Ltext0
	.4byte	.LVL44-.Ltext0
	.2byte	0x2
	.byte	0x91
	.sleb128 -52
	.4byte	.LVL44-.Ltext0
	.4byte	.LVL46-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 12
	.4byte	.LVL46-.Ltext0
	.4byte	.LVL47-.Ltext0
	.2byte	0x1
	.byte	0x53
	.4byte	.LVL47-.Ltext0
	.4byte	.LVL49-.Ltext0
	.2byte	0x2
	.byte	0x91
	.sleb128 -52
	.4byte	.LVL49-.Ltext0
	.4byte	.LVL50-.Ltext0
	.2byte	0x1
	.byte	0x53
	.4byte	.LVL50-.Ltext0
	.4byte	.LVL52-.Ltext0
	.2byte	0x2
	.byte	0x91
	.sleb128 -52
	.4byte	.LVL52-.Ltext0
	.4byte	.LVL53-.Ltext0
	.2byte	0x1
	.byte	0x53
	.4byte	.LVL53-.Ltext0
	.4byte	.LFE14-.Ltext0
	.2byte	0x2
	.byte	0x91
	.sleb128 -52
	.4byte	0x0
	.4byte	0x0
.LLST51:
	.4byte	.LFB10-.Ltext0
	.4byte	.LCFI16-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI16-.Ltext0
	.4byte	.LFE10-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST52:
	.4byte	.LVL54-.Ltext0
	.4byte	.LVL55-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL56-.Ltext0
	.4byte	.LVL57-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL58-.Ltext0
	.4byte	.LVL59-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL60-.Ltext0
	.4byte	.LVL61-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL62-.Ltext0
	.4byte	.LVL63-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL64-.Ltext0
	.4byte	.LVL65-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL66-.Ltext0
	.4byte	.LVL67-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL68-.Ltext0
	.4byte	.LVL69-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL70-.Ltext0
	.4byte	.LVL71-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL72-.Ltext0
	.4byte	.LVL73-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL74-.Ltext0
	.4byte	.LVL75-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL76-.Ltext0
	.4byte	.LVL77-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL77-.Ltext0
	.4byte	.LFE10-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST53:
	.4byte	.LFB5-.Ltext0
	.4byte	.LCFI17-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI17-.Ltext0
	.4byte	.LCFI18-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 36
	.4byte	.LCFI18-.Ltext0
	.4byte	.LFE5-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 56
	.4byte	0x0
	.4byte	0x0
.LLST54:
	.4byte	.LVL78-.Ltext0
	.4byte	.LVL81-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST55:
	.4byte	.LVL79-.Ltext0
	.4byte	.LVL82-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 12
	.4byte	.LVL82-.Ltext0
	.4byte	.LFE5-.Ltext0
	.2byte	0x2
	.byte	0x91
	.sleb128 -52
	.4byte	0x0
	.4byte	0x0
.LLST56:
	.4byte	.LVL79-.Ltext0
	.4byte	.LVL84-.Ltext0
	.2byte	0x1
	.byte	0x55
	.4byte	.LVL85-.Ltext0
	.4byte	.LFE5-.Ltext0
	.2byte	0x1
	.byte	0x55
	.4byte	0x0
	.4byte	0x0
.LLST57:
	.4byte	.LFB0-.Ltext0
	.4byte	.LCFI19-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI19-.Ltext0
	.4byte	.LFE0-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST58:
	.4byte	.LVL86-.Ltext0
	.4byte	.LVL87-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL87-.Ltext0
	.4byte	.LFE0-.Ltext0
	.2byte	0x1
	.byte	0x54
	.4byte	0x0
	.4byte	0x0
.LLST59:
	.4byte	.LFB1-.Ltext0
	.4byte	.LCFI20-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI20-.Ltext0
	.4byte	.LFE1-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 16
	.4byte	0x0
	.4byte	0x0
.LLST60:
	.4byte	.LVL89-.Ltext0
	.4byte	.LVL90-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL90-.Ltext0
	.4byte	.LFE1-.Ltext0
	.2byte	0x1
	.byte	0x54
	.4byte	0x0
	.4byte	0x0
.LLST61:
	.4byte	.LFB4-.Ltext0
	.4byte	.LCFI21-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI21-.Ltext0
	.4byte	.LFE4-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 16
	.4byte	0x0
	.4byte	0x0
.LLST62:
	.4byte	.LVL91-.Ltext0
	.4byte	.LVL93-.Ltext0
	.2byte	0x1
	.byte	0x55
	.4byte	0x0
	.4byte	0x0
.LLST63:
	.4byte	.LVL92-.Ltext0
	.4byte	.LVL94-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL95-.Ltext0
	.4byte	.LVL96-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	.LVL97-.Ltext0
	.4byte	.LVL98-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
.LLST64:
	.4byte	.LFB3-.Ltext0
	.4byte	.LCFI22-.Ltext0
	.2byte	0x1
	.byte	0x5d
	.4byte	.LCFI22-.Ltext0
	.4byte	.LFE3-.Ltext0
	.2byte	0x2
	.byte	0x7d
	.sleb128 8
	.4byte	0x0
	.4byte	0x0
.LLST65:
	.4byte	.LVL99-.Ltext0
	.4byte	.LVL100-.Ltext0
	.2byte	0x1
	.byte	0x50
	.4byte	0x0
	.4byte	0x0
	.file 2 "../../../include/itron.h"
	.file 3 "../../../Platform/include/MD_Public.h"
	.file 4 "../../../goni/Common/include/../common_mem.h"
	.file 5 "../../../goni/Common/include/system_manager.h"
	.file 6 "../../../Platform/gerdaC_dd/cm/serial/uart_dd.h"
	.file 7 "../include/../../Power/include/Power_if.h"
	.file 8 "../include/Initializer.h"
	.file 9 "../../../config/kernel_id.h"
	.section	.debug_info
	.4byte	0x112c
	.2byte	0x2
	.4byte	.Ldebug_abbrev0
	.byte	0x4
	.uleb128 0x1
	.4byte	.LASF191
	.byte	0x1
	.4byte	.LASF192
	.4byte	.LASF193
	.4byte	.Ltext0
	.4byte	.Letext0
	.4byte	.Ldebug_line0
	.uleb128 0x2
	.byte	0x1
	.byte	0x6
	.4byte	.LASF0
	.uleb128 0x3
	.ascii	"H\000"
	.byte	0x2
	.byte	0x24
	.4byte	0x35
	.uleb128 0x2
	.byte	0x2
	.byte	0x5
	.4byte	.LASF1
	.uleb128 0x3
	.ascii	"W\000"
	.byte	0x2
	.byte	0x25
	.4byte	0x45
	.uleb128 0x2
	.byte	0x4
	.byte	0x5
	.4byte	.LASF2
	.uleb128 0x3
	.ascii	"UB\000"
	.byte	0x2
	.byte	0x26
	.4byte	0x56
	.uleb128 0x2
	.byte	0x1
	.byte	0x8
	.4byte	.LASF3
	.uleb128 0x2
	.byte	0x2
	.byte	0x7
	.4byte	.LASF4
	.uleb128 0x2
	.byte	0x4
	.byte	0x7
	.4byte	.LASF5
	.uleb128 0x2
	.byte	0x8
	.byte	0x5
	.4byte	.LASF6
	.uleb128 0x2
	.byte	0x8
	.byte	0x7
	.4byte	.LASF7
	.uleb128 0x4
	.byte	0x4
	.uleb128 0x5
	.byte	0x4
	.4byte	0x81
	.uleb128 0x6
	.byte	0x1
	.uleb128 0x7
	.4byte	.LASF8
	.byte	0x2
	.byte	0x36
	.4byte	0x4c
	.uleb128 0x3
	.ascii	"ID\000"
	.byte	0x2
	.byte	0x39
	.4byte	0x2c
	.uleb128 0x7
	.4byte	.LASF9
	.byte	0x2
	.byte	0x47
	.4byte	0x3c
	.uleb128 0x8
	.byte	0x4
	.byte	0x7
	.uleb128 0x9
	.byte	0x4
	.byte	0x5
	.ascii	"int\000"
	.uleb128 0x2
	.byte	0x4
	.byte	0x7
	.4byte	.LASF10
	.uleb128 0x5
	.byte	0x4
	.4byte	0x56
	.uleb128 0x7
	.4byte	.LASF11
	.byte	0x3
	.byte	0x18
	.4byte	0x64
	.uleb128 0x7
	.4byte	.LASF12
	.byte	0x4
	.byte	0xc
	.4byte	0x45
	.uleb128 0xa
	.byte	0x1
	.byte	0x4
	.byte	0x11
	.4byte	0xf7
	.uleb128 0xb
	.4byte	.LASF13
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF14
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF15
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF16
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF17
	.sleb128 4
	.byte	0x0
	.uleb128 0xa
	.byte	0x1
	.byte	0x5
	.byte	0x19
	.4byte	0x124
	.uleb128 0xb
	.4byte	.LASF18
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF19
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF20
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF21
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF22
	.sleb128 4
	.uleb128 0xb
	.4byte	.LASF23
	.sleb128 5
	.byte	0x0
	.uleb128 0xa
	.byte	0x1
	.byte	0x5
	.byte	0x22
	.4byte	0x14b
	.uleb128 0xb
	.4byte	.LASF24
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF25
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF26
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF27
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF28
	.sleb128 4
	.byte	0x0
	.uleb128 0x7
	.4byte	.LASF29
	.byte	0x5
	.byte	0x28
	.4byte	0x124
	.uleb128 0xc
	.4byte	.LASF107
	.byte	0x1c
	.byte	0x5
	.byte	0x29
	.4byte	0x1e1
	.uleb128 0xd
	.4byte	.LASF30
	.byte	0x5
	.byte	0x2a
	.4byte	0x64
	.byte	0x2
	.byte	0x23
	.uleb128 0x0
	.uleb128 0xd
	.4byte	.LASF31
	.byte	0x5
	.byte	0x2b
	.4byte	0x1e1
	.byte	0x2
	.byte	0x23
	.uleb128 0x4
	.uleb128 0xd
	.4byte	.LASF32
	.byte	0x5
	.byte	0x2c
	.4byte	0x56
	.byte	0x2
	.byte	0x23
	.uleb128 0xa
	.uleb128 0xd
	.4byte	.LASF33
	.byte	0x5
	.byte	0x2d
	.4byte	0x1e1
	.byte	0x2
	.byte	0x23
	.uleb128 0xb
	.uleb128 0xd
	.4byte	.LASF34
	.byte	0x5
	.byte	0x2e
	.4byte	0x56
	.byte	0x2
	.byte	0x23
	.uleb128 0x11
	.uleb128 0xd
	.4byte	.LASF35
	.byte	0x5
	.byte	0x2f
	.4byte	0x1f1
	.byte	0x2
	.byte	0x23
	.uleb128 0x12
	.uleb128 0xd
	.4byte	.LASF36
	.byte	0x5
	.byte	0x30
	.4byte	0x56
	.byte	0x2
	.byte	0x23
	.uleb128 0x16
	.uleb128 0xd
	.4byte	.LASF37
	.byte	0x5
	.byte	0x31
	.4byte	0x56
	.byte	0x2
	.byte	0x23
	.uleb128 0x17
	.uleb128 0xd
	.4byte	.LASF38
	.byte	0x5
	.byte	0x32
	.4byte	0x1f1
	.byte	0x2
	.byte	0x23
	.uleb128 0x18
	.byte	0x0
	.uleb128 0xe
	.4byte	0x56
	.4byte	0x1f1
	.uleb128 0xf
	.4byte	0xa3
	.byte	0x5
	.byte	0x0
	.uleb128 0xe
	.4byte	0x56
	.4byte	0x201
	.uleb128 0xf
	.4byte	0xa3
	.byte	0x3
	.byte	0x0
	.uleb128 0x10
	.4byte	.LASF194
	.byte	0x1
	.byte	0x5
	.byte	0x36
	.4byte	0x256
	.uleb128 0xb
	.4byte	.LASF39
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF40
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF41
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF42
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF43
	.sleb128 4
	.uleb128 0xb
	.4byte	.LASF44
	.sleb128 5
	.uleb128 0xb
	.4byte	.LASF45
	.sleb128 6
	.uleb128 0xb
	.4byte	.LASF46
	.sleb128 7
	.uleb128 0xb
	.4byte	.LASF47
	.sleb128 8
	.uleb128 0xb
	.4byte	.LASF48
	.sleb128 9
	.uleb128 0xb
	.4byte	.LASF49
	.sleb128 10
	.uleb128 0xb
	.4byte	.LASF50
	.sleb128 11
	.byte	0x0
	.uleb128 0x11
	.byte	0x1
	.4byte	0x262
	.uleb128 0x12
	.4byte	0xba
	.byte	0x0
	.uleb128 0x5
	.byte	0x4
	.4byte	0x256
	.uleb128 0xa
	.byte	0x1
	.byte	0x6
	.byte	0x2a
	.4byte	0x2a7
	.uleb128 0xb
	.4byte	.LASF51
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF52
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF53
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF54
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF55
	.sleb128 4
	.uleb128 0xb
	.4byte	.LASF56
	.sleb128 5
	.uleb128 0xb
	.4byte	.LASF57
	.sleb128 6
	.uleb128 0xb
	.4byte	.LASF58
	.sleb128 7
	.uleb128 0xb
	.4byte	.LASF59
	.sleb128 8
	.byte	0x0
	.uleb128 0x7
	.4byte	.LASF60
	.byte	0x6
	.byte	0x34
	.4byte	0x268
	.uleb128 0x13
	.byte	0x8
	.byte	0x6
	.byte	0xb7
	.4byte	0x2d7
	.uleb128 0xd
	.4byte	.LASF61
	.byte	0x6
	.byte	0xb8
	.4byte	0x2e3
	.byte	0x2
	.byte	0x23
	.uleb128 0x0
	.uleb128 0xd
	.4byte	.LASF62
	.byte	0x6
	.byte	0xb9
	.4byte	0x2e3
	.byte	0x2
	.byte	0x23
	.uleb128 0x4
	.byte	0x0
	.uleb128 0x11
	.byte	0x1
	.4byte	0x2e3
	.uleb128 0x12
	.4byte	0x2a7
	.byte	0x0
	.uleb128 0x5
	.byte	0x4
	.4byte	0x2d7
	.uleb128 0x7
	.4byte	.LASF63
	.byte	0x6
	.byte	0xba
	.4byte	0x2b2
	.uleb128 0xa
	.byte	0x1
	.byte	0x7
	.byte	0x20
	.4byte	0x3c3
	.uleb128 0xb
	.4byte	.LASF64
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF65
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF66
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF67
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF68
	.sleb128 4
	.uleb128 0xb
	.4byte	.LASF69
	.sleb128 5
	.uleb128 0xb
	.4byte	.LASF70
	.sleb128 6
	.uleb128 0xb
	.4byte	.LASF71
	.sleb128 7
	.uleb128 0xb
	.4byte	.LASF72
	.sleb128 8
	.uleb128 0xb
	.4byte	.LASF73
	.sleb128 9
	.uleb128 0xb
	.4byte	.LASF74
	.sleb128 10
	.uleb128 0xb
	.4byte	.LASF75
	.sleb128 11
	.uleb128 0xb
	.4byte	.LASF76
	.sleb128 12
	.uleb128 0xb
	.4byte	.LASF77
	.sleb128 13
	.uleb128 0xb
	.4byte	.LASF78
	.sleb128 14
	.uleb128 0xb
	.4byte	.LASF79
	.sleb128 15
	.uleb128 0xb
	.4byte	.LASF80
	.sleb128 16
	.uleb128 0xb
	.4byte	.LASF81
	.sleb128 17
	.uleb128 0xb
	.4byte	.LASF82
	.sleb128 18
	.uleb128 0xb
	.4byte	.LASF83
	.sleb128 19
	.uleb128 0xb
	.4byte	.LASF84
	.sleb128 20
	.uleb128 0xb
	.4byte	.LASF85
	.sleb128 21
	.uleb128 0xb
	.4byte	.LASF86
	.sleb128 22
	.uleb128 0xb
	.4byte	.LASF87
	.sleb128 23
	.uleb128 0xb
	.4byte	.LASF88
	.sleb128 24
	.uleb128 0xb
	.4byte	.LASF89
	.sleb128 25
	.uleb128 0xb
	.4byte	.LASF90
	.sleb128 26
	.uleb128 0xb
	.4byte	.LASF91
	.sleb128 27
	.uleb128 0xb
	.4byte	.LASF92
	.sleb128 28
	.uleb128 0xb
	.4byte	.LASF93
	.sleb128 29
	.uleb128 0xb
	.4byte	.LASF94
	.sleb128 30
	.uleb128 0xb
	.4byte	.LASF95
	.sleb128 31
	.uleb128 0xb
	.4byte	.LASF96
	.sleb128 32
	.byte	0x0
	.uleb128 0x13
	.byte	0x8
	.byte	0x8
	.byte	0x80
	.4byte	0x3e8
	.uleb128 0xd
	.4byte	.LASF97
	.byte	0x8
	.byte	0x81
	.4byte	0x64
	.byte	0x2
	.byte	0x23
	.uleb128 0x0
	.uleb128 0xd
	.4byte	.LASF98
	.byte	0x8
	.byte	0x82
	.4byte	0x56
	.byte	0x2
	.byte	0x23
	.uleb128 0x4
	.byte	0x0
	.uleb128 0x7
	.4byte	.LASF99
	.byte	0x8
	.byte	0x83
	.4byte	0x3c3
	.uleb128 0xa
	.byte	0x1
	.byte	0x1
	.byte	0x4f
	.4byte	0x420
	.uleb128 0xb
	.4byte	.LASF100
	.sleb128 0
	.uleb128 0xb
	.4byte	.LASF101
	.sleb128 1
	.uleb128 0xb
	.4byte	.LASF102
	.sleb128 2
	.uleb128 0xb
	.4byte	.LASF103
	.sleb128 3
	.uleb128 0xb
	.4byte	.LASF104
	.sleb128 4
	.uleb128 0xb
	.4byte	.LASF105
	.sleb128 5
	.byte	0x0
	.uleb128 0x7
	.4byte	.LASF106
	.byte	0x1
	.byte	0x56
	.4byte	0x3f3
	.uleb128 0xc
	.4byte	.LASF108
	.byte	0x38
	.byte	0x1
	.byte	0x78
	.4byte	0x454
	.uleb128 0xd
	.4byte	.LASF109
	.byte	0x1
	.byte	0x79
	.4byte	0x156
	.byte	0x2
	.byte	0x23
	.uleb128 0x0
	.uleb128 0xd
	.4byte	.LASF110
	.byte	0x1
	.byte	0x7a
	.4byte	0x156
	.byte	0x2
	.byte	0x23
	.uleb128 0x1c
	.byte	0x0
	.uleb128 0x13
	.byte	0x8
	.byte	0x1
	.byte	0x8c
	.4byte	0x479
	.uleb128 0xd
	.4byte	.LASF111
	.byte	0x1
	.byte	0x8d
	.4byte	0x45
	.byte	0x2
	.byte	0x23
	.uleb128 0x0
	.uleb128 0xd
	.4byte	.LASF112
	.byte	0x1
	.byte	0x8e
	.4byte	0x56
	.byte	0x2
	.byte	0x23
	.uleb128 0x4
	.byte	0x0
	.uleb128 0x7
	.4byte	.LASF113
	.byte	0x1
	.byte	0x8f
	.4byte	0x454
	.uleb128 0x13
	.byte	0x8
	.byte	0x1
	.byte	0x92
	.4byte	0x4a9
	.uleb128 0xd
	.4byte	.LASF114
	.byte	0x1
	.byte	0x93
	.4byte	0x5d
	.byte	0x2
	.byte	0x23
	.uleb128 0x0
	.uleb128 0xd
	.4byte	.LASF115
	.byte	0x1
	.byte	0x94
	.4byte	0x7b
	.byte	0x2
	.byte	0x23
	.uleb128 0x4
	.byte	0x0
	.uleb128 0x7
	.4byte	.LASF116
	.byte	0x1
	.byte	0x95
	.4byte	0x484
	.uleb128 0x14
	.byte	0x1
	.4byte	.LASF134
	.byte	0x1
	.2byte	0x12c
	.4byte	0x4cb
	.4byte	.LFB2
	.4byte	.LFE2
	.byte	0x1
	.byte	0x5d
	.uleb128 0x5
	.byte	0x4
	.4byte	0x4d1
	.uleb128 0x15
	.4byte	.LASF107
	.4byte	0x156
	.uleb128 0x16
	.byte	0x1
	.4byte	.LASF117
	.byte	0x1
	.2byte	0x390
	.byte	0x1
	.4byte	0x56
	.4byte	.LFB7
	.4byte	.LFE7
	.byte	0x1
	.byte	0x5d
	.4byte	0x517
	.uleb128 0x17
	.4byte	.LASF119
	.byte	0x1
	.2byte	0x390
	.4byte	0x79
	.4byte	.LLST2
	.uleb128 0x18
	.ascii	"ret\000"
	.byte	0x1
	.2byte	0x393
	.4byte	0x56
	.4byte	.LLST3
	.byte	0x0
	.uleb128 0x16
	.byte	0x1
	.4byte	.LASF118
	.byte	0x1
	.2byte	0x3b3
	.byte	0x1
	.4byte	0x56
	.4byte	.LFB8
	.4byte	.LFE8
	.byte	0x1
	.byte	0x5d
	.4byte	0x554
	.uleb128 0x17
	.4byte	.LASF119
	.byte	0x1
	.2byte	0x3b3
	.4byte	0x79
	.4byte	.LLST5
	.uleb128 0x18
	.ascii	"ret\000"
	.byte	0x1
	.2byte	0x3b5
	.4byte	0x56
	.4byte	.LLST6
	.byte	0x0
	.uleb128 0x16
	.byte	0x1
	.4byte	.LASF120
	.byte	0x1
	.2byte	0x3dd
	.byte	0x1
	.4byte	0x56
	.4byte	.LFB9
	.4byte	.LFE9
	.byte	0x1
	.byte	0x5d
	.4byte	0x581
	.uleb128 0x17
	.4byte	.LASF119
	.byte	0x1
	.2byte	0x3dd
	.4byte	0x79
	.4byte	.LLST8
	.byte	0x0
	.uleb128 0x19
	.byte	0x1
	.4byte	.LASF124
	.byte	0x1
	.2byte	0x453
	.byte	0x1
	.4byte	0x56
	.4byte	.LFB12
	.4byte	.LFE12
	.byte	0x1
	.byte	0x5d
	.uleb128 0x1a
	.byte	0x1
	.4byte	.LASF121
	.byte	0x1
	.2byte	0x46a
	.byte	0x1
	.4byte	.LFB13
	.4byte	.LFE13
	.byte	0x1
	.byte	0x5d
	.4byte	0x5be
	.uleb128 0x1b
	.ascii	"dmy\000"
	.byte	0x1
	.2byte	0x46c
	.4byte	0x5be
	.byte	0x0
	.uleb128 0x1c
	.4byte	0x5d
	.uleb128 0x1a
	.byte	0x1
	.4byte	.LASF122
	.byte	0x1
	.2byte	0x516
	.byte	0x1
	.4byte	.LFB15
	.4byte	.LFE15
	.byte	0x1
	.byte	0x5d
	.4byte	0x5ea
	.uleb128 0x1d
	.4byte	.LASF123
	.byte	0x1
	.2byte	0x516
	.4byte	0x56
	.byte	0x1
	.byte	0x50
	.byte	0x0
	.uleb128 0x19
	.byte	0x1
	.4byte	.LASF125
	.byte	0x1
	.2byte	0x51b
	.byte	0x1
	.4byte	0x56
	.4byte	.LFB16
	.4byte	.LFE16
	.byte	0x1
	.byte	0x5d
	.uleb128 0x19
	.byte	0x1
	.4byte	.LASF126
	.byte	0x1
	.2byte	0x541
	.byte	0x1
	.4byte	0x14b
	.4byte	.LFB18
	.4byte	.LFE18
	.byte	0x1
	.byte	0x5d
	.uleb128 0x1a
	.byte	0x1
	.4byte	.LASF127
	.byte	0x1
	.2byte	0x5fb
	.byte	0x1
	.4byte	.LFB28
	.4byte	.LFE28
	.byte	0x1
	.byte	0x5d
	.4byte	0x65d
	.uleb128 0x1d
	.4byte	.LASF128
	.byte	0x1
	.2byte	0x5fb
	.4byte	0x56
	.byte	0x1
	.byte	0x50
	.uleb128 0x1d
	.4byte	.LASF111
	.byte	0x1
	.2byte	0x5fb
	.4byte	0x5d
	.byte	0x1
	.byte	0x51
	.uleb128 0x1d
	.4byte	.LASF112
	.byte	0x1
	.2byte	0x5fb
	.4byte	0x56
	.byte	0x1
	.byte	0x52
	.byte	0x0
	.uleb128 0x1a
	.byte	0x1
	.4byte	.LASF129
	.byte	0x1
	.2byte	0x62a
	.byte	0x1
	.4byte	.LFB30
	.4byte	.LFE30
	.byte	0x1
	.byte	0x5d
	.4byte	0x6a0
	.uleb128 0x1d
	.4byte	.LASF128
	.byte	0x1
	.2byte	0x62a
	.4byte	0x56
	.byte	0x1
	.byte	0x50
	.uleb128 0x1d
	.4byte	.LASF111
	.byte	0x1
	.2byte	0x62a
	.4byte	0x5d
	.byte	0x1
	.byte	0x51
	.uleb128 0x1d
	.4byte	.LASF112
	.byte	0x1
	.2byte	0x62a
	.4byte	0x56
	.byte	0x1
	.byte	0x52
	.byte	0x0
	.uleb128 0x16
	.byte	0x1
	.4byte	.LASF130
	.byte	0x1
	.2byte	0x676
	.byte	0x1
	.4byte	0x56
	.4byte	.LFB33
	.4byte	.LFE33
	.byte	0x1
	.byte	0x5d
	.4byte	0x6cd
	.uleb128 0x17
	.4byte	.LASF128
	.byte	0x1
	.2byte	0x676
	.4byte	0x56
	.4byte	.LLST17
	.byte	0x0
	.uleb128 0x1a
	.byte	0x1
	.4byte	.LASF131
	.byte	0x1
	.2byte	0x67b
	.byte	0x1
	.4byte	.LFB34
	.4byte	.LFE34
	.byte	0x1
	.byte	0x5d
	.4byte	0x712
	.uleb128 0x17
	.4byte	.LASF132
	.byte	0x1
	.2byte	0x67b
	.4byte	0x56
	.4byte	.LLST19
	.uleb128 0x1d
	.4byte	.LASF114
	.byte	0x1
	.2byte	0x67b
	.4byte	0x5d
	.byte	0x1
	.byte	0x51
	.uleb128 0x1d
	.4byte	.LASF133
	.byte	0x1
	.2byte	0x67b
	.4byte	0x262
	.byte	0x1
	.byte	0x52
	.byte	0x0
	.uleb128 0x1e
	.byte	0x1
	.4byte	.LASF135
	.byte	0x1
	.2byte	0x66f
	.byte	0x1
	.4byte	.LFB32
	.4byte	.LFE32
	.4byte	.LLST20
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF136
	.byte	0x1
	.2byte	0x636
	.byte	0x1
	.4byte	.LFB31
	.4byte	.LFE31
	.4byte	.LLST21
	.4byte	0x78d
	.uleb128 0x17
	.4byte	.LASF128
	.byte	0x1
	.2byte	0x636
	.4byte	0x56
	.4byte	.LLST22
	.uleb128 0x17
	.4byte	.LASF112
	.byte	0x1
	.2byte	0x636
	.4byte	0x56
	.4byte	.LLST23
	.uleb128 0x20
	.4byte	.LASF137
	.byte	0x1
	.2byte	0x638
	.4byte	0x56
	.uleb128 0x21
	.4byte	.LASF138
	.byte	0x1
	.2byte	0x639
	.4byte	0x56
	.4byte	.LLST24
	.uleb128 0x22
	.4byte	.LASF139
	.byte	0x1
	.2byte	0x63a
	.4byte	0x56
	.byte	0x1
	.byte	0x56
	.byte	0x0
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF140
	.byte	0x1
	.2byte	0x607
	.byte	0x1
	.4byte	.LFB29
	.4byte	.LFE29
	.4byte	.LLST25
	.4byte	0x7e4
	.uleb128 0x17
	.4byte	.LASF128
	.byte	0x1
	.2byte	0x607
	.4byte	0x56
	.4byte	.LLST26
	.uleb128 0x17
	.4byte	.LASF112
	.byte	0x1
	.2byte	0x607
	.4byte	0x56
	.4byte	.LLST27
	.uleb128 0x20
	.4byte	.LASF137
	.byte	0x1
	.2byte	0x609
	.4byte	0x56
	.uleb128 0x21
	.4byte	.LASF141
	.byte	0x1
	.2byte	0x60a
	.4byte	0x56
	.4byte	.LLST28
	.byte	0x0
	.uleb128 0x1e
	.byte	0x1
	.4byte	.LASF142
	.byte	0x1
	.2byte	0x5a3
	.byte	0x1
	.4byte	.LFB26
	.4byte	.LFE26
	.4byte	.LLST29
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF143
	.byte	0x1
	.2byte	0x54b
	.byte	0x1
	.4byte	.LFB20
	.4byte	.LFE20
	.4byte	.LLST30
	.4byte	0x825
	.uleb128 0x17
	.4byte	.LASF123
	.byte	0x1
	.2byte	0x54b
	.4byte	0x14b
	.4byte	.LLST31
	.byte	0x0
	.uleb128 0x1e
	.byte	0x1
	.4byte	.LASF144
	.byte	0x1
	.2byte	0x436
	.byte	0x1
	.4byte	.LFB11
	.4byte	.LFE11
	.4byte	.LLST32
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF145
	.byte	0x1
	.2byte	0x35a
	.byte	0x1
	.4byte	.LFB6
	.4byte	.LFE6
	.4byte	.LLST33
	.4byte	0x866
	.uleb128 0x17
	.4byte	.LASF119
	.byte	0x1
	.2byte	0x35a
	.4byte	0x79
	.4byte	.LLST34
	.byte	0x0
	.uleb128 0x23
	.byte	0x1
	.4byte	.LASF146
	.byte	0x1
	.2byte	0x598
	.byte	0x1
	.4byte	0xc5
	.4byte	.LFB25
	.4byte	.LFE25
	.4byte	.LLST35
	.4byte	0x8b5
	.uleb128 0x17
	.4byte	.LASF147
	.byte	0x1
	.2byte	0x598
	.4byte	0xb4
	.4byte	.LLST36
	.uleb128 0x17
	.4byte	.LASF148
	.byte	0x1
	.2byte	0x598
	.4byte	0xb4
	.4byte	.LLST37
	.uleb128 0x24
	.ascii	"len\000"
	.byte	0x1
	.2byte	0x598
	.4byte	0x56
	.4byte	.LLST38
	.byte	0x0
	.uleb128 0x23
	.byte	0x1
	.4byte	.LASF149
	.byte	0x1
	.2byte	0x58d
	.byte	0x1
	.4byte	0xc5
	.4byte	.LFB24
	.4byte	.LFE24
	.4byte	.LLST39
	.4byte	0x904
	.uleb128 0x17
	.4byte	.LASF147
	.byte	0x1
	.2byte	0x58d
	.4byte	0xb4
	.4byte	.LLST40
	.uleb128 0x17
	.4byte	.LASF148
	.byte	0x1
	.2byte	0x58d
	.4byte	0xb4
	.4byte	.LLST41
	.uleb128 0x24
	.ascii	"len\000"
	.byte	0x1
	.2byte	0x58d
	.4byte	0x56
	.4byte	.LLST42
	.byte	0x0
	.uleb128 0x25
	.byte	0x1
	.4byte	.LASF150
	.byte	0x1
	.2byte	0x581
	.byte	0x1
	.4byte	0xc5
	.4byte	.LFB23
	.4byte	.LFE23
	.4byte	.LLST43
	.uleb128 0x25
	.byte	0x1
	.4byte	.LASF151
	.byte	0x1
	.2byte	0x576
	.byte	0x1
	.4byte	0xc5
	.4byte	.LFB22
	.4byte	.LFE22
	.4byte	.LLST44
	.uleb128 0x25
	.byte	0x1
	.4byte	.LASF152
	.byte	0x1
	.2byte	0x56b
	.byte	0x1
	.4byte	0xc5
	.4byte	.LFB21
	.4byte	.LFE21
	.4byte	.LLST45
	.uleb128 0x1e
	.byte	0x1
	.4byte	.LASF153
	.byte	0x1
	.2byte	0x546
	.byte	0x1
	.4byte	.LFB19
	.4byte	.LFE19
	.4byte	.LLST46
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF154
	.byte	0x1
	.2byte	0x520
	.byte	0x1
	.4byte	.LFB17
	.4byte	.LFE17
	.4byte	.LLST47
	.4byte	0x98f
	.uleb128 0x20
	.4byte	.LASF155
	.byte	0x1
	.2byte	0x522
	.4byte	0x14b
	.byte	0x0
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF156
	.byte	0x1
	.2byte	0x4e2
	.byte	0x1
	.4byte	.LFB14
	.4byte	.LFE14
	.4byte	.LLST48
	.4byte	0x9e8
	.uleb128 0x17
	.4byte	.LASF157
	.byte	0x1
	.2byte	0x4e2
	.4byte	0x98
	.4byte	.LLST49
	.uleb128 0x21
	.4byte	.LASF158
	.byte	0x1
	.2byte	0x4e4
	.4byte	0x64
	.4byte	.LLST50
	.uleb128 0x1b
	.ascii	"ret\000"
	.byte	0x1
	.2byte	0x4e5
	.4byte	0x56
	.uleb128 0x22
	.4byte	.LASF159
	.byte	0x1
	.2byte	0x4e6
	.4byte	0x56
	.byte	0x5
	.byte	0x3
	.4byte	start_mode_val.26385
	.byte	0x0
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF160
	.byte	0x1
	.2byte	0x3f4
	.byte	0x1
	.4byte	.LFB10
	.4byte	.LFE10
	.4byte	.LLST51
	.4byte	0xa13
	.uleb128 0x17
	.4byte	.LASF161
	.byte	0x1
	.2byte	0x3f4
	.4byte	0x201
	.4byte	.LLST52
	.byte	0x0
	.uleb128 0x26
	.4byte	.LASF195
	.byte	0x1
	.2byte	0x5ae
	.byte	0x1
	.byte	0x1
	.4byte	0xa2e
	.uleb128 0x20
	.4byte	.LASF137
	.byte	0x1
	.2byte	0x5b0
	.4byte	0x56
	.byte	0x0
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF162
	.byte	0x1
	.2byte	0x19a
	.byte	0x1
	.4byte	.LFB5
	.4byte	.LFE5
	.4byte	.LLST53
	.4byte	0xac5
	.uleb128 0x17
	.4byte	.LASF157
	.byte	0x1
	.2byte	0x19a
	.4byte	0x98
	.4byte	.LLST54
	.uleb128 0x21
	.4byte	.LASF158
	.byte	0x1
	.2byte	0x19c
	.4byte	0x64
	.4byte	.LLST55
	.uleb128 0x1b
	.ascii	"ret\000"
	.byte	0x1
	.2byte	0x19d
	.4byte	0x56
	.uleb128 0x1b
	.ascii	"cnt\000"
	.byte	0x1
	.2byte	0x19d
	.4byte	0x56
	.uleb128 0x20
	.4byte	.LASF163
	.byte	0x1
	.2byte	0x19e
	.4byte	0x56
	.uleb128 0x20
	.4byte	.LASF164
	.byte	0x1
	.2byte	0x19f
	.4byte	0x5d
	.uleb128 0x20
	.4byte	.LASF165
	.byte	0x1
	.2byte	0x1a3
	.4byte	0x45
	.uleb128 0x27
	.4byte	0xa13
	.4byte	.LBB4
	.4byte	.Ldebug_ranges0+0x0
	.byte	0x1
	.2byte	0x1ae
	.uleb128 0x28
	.4byte	.Ldebug_ranges0+0x18
	.uleb128 0x29
	.4byte	0xa21
	.4byte	.LLST56
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.uleb128 0x2a
	.4byte	.LASF196
	.byte	0x1
	.byte	0xc6
	.byte	0x1
	.4byte	0x83
	.4byte	.LFB0
	.4byte	.LFE0
	.4byte	.LLST57
	.4byte	0xafc
	.uleb128 0x2b
	.4byte	.LASF166
	.byte	0x1
	.byte	0xc6
	.4byte	0xafc
	.4byte	.LLST58
	.uleb128 0x2c
	.4byte	.LASF167
	.byte	0x1
	.byte	0xc8
	.4byte	0x56
	.byte	0x0
	.uleb128 0x5
	.byte	0x4
	.4byte	0x156
	.uleb128 0x2d
	.4byte	.LASF197
	.byte	0x1
	.byte	0xee
	.byte	0x1
	.4byte	.LFB1
	.4byte	.LFE1
	.4byte	.LLST59
	.4byte	0xb33
	.uleb128 0x2b
	.4byte	.LASF166
	.byte	0x1
	.byte	0xee
	.4byte	0xafc
	.4byte	.LLST60
	.uleb128 0x2e
	.ascii	"i\000"
	.byte	0x1
	.byte	0xf0
	.4byte	0x56
	.byte	0x0
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF168
	.byte	0x1
	.2byte	0x155
	.byte	0x1
	.4byte	.LFB4
	.4byte	.LFE4
	.4byte	.LLST61
	.4byte	0xb6e
	.uleb128 0x21
	.4byte	.LASF169
	.byte	0x1
	.2byte	0x157
	.4byte	0x83
	.4byte	.LLST62
	.uleb128 0x21
	.4byte	.LASF170
	.byte	0x1
	.2byte	0x158
	.4byte	0x83
	.4byte	.LLST63
	.byte	0x0
	.uleb128 0x1f
	.byte	0x1
	.4byte	.LASF171
	.byte	0x1
	.2byte	0x131
	.byte	0x1
	.4byte	.LFB3
	.4byte	.LFE3
	.4byte	.LLST64
	.4byte	0xba3
	.uleb128 0x17
	.4byte	.LASF31
	.byte	0x1
	.2byte	0x131
	.4byte	0xb4
	.4byte	.LLST65
	.uleb128 0x1b
	.ascii	"i\000"
	.byte	0x1
	.2byte	0x133
	.4byte	0x56
	.byte	0x0
	.uleb128 0xe
	.4byte	0x3e8
	.4byte	0xbb9
	.uleb128 0xf
	.4byte	0xa3
	.byte	0xf
	.uleb128 0xf
	.4byte	0xa3
	.byte	0x7
	.byte	0x0
	.uleb128 0x2f
	.4byte	.LASF172
	.byte	0x8
	.byte	0xb2
	.4byte	0xfc6
	.2byte	0x400
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x1
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x2
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x2
	.byte	0x0
	.byte	0x0
	.byte	0x3
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x2
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x4
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x10
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x7
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x10
	.byte	0x0
	.byte	0x0
	.byte	0x5
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x20
	.byte	0x0
	.byte	0x0
	.byte	0x5
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x40
	.byte	0x0
	.byte	0x0
	.byte	0x5
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x40
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x5
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x10
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x7
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x4
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x6
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x10
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x7
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x20
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x8
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x8
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x7
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0xff
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.uleb128 0x30
	.4byte	0xba3
	.uleb128 0x31
	.4byte	.LASF173
	.byte	0x1
	.byte	0x59
	.4byte	0x14b
	.byte	0x5
	.byte	0x3
	.4byte	sys_boot_mode_cmd
	.uleb128 0x31
	.4byte	.LASF174
	.byte	0x1
	.byte	0x5c
	.4byte	0x56
	.byte	0x5
	.byte	0x3
	.4byte	restart_mode
	.uleb128 0x31
	.4byte	.LASF175
	.byte	0x1
	.byte	0x7d
	.4byte	0x7b
	.byte	0x5
	.byte	0x3
	.4byte	image_uncompress_func
	.uleb128 0x31
	.4byte	.LASF176
	.byte	0x1
	.byte	0x7e
	.4byte	0x7b
	.byte	0x5
	.byte	0x3
	.4byte	prg_uncompress_func
	.uleb128 0x11
	.byte	0x1
	.4byte	0x101b
	.uleb128 0x12
	.4byte	0x56
	.byte	0x0
	.uleb128 0x31
	.4byte	.LASF177
	.byte	0x1
	.byte	0x7f
	.4byte	0x102c
	.byte	0x5
	.byte	0x3
	.4byte	wallpaper_backup_func
	.uleb128 0x5
	.byte	0x4
	.4byte	0x100f
	.uleb128 0x31
	.4byte	.LASF178
	.byte	0x1
	.byte	0x80
	.4byte	0x7b
	.byte	0x5
	.byte	0x3
	.4byte	app_icon_write_func
	.uleb128 0x32
	.4byte	.LASF179
	.byte	0x1
	.byte	0x82
	.4byte	0x56
	.byte	0x0
	.uleb128 0x32
	.4byte	.LASF180
	.byte	0x1
	.byte	0x83
	.4byte	0x56
	.byte	0x0
	.uleb128 0x32
	.4byte	.LASF181
	.byte	0x1
	.byte	0x84
	.4byte	0x56
	.byte	0x0
	.uleb128 0x32
	.4byte	.LASF182
	.byte	0x1
	.byte	0x85
	.4byte	0x56
	.byte	0x0
	.uleb128 0x31
	.4byte	.LASF183
	.byte	0x1
	.byte	0x87
	.4byte	0x420
	.byte	0x5
	.byte	0x3
	.4byte	wallpaper_backup_sts
	.uleb128 0xe
	.4byte	0x479
	.4byte	0x1094
	.uleb128 0xf
	.4byte	0xa3
	.byte	0x1f
	.byte	0x0
	.uleb128 0x31
	.4byte	.LASF184
	.byte	0x1
	.byte	0x97
	.4byte	0x1084
	.byte	0x5
	.byte	0x3
	.4byte	Pow_AccOnTimer
	.uleb128 0x31
	.4byte	.LASF185
	.byte	0x1
	.byte	0x98
	.4byte	0x1084
	.byte	0x5
	.byte	0x3
	.4byte	Pow_AccOffTimer
	.uleb128 0xe
	.4byte	0x4a9
	.4byte	0x10c6
	.uleb128 0xf
	.4byte	0xa3
	.byte	0x4
	.byte	0x0
	.uleb128 0x31
	.4byte	.LASF186
	.byte	0x1
	.byte	0x99
	.4byte	0x10b6
	.byte	0x5
	.byte	0x3
	.4byte	Pow_TimerCount
	.uleb128 0x33
	.4byte	.LASF187
	.byte	0x9
	.byte	0x8f
	.4byte	0x10e4
	.byte	0x1
	.byte	0x1
	.uleb128 0x30
	.4byte	0x8e
	.uleb128 0xe
	.4byte	0x2e9
	.4byte	0x10f9
	.uleb128 0xf
	.4byte	0xa3
	.byte	0x7
	.byte	0x0
	.uleb128 0x34
	.4byte	.LASF188
	.byte	0x6
	.byte	0xbd
	.4byte	0x10e9
	.byte	0x1
	.byte	0x5
	.byte	0x3
	.4byte	s_UartCallBack
	.uleb128 0x34
	.4byte	.LASF189
	.byte	0x1
	.byte	0x7b
	.4byte	0x42b
	.byte	0x1
	.byte	0x5
	.byte	0x3
	.4byte	PRODUCT_INFO
	.uleb128 0x34
	.4byte	.LASF190
	.byte	0x1
	.byte	0x89
	.4byte	0x5d
	.byte	0x1
	.byte	0x5
	.byte	0x3
	.4byte	wallpaper_mark
	.byte	0x0
	.section	.debug_abbrev
	.uleb128 0x1
	.uleb128 0x11
	.byte	0x1
	.uleb128 0x25
	.uleb128 0xe
	.uleb128 0x13
	.uleb128 0xb
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x1b
	.uleb128 0xe
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x10
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x2
	.uleb128 0x24
	.byte	0x0
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3e
	.uleb128 0xb
	.uleb128 0x3
	.uleb128 0xe
	.byte	0x0
	.byte	0x0
	.uleb128 0x3
	.uleb128 0x16
	.byte	0x0
	.uleb128 0x3
	.uleb128 0x8
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x4
	.uleb128 0xf
	.byte	0x0
	.uleb128 0xb
	.uleb128 0xb
	.byte	0x0
	.byte	0x0
	.uleb128 0x5
	.uleb128 0xf
	.byte	0x0
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x6
	.uleb128 0x15
	.byte	0x0
	.uleb128 0x27
	.uleb128 0xc
	.byte	0x0
	.byte	0x0
	.uleb128 0x7
	.uleb128 0x16
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x8
	.uleb128 0x24
	.byte	0x0
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3e
	.uleb128 0xb
	.byte	0x0
	.byte	0x0
	.uleb128 0x9
	.uleb128 0x24
	.byte	0x0
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3e
	.uleb128 0xb
	.uleb128 0x3
	.uleb128 0x8
	.byte	0x0
	.byte	0x0
	.uleb128 0xa
	.uleb128 0x4
	.byte	0x1
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0xb
	.uleb128 0x28
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x1c
	.uleb128 0xd
	.byte	0x0
	.byte	0x0
	.uleb128 0xc
	.uleb128 0x13
	.byte	0x1
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0xd
	.uleb128 0xd
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x38
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.uleb128 0xe
	.uleb128 0x1
	.byte	0x1
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0xf
	.uleb128 0x21
	.byte	0x0
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2f
	.uleb128 0xb
	.byte	0x0
	.byte	0x0
	.uleb128 0x10
	.uleb128 0x4
	.byte	0x1
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x11
	.uleb128 0x15
	.byte	0x1
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x12
	.uleb128 0x5
	.byte	0x0
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x13
	.uleb128 0x13
	.byte	0x1
	.uleb128 0xb
	.uleb128 0xb
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x14
	.uleb128 0x2e
	.byte	0x0
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.uleb128 0x15
	.uleb128 0x26
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x16
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0xa
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x17
	.uleb128 0x5
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x18
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0x8
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x19
	.uleb128 0x2e
	.byte	0x0
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.uleb128 0x1a
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0xa
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x1b
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0x8
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x1c
	.uleb128 0x35
	.byte	0x0
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x1d
	.uleb128 0x5
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.uleb128 0x1e
	.uleb128 0x2e
	.byte	0x0
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x1f
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0x6
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x20
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x21
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x22
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.uleb128 0x23
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0x6
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x24
	.uleb128 0x5
	.byte	0x0
	.uleb128 0x3
	.uleb128 0x8
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x25
	.uleb128 0x2e
	.byte	0x0
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x26
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0x5
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x20
	.uleb128 0xb
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x27
	.uleb128 0x1d
	.byte	0x1
	.uleb128 0x31
	.uleb128 0x13
	.uleb128 0x52
	.uleb128 0x1
	.uleb128 0x55
	.uleb128 0x6
	.uleb128 0x58
	.uleb128 0xb
	.uleb128 0x59
	.uleb128 0x5
	.byte	0x0
	.byte	0x0
	.uleb128 0x28
	.uleb128 0xb
	.byte	0x1
	.uleb128 0x55
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x29
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x31
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x2a
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0x6
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x2b
	.uleb128 0x5
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0x6
	.byte	0x0
	.byte	0x0
	.uleb128 0x2c
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x2d
	.uleb128 0x2e
	.byte	0x1
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x27
	.uleb128 0xc
	.uleb128 0x11
	.uleb128 0x1
	.uleb128 0x12
	.uleb128 0x1
	.uleb128 0x40
	.uleb128 0x6
	.uleb128 0x1
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x2e
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0x8
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x2f
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x1c
	.uleb128 0x3
	.byte	0x0
	.byte	0x0
	.uleb128 0x30
	.uleb128 0x26
	.byte	0x0
	.uleb128 0x49
	.uleb128 0x13
	.byte	0x0
	.byte	0x0
	.uleb128 0x31
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x2
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.uleb128 0x32
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x1c
	.uleb128 0xb
	.byte	0x0
	.byte	0x0
	.uleb128 0x33
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x3c
	.uleb128 0xc
	.byte	0x0
	.byte	0x0
	.uleb128 0x34
	.uleb128 0x34
	.byte	0x0
	.uleb128 0x3
	.uleb128 0xe
	.uleb128 0x3a
	.uleb128 0xb
	.uleb128 0x3b
	.uleb128 0xb
	.uleb128 0x49
	.uleb128 0x13
	.uleb128 0x3f
	.uleb128 0xc
	.uleb128 0x2
	.uleb128 0xa
	.byte	0x0
	.byte	0x0
	.byte	0x0
	.section	.debug_pubnames,"",%progbits
	.4byte	0x42e
	.2byte	0x2
	.4byte	.Ldebug_info0
	.4byte	0x1130
	.4byte	0x4b4
	.ascii	"system_manager_get_current_product_info\000"
	.4byte	0x4da
	.ascii	"system_wallpaper_backup_req\000"
	.4byte	0x517
	.ascii	"system_wallpaper_delete_req\000"
	.4byte	0x554
	.ascii	"system_set_app_icon_write_callback\000"
	.4byte	0x581
	.ascii	"system_wallpaper_save_check\000"
	.4byte	0x599
	.ascii	"system_set_irq\000"
	.4byte	0x5c3
	.ascii	"system_mng_restart_mode_set\000"
	.4byte	0x5ea
	.ascii	"system_mng_restart_mode_get\000"
	.4byte	0x602
	.ascii	"system_mng_flash_boot_get_command\000"
	.4byte	0x61a
	.ascii	"PowTimer_AccOnProcGuardTimerSet\000"
	.4byte	0x65d
	.ascii	"PowTimer_AccOffProcGuardTimerSet\000"
	.4byte	0x6a0
	.ascii	"PowTimer_GetTaskState\000"
	.4byte	0x6cd
	.ascii	"PowTimer_TimerCount\000"
	.4byte	0x712
	.ascii	"PowTimer_initReset\000"
	.4byte	0x728
	.ascii	"PowTimer_AccOffProcGuardTimerClear\000"
	.4byte	0x78d
	.ascii	"PowTimer_AccOnProcGuardTimerClear\000"
	.4byte	0x7e4
	.ascii	"PowTimer_Cyclic__2ms_Task\000"
	.4byte	0x7fa
	.ascii	"system_mng_flash_boot_set_command\000"
	.4byte	0x825
	.ascii	"system_usb_power_req\000"
	.4byte	0x83b
	.ascii	"system_image_uncompress_req\000"
	.4byte	0x866
	.ascii	"system_mng_recovery_rd_byte\000"
	.4byte	0x8b5
	.ascii	"system_mng_recovery_write\000"
	.4byte	0x904
	.ascii	"system_mng_boot_linux_erase\000"
	.4byte	0x91e
	.ascii	"system_mng_boot_itron_erase\000"
	.4byte	0x938
	.ascii	"system_mng_recovery_erase\000"
	.4byte	0x952
	.ascii	"system_mng_flash_boot_command_clr\000"
	.4byte	0x968
	.ascii	"system_mng_boot_mode_exec\000"
	.4byte	0x98f
	.ascii	"TASK_Flash_Write\000"
	.4byte	0x9e8
	.ascii	"system_flash_write_req\000"
	.4byte	0xa2e
	.ascii	"TASK_System_Manager\000"
	.4byte	0xb33
	.ascii	"system_manager_init\000"
	.4byte	0xb6e
	.ascii	"system_manager_set_serial_no\000"
	.4byte	0x10f9
	.ascii	"s_UartCallBack\000"
	.4byte	0x110b
	.ascii	"PRODUCT_INFO\000"
	.4byte	0x111d
	.ascii	"wallpaper_mark\000"
	.4byte	0x0
	.section	.debug_aranges,"",%progbits
	.4byte	0x1c
	.2byte	0x2
	.4byte	.Ldebug_info0
	.byte	0x4
	.byte	0x0
	.2byte	0x0
	.2byte	0x0
	.4byte	.Ltext0
	.4byte	.Letext0-.Ltext0
	.4byte	0x0
	.4byte	0x0
	.section	.debug_ranges,"",%progbits
.Ldebug_ranges0:
	.4byte	.LBB4-.Ltext0
	.4byte	.LBE4-.Ltext0
	.4byte	.LBB7-.Ltext0
	.4byte	.LBE7-.Ltext0
	.4byte	0x0
	.4byte	0x0
	.4byte	.LBB5-.Ltext0
	.4byte	.LBE5-.Ltext0
	.4byte	.LBB6-.Ltext0
	.4byte	.LBE6-.Ltext0
	.4byte	0x0
	.4byte	0x0
	.section	.debug_str,"MS",%progbits,1
.LASF181:
	.ascii	"delete_error_flg\000"
.LASF116:
	.ascii	"POW_COUNTTIME\000"
.LASF61:
	.ascii	"SendCallBack\000"
.LASF118:
	.ascii	"system_wallpaper_delete_req\000"
.LASF15:
	.ascii	"BOOT_TEST_MODE\000"
.LASF37:
	.ascii	"checksum\000"
.LASF189:
	.ascii	"PRODUCT_INFO\000"
.LASF18:
	.ascii	"TASKSTS_ACCOFF\000"
.LASF165:
	.ascii	"to_val\000"
.LASF130:
	.ascii	"PowTimer_GetTaskState\000"
.LASF159:
	.ascii	"start_mode_val\000"
.LASF151:
	.ascii	"system_mng_boot_itron_erase\000"
.LASF175:
	.ascii	"image_uncompress_func\000"
.LASF65:
	.ascii	"POW_DEF_SYSTEMCOM\000"
.LASF143:
	.ascii	"system_mng_flash_boot_set_command\000"
.LASF91:
	.ascii	"POW_DEF_TEST_MODE\000"
.LASF114:
	.ascii	"CountTime\000"
.LASF174:
	.ascii	"restart_mode\000"
.LASF191:
	.ascii	"GNU C 4.4.1\000"
.LASF100:
	.ascii	"STS_WALLPAPER_BACKUP_NONE\000"
.LASF98:
	.ascii	"next\000"
.LASF97:
	.ascii	"event\000"
.LASF107:
	.ascii	"ST_PRODUCT_SERIAL_INFO\000"
.LASF183:
	.ascii	"wallpaper_backup_sts\000"
.LASF76:
	.ascii	"POW_DEF_SOURCE\000"
.LASF6:
	.ascii	"long long int\000"
.LASF0:
	.ascii	"signed char\000"
.LASF50:
	.ascii	"EN_FLASH_WRITE_REQ_APP_ICON_PACKAGE_NAME_DATA\000"
.LASF72:
	.ascii	"POW_DEF_TUNER_CONTROLLER\000"
.LASF14:
	.ascii	"BOOT_RECOVERY_MODE\000"
.LASF7:
	.ascii	"long long unsigned int\000"
.LASF59:
	.ascii	"UART_CH_TOTAL\000"
.LASF39:
	.ascii	"EN_FLASH_WRITE_REQ_DATA1\000"
.LASF40:
	.ascii	"EN_FLASH_WRITE_REQ_DATA2\000"
.LASF103:
	.ascii	"STS_WALLPAPER_BACKUP_WRITE\000"
.LASF170:
	.ascii	"info2_check_result\000"
.LASF129:
	.ascii	"PowTimer_AccOffProcGuardTimerSet\000"
.LASF136:
	.ascii	"PowTimer_AccOffProcGuardTimerClear\000"
.LASF83:
	.ascii	"POW_DEF_DIAGEVENTREC\000"
.LASF75:
	.ascii	"POW_DEF_MUTE\000"
.LASF2:
	.ascii	"long int\000"
.LASF158:
	.ascii	"flag_pattern\000"
.LASF163:
	.ascii	"write_tbl_cnt\000"
.LASF70:
	.ascii	"POW_DEF_DSP_CTRL\000"
.LASF1:
	.ascii	"short int\000"
.LASF194:
	.ascii	"EN_FLASH_WRITE_REQ\000"
.LASF36:
	.ascii	"year_no_check_sum\000"
.LASF12:
	.ascii	"RT_STATUS\000"
.LASF192:
	.ascii	"System_manager.c\000"
.LASF66:
	.ascii	"POW_DEF_IIC_API\000"
.LASF176:
	.ascii	"prg_uncompress_func\000"
.LASF173:
	.ascii	"sys_boot_mode_cmd\000"
.LASF68:
	.ascii	"POW_DEF_TOUCH_PANEL_CTRL\000"
.LASF111:
	.ascii	"TimerValue\000"
.LASF41:
	.ascii	"EN_FLASH_WRITE_REQ_DTV_DATA\000"
.LASF133:
	.ascii	"pCallBack\000"
.LASF33:
	.ascii	"product_no\000"
.LASF162:
	.ascii	"TASK_System_Manager\000"
.LASF117:
	.ascii	"system_wallpaper_backup_req\000"
.LASF94:
	.ascii	"POW_DEF_METER_EVENT_HANDLER\000"
.LASF153:
	.ascii	"system_mng_flash_boot_command_clr\000"
.LASF134:
	.ascii	"system_manager_get_current_product_info\000"
.LASF146:
	.ascii	"system_mng_recovery_rd_byte\000"
.LASF38:
	.ascii	"dummy\000"
.LASF102:
	.ascii	"STS_WALLPAPER_BACKUP_DELETE_WITE\000"
.LASF48:
	.ascii	"EN_FLASH_WRITE_REQ_PDR_PRE_STA5_DATA\000"
.LASF169:
	.ascii	"info1_check_result\000"
.LASF123:
	.ascii	"mode\000"
.LASF138:
	.ascii	"aubAccOffComplete\000"
.LASF10:
	.ascii	"unsigned int\000"
.LASF155:
	.ascii	"command\000"
.LASF13:
	.ascii	"BOOT_NORMAL_MODE\000"
.LASF5:
	.ascii	"long unsigned int\000"
.LASF80:
	.ascii	"POW_DEF_VIDEO_CTRL\000"
.LASF93:
	.ascii	"POW_DEF_METER_MAILBOX_REC\000"
.LASF16:
	.ascii	"BOOT_UPDATE_MODE\000"
.LASF141:
	.ascii	"aubAccOnComplete\000"
.LASF51:
	.ascii	"UART_CH0\000"
.LASF52:
	.ascii	"UART_CH1\000"
.LASF53:
	.ascii	"UART_CH2\000"
.LASF54:
	.ascii	"UART_CH3\000"
.LASF55:
	.ascii	"UART_CH4\000"
.LASF28:
	.ascii	"SYS_BOOT_DEVELOP_UPDATE_REQ\000"
.LASF77:
	.ascii	"POW_DEF_KEY_DECODE\000"
.LASF156:
	.ascii	"TASK_Flash_Write\000"
.LASF154:
	.ascii	"system_mng_boot_mode_exec\000"
.LASF58:
	.ascii	"UART_CH4P1\000"
.LASF157:
	.ascii	"exinf\000"
.LASF84:
	.ascii	"POW_DEF_DT\000"
.LASF127:
	.ascii	"PowTimer_AccOnProcGuardTimerSet\000"
.LASF185:
	.ascii	"Pow_AccOffTimer\000"
.LASF137:
	.ascii	"aubCnt\000"
.LASF49:
	.ascii	"EN_FLASH_WRITE_REQ_PDR_PRE_STA6_DATA\000"
.LASF182:
	.ascii	"delete_cnt\000"
.LASF60:
	.ascii	"eUART_CH\000"
.LASF92:
	.ascii	"POW_DEF_METER_EVENT_REC\000"
.LASF171:
	.ascii	"system_manager_set_serial_no\000"
.LASF108:
	.ascii	"ST_PRODUCT_INFO\000"
.LASF20:
	.ascii	"TASKSTS_ACCOFF_TOUT\000"
.LASF67:
	.ascii	"POW_DEF_DSP_IIC_API\000"
.LASF120:
	.ascii	"system_set_app_icon_write_callback\000"
.LASF196:
	.ascii	"system_manager_check_product_info\000"
.LASF8:
	.ascii	"BOOL\000"
.LASF101:
	.ascii	"STS_WALLPAPER_BACKUP_DELETE_REQ\000"
.LASF35:
	.ascii	"product_year_no\000"
.LASF177:
	.ascii	"wallpaper_backup_func\000"
.LASF96:
	.ascii	"POW_DEF_TASK_MAX\000"
.LASF126:
	.ascii	"system_mng_flash_boot_get_command\000"
.LASF150:
	.ascii	"system_mng_boot_linux_erase\000"
.LASF197:
	.ascii	"system_manager_set_product_info_to_default\000"
.LASF23:
	.ascii	"TASKSTS_ACCON_ING\000"
.LASF63:
	.ascii	"UART_CALLBACK\000"
.LASF122:
	.ascii	"system_mng_restart_mode_set\000"
.LASF26:
	.ascii	"SYS_BOOT_TESTMODE_REQ\000"
.LASF178:
	.ascii	"app_icon_write_func\000"
.LASF71:
	.ascii	"POW_DEF_TUNER_MANAGER\000"
.LASF19:
	.ascii	"TASKSTS_ACCON\000"
.LASF57:
	.ascii	"UART_CH3P1\000"
.LASF131:
	.ascii	"PowTimer_TimerCount\000"
.LASF69:
	.ascii	"POW_DEF_COMMON_MESSAGE\000"
.LASF187:
	.ascii	"FLG_ID_SYSTEM_MANAGER\000"
.LASF109:
	.ascii	"info1\000"
.LASF110:
	.ascii	"info2\000"
.LASF104:
	.ascii	"STS_WALLPAPER_BACKUP_DELETE_MARK\000"
.LASF21:
	.ascii	"TASKSTS_ACCON_TOUT\000"
.LASF172:
	.ascii	"if_init_ctl_mtx\000"
.LASF62:
	.ascii	"RecvCallBack\000"
.LASF124:
	.ascii	"system_wallpaper_save_check\000"
.LASF190:
	.ascii	"wallpaper_mark\000"
.LASF32:
	.ascii	"serial_checksum\000"
.LASF86:
	.ascii	"POW_DEF_VERUP_MAILREV\000"
.LASF29:
	.ascii	"SYS_BOOT_COMMAND\000"
.LASF85:
	.ascii	"POW_DEF_DT_MAILFUNC\000"
.LASF82:
	.ascii	"POW_DEF_DIAGMAILREC\000"
.LASF3:
	.ascii	"unsigned char\000"
.LASF135:
	.ascii	"PowTimer_initReset\000"
.LASF119:
	.ascii	"call_back_function\000"
.LASF193:
	.ascii	"E:\\Code\\iTron\\goni\\Common\\src\000"
.LASF30:
	.ascii	"identification\000"
.LASF166:
	.ascii	"info\000"
.LASF179:
	.ascii	"counter\000"
.LASF25:
	.ascii	"SYS_BOOT_RECOVERY_REQ\000"
.LASF195:
	.ascii	"PowTimer_AccOnOffProcGuardTimer\000"
.LASF168:
	.ascii	"system_manager_init\000"
.LASF140:
	.ascii	"PowTimer_AccOnProcGuardTimerClear\000"
.LASF125:
	.ascii	"system_mng_restart_mode_get\000"
.LASF43:
	.ascii	"EN_FLASH_WRITE_REQ_APP_ICON_DATA\000"
.LASF22:
	.ascii	"TASKSTS_ACCOFF_ING\000"
.LASF74:
	.ascii	"POW_DEF_AUDIO_CONTROLLER\000"
.LASF186:
	.ascii	"Pow_TimerCount\000"
.LASF11:
	.ascii	"uint32_t\000"
.LASF44:
	.ascii	"EN_FLASH_WRITE_REQ_PDR_PRE_STA1_DATA\000"
.LASF112:
	.ascii	"TaskSts\000"
.LASF17:
	.ascii	"BOOT_DEVELOP_UPDATE_MODE\000"
.LASF34:
	.ascii	"product_no_check_sum\000"
.LASF115:
	.ascii	"func\000"
.LASF160:
	.ascii	"system_flash_write_req\000"
.LASF46:
	.ascii	"EN_FLASH_WRITE_REQ_PDR_PRE_STA3_DATA\000"
.LASF56:
	.ascii	"UART_CH2P1\000"
.LASF31:
	.ascii	"serial_no\000"
.LASF148:
	.ascii	"src_addr\000"
.LASF88:
	.ascii	"POW_DEF_SETTING\000"
.LASF9:
	.ascii	"VP_INT\000"
.LASF64:
	.ascii	"POW_DEF_STATUS_MANEGER\000"
.LASF106:
	.ascii	"SYS_WALLPAPER_BACKUP_STS\000"
.LASF42:
	.ascii	"EN_FLASH_WRITE_REQ_AUDIO_MENU_DATA\000"
.LASF142:
	.ascii	"PowTimer_Cyclic__2ms_Task\000"
.LASF132:
	.ascii	"CountID\000"
.LASF89:
	.ascii	"POW_DEF_LINUX\000"
.LASF4:
	.ascii	"short unsigned int\000"
.LASF87:
	.ascii	"POW_DEF_VERUP_MAILFUNC\000"
.LASF180:
	.ascii	"echeck\000"
.LASF161:
	.ascii	"request\000"
.LASF152:
	.ascii	"system_mng_recovery_erase\000"
.LASF149:
	.ascii	"system_mng_recovery_write\000"
.LASF105:
	.ascii	"STS_WALLPAPER_BACKUP_DELETE_MARK_WITE\000"
.LASF144:
	.ascii	"system_usb_power_req\000"
.LASF147:
	.ascii	"dest_addr\000"
.LASF95:
	.ascii	"POW_DEF_METER_MAILBOX_HANDLER\000"
.LASF99:
	.ascii	"INITMtx\000"
.LASF47:
	.ascii	"EN_FLASH_WRITE_REQ_PDR_PRE_STA4_DATA\000"
.LASF188:
	.ascii	"s_UartCallBack\000"
.LASF90:
	.ascii	"POW_DEF_LCD_CTRL\000"
.LASF128:
	.ascii	"TaskID\000"
.LASF78:
	.ascii	"POW_DEF_KEY_CTRL\000"
.LASF139:
	.ascii	"aubItronAccOffInfoComlete\000"
.LASF73:
	.ascii	"POW_DEF_AUDIO_MANAGER\000"
.LASF113:
	.ascii	"POW_AccOn_Off\000"
.LASF45:
	.ascii	"EN_FLASH_WRITE_REQ_PDR_PRE_STA2_DATA\000"
.LASF81:
	.ascii	"POW_DEF_DIAGMAINFUNC\000"
.LASF24:
	.ascii	"SYS_BOOT_NORMAL_REQ\000"
.LASF145:
	.ascii	"system_image_uncompress_req\000"
.LASF121:
	.ascii	"system_set_irq\000"
.LASF164:
	.ascii	"delete_bit\000"
.LASF184:
	.ascii	"Pow_AccOnTimer\000"
.LASF27:
	.ascii	"SYS_BOOT_UPDATE_REQ\000"
.LASF79:
	.ascii	"POW_DEF_MULTI_MEDIA\000"
.LASF167:
	.ascii	"check_sum\000"
	.ident	"GCC: (Sourcery G++ Lite 2010q1-188) 4.4.1"
