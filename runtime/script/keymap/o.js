(function (){
    return function (editor, cmd, shift, alt, ctrl){
        b = editor.sync(SCI_GETREADONLY, 0x00, 0x00);
        editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        editor.sync(SCI_LINEEND, 0, 0);
        editor.sync(SCI_NEWLINE, 0, 0);
        editor.sync(SCI_SETREADONLY, b, 0x00);
        return true;
    };
})();

