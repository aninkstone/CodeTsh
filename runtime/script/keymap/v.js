(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_wv") {
            windows.hsplit(set.window);
        }
        return true;
    };
})();
