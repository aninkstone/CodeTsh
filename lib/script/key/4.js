(function(){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_w4") {
            windows.setFocusID (4);
            return CTOR_VIMKEY_CONSUME;
        }
        if (shift) {
            editor.sync(SCI_LINEEND, 0x00, 0x00);
            return CTOR_VIMKEY_CONSUME;
        }
        else {
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();
