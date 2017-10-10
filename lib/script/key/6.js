(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w6") {
            windows.setFocusID (6);
            return true;
        }
        return false;
    }
})();


