(function(){
    function Layout () {
        this.init = function (object) {
            this.layout.interact.x = 0;
            this.layout.interact.y = object.height - this.layout.interact.h;
            this.layout.interact.w = object.width;

            this.interact = Interact(object);
            this.interact.locX   = this.layout.interact.x;
            this.interact.locY   = this.layout.interact.y;
            this.interact.width  = this.layout.interact.w;
            this.interact.height = this.layout.interact.h;

            this.multiView = MultView (object, this.interact);

            this.interact.focusView = this.multiView.edit.view;
        }

        this.resize = function (object) {
        }

        this.layout = {
            interact: {
                x:0,
                y:0,
                w:0,
                h:24,
            },
            stat: {
                x:0,
                y:0,
                w:0,
                h:21,
            },
            t_view: {
                x:0,
                y:0,
                w:0,
                h:0,
            },
            l_view: {
                x:0,
                y:0,
                w:0,
                h:0,
            },
            r_view: {
                x:0,
                y:0,
                w:0,
                h:0,
            },
            b_view: {
                x:0,
                y:0,
                w:0,
                h:0,
            },
        };
    };

    Layout.prototype.vsplit = function (object) {
        return this;
    };
    Layout.prototype.hsplit = function (object) {
        return this;
    };
    return Layout; 
})();
