(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w3") {
            windows.setFocusID (3);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();
