(function (){
    return function(editor, cmd, shift, alt, ctrl){
        b = editor.sync(SCI_GETREADONLY, 0x00, 0x00);
        editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        editor.sync(SCI_LINEDOWN, 0x01, 0x00);
        editor.sync(SCI_PASTE, 0x00, 0x00);
        editor.sync(SCI_LINEUP, 0x01, 0x00);
        editor.sync(SCI_SETREADONLY, b, 0x00);
        return true;
    };
})();
