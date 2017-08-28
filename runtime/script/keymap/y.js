(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl) {
            editor.sync(SCI_LINESCROLL,0x00, -0x01);
            return true;
        }
        if (cmd == "y") {
            var beg = editor.sync(SCI_GETSELECTIONSTART, 0x00, 0x00);
            var sel = editor.sync(SCI_GETSELECTIONEMPTY, 0x00, 0x00);
            if (sel == 0) {
                editor.sync(SCI_COPY, 0x00, 0x00);
                editor.sync(SCI_SETSELECTION, beg, beg);
                editor.sync(SCI_CANCEL);
            }
        }
        if (cmd == "yw") {
            set.vim.reg_X = {};
            set.vim.reg_X.cmd = 'yw';
            set.vim.reg_X.type = 'word';
            return true;
        }
        if (cmd == "yy") {
            var pos = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var lnu = editor.sync(SCI_LINEFROMPOSITION, pos, 0x00);
            var doc = editor.document;
            var beg = doc.lineStart(lnu);
            var end = doc.lineEnd(lnu);
            var eol = editor.sync(SCI_GETEOLMODE, 0x00, 0x00);
            var ech = "";
            switch (eol) {
                case SC_EOL_CRLF:
                    ech = "\r\n";
                    break;
                case SC_EOL_CR:
                    ech = "\r";
                    break;
                case SC_EOL_LF:
                    ech = "\n";
                    break;
                default:
                    break;
            }

            var chars = "";
            for (var idx = beg; idx < end; ++idx) {
                chars += String.fromCharCode(doc.charAt(idx));
            }
            chars += ech;

            editor.sync(SCI_COPYTEXT, chars.length, chars);
            set.vim.reg_X = {};
            set.vim.reg_X.cmd = 'yy';
            set.vim.reg_X.type = 'line';
            return true;
        }
        return false;
    };
})();
