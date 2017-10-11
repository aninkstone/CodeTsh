(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wq") {
            windows.close();
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'q') {
            editor.sync(SCI_CANCEL);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
