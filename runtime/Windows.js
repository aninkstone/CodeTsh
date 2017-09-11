(function(){
    function Stack() { 
        this.items = []; 
    }

    Stack.prototype.print = function () {
        this.items.forEach ((v)=>{
            console.log (v.type);
        });
    }

    Stack.prototype.push = function (ele) {
        this.items.push (ele);

        if (this.size() >= 32) {
            this.pop ();
        }
    }

    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    }

    Stack.prototype.pop = function () {
        return this.items.pop();
    }
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    }

    Stack.prototype.size = function () {
        return this.items.length;
    }

    Stack.prototype.clear = function () {
        return this.items = [];
    }

    function FocusManager (views) {
        this.views = views;
        this.edits = new Stack();
        this.ctrls = new Stack();
    }

    FocusManager.prototype.focusCtrl = function () {
        return this.ctrls.peek();
    }

    FocusManager.prototype.focusEdit = function () {
        return this.edits.peek();
    }

    FocusManager.prototype.focusEditPOP = function () {
        return this.edits.pop();
    }

    FocusManager.prototype.focusTo = function (view) {
        this.views.forEach ((v,k,m)=>{
            if (v.handle === view || view == v || (typeof v.edit === 'object' ? v.edit.handle === view : false)) {
                switch (v.type) {
                    case "Inet":
                    case "Nerd":
                        this.ctrls.push(v);
                        break;
                    case "Edit":
                        this.edits.push(v);
                        break;
                    case "Sanp":
                    default:
                        break;
                }
            }
        });
    }

    function Windows (parent) {
        try {
            this.parent = parent;
            this.views = new Map ();
            this.ids = 0;
            this.focusMgr = new FocusManager (this.views);

            this.direction = "vert";

            //this.addWidget(new NerdTree(parent));
            this.addWidget(new Interact(parent));
            this.addWidget(new EditView(parent));
        }
        catch (e) {
            console.log (e + " " + (new Error().stack));
        }
    }

    Windows.prototype.merge = function (merge) {
        var flvg = (w)=>{ /* find left views group */
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x + vpos.w;
                if (Math.abs(x - (wpos.x)) <= 5 && Math.abs(wpos.h - vpos.h) <= 5) {
                    match.push(v);
                }
            });
            return match;
        }

        var lvg = flvg (merge);
        //console.log ("Has left view count = " + lvg.length);

        var frvg = (w)=>{ /* find right views group */
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x;
                if (Math.abs(x - (wpos.x + wpos.w)) <= 5 && Math.abs(wpos.h - vpos.h) <= 5) {
                    match.push(v);
                }
            });
            return match;
        }
        var rvg = frvg (merge);
        //console.log ("Has right view count = " + rvg.length);

        var ftvg = (w)=>{ /* find top views group */
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y + vpos.h;
                if (Math.abs(y - (wpos.y)) <= 5 && Math.abs(wpos.w - vpos.w) <= 5) {
                    match.push(v);
                }
            });
            return match;
        }
        var tvg = ftvg (merge);
        //console.log ("Has top view count = " + tvg.length);

        var fbvg = (w)=>{ /* find bottom views group */
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y;
                if (Math.abs(y - (wpos.y + wpos.h)) <= 5 && Math.abs(wpos.w - vpos.w) <= 5) {
                    match.push(v);
                }
            });
            return match;
        }
        var bvg = fbvg (merge);
        //console.log ("Has bottom view count = " + bvg.length);

        if (tvg.length != 0) {
            tvg.forEach ((v)=>{
                //console.log ("Fix TOP");
                var vpos = v.position();
                var wpos = merge.position();
                v.setSize(vpos.w, vpos.h + wpos.h);
            });
        }
        else if (bvg.length != 0) {
            bvg.forEach ((v)=>{
                //console.log ("Fix Bottom");
                var vpos = v.position();
                var wpos = merge.position();
                v.setLocation(vpos.x, wpos.y);
                v.setSize(vpos.w, wpos.y + vpos.y);
            });
        }
        if (lvg.length != 0) {
            lvg.forEach ((v)=>{
                //console.log ("Fix Left");
                var vpos = v.position();
                var wpos = merge.position();
                v.setSize(vpos.w + wpos.w, vpos.h);
            });
        }
        else if (rvg.length != 0) {
            rvg.forEach ((v)=>{
                //console.log ("Fix Right");
                var vpos = v.position();
                var wpos = merge.position();
                v.setLocation(wpos.x, vpos.y);
                v.setSize(vpos.w + wpos.w, vpos.y);
            });
        }
    }

    Windows.prototype.autoViewID = function () {
        this.views.forEach((v, k)=>{ 
            if (v.type == "Edit") {
                v.edit.setName(k.toString()); v.edit.inval();
            }
        });
        setTimeOut(()=>{
            this.views.forEach((v, k)=>{ 
                if (v.type == "Edit") {
                    v.edit.setName(""); v.edit.inval();
                }
            });
        }, 500);
    }

    Windows.prototype.namedCtrl = function (name) {
        if (typeof name != 'string') {
            return null;
        }
        var object = null;
        this.views.forEach((v, k, m) => {
            if (v.type == name) {
                object = v;
            }
        });
        return object;
    }

    Windows.prototype.focusChange = function (focusView) {
        this.focusMgr.focusTo(focusView);
    }

    Windows.prototype.onSizeChange = function (changingView) {
        try {
            this.update (this.focusMgr.focusEdit());
        }
        catch (e) {
            console.log (e + " " + (new Error().stack));
        }
    }

    Windows.prototype.close = function (force) {
        var v = this.focusMgr.focusEditPOP();
        var d = v.edit.handle.document;

        if (d.savepoint == false) {
            var inet = namedCtrl ("Inet");
            if (inet != null) {
                inet.handle.document.deleteChars(0, this.interact.document.length);
                inet.handle.document.insertChars("File is not saved.");
            }
            return;
        }

        v.setVisiable(false);
        this.merge(v);

        this.delWidget (v);
        var v = this.focusMgr.focusEdit();
        v.setFocus();

        //var allSaved = true;
        //var matched = [];
        //this.views.forEach((v, k)=>{
        //    try {
        //        if (v.edit.document.savepoint == false) {
        //            allSaved = false;
        //            matched.push (v.edit.document.path);
        //        }
        //    }
        //    catch (e) {
        //    }
        //});

        //if (allSaved == true) {
        //    SDL.postEvent(0x100); /* quit */
        //}
        //else {
        //    this.interact.document.deleteChars(0, this.interact.document.length);
        //    this.interact.document.insertChars(matched[0] + " is not saved.");
        //}
    }

    Windows.prototype.split = function (direction) {
        try {
            if (typeof direction == 'string') {
                switch (direction) {
                    case "hori":
                    case "vert":
                        this.direction = direction;
                        break;
                    default:
                        this.direction = "vert";
                        break;
                }
            }
            var f = this.focusMgr.focusEdit ();
            if (typeof f == 'undefined') {
                return;
            }
            var d = f.edit.handle.document;

            var v = new EditView (this.parent);
            this.addWidget(v); v.setDocument(d);
        }
        catch (e) {
            console.log (e + " " + (new Error().stack));
        }
    }

    Windows.prototype.update = function (focusView) {
        var views = new Map ();

        var nerd = null;
        var inet = null;
        var snap = null;

        this.views.forEach((v, k, m) => {
            switch (v.type) {
                case "Nerd":
                    nerd = v;
                    break;
                case "Inet":
                    inet = v;
                    break;
                case "Edit":
                    views.set(k, v);
                    break;
                case "Sanp":
                    snap = v;
                    break;
                default:
                    break;
            }
        });

        if (inet != null) {
            var ipos = inet.position();
            ipos.width = inet.parent.width;
            ipos.y = inet.parent.height - ipos.h
            inet.setLocation(ipos.x, ipos.y);
            inet.setSize(ipos.width, ipos.height);
        }

        if (nerd != null) {
            var npos = nerd.position();
            if (inet != null) {
                var ipos = inet.position();
                npos.h = nerd.parent.height - ipos.h;
            }
            else {
                npos.h = nerd.parent.height;
            }
            nerd.setSize(npos.w, npos.h);
        }

        if (views.size == 0) {
            return;
        }

        var maxLeft = ()=>{
            var leftMax = 0;
            views.forEach((v, k) => {
                var p = v.position();
                var x = p.x + p.w;
                if (leftMax <= x) {
                    leftMax = x;
                }
            });
            return leftMax;
        };
        var maxBotm = ()=>{
            var botmMax = 0;
            views.forEach((v, k) => {
                var p = v.position();
                var y = p.y + p.h;
                if (botmMax <= y) {
                    botmMax = y;
                }
            });
            return botmMax;
        };

        var nearL = ()=>{
            var leftMax = maxLeft();
            //console.log ("leftMax: " + leftMax);
            var match = [];
            views.forEach((v, k) => {
                var p = v.position();
                var x = p.x + p.w;
                if (Math.abs(leftMax - x) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var nearB = ()=>{
            var botmMax = maxBotm();
            //console.log ("botmMax: " + botmMax);
            var match = [];
            views.forEach((v, k) => {
                var p = v.position();
                var y = p.y + p.h;
                if (Math.abs(botmMax - y) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var l = nearL();
        var b = nearB();

        //console.log ("NearL widgets count:" + l.length);
        //console.log ("NearB widgets count:" + b.length);

        l.forEach((v)=>{
            var vpos = v.position();
            if (nerd != null) {
                vpos.w = v.parent.width - vpos.x;
            }
            else {
                vpos.w = v.parent.width - vpos.x;
            }
            v.setLocation (vpos.x, vpos.y);
            v.setSize(vpos.w, vpos.h);
        });

        b.forEach((v)=>{
            var vpos = v.position();
            if (inet != null) {
                vpos.h = v.parent.height - vpos.y - inet.h;
            }
            else {
                vpos.h = v.parent.height - vpos.y;
            }
            v.setSize(vpos.w, vpos.h);
        });

        //this.views.forEach((v, k, m) => {
        //    var p = v.position();
        //    console.log (v.type + ":");
        //    console.log ("v.x :" + p.x);
        //    console.log ("v.y :" + p.y);
        //    console.log ("v.w :" + p.w);
        //    console.log ("v.h :" + p.h);
        //});
    };

    Windows.prototype.instanceOfTypeName = function (typeName) {
        var instance = null;
        this.views.forEach((v, k, m) => {
            if (v.type == typeName) {
                instance = v;
            }
        });
        return instance;
    }

    Windows.prototype.delWidget = function (widget) {
        widget.handle.visiable = false;
        var nearL = (w)=>{
            var s = w.position();
            var leftEdge = s.x + s.w;
            var match = [];
            this.views.forEach((v, k) => {
                var p = v.position();
                var x = p.x;
                if (Math.abs(leftEdge - x) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        switch (widget.type) {
            case "Edit":
                break;
            case "Inet":
                break;
            case "Nerd":
                var l = nearL(widget);
                l.forEach((v)=>{
                    var vpos = v.position();
                    var wpos = widget.position();
                    v.setLocation(0, vpos.y);
                    v.setSize(vpos.w + wpos.w, vpos.h);
                });
                break;
            default:
                break;
        }

        this.views.forEach((v, k, m) => {
            if (widget === v) {
                this.views.delete(k);
            }
        });

        this.update (null);

        widget.setLocation(0, 0);
        widget.setSize(0, 0);
    }

    Windows.prototype.addWidget = function (widget) {
        try {
            if (typeof widget == 'undefined') {
                return;
            }
            if (typeof widget.type == 'undefined') {
                return;
            }

            var nerd = null;
            var inet = null;
            var edit = null;
            var snap = null;

            this.views.forEach((v, k, m) => {
                if (v.type == "Nerd") {
                    nerd = v;
                }
                if (v.type == "Inet") {
                    inet = v;
                }
                if (v.type == "Edit") {
                    edit = v;
                }
                if (v.type == "Snap") {
                    snap = v;
                }
            });

            if (nerd != null && widget.type == "Nerd") {
                console.log ("Error: Multi singleton object");
                return;
            }

            if (inet != null && widget.type == "Inet") {
                console.log ("Error: Multi singleton object");
                return;
            }

            if (snap != null && widget.type == "Snap") {
                console.log ("Error: Multi singleton object");
                return;
            }

            var views = new Map ();

            this.views.forEach((v, k, m) => {
                switch (v.type) {
                    case "Nerd":
                        nerd = v;
                        break;
                    case "Inet":
                        inet = v;
                        break;
                    case "Edit":
                        views.set(k, v);
                        break;
                    case "Sanp":
                        snap = v;
                        break;
                    default:
                        break;
                }
            });

            var addNerd = ()=>{
                try {
                    var ipos = inet.position ();
                    var npos = widget.position ();
                    widget.setSize(npos.w, npos.h - ipos.h);

                    var nearL = ()=>{
                        var leftEdge = 0;
                        var match = [];
                        views.forEach((v, k) => {
                            var p = v.position();
                            var x = p.x;
                            if (Math.abs(leftEdge - x) <= 5) {
                                match.push(v);
                            }
                        });
                        return match;
                    };

                    var l = nearL ();
                    l.forEach((v)=>{
                        var vpos = v.position();
                        var wpos = widget.position();
                        v.setLocation(npos.w, vpos.y);
                        v.setSize(vpos.w - npos.w, vpos.h);
                    });
                }
                catch (e) {
                    console.log (e);
                }
            };

            var addInet = ()=>{
                try {
                    var npos = nerd.position ();
                    var wpos = widget.position ();
                    nerd.setSize(npos.w, npos.h - wpos.h);
                }
                catch (e) {
                    console.log (e);
                }
            }

            var addEdit = (widget)=>{
                var focus = this.focusMgr.focusEdit();
                var p = focus.position();
                var n = p;

                switch (this.direction) {
                    case "vert":
                        p.w = p.w / 2;
                        widget.setLocation (p.x + p.w, p.y);
                        widget.setSize(p.w, p.h);
                        break;
                    case "hori":
                        p.h = p.h / 2;
                        widget.setLocation (p.x, p.y + p.h);
                        widget.setSize(p.w, p.h);
                        break;
                    default:
                        break;
                }

                focus.setSize (p.w, p.h);


                focus.inval();
            }

            var addFirstEdit = ()=>{
                var ctrl = widget;
                var vpos = ctrl.position();
                if (nerd != null) {
                    vpos.x = nerd.w;
                    vpos.w = ctrl.parent.width - nerd.w;
                }
                else {
                    vpos.x = 0;
                    vpos.w = ctrl.parent.width;
                }
                if (inet != null) {
                    vpos.h = ctrl.parent.height - inet.h
                }
                else {
                    vpos.h = ctrl.parent.height;
                }
                ctrl.setLocation(vpos.x, vpos.y); ctrl.setSize(vpos.w, vpos.h);
            }

            switch (widget.type) {
                case "Nerd":
                    if (inet != null) {
                        addNerd();
                    }
                    break;
                case "Inet":
                    if (nerd != null) {
                        addInet();
                    }
                    break;
                case "Edit":
                    if (edit == null){
                        addFirstEdit();
                    }
                    else {
                        addEdit(widget);
                    }
                    break;
                case "Sanp":
                    break;
                default:
                    break;
            }
            var focus = this.curView;
            this.views.set(++this.ids, widget);

            this.curView = widget;

            if (edit != null) {
                this.update(this.focusMgr.focusEdit());
            }
            else {
                this.update(null);
            }
            this.focusChange(widget);
        }
        catch (e) {
            console.log (e + " " + (new Error().stack));
        }
    };

    return Windows;

    //Windows.prototype.focusNerd = function () {
    //    //this.nerdtree.setFocus();
    //}

    //Windows.prototype.setFocusID  = function (index) {
    //    var obj = this.views.get (index);
    //    if (obj) {
    //        obj.setFocus();
    //    }
    //}

    //Windows.prototype.moveFocus2L = function () {
    //    var findLeft = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            var x = v.locX + v.width;
    //            if (Math.abs(x - resizeWidget.locX) <= 2) {
    //                match.push (v);
    //            }
    //        });
    //        return match;
    //    };

    //    var match = findLeft(this.focusView);
    //    if (match.length > 0) {
    //        match [0].setFocus();
    //    }
    //}

    //Windows.prototype.moveFocus2R = function () {
    //    var findRight = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            var x = v.locX;
    //            if (Math.abs(x - (resizeWidget.locX + resizeWidget.width)) <= 2) {
    //                match.push (v);
    //            }
    //        });
    //        return match;
    //    };

    //    var match = findRight(this.focusView);
    //    if (match.length > 0) {
    //        match [0].setFocus();
    //    }
    //}

    //Windows.prototype.moveFocus2T = function () {
    //    var findTop = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            var y = v.locY + v.height;
    //            if (Math.abs(y - resizeWidget.locY) <= 2) {
    //                match.push (v);
    //            }
    //        });
    //        return match;
    //    };

    //    var match = findTop (this.focusView);
    //    if (match.length > 0) {
    //        match [0].setFocus();
    //    }
    //}

    //Windows.prototype.moveFocus2B = function () {
    //    var findBottom = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            var y = v.locY;
    //            if (Math.abs(y - (resizeWidget.height + resizeWidget.locY)) <= 2) {
    //                match.push (v);
    //            }
    //        });
    //        return match;
    //    };

    //    var match = findBottom (this.focusView);
    //    if (match.length > 0) {
    //        match [0].setFocus();
    //    }
    //}

    //Windows.prototype.focusViewID = function () {
    //    return this.viewID(this.focusView);
    //}

    //Windows.prototype.viewsCount = function () {
    //    return this.views.size;
    //}

    //Windows.prototype.copenView = function () {
    //    this.focusView.changeDocument (consoleDoc);
    //}

    //Windows.prototype.septClick = function (widget, pos, stat) {
    //    if (stat == 0) {
    //        this.views.forEach((v, k) => {
    //            v.click.x = v.locX;
    //            v.click.y = v.locY;
    //            v.click.w = v.width;
    //            v.click.h = v.height;
    //        });
    //    }

    //    var near = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            var x = v.locX + v.width;
    //            if (Math.abs(x - resizeWidget.locX) <= 2) {
    //                match.push(v);
    //            }
    //        });
    //        return match;
    //    }

    //    var same = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            if (v.locX == resizeWidget.locX) {
    //                if (this.viewID(v) != this.viewID(resizeWidget)) {
    //                    match.push (v);
    //                }
    //            }
    //        });
    //        return match;
    //    }

    //    if (stat == 1) {
    //        this.near = near(widget);
    //        this.same = same(widget);
    //    }

    //    if (stat == 2) {
    //        var offsetX = (pos.currX - pos.origX);
    //        widget.locX  = widget.click.x + offsetX; 
    //        widget.width = widget.click.w - offsetX; 

    //        this.near.forEach((v)=>{
    //            v.width = v.click.w + offsetX;
    //        });

    //        this.same.forEach((v)=>{
    //            v.locX  = widget.locX;
    //            v.width = v.click.w - offsetX;
    //        });
    //    }
    //}

    //Windows.prototype.statClick = function (widget, pos, stat) {
    //    if (stat == 0) {
    //        this.views.forEach((v, k) => {
    //            v.click.x = v.locX;
    //            v.click.y = v.locY;
    //            v.click.w = v.width;
    //            v.click.h = v.height;
    //        });
    //    }

    //    var same = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            if ((v.locY + v.height) == (resizeWidget.height + resizeWidget.locY)) {
    //                if (this.viewID(v) != this.viewID(resizeWidget)) {
    //                    match.push (v);
    //                }
    //            }
    //        });
    //        return match;
    //    }

    //    var near = (resizeWidget)=>{
    //        var match = [];
    //        this.views.forEach((v, k) => {
    //            var y = v.locY;
    //            if (Math.abs(y - (resizeWidget.locY + resizeWidget.height)) <= 2) {
    //                match.push(v);
    //            }
    //        });
    //        return match;
    //    }

    //    if (stat == 1) {
    //        this.same = same (widget);
    //        this.near = near (widget);
    //    }

    //    if (stat == 2) {
    //        var offsetY = (pos.currY - pos.origY);
    //        widget.height = widget.height + (offsetY); 

    //        this.near.forEach((v)=>{
    //            v.locY = v.locY + offsetY;
    //            v.height = v.height - offsetY;
    //        });

    //        this.same.forEach((v)=>{
    //            v.height = v.height + offsetY;
    //        });
    //    }
    //}
})();
