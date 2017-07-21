(function (){
    return function (parent, interact, x, y, w, h) {
        var handle = $.api.widget.createWidget(parent);

        handle.setFocus = function () {
            handle.edit.view.setFocus();
        };

        handle.setName = function (name) {
            handle.edit.view.name = name.toString();
        };

        handle.locX = x;
        handle.locY = y;
        handle.width  = w;
        handle.height = h;

        handle.stat = {};
        handle.sept = {};
        handle.edit = {};

        handle.edit.view = new Edit (handle, interact);
        handle.stat.view = new Stat (handle, interact);
        handle.sept.view = new Sept (handle, interact);

        handle.OnSizeChange = function (thiz) {
            thiz.sept.view.locX   = 0;
            thiz.sept.view.locY   = 0;
            thiz.sept.view.width  = 8;
            thiz.sept.view.height = thiz.height;

            thiz.stat.view.locX   = thiz.sept.view.width;
            thiz.stat.view.height = 23;
            thiz.stat.view.locY   = thiz.height - thiz.stat.view.height;
            thiz.stat.view.width  = thiz.width - thiz.sept.view.width;

            thiz.edit.view.locX   = thiz.sept.view.width;
            thiz.edit.view.locY   = 0;
            thiz.edit.view.width  = thiz.width - thiz.sept.view.width;
            thiz.edit.view.height = thiz.height - thiz.stat.view.height;
        }
        handle.OnSizeChange (handle);

        handle.edit.view.document = defaultDoc;
        lexerSync (handle.edit.view, lexer_c);
        handle.edit.view.ro (true);
        return handle;
    };
})();
