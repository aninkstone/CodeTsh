(function(){
    function Windows (parent) {
        this.viewIndex = 1;

        this.interact = new Interact (parent, 0, parent.height - 24, parent.width, 24);
        this.nerdtree = new NerdTree (parent, this.interact, 0, 0, 300, parent.height - this.interact.height)
        this.focusView = new EditView (parent, this.interact, 300, 0, parent.width - 300, parent.height - this.interact.height);

        this.interact.click = {};
        this.nerdtree.click = {};
        this.focusView.click = {};
        this.click = {};

        this.views = new Map ();
        this.views.set (this.viewIndex++, this.nerdtree);
        this.views.set (this.viewIndex++, this.focusView);
        this.views.set (this.viewIndex++, this.focusView);

        this.chdir = function (p) {
            this.nerdtree.edit.view.chdir (p);
        }

        this.viewID = function (view) {
            this.views.forEach((v, k) => {
                if (view == v) {
                    return k;
                }
            });
        }

        this.resize = function (widget) {
            this.interact.locY   = widget.height - this.interact.height;
            this.interact.width  = widget.width;
            this.nerdtree.height = widget.height - this.interact.height;

            if (this.views.size == 1) {
                this.focusView.width  = widget.width - this.nerdtree.width;
                this.focusView.height = widget.height - this.interact.height;
            }
            var near = (resizeWidget)=>{
                var leftMax = 0;
                var botmMax = 0;
                var match = {}; //TODO: multi vertical window
                this.views.forEach((v, k) => {
                    var x = v.locX + v.width;
                    var y = v.locY + v.height;

                    if (leftMax < x) {
                        leftMax = x;
                        match = v;
                    }
                });
                return match;
            };
            var l = near(widget);
            l.width  = widget.width - this.nerdtree.width;
            l.height = widget.height - this.interact.height;
        };

        this.hsplit(parent);
    };

    Windows.prototype.septClick = function (widget, pos, stat) {
        if (stat == 0) {
            this.views.forEach((v, k) => {
                v.click.x = v.locX;
                v.click.y = v.locY;
                v.click.w = v.width;
                v.click.h = v.height;
                Console.log (k + ":" + v.click.x + ":" + v.click.y + ":" + v.click.w + ":" + v.click.h);
            });
        }

        var near = (resizeWidget)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var x = v.locX + v.width;
                if (Math.abs(x - resizeWidget.locX) <= 1) {
                    match.push(v);
                }
            });
            return match;
        }

        if (stat == 1) {
            this.click = near(widget);
        }

        if (stat == 2) {
            var offsetX = (pos.currX - pos.origX);
            widget.locX  = widget.click.x + offsetX; 
            widget.width = widget.click.w - offsetX; 

            this.click.forEach((v)=>{
                v.width = v.click.w + offsetX;
            });
        }
    };

    Windows.prototype.statClick = function (widget, pos) {
    };

    Windows.prototype.vsplit = function (parent) {
    };

    Windows.prototype.hsplit = function (parent) {
        var w = this.focusView.width - this.focusView.locX;
        Console.log (this.viewID(this.focusView));
        Console.log (w);
        w = w / 2;
        Console.log (w);
        Console.log (this.focusView.width);

        this.focusView.width = w;

        Console.log (this.focusView.locX + this.focusView.width);
        Console.log (this.focusView.locY);
        Console.log (w);
        Console.log (this.focusView.height);
        this.focusView = new EditView (parent, this.interact, 
            this.focusView.locX + this.focusView.width, 
            this.focusView.locY, 
            w, 
            this.focusView.height);

        this.focusView.click = {};
        this.views.set (this.viewIndex++, this.focusView);
        return this.focusView;
    };

    Windows.prototype.focusChange = function (widget) {
        try {
            this.views.forEach ((v, k, map)=>{
                if (v == widget.parent) {
                    this.focusView = widget.parent;
                    this.interact.focusView = widget;
                    widget.inval ();
                }
            });
        }
        catch (e) {
            Console.log (e.toString());
        }
    };
    return Windows;
})();
