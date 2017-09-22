(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wv") {
            windows.split("vert");
            return true;
        }
        if (cmd == "C_v") {
            editor.sync(SCI_SETSELECTIONMODE, 1, 0x00);
            return true;
        }
        return false;
    };
})();
