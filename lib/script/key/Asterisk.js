(function (){
    return function Asterisk (editor, ctrl, shift, k) {
        var pos = editor.cursor(0, 0);
        var beg = editor.sync(SCI_WORDSTARTPOSITION, pos, 1);
        var end = editor.sync(SCI_WORDENDPOSITION, pos, 1);

        var chars = "";
        for (var idx = 0; idx < end - beg; ++idx) {
            var c = editor.sync(SCI_GETCHARAT, beg + idx, 0x00);
            chars += String.fromCharCode(c);
        }
        editor.search(chars);

        return CTOR_VIMKEY_CONSUME;
    }
})();
