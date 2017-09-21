(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wq") {
            windows.close();
            return true;
        }
        if (cmd == 'q') {
            editor.sync(SCI_CANCEL);
            return true;
        }
        return false;
    };
})();
