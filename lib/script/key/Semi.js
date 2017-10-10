(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "S_SemiS_Semi") {
            var cp = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var ln = editor.sync(SCI_LINEFROMPOSITION, cp, 0x00); 
            var id = editor.sync(SCI_GETLINEINDENTATION, ln, 0x00);
            id -= editor.sync(SCI_GETINDENT, 0x00, 0x00);
            if (id < 0) {
                id = 0;
            }
            editor.sync(SCI_SETREADONLY, 0x00, 0x00);
            editor.sync(SCI_SETLINEINDENTATION, ln, id); 
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            return true;
        }
        return false;
    }
})();
