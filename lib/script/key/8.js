(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w8") {
            windows.setFocusID (8);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();
