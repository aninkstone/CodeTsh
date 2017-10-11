(function (){
    function lineJoin (editor) {
        try {
            var pos = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var lnu = editor.sync(SCI_LINEFROMPOSITION, pos, 0x00); 
            var beg = editor.document.lineStart(lnu);
            var end = editor.document.lineEnd(lnu + 1);
            var pos = editor.document.lineEnd(lnu);
            editor.sync(SCI_SETTARGETRANGE, beg, end);

            editor.sync(SCI_SETREADONLY, 0x00, 0x00);
            editor.sync(SCI_LINESJOIN, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            editor.sync(SCI_GOTOPOS, pos + 1, 0x00);
            return CTOR_VIMKEY_CONSUME;
        }
        catch (e) {
            console.log (e.toString());
        }
        return CTOR_VIMKEY_NOTCONCERN;
    }
    return function (editor, cmd, shift, alt, ctrl){
        if (shift) {
            return lineJoin (editor);
        }
        if (cmd == "C_wj") {
            windows.moveFocus2B();
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'j') {
            editor.sync(SCI_LINEDOWN, 0x01, 0);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})(); 
