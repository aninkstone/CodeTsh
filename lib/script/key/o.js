(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == 'o') {
            editor.sync(SCI_SETREADONLY, 0x00, 0x00);
            editor.sync(SCI_LINEEND, 0, 0);
            editor.sync(SCI_NEWLINE, 0, 0);
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();

