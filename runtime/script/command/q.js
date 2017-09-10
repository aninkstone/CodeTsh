(function(){
    return function(doc, editor, fname){
        var f = require(set.runtime.path + "/runtime/script/command/quit.js");
        return f (doc, editor, fname);
        //var c = windows.viewsCount ();
        //if (c == 2) {
        //    f = require(set.runtime.path + "/runtime/script/command/quit.js");
        //    return f (doc, editor, fname);
        //}
        //else {
        //    windows.closeCurrView ();
        //}
    }
})();
