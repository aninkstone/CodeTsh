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
        Console.log (fpath);

        if (fs.isDirectory (fpath)) {
            array = new Array ();
            dir = new Document();

            content = fs.listDir(fpath, function(type, name){
                switch (type) {
                    case 0: /* DT_UNKNOWN */
                        obj = [name, fpath];
                        array.push (obj);
                        break;
                    case 1: /* DT_REG */
                        obj = [name, fpath];
                        array.push (obj);
                        break;
                    case 2: /* DT_DIR */
                        if (name == "." || name == "..") {
                            break;
                        }
                        obj = [name, fpath];
                        array.push (obj);
                        break;
                        obj = [name, fpath];
                        array.push (obj);
                    case 3: /* DT_LNK */
                        obj = [name, fpath];
                        array.push (obj);
                        break;
                    default:
                        break;
                }
            });

            nameMax = 0;
            pathMax = 0;

            array.forEach (function (ele) {
                if (nameMax < ele[0].length) {
                    nameMax = ele[0].length;
                }
                if (pathMax < ele[1].length) {
                    pathMax = ele[1].length;
                }
            });

            var comment = '" Press <F1> for Help \n';
            comment +=    '" Sorted by mru | Locate buffer | One tab/buffer | Absolute Split path\n';
            comment +=    '"=\n';

            formatter_beg = " 10 %a     "; 
            formatter_end = "          line 20"; 
            dir.deleteChars (0, dir.length);
            dir.insertChars (comment);

            array.forEach (function (ele){
                name = ele[0];
                for (idx = name.length; idx < nameMax; ++idx) {
                    name += " ";
                }
                path = ele[1];
                for (idx = path.length; idx < pathMax; ++idx) {
                    path += " ";
                }
                dir.insertChars (formatter_beg + name + "             " + path + formatter_end + "\n");
            });

            editor.document = dir;

            set.vim.list = array;
            editor.sync(SCI_SETREADONLY, 0x01, 0x00);
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
