(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w7") {
            setFocusID (7);
            return CTOR_VIMKEY_CONSUME;
        }
        set.vim.number += "7";
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();


