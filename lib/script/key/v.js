(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wv") {
            windows.split("vert");
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == "C_v") {
            editor.sync(SCI_SETSELECTIONMODE, 1, 0x00);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
