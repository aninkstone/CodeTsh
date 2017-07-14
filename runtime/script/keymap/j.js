(function (){
    return function (editor, cmd, shift, alt, ctrl){
        editor.sync(SCI_LINEDOWN, 0x01, 0);
        return true;
    };
})();

