(function (){
    return function (parent, interact, x, y, w, h) {
        var thiz = $.api.widget.createWidget(parent);

        thiz.changeDocument = function (doc) {
            if (thiz.edit.document.savepoint == false) {
                return -1;
            }
            thiz.edit.document = doc;
            thiz.edit.setFocus();

            var ext = FilePath.extname(doc.path);
            switch (ext) {
                case ".cpp":
                case ".c":
                case ".h":
                    lexerSync (thiz.edit, lexer_c);
                    break;
                case ".js":
                    lexerSync (thiz.edit, lexer_javascript);
                    break;
                case ".html":
                case ".htm":
                    lexerSync (thiz.edit, lexer_html);
                    break;
                case ".txt":
                    lexerSync (thiz.edit, lexer_customize);
                    break;
                default:
                    lexerSync (thiz.edit, lexer_default);
                    break;
            };
            thiz.edit.sync(SCI_GOTOPOS, thiz.edit.document.caretP, 0x00);
            thiz.edit.sync(SCI_SETCODEPAGE, 0, 0x00);
            thiz.edit.ro (true);
        }

        thiz.setFocus = function () {
            thiz.edit.setFocus();
        }

        thiz.setName = function (name) {
            thiz.edit.name = name.toString();
        }

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.sept = {};
        thiz.edit = {};

        thiz.edit = new Edit (thiz, interact);
        thiz.stat = new Stat (thiz, interact);
        thiz.sept = new Sept (thiz, interact);
        thiz.type = "Edit";

        thiz.OnSizeChange = function (thiz) {
            thiz.sept.locX   = 0;
            thiz.sept.locY   = 0;
            thiz.sept.width  = 8;
            thiz.sept.height = thiz.height;

            thiz.stat.locX   = thiz.sept.width;
            thiz.stat.height = 23;
            thiz.stat.locY   = thiz.height - thiz.stat.height;
            thiz.stat.width  = thiz.width - thiz.sept.width;

            thiz.edit.locX   = thiz.sept.width;
            thiz.edit.locY   = 0;
            thiz.edit.width  = thiz.width - thiz.sept.width;
            thiz.edit.height = thiz.height - thiz.stat.height;
        }
        thiz.OnSizeChange (thiz);

        thiz.changeDocument(defaultDoc);
        return thiz;
    };
})();
