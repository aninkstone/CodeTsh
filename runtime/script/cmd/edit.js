(function(){
    return function(doc, editor, fpath){
        if (typeof fpath !== 'string') {
            doc.deleteChars(0, doc.length);
            doc.insertChars(fpath + " Invalidate path");
            return;
        }

        let fs = new FileSystem();
        if (!fs.isDirectory (fpath) && !fs.isRegularFile (fpath)) {
            return;
        }

        let fp = new FilePath();
        let abs = fp.isAbsolute(fpath);
        if (!abs) {
            if (fpath == '.') {
                fpath = set.runtime.curr;
            }
            if (fpath == '..') {
                return;
            }
        }

        if (fs.isRegularFile (fpath)) {
            var open = $.api.document.createDocument(fpath);
            editor.doc(open);
            editor.ro (true);
        }
    };
})();
