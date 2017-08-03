(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl) {
            editor.sync(SCI_LINESCROLL,0x00, -0x01);
            return true;
        }
        if (cmd == "y") {
            var beg = editor.sync(SCI_GETSELECTIONSTART, 0x00, 0x00);
            var sel = editor.sync(SCI_GETSELECTIONEMPTY, 0x00, 0x00);
            if (sel == 0) {
                editor.sync(SCI_COPY, 0x00, 0x00);
                editor.sync(SCI_SETSELECTION, beg, beg);
                editor.sync(SCI_CANCEL);
            }
        }
        if (cmd == "yw") {
            return true;
        }
        if (cmd == "yy") {
            editor.sync(SCI_COPYALLOWLINE, 0x00, 0x00);
            return true;
        }
        return false;
    };
})();
