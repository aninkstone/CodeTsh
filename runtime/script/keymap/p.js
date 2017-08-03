(function (){
    return function(editor, cmd, shift, alt, ctrl){
        editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        editor.sync(SCI_PASTE, 0x00, 0x00);
        editor.sync(SCI_SETREADONLY, 0x01, 0x00);
        return true;
    };
})();
