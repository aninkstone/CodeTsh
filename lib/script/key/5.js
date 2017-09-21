(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w5") {
            windows.setFocusID (5);
            return true;
        }
        return false;
    }
})();


