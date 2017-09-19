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

        let abs = FilePath.win32.isAbsolute(fpath);
        if (!abs) {
            if (fpath == '.') {
                fpath = set.runtime.curr;
            }
            if (fpath == '..') {
                return;
            }
        }

        if (fs.isRegularFile (fpath)) {
            var open = new Document ();
            fs.readFile(fpath, function (err, content) {
                open.insertChars(content);
            });
            open.direct = fpath;
            editor.doc(open);
            editor.ro (true);
        }
    };
})();
