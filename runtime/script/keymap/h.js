(function (){
    return function (editor, cmd, shift, alt, ctrl){
        editor.sync(SCI_CHARLEFT, 0, 0);
        return true;
    };
})();
