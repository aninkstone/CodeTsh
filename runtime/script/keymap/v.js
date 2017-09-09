(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wv") {
            windows.hsplit();
        }
        if (cmd == "C_v") {
            editor.sync(SCI_SETSELECTIONMODE, 3, 0x00);
        }
        return true;
    };
})();
