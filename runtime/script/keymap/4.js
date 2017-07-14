(function(){
    return function(editor, cmd, shift, alt, ctrl){
        if (shift) {
            f = require("runtime/script/keymap/dolar.js");
            return f (editor, cmd, shift, alt, ctrl);
        }
        else {
            return true;
        }
    }
})();

