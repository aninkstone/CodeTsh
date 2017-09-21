(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wl") {
            windows.moveFocus2R();
            return true;
        }
        if (cmd == 'l') {
            editor.sync(SCI_CHARRIGHT, 0, 0);
            return true;
        }
        return false;
    };
})();