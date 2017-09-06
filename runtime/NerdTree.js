(function(){
    return function (parent, x, y, w, h){
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:SIZECHANGE":
                    this.nerd.locX = 0;
                    this.nerd.locY = 0;
                    this.nerd.width  = this.handle.width;
                    this.nerd.height = this.handle.height - 23;

                    this.stat.locX = 0;
                    this.stat.locY = this.handle.height - 23;
                    this.stat.width  = this.handle.width;
                    this.stat.height = 23;
                    break;
                case "SYS:FOCUSIN":
                    this.nerd.setFocus();
                    break;
                default:
                    break;
            }
        }

        this.handle = NewWidget (parent, OnEvt.bind(this));

        this.handle.locX = x;
        this.handle.locY = y;
        this.handle.width  = w;
        this.handle.height = h;

        this.handle.stat = {};
        this.handle.nerd = {};

        this.handle.nerd = new Nerd (this.handle, this);
        this.handle.stat = new Stat (this.handle, this);
        this.type = "Nerd";

        ////default size
        this.handle.nerd.handle.locX = 0;
        this.handle.nerd.handle.locY = 0;
        this.handle.nerd.handle.width  = this.handle.width;
        this.handle.nerd.handle.height = this.handle.height - 23;

        this.handle.stat.handle.locX = 0;
        this.handle.stat.handle.locY = this.handle.height - 23;
        this.handle.stat.handle.width  = this.handle.width;
        this.handle.stat.handle.height = 23;
    };
})();
