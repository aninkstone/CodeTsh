(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == 'mb') {
            var cur = editor.cursor(0, 0);
            var lnu = editor.line('.');
            set.vim.mark.a = lnu;
            editor.sync(SCI_MARKERDELETEALL, 2, 0);
            editor.sync(SCI_MARKERADD, lnu, 2);
        }
        else {
            editor.sync(SCI_WORDLEFT, 0x00, 0x00);
        }
        return true;
    };
})();
