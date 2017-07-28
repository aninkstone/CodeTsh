(function(){
    var INDEXOFVIEW = 0;
    function Windows (parent) {
        this.fHistory = [];
        this.near = {};
        this.same = {};
        this.views = new Map ();

        this.interact = new Interact (parent, 0, parent.height - 24, parent.width, 24);
        this.nerdtree = new NerdTree (parent, this.interact, 0, 0, 300, parent.height - this.interact.height)
        this.focusView = new EditView (parent, this.interact, 300, 0, parent.width - 300, parent.height - this.interact.height);
        this.focusChange (this.focusView);

        this.interact.click = {};
        this.nerdtree.click = {};
        this.focusView.click = {};

        this.views.set (INDEXOFVIEW++, this.nerdtree);
        this.views.set (INDEXOFVIEW++, this.focusView);

        this.chdir = function (p) {
            this.nerdtree.nerd.chdir (p);
        }

        this.viewID = function (view) {
            var key = null;
            this.views.forEach((v, k) => {
                if (view == v) {
                    key = k;
                }
            });
            return key;
        }

        this.resize = function (widget) {
            this.interact.locY   = widget.height - this.interact.height;
            this.interact.width  = widget.width;

            var maxLeft = (resizeWidget)=>{
                var leftMax = 0;
                this.views.forEach((v, k) => {
                    var x = v.locX + v.width;
                    if (leftMax <= x) {
                        leftMax = x;
                    }
                });
                return leftMax;
            };
            var maxBotm = (resizeWidget)=>{
                var botmMax = 0;
                this.views.forEach((v, k) => {
                    var y = v.locY + v.height;
                    if (botmMax <= y) {
                        botmMax = y;
                    }
                });
                return botmMax;
            };

            var nearL = (resizeWidget)=>{
                var leftMax = maxLeft(resizeWidget);
                var match = [];
                this.views.forEach((v, k) => {
                    var x = v.locX + v.width;
                    if (Math.abs(leftMax - x) <= 2) {
                        match.push(v);
                    }
                });
                return match;
            };

            var nearB = (resizeWidget)=>{
                var botmMax = maxBotm(resizeWidget);
                var match = [];
                this.views.forEach((v, k) => {
                    var y = v.locY + v.height;
                    if (Math.abs(botmMax - y) <= 2) {
                        match.push(v);
                    }
                });
                return match;
            };

            var l = nearL(widget);
            var b = nearB(widget);

            l.forEach((v)=>{
                v.width  = widget.width - v.locX;
            });
            b.forEach((v)=>{
                v.height = widget.height - v.locY - this.interact.height;
            });

        };
        this.views.forEach((v, k)=>{ 
            try {
                v.setName(k); 
            }
            catch (e){
            }
        });
    };

    Windows.prototype.setFocus = function (widget) {
        Console.log ("Focus Change");
        this.fHistory.unshift(widget);

        if (this.fHistory.length >= 20) {
            this.fHistory.pop();
        }
    };

    Windows.prototype.focusHistory = function (history) {
        if (typeof history === 'number') {
            if (history >= 6) {
                history = 6;
            }
            Console.log (this.fHistory.length);
            if (this.fHistory.length < history) {
                return this.fHistory[this.forEach.length - 1];
            }
            else {
                return this.fHistory[history];
            }
        }
        return null;
    };

    Windows.prototype.setFocusID  = function (index) {
        var obj = this.views.get (index);
        if (obj) {
            obj.setFocus();
        }
    };

    Windows.prototype.focusViewID = function () {
        return this.viewID(this.focusView);
    };

    Windows.prototype.viewsCount = function () {
        return this.views.size;
    };

    Windows.prototype.septClick = function (widget, pos, stat) {
        if (stat == 0) {
            this.views.forEach((v, k) => {
                v.click.x = v.locX;
                v.click.y = v.locY;
                v.click.w = v.width;
                v.click.h = v.height;
            });
        }

        var near = (resizeWidget)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var x = v.locX + v.width;
                if (Math.abs(x - resizeWidget.locX) <= 2) {
                    match.push(v);
                }
            });
            return match;
        }

        var same = (resizeWidget)=>{
            var match = [];
            this.views.forEach((v, k) => {
                if (v.locX == resizeWidget.locX) {
                    if (this.viewID(v) != this.viewID(resizeWidget)) {
                        match.push (v);
                    }
                }
            });
            return match;
        }

        if (stat == 1) {
            this.near = near(widget);
            this.same = same(widget);
        }

        if (stat == 2) {
            var offsetX = (pos.currX - pos.origX);
            widget.locX  = widget.click.x + offsetX; 
            widget.width = widget.click.w - offsetX; 

            this.near.forEach((v)=>{
                v.width = v.click.w + offsetX;
            });

            this.same.forEach((v)=>{
                v.locX  = widget.locX;
                v.width = v.click.w - offsetX;
            });
        }
    };

    Windows.prototype.statClick = function (widget, pos, stat) {
        if (stat == 0) {
            this.views.forEach((v, k) => {
                v.click.x = v.locX;
                v.click.y = v.locY;
                v.click.w = v.width;
                v.click.h = v.height;
            });
        }

        var same = (resizeWidget)=>{
            var match = [];
            this.views.forEach((v, k) => {
                if ((v.locY + v.height) == (resizeWidget.height + resizeWidget.locY)) {
                    if (this.viewID(v) != this.viewID(resizeWidget)) {
                        match.push (v);
                    }
                }
            });
            return match;
        }

        var near = (resizeWidget)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var y = v.locY;
                if (Math.abs(y - (resizeWidget.locY + resizeWidget.height)) <= 2) {
                    match.push(v);
                }
            });
            return match;
        }

        if (stat == 1) {
            this.same = same (widget);
            this.near = near (widget);
        }

        if (stat == 2) {
            var offsetY = (pos.currY - pos.origY);
            widget.height = widget.height + (offsetY); 

            this.near.forEach((v)=>{
                v.locY = v.locY + offsetY;
                v.height = v.height - offsetY;
            });

            this.same.forEach((v)=>{
                v.height = v.height + offsetY;
            });
        }
    };

    Windows.prototype.mergeView = function (merge) {
        var k = this.viewID (merge);
        this.views.delete (k);

        var flvg = (resizeWidget)=>{ /* find left views group */
            var match = [];
            this.views.forEach((v, k) => {
                var x = v.locX + v.width;
                if (Math.abs(x - (resizeWidget.locX)) <= 2) {
                    match.push(v);
                }
            });
            return match;
        }
        var lvg = flvg (merge);
        Console.log ("Has left view count = " + lvg.length);

        var frvg = (resizeWidget)=>{ /* find right views group */
            var match = [];
            this.views.forEach((v, k) => {
                var x = v.locX;
                if (Math.abs(x - (resizeWidget.locX + resizeWidget.width)) <= 2) {
                    match.push(v);
                }
            });
            return match;
        }
        var rvg = frvg (merge);
        Console.log ("Has right view count = " + rvg.length);

        var ftvg = (resizeWidget)=>{ /* find top views group */
            var match = [];
            this.views.forEach((v, k) => {
                var y = v.locY + v.height;
                if (Math.abs(y - (resizeWidget.locY)) <= 2) {
                    match.push(v);
                }
            });
            return match;
        }
        var tvg = ftvg (merge);
        Console.log ("Has top view count = " + tvg.length);

        var fbvg = (resizeWidget)=>{ /* find bottom views group */
            var match = [];
            this.views.forEach((v, k) => {
                var y = v.locY;
                if (Math.abs(y - (resizeWidget.locY + resizeWidget.height)) <= 2) {
                    match.push(v);
                }
            });
            return match;
        }
        var bvg = fbvg (merge);
        Console.log ("Has bottom view count = " + bvg.length);

        if (tvg.length != 0) {
            tvg.forEach ((v)=>{
                v.height = v.height + merge.height;
            });
        }
        else if (bvg.length != 0) {
            bvg.forEach ((v)=>{
                v.locY = merge.locY;
                v.height = v.height + merge.height;
            });
        }
        else if (rvg.length != 0) {
            rvg.forEach ((v)=>{
                v.locX = merge.locX;
                v.width = v.width + merge.width;
            });
        }
        else if (lvg.length != 0) {
            lvg.forEach ((v)=>{
                v.width = v.width + merge.width;
            });
        }
    };

    Windows.prototype.closeFocusView = function () {
        this.focusView.visiable = false;
        this.mergeView(this.focusView);

        this.focusView.width  = 0;
        this.focusView.height = 0;

        delete this.focusView;
        this.focusView = null;
        try {
            var focus = this.focusHistory(1);
            focus.setFocus();
        }
        catch (e) {
            Console.log(e.toString());
        }
    };

    Windows.prototype.vsplit = function (parent) {
        var h = this.focusView.height;
        h = h / 2;
        this.focusView.height = h;

        this.focusView = new EditView (parent, this.interact, 
            this.focusView.locX, 
            this.focusView.locY + this.focusView.height, 
            this.focusView.width, 
            h);

        this.focusView.click = {};
        this.views.set (INDEXOFVIEW++, this.focusView);

        this.views.forEach((v, k)=>{ 
            try {
                v.setName(k); 
            }
            catch (e){
            }
        });
        return this.focusView;
    };

    Windows.prototype.hsplit = function (parent) {
        var w = this.focusView.width;
        w = w / 2;

        this.focusView.width = w;

        this.focusView = new EditView (parent, this.interact, 
            this.focusView.locX + this.focusView.width, 
            this.focusView.locY, 
            w, 
            this.focusView.height);

        this.focusView.click = {};
        this.views.set (INDEXOFVIEW++, this.focusView);

        this.views.forEach((v, k)=>{ 
            try {
                v.setName(k); 
            }
            catch (e){
            }
        });
        return this.focusView;
    };

    Windows.prototype.focusChange = function (widget) {
        try {
            this.views.forEach ((v, k, map)=>{
                if (v == widget.parent) {
                    this.setFocus(widget.parent);
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
