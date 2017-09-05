(function(){
    return function (parent, interact, x, y, w, h){
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:SIZECHANGE":
                    this.nerd.locX = 0;
                    this.nerd.locY = 0;
                    this.nerd.width  = this.width;
                    this.nerd.height = this.height - 23;

                    this.stat.locX = 0;
                    this.stat.locY = this.height - 23;
                    this.stat.width  = this.width;
                    this.stat.height = 23;
                    break;
                case "SYS:FOCUSIN":
                    this.nerd.setFocus();
                    break;
                default:
                    break;
            }
        }

        var thiz = NewWidget (parent, OnEvt);

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.nerd = {};

        thiz.nerd = new Nerd (thiz, interact);
        thiz.stat = new Stat (thiz, interact);
        thiz.type = "Nerd";

        //default size
        thiz.nerd.locX = 0;
        thiz.nerd.locY = 0;
        thiz.nerd.width  = thiz.width;
        thiz.nerd.height = thiz.height - 23;

        thiz.stat.locX = 0;
        thiz.stat.locY = thiz.height - 23;
        thiz.stat.width  = thiz.width;
        thiz.stat.height = 23;

        return thiz;
    };
})();
