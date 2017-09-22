(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == 'mb') {
            var cur = editor.cursor(0, 0);
            var lnu = editor.lineNumber('.');
            set.vim.mark.b = lnu;
            editor.sync(SCI_MARKERDELETEALL, 2, 0);
            editor.sync(SCI_MARKERADD, lnu, 2);
            return true;
        }
        if (cmd == 'b') {
            editor.sync(SCI_WORDLEFT, 0x00, 0x00);
            return true;
        }
        if (cmd == 'dA_b') {
            if (set.vim.mark.b != -1) {
                let beg = editor.lineBeg(set.vim.mark.b);
                let cur = editor.lineNumber(".");
                let end = editor.lineEnd(cur);
                editor.sync(SCI_SETSEL, beg, end);
                editor.sync(SCI_MARKERDELETEALL, 2, 0);
            }
            set.vim.mark.b = -1;
            let beg = editor.sync(SCI_GETSELECTIONSTART);
            let end = editor.sync(SCI_GETSELECTIONEND);
            if (beg < end) {
                editor.ro (false);
                editor.sync(SCI_COPYRANGE, beg, end);
                editor.sync(SCI_DELETERANGE, beg, end - beg);
                editor.ro (true);
            }
            return true;
        }
        if (cmd == 'yA_b') {
            let beg = 0;
            let cur = 0;
            let edn = 0;
            if (set.vim.mark.b != -1) {
                beg = editor.lineBeg(set.vim.mark.b);
                cur = editor.lineNumber(".");
                end = editor.lineEnd(cur);
                editor.sync(SCI_SETSEL, beg, end);
                editor.sync(SCI_MARKERDELETEALL, 2, 0);
            }
            set.vim.mark.b = -1;
            beg = editor.sync(SCI_GETSELECTIONSTART);
            end = editor.sync(SCI_GETSELECTIONEND);
            if (beg < end) {
                editor.sync(SCI_COPYRANGE, beg, end);
            }
            editor.sync(SCI_SETEMPTYSELECTION, beg);
            return true;
        }
        return false;
    };
})();
