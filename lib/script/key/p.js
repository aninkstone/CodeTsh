(function (){
    function PasteLine (editor, cmd) {
        switch (cmd) {
            case 'yy':
                editor.sync(SCI_SETREADONLY, 0x00, 0x00);
                var pos = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
                var lnu = editor.sync(SCI_LINEFROMPOSITION, pos, 0x00); 
                var beg = editor.document.lineStart(lnu + 1);
                var end = editor.document.lineEnd(lnu + 1);
                editor.sync(SCI_GOTOPOS, beg, 0x00);
                editor.sync(SCI_PASTE, 0x00, 0x00);
                editor.sync(SCI_SETREADONLY, 0x01, 0x00);
                break;
            case 'dd': 
                editor.sync(SCI_SETREADONLY, 0x00, 0x00);
                editor.sync(SCI_LINEDOWN, 0x01, 0);
                editor.sync(SCI_PASTE, 0x00, 0x00);
                editor.sync(SCI_SETREADONLY, 0x01, 0x00);
                break;
            default:
                break;
        }
    }
    function PasteChar (editor, cmd) {
        editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        editor.sync(SCI_PASTE, 0x00, 0x00);
        editor.sync(SCI_SETREADONLY, 0x01, 0x00);
    }
    function PasteWord (editor, cmd) {
        editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        editor.sync(SCI_PASTE, 0x00, 0x00);
        editor.sync(SCI_SETREADONLY, 0x01, 0x00);
    }
    return function(editor, cmd, shift, alt, ctrl){
        var reg_X = set.vim.reg_X;
        set.vim.reg_X = {};

        switch (reg_X.type) {
            case 'line':
                PasteLine (editor, reg_X.cmd);
                return true;
            case 'word':
                PasteWord (editor, reg_X.cmd);
                return true;
            case 'char':
                PasteChar (editor, reg_X.cmd);
                return true;
            default:
                editor.sync(SCI_SETREADONLY, 0x00, 0x00);
                editor.sync(SCI_PASTE, 0x00, 0x00);
                editor.sync(SCI_SETREADONLY, 0x01, 0x00);
                break;
        }
        return true;
    };
})();
