(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w2") {
            windows.setFocusID (2);
            return true;
        }
        return false;
    }
})();


