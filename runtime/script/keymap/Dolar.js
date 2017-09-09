(function (){
    return function Enter (editor, ctrl, shift, k) {
        editor.sync(SCI_LINEEND, 0x00, 0x00); 
        return true;
    }
})();


