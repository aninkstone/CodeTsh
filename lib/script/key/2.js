(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "C_w2") {
            windows.setFocusID (2);
            return CTOR_VIMKEY_CONSUME;
        }
        set.vim.number += "2";
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();
