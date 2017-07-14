(function(){
    return function(doc, editor, path){
        if (typeof path === undefined) {
            return;
        }

        fs = new FileSystem();
        l = fs.chdir (path);

        doc.deleteChars(0, doc.length);
        doc.insertChars(l);
        set.runtime.curr = l;

        Windows.chdir(set.runtime.curr);
    }
    return true;
})();
