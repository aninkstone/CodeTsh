(function(){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_w4") {
            windows.setFocusID (4);
            return true;
        }
        if (shift) {
            editor.sync(SCI_LINEEND, 0x00, 0x00);
            return true;
        }
        else {
            return true;
        }
    }
})();
