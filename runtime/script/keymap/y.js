(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl) {
            editor.sync(SCI_LINESCROLL,0x00, -0x01);
            return true;
        }
        if (cmd == "y") {
        }
        if (cmd == "yw") {
            return true;
        }
        if (cmd == "yy") {
            editor.sync(SCI_LINECOPY, 0x00, 0x00);
            return true;
        }
        return false;
    };
})();
