$.script.setFocus();
$.script.document.deleteChars(0, $.script.document.length);
$.script.document.insertChars("/");
$.script.sendMessage(SCI_GOTOPOS, $.script.document.length, 0x00);
