(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl == true && cmd == "w") {
            set.vim.cmd = "C_w"
            return false;
        }
        if (cmd == "dw") {
            b = editor.sync(SCI_GETREADONLY, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,  0x00, 0x00);
            editor.sync(SCI_DELWORDRIGHT, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,   b,    0x00);
        }
        if (cmd == "w") {
            editor.sync(SCI_WORDRIGHT, 0, 0);
        }
        return true;
    };
})();

