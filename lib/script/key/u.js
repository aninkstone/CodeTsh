(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl) {
            editor.sync(SCI_LINEUP,  0x0A, 0x00);
            editor.sync(SCI_LINESCROLL,0x00, -0x0A);
        }
        else {
            b = editor.sync(SCI_GETREADONLY, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,   0x00, 0x00);
            editor.sync(SCI_UNDO, 0x00, 0x00);
            editor.sync(SCI_SETREADONLY,   b,    0x00);
        }
        return true;
    };
})();

