(function(){
    return function(doc, editor, fname){
        var f = require(set.runtime.cmdpath + "quit.js");
        return f (doc, editor, fname);
    }
})();
