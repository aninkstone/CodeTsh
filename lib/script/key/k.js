(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wk") {
            windows.moveFocus2T();
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == "k") {
            editor.sync(SCI_LINEUP, 0x01, 0);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();


