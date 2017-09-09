(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl) {
            editor.sync(SCI_LINESCROLL,0x00, 0x01);
        }
        else {
            editor.sync(SCI_WORDRIGHT, 0x00, 0x00);
        }
        return true;
    };
})();
