(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd.match("C_wC_w")) {
            return CTOR_VIMKEY_CONSUME;
        }
        //TODO: number support
        if (cmd.match(/^\d*dw/g)) {
            editor.sync(SCI_SETREADONLY,  0x00, 0x00);
            editor.sync(SCI_DELWORDRIGHT, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,  0x01, 0x00);
            set.vim.reg_X = {};
            set.vim.reg_X.cmd = 'dw';
            set.vim.reg_X.type = 'word';
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd.match(/^\d*w/g)) {
            console.log ("ok" + cmd);
            let repeat = parseInt(set.vim.number);
            if (repeat > 0) {
                do {
                    editor.sync(SCI_WORDRIGHT, 0, 0);
                }
                while (--repeat);
            }
            else {
                editor.sync(SCI_WORDRIGHT, 0, 0);
            }
            return CTOR_VIMKEY_CONSUME;
        }
        if (cmd == "C_w") {
            windows.autoViewID();
            return CTOR_VIMKEY_NOTCONCERN;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
