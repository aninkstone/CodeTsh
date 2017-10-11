(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w9") {
            setFocusID (9);
            return CTOR_VIMKEY_CONSUME;
        }
        set.vim.number += "9";
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();


