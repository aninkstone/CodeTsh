(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w8") {
            windows.setFocusID (8);
            return true;
        }
        return false;
    }
})();
