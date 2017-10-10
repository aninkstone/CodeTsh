(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "C_d") {
            editor.sync(SCI_LINEDOWN,  0x0A, 0x00);
            editor.sync(SCI_LINESCROLL,0x00, 0x0A);
            return true;
        }

        var loop = parseInt(cmd);
        if (typeof loop == 'number' && loop) {
            if (loop == 0) {
                loop = 1;
            }
            cmd = cmd.substr(loop.toString().length);
        }
        else {
            loop = 1;
        }

        if (cmd == 'd') {
            let beg = editor.sync(SCI_GETSELECTIONSTART);
            let end = editor.sync(SCI_GETSELECTIONEND);
            if (beg < end) {
                editor.ro (false);
                editor.sync(SCI_DELETERANGE, beg, end - beg);
                editor.ro (true);
            }
        }

        if (cmd == "dd") {
            for (var idx = 0; idx < loop; ++idx) {
                editor.sync(SCI_GETREADONLY, 0x00, 0x00);
                editor.sync(SCI_SETREADONLY, 0x00, 0x00);
                editor.sync(SCI_LINECUT,     0x00, 0x00);
                editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            }
            set.vim.reg_X = {};
            set.vim.reg_X.cmd = 'dd';
            set.vim.reg_X.type = 'line';
            return true;
        }
        if (shift) {
            editor.sync(SCI_SETREADONLY, 0x00, 0x00);
            editor.sync(SCI_DELLINERIGHT, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
            return true;
        }
        return false;
    };
})();
