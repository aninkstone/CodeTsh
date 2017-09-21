(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == 'C_e') {
            editor.sync(SCI_LINESCROLL,0x00, 0x01);
            editor.sync(SCI_MOVECARETINSIDEVIEW);
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
        if (cmd == 'C_we') {
            windows.split("hori");
            var v = windows.focusMgr.focusEdit();
            v.setDocument(consoleDoc);
            return true;
        }
        return false;
    };
})();
