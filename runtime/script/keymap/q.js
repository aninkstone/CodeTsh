(function (){
    return function(editor, cmd, shift, alt, ctrl){
        editor.sync(SCI_CANCEL);
        return true;
    };
})();
