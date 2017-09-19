(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (ctrl && cmd == 'e') {
            editor.sync(SCI_LINESCROLL,0x00, 0x01);
            return true;
        }
        if (cmd == 'e') {
            editor.sync(SCI_WORDRIGHT, 0x00, 0x00);
            return true;
        } 
        if (cmd == 'L_be') {
            var inet = windows.namedCtrl("Inet");
            inet.ExecuteCommand(":ls");
            return true;
        }
        return false;
    };
})();
