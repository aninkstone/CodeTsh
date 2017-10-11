(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wh") {
            windows.moveFocus2L();
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'h') {
            editor.sync(SCI_CHARLEFT, 0, 0);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
