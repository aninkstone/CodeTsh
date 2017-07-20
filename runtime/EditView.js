(function (){
    return function (parent, interact, x, y, w, h) {
        var thiz = $.api.widget.createWidget(parent);

        thiz.setFocus = function () {
            thiz.edit.view.setFocus();
        };

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.sept = {};
        thiz.edit = {};

        thiz.sept.view = new Sept (thiz, interact);
        thiz.stat.view = new Stat (thiz, interact);
        thiz.edit.view = new Edit (thiz, interact);

        thiz.OnSizeChange = function (thiz) {
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
        thiz.OnSizeChange (thiz);

        thiz.edit.view.document = defaultDoc;
        return thiz;
    };
})();
