(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w9") {
            setFocusID (9);
            return true;
        }
        return false;
    }
})();


