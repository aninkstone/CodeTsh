(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wl") {
            windows.moveFocus2R();
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'l') {
            editor.sync(SCI_CHARRIGHT, 0, 0);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
