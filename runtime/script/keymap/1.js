(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w1") {
            windows.setFocusID (1);
            return true;
        }
        return false;
    }
})();

