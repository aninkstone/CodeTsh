(function (){
    return function (parent, interact, x, y, w, h) {
        var handle = $.api.widget.createWidget(parent);

        handle.setDocument = function (doc) {
            handle.edit.document = doc;
            handle.edit.setFocus();

            var ext = FilePath.extname(doc.path);
            switch (ext) {
                case ".cpp":
                case ".c":
                case ".h":
                    lexerSync (handle.edit, lexer_c);
                    break;
                case ".js":
                    lexerSync (handle.edit, lexer_javascript);
                    break;
                default:
                    lexerSync (handle.edit, lexer_default);
                    break;
            };

            handle.edit.ro (true);
        }

        handle.setFocus = function () {
            handle.edit.setFocus();
        };

        handle.setName = function (name) {
            handle.edit.name = name.toString();
        };

        handle.locX = x;
        handle.locY = y;
        handle.width  = w;
        handle.height = h;

        handle.stat = {};
        handle.sept = {};
        handle.edit = {};

        handle.edit = new Edit (handle, interact);
        handle.stat = new Stat (handle, interact);
        handle.sept = new Sept (handle, interact);

        handle.OnSizeChange = function (thiz) {
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
        handle.OnSizeChange (handle);

        handle.setDocument(defaultDoc);
        return handle;
    };
})();
