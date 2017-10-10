(function(){
    function NerdTree (parent, x, y, w, h){
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:SIZECHANGE":
                    try {
                        this.edit.setLocation(0, 0);
                        this.edit.setSize(this.handle.width, this.handle.height - 23);

                        this.stat.setLocation(0, this.handle.height - 23);
                        this.stat.setSize(this.handle.width, 23);
                    }
                    catch (e) {
                    }
                    break;
                case "SYS:FOCUSIN":
                    this.edit.setFocus();
                    break;
                default:
                    break;
            }
        }

        function OnDrw (canvas) {
            var p = new Paint();
            p.style = 0x00;
            p.color = 0xFF0000FF;
            canvas.drawRect(0, 0, this.width, this.height, p);
        }

        this.handle = NewWidget (parent, OnEvt.bind(this), OnDrw.bind(this));
        this.parent = parent;

        this.x = 0;
        this.y = 0;
        this.w = 300;
        this.h = parent.height;

        this.handle.locX = this.x;
        this.handle.locY = this.y;
        this.handle.width  = this.w;
        this.handle.height = this.h;

        this.type = "Nerd";
        this.edit = new Nerd (this, this);
        this.stat = new Stat (this, this);

        this.edit.setLocation(0, 0);
        this.edit.setSize(this.handle.width, this.handle.height - 23);

        this.stat.setLocation(0, this.handle.height - 23);
        this.stat.setSize(this.handle.width, 23);
    };

    Inherite(NerdTree, BaseObj);

    NerdTree.prototype.chdir = function(p) {
        this.edit.chdir(p);
    }

    return NerdTree;
})();
