(function(){
    return function(doc, editor, fpath){
        if (typeof fpath !== 'string') {
            doc.deleteChars(0, doc.length);
            doc.insertChars(fpath + " Invalidate path");
            return;
        }
        fs = new FileSystem();
        if (!fs.isDirectory (fpath) && !fs.isRegularFile (fpath)) {
            return;
        }

        abs = FilePath.win32.isAbsolute(fpath);
        if (!abs) {
            if (fpath == '.') {
                fpath = set.runtime.curr;
            }
            if (fpath == '..') {
                return;
            }
        }


        if (fs.isRegularFile (fpath)) {
            content = fs.readFile(fpath);
            newDoc = new Document ();
            newDoc.direct = fpath;
            editor.document = newDoc;
            editor.ro(true);

            ext = FilePath.extname(fpath);
            switch (ext) {
                case ".cpp":
                case ".c":
                case ".h":
                    lexerSync (widget, lexer_c);
                    break;
                default:
                    lexerSync (widget, lexer_default);
                    break;
            };
        }
    };
})();
