(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == 'S_n') {
            let selection = editor.sync(SCI_GETSELECTIONNEND, 0);
            editor.sync(SCI_SEARCHANCHOR, selection);
            editor.sync(SCI_SEARCHPREV, set.vim.search.flags, set.vim.search.target);
            return true;
        }
        if (cmd == 'n') {
            let selection = editor.sync(SCI_GETSELECTIONNEND, 0);
            editor.sync(SCI_GOTOPOS, selection);
            editor.sync(SCI_SEARCHANCHOR, selection);
            editor.sync(SCI_SEARCHNEXT, set.vim.search.flags, set.vim.search.target);
            return true;
        }
        return false;
    };
})();

