(function(){
    function WindowMgr () {
        this.parent = null;
        this.viewIndex = 1;

        this.layout = {
            nerdtree: {
                x:0,
                y:0,
                w:300,
                h:0,
            },
            interact: {
                x:0,
                y:0,
                w:0,
                h:24,
            },
        };

        this.init = function (parent) {
            this.parent = parent;

            this.layout.interact.x = 0;
            this.layout.interact.y = parent.height - this.layout.interact.h;
            this.layout.interact.w = parent.width;

            this.interact = Interact (parent, 
                this.layout.interact.x,
                this.layout.interact.y,
                this.layout.interact.w,
                this.layout.interact.h,
            );

            this.layout.nerdtree.x = 0;
            this.layout.nerdtree.y = 0;
            this.layout.nerdtree.h = parent.height - this.layout.interact.h;

            this.nerdtree = NerdTree (parent, this.interact,
                this.layout.nerdtree.x, 
                this.layout.nerdtree.y, 
                this.layout.nerdtree.w, 
                this.layout.nerdtree.h
            );

            this.views = new Map ();

            var v = EditView (parent, this.interact, this.nerdtree.width, 0, parent.width, parent.height - this.interact.height);
            this.views.set (this.viewIndex.toString(), v);
            this.focusView = v;
            //this.hsplit(parent);
        }

        this.chdir = function (p) {
            this.nerdtree.edit.view.chdir (p);
        }

        this.resize = function (parent) {
            try {
                var rA = rightMost (this.views);
                rA.forEach(function (view){
                    view.width  = parent.width - view.locX;
                });

                var bA = bottomMost(this.views);
                bA.forEach ((view)=>{
                    view.height = parent.height - view.locY - this.interact.height;
                });

                Console.log (bA.length);
            }
            catch (e) {
                Console.log (e.toString());
            }
        }

        function bottomMost (views) {
            var bPosMost = 0;
            var bPosView = [];

            views.forEach(function (obj){
                var b = obj.locY + obj.height;
                if (bPosMost < b) {
                    bPosMost = b;
                }
            });

            views.forEach(function (obj){
                var b = obj.locY + obj.height;
                if (bPosMost == b) {
                    bPosView.push(obj);
                }
            });

            return bPosView;
        }

        function rightMost (views) {
            var rPosMost = 0;
            var rPosView = [];

            views.forEach (function (obj){
                var r = obj.locX + obj.width;
                if (rPosMost < r) {
                    rPosMost = r;
                }
            });

            //find eaqual
            views.forEach (function (obj){
                var r = obj.locX + obj.width;
                if (rPosMost == r) {
                    rPosView.push(obj);
                }
            });
            return rPosView;
        }
    };

    WindowMgr.prototype.septClick = function (widget, pos, release) {
        if (release == 0) {
            this.views.forEach((v, k) => {
                v.click.x = v.locX;
                v.click.y = v.locY;
                v.click.w = v.width;
                v.click.h = v.height;
                Console.log (k + ":" + v.click.x + ":" + v.click.y + ":" + v.click.w + ":" + v.click.h);
            });
        }
        else {
            var offsetX = (pos.currX - pos.origX);
            widget.locX  = widget.click.x + offsetX; 
            widget.width = widget.click.w - offsetX; 
            widget.updateSize();

            if (widget.lc.size > 0) {
                widget.lc.forEach ((v) => {
                    v.width = v.click.w + offsetX;
                    v.updateSize();
                })
            }
        }
    };

    WindowMgr.prototype.septMove = function (widget, pos) {
    };

    WindowMgr.prototype.statClick = function (widget, pos) {
    };

    WindowMgr.prototype.vsplit = function (parent) {
    };

    WindowMgr.prototype.hsplit = function (parent) {
        var w = this.focusView.width - this.focusView.locX;
        w = w / 2;

        this.focusView.width = w;
        this.focusView.updateSize();

        this.viewIndex = this.viewIndex + 1;
        var rect = {
            x: this.focusView.locX + this.focusView.width,
            y: this.focusView.locY,
            w: w,
            h: this.focusView.height,
        };

        var v = EditView (parent, this.interact, rect.x, rect.y, rect.w, rect.h);
        v.inval ();
        v.bindL (this.focusView);

        this.views.set (this.viewIndex.toString(), v);
        return v;
    };

    WindowMgr.prototype.focusChange = function (view) {
        try {
            this.views.forEach ((v, k, map)=>{
                if (v == view) {
                    this.focusView = view;
                    this.interact.focusView = view.edit.view;
                    view.inval ();
                }
            });
        }
        catch (e) {
            Console.log (e.toString());
        }
    };
    return WindowMgr;
})();
