(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == 'ma') {
            var cur = editor.cursor(0, 0);
            var lnu = editor.lineNumber('.');
            set.vim.mark.a = lnu;
            editor.sync(SCI_MARKERDELETEALL, 2, 0);
            editor.sync(SCI_MARKERADD, lnu, 2);
            return CTOR_VIMKEY_CONSUME;
        }
        //if (cmd == 'A_a') {
        //    if (set.vim.mark.a != -1) {
        //        let beg = editor.lineBeg(set.vim.mark.a);
        //        let cur = editor.lineNumber(".");
        //        let end = editor.lineEnd(cur);
        //        editor.sync(SCI_SETSEL, beg, end);
        //        editor.sync(SCI_MARKERDELETEALL, 2, 0);
        //    }
        //    set.vim.mark.a = -1;
        //    return true;
        //}
        if (cmd == 'dA_a') {
            if (set.vim.mark.a != -1) {
                let beg = editor.lineBeg(set.vim.mark.a);
                let cur = editor.lineNumber(".");
                let end = editor.lineEnd(cur);
                editor.sync(SCI_SETSEL, beg, end);
                editor.sync(SCI_MARKERDELETEALL, 2, 0);
            }
            set.vim.mark.a = -1;
            let beg = editor.sync(SCI_GETSELECTIONSTART);
            let end = editor.sync(SCI_GETSELECTIONEND);
            if (beg < end) {
                editor.ro (false);
                editor.sync(SCI_COPYRANGE, beg, end);
                editor.sync(SCI_DELETERANGE, beg, end - beg);
                editor.ro (true);
            }
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == 'yA_a') {
            let beg = 0;
            let cur = 0;
            let edn = 0;
            if (set.vim.mark.a != -1) {
                beg = editor.lineBeg(set.vim.mark.a);
                cur = editor.lineNumber(".");
                end = editor.lineEnd(cur);
                editor.sync(SCI_SETSEL, beg, end);
                editor.sync(SCI_MARKERDELETEALL, 2, 0);
            }
            set.vim.mark.a = -1;
            beg = editor.sync(SCI_GETSELECTIONSTART);
            end = editor.sync(SCI_GETSELECTIONEND);
            if (beg < end) {
                editor.sync(SCI_COPYRANGE, beg, end);
            }
            editor.sync(SCI_SETEMPTYSELECTION, beg);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();

