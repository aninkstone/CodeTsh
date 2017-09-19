(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == 'mc') {
            var cur = editor.cursor(0, 0);
            var lnu = editor.line('.');
            set.vim.mark.a = lnu;
            editor.sync(SCI_MARKERDELETEALL, 2, 0);
            editor.sync(SCI_MARKERADD, lnu, 2);
        }
        return true;
    };
})();


