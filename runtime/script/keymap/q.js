(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wq") {
            windows.close();
            return;
        }
        editor.sync(SCI_CANCEL);
        return true;
    };
})();
