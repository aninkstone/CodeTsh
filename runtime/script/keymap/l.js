(function (){
    return function (editor, cmd, shift, alt, ctrl){
        editor.sync(SCI_CHARRIGHT, 0, 0);
        return true;
    };
})();
