(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wh") {
            windows.moveFocus2L();
            return true;
        }
        if (cmd == 'h') {
            editor.sync(SCI_CHARLEFT, 0, 0);
            return true;
        }
        return false;
    };
})();
