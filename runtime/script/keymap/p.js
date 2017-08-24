(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (set.vim.pre == 'yy') {
            editor.sync(SCI_SETREADONLY, 0x00, 0x00);
            editor.sync(SCI_LINEEND, 0x00, 0x00); 
            editor.sync(SCI_NEWLINE, 0x00, 0);
            editor.sync(SCI_PASTE, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            return true;
        }
        if (set.vim.pre == 'dd') {
            editor.sync(SCI_SETREADONLY, 0x00, 0x00);
            editor.sync(SCI_LINEDOWN, 0x01, 0);
            editor.sync(SCI_PASTE, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            return true;
        }
        editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        editor.sync(SCI_PASTE, 0x00, 0x00);
        editor.sync(SCI_SETREADONLY, 0x01, 0x00);
        return true;
    };
})();
