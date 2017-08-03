(function(){
    return function (parent, interact, x, y, w, h){
        var thiz = $.api.widget.createWidget (parent);

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.nerd = {};

        thiz.nerd = new Nerd (thiz, interact);
        thiz.stat = new Stat (thiz, interact);
        thiz.type = "Nerd";

        thiz.OnSizeChange = function (thiz) {
            thiz.nerd.locX = 0;
            thiz.nerd.locY = 0;
            thiz.nerd.width  = thiz.width;
            thiz.nerd.height = thiz.height - 23;

            thiz.stat.locX = 0;
            thiz.stat.locY = thiz.height - 23;
            thiz.stat.width  = thiz.width;
            thiz.stat.height = 23;
        }

        thiz.setFocus = function () {
            thiz.nerd.setFocus();
        };

        thiz.OnSizeChange (thiz);
        return thiz;
    };
})();
