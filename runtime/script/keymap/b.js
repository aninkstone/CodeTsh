(function (){
    return function(editor, cmd, shift, alt, ctrl){
        editor.sync(SCI_WORDLEFT, 0x00, 0x00);
        return true;
    };
})();
