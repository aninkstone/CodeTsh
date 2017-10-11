(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == 'r') {
            return CTOR_VIMKEY_USEKEEP;
        }
        if (cmd.length > 1) {
            cmd = cmd.substring(1);
        }
        let beg = editor.sync(SCI_GETSELECTIONSTART);
        let end = editor.sync(SCI_GETSELECTIONEND);
        if (beg == end) {
            let cur = editor.cursor();
            editor.sync(SCI_SETSEL, cur, cur + 1);
        }
        editor.ro (false);
        editor.sync(SCI_REPLACESEL, 0, cmd);
        editor.ro (true);
        editor.sync(SCI_CHARLEFT, 0, 0);
        return CTOR_VIMKEY_CONSUME;
    };
})();
