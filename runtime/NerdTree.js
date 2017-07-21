(function(){
    return function (parent, interact, x, y, w, h){
        var thiz = $.api.widget.createWidget (parent);

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.nerd = {};

        thiz.nerd.view = new Nerd (thiz, interact);
        thiz.stat.view = new Stat (thiz, interact);

        thiz.OnSizeChange = function (thiz) {
            thiz.nerd.view.locX = 0;
            thiz.nerd.view.locY = 0;
            thiz.nerd.view.width  = thiz.width;
            thiz.nerd.view.height = thiz.height - 23;

            thiz.stat.view.locX = 0;
            thiz.stat.view.locY = thiz.height - 23;
            thiz.stat.view.width  = thiz.width;
            thiz.stat.view.height = 23;
        }

        thiz.setFocus = function () {
            thiz.nerd.view.setFocus();
        };

        thiz.OnSizeChange (thiz);
        return thiz;
    };

})();
