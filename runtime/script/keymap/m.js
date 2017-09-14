(function (){
    return function(editor, cmd, shift, alt, ctrl){
        var cur = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
        var lnu = editor.sync(SCI_LINEFROMPOSITION, cur, 0x00); 
        set.vim.mark.m = lnu;
        editor.sync(SCI_MARKERDELETEALL, 4, 0);
        editor.sync(SCI_MARKERADD, lnu, 4);
        console.log ("mark line: " + lnu);
        return true;
    };
})();
