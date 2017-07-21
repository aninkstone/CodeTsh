(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wC_w") {
            var count = windows.viewsCount ();
            var current = windows.focusViewID();
            if (current + 1 < count) {
                current += 1;
            }
            else {
                current = 0;
            }
            windows.setFocusID (current);
            return true;
        }
        if (cmd == "dw") {
            b = editor.sync(SCI_GETREADONLY, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,  0x00, 0x00);
            editor.sync(SCI_DELWORDRIGHT, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,   b,    0x00);
        }
        if (cmd == "w") {
            editor.sync(SCI_WORDRIGHT, 0, 0);
        }
        if (cmd == "C_w") {
            return false;
        }
        return true;
    };
})();

