(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == 'C_e') {
            editor.sync(SCI_LINESCROLL,0x00, 0x01);
            editor.sync(SCI_MOVECARETINSIDEVIEW);
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'e') {
            editor.sync(SCI_WORDRIGHT, 0x00, 0x00);
            return CTOR_VIMKEY_CONSUME;
        } 
        if (cmd == 'L_be') {
            var inet = windows.namedCtrl("Inet");
            inet.ExecuteCommand(":ls");
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'C_we') {
            let f = windows.focusMgr.focusEdit();
            windows.split("hori");
            let v = windows.focusMgr.focusEdit();
            v.setDocument(consoleDoc);
            f.setFocus();
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
