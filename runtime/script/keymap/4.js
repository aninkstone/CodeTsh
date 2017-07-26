(function(){
    return function(editor, cmd, shift, alt, ctrl){
        if (shift) {
            editor.sync(SCI_LINEEND, 0x00, 0x00);
            return true;
        }
        else {
            return true;
        }
    }
})();
