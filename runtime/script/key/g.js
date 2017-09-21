(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (shift) {
            editor.sync(SCI_DOCUMENTEND, 0x00, 0x00);
            return true;
        }
        if (cmd == "gg") {
            editor.sync(SCI_DOCUMENTSTART, 0x00, 0x00);
            return true;
        }
        return false;
    };
})();
