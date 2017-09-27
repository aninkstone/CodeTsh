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
    
    Stack.prototype.remove = function (ele) {
        let idx = this.items.indexOf(ele);
        while (idx != -1) {
            this.items.splice(idx, 1);
            idx = this.items.indexOf(ele);
        }
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
        var size = this.edits.size();
        return this.edits.peek();
    }

    FocusManager.prototype.focusPOP = function () {
        this.ctrls.pop();
        return this.edits.pop();
    }
    
    FocusManager.prototype.removeEdit = function (widget) {
        this.edits.remove(widget);
    }
    
    FocusManager.prototype.removeCtrl = function (widget) {
        this.ctrls.remove(widget);
    }

    FocusManager.prototype.focusTo = function (view) {
        this.views.forEach ((v,k,m)=>{
            if (v.handle === view || view == v || (typeof v.edit == 'object' ? v.edit.handle === view : false)) {
                switch (v.type) {
                    case "Edit":
                        this.edits.push(v);
                    case "Inet":
                    case "Nerd":
                    case "Sanp":
                    default:
                        this.ctrls.push(v);
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

    Windows.prototype.hasViewL = function (focus) {
        var match = [];
        var w = focus;
        this.views.forEach((v, k) => {
            var vpos = v.position();
            var wpos = w.position();
            var x = vpos.x + vpos.w;
            if (Math.abs(x - (wpos.x)) <= 5) {
                match.push(v);
            }
        });
        if (match.length > 0) {
            return true;
        }
        return false;
    }

    Windows.prototype.hasViewR = function (focus) {
    }

    Windows.prototype.hasViewB = function (focus) {
    }

    Windows.prototype.hasViewT = function (focus) {
    }

    Windows.prototype.merge = function (merge) {
        var flvg = (w)=>{ /* find left views group */
            var match = [];
            match.fixed = false;
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x + vpos.w;
                if (Math.abs(x - (wpos.x)) <= 5) {
                    match.push(v);
                }
            });
            if (match.length == 0) {
                return match;
            }
            var fixed = null;
            var wpos = merge.position();
            match.forEach((v, idx, arr)=>{
                var vpos = v.position();
                if (vpos.h == wpos.h && vpos.y == wpos.y) {
                    fixed = v;
                }
            });
            if (fixed != null) {
                var m = [];
                m.push (fixed);
                m.fixed = true;
                return m;
            }
            return match;
        }

        var lvg = flvg (merge);
        //console.log ("Has left view count = " + lvg.length);

        var frvg = (w)=>{ /* find right views group */
            var match = [];
            match.fixed = false;
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x;
                if (Math.abs(x - (wpos.x + wpos.w)) <= 5) {
                    match.push(v);
                }
            });
            if (match.length == 0) {
                return match;
            }
            var fixed = null;
            var wpos = w.position();
            match.forEach((v, idx, arr)=>{
                var vpos = v.position();
                if (vpos.h == wpos.h && vpos.y == wpos.y) {
                    fixed = v;
                }
            });
            if (fixed != null) {
                var m = [];
                m.push (fixed);
                m.fixed = true;
                return m;
            }
            return match;
        }

        var rvg = frvg (merge);
        //console.log ("Has right view count = " + rvg.length);

        var ftvg = (w)=>{ /* find top views group */
            var match = [];
            match.fixed = false;
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y + vpos.h;
                if (Math.abs(y - (wpos.y)) <= 5) {
                    match.push(v);
                }
            });
            if (match.length == 0) {
                return match;
            }
            var fixed = null;
            var wpos = merge.position();
            match.forEach((v, idx, arr)=>{
                var vpos = v.position();
                if (vpos.w == wpos.w && vpos.x == wpos.x) {
                    fixed = v;
                }
            });
            if (fixed != null) {
                var m = [];
                m.push (fixed);
                m.fixed = true;
                return m;
            }
            return match;
        }

        var tvg = ftvg (merge);
        //console.log ("Has top view count = " + tvg.length);

        var fbvg = (w)=>{ /* find bottom views group */
            var match = [];
            match.fixed = false;
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y;
                if (Math.abs(y - (wpos.y + wpos.h)) <= 5) {
                    match.push(v);
                }
            });
            if (match.length == 0) {
                return match;
            }
            var fixed = null;
            var wpos = merge.position();
            match.forEach((v)=>{
                var vpos = v.position();
                if (vpos.w == wpos.w && vpos.x == wpos.x) {
                    fixed = v;
                }
            });
            if (fixed != null) {
                var m = [];
                m.push (fixed);
                m.fixed = true;
                return m;
            }
            return match;
        }
        var bvg = fbvg (merge);
        //console.log ("Has bottom view count = " + bvg.length);

        var dot = ()=>{
            if (tvg.length != 0) {
                //var fixed = null;
                //var wpos = merge.position();
                //tvg.forEach((v, idx, arr)=>{
                //    var vpos = v.position();
                //    if (vpos.w == wpos.w && vpos.x == wpos.x) {
                //        fixed = v;
                //    }
                //});
                //if (fixed != null) {
                //    console.log ("Fix TOP2");
                //    var vpos = fixed.position();
                //    var wpos = merge.position();
                //    fixed.setSize(vpos.w, vpos.h + wpos.h);
                //}
                //if (fixed == null) {
                    tvg.forEach ((v)=>{
                        //console.log ("Fix TOP -> fixed:" + tvg.fixed);
                        var vpos = v.position();
                        var wpos = merge.position();
                        v.setSize(vpos.w, vpos.h + wpos.h);
                    });
                //}
            }
        };
        var dob = ()=>{
            if (bvg.length != 0) {
                //var fixed = null;
                //var wpos = merge.position();
                //bvg.forEach((v)=>{
                //    var vpos = v.position();
                //    if (vpos.w == wpos.w && vpos.x == wpos.x) {
                //        fixed = v;
                //    }
                //});

                //if (fixed != null) {
                //    console.log ("Fix Bottom2");
                //    var vpos = fixed.position();
                //    var wpos = merge.position();
                //    fixed.setLocation(vpos.x, wpos.y);
                //    fixed.setSize(vpos.w, wpos.h + vpos.h);
                //}
                //if (fixed == null) {
                    bvg.forEach((v)=>{
                        //console.log ("Fix Bottom -> fixed:" + bvg.fixed);
                        var vpos = v.position();
                        var wpos = merge.position();
                        v.setLocation(vpos.x, wpos.y);
                        v.setSize(vpos.w, wpos.h + vpos.h);
                    });
                //}
            }
        };
        var dol = ()=>{
            if (lvg.length != 0) {
                //var fixed = null;
                //var wpos = merge.position();
                //lvg.forEach((v, idx, arr)=>{
                //    var vpos = v.position();
                //    if (vpos.h == wpos.h && vpos.y == wpos.y) {
                //        fixed = v;
                //    }
                //});
                //if (fixed != null) {
                //    console.log ("Fix Left2");
                //    var vpos = fixed.position();
                //    var wpos = merge.position();
                //    fixed.setSize(vpos.w + wpos.w, vpos.h);
                //}
                //if (fixed == null) {
                    lvg.forEach ((v)=>{
                        //console.log ("Fix Left -> fixed:" + lvg.fixed);
                        var vpos = v.position();
                        var wpos = merge.position();
                        v.setSize(vpos.w + wpos.w, vpos.h);
                    });
                //}
            }
        };
        var dor = ()=>{
            if (rvg.length != 0) {
                //var fixed = null;
                //var wpos = merge.position();
                //rvg.forEach((v, idx, arr)=>{
                //    var vpos = v.position();
                //    if (vpos.h == wpos.h && vpos.y == wpos.y) {
                //        fixed = v;
                //    }
                //});
                //if (fixed != null) {
                //    console.log ("Fix Right2");
                //    var vpos = fixed.position();
                //    var wpos = merge.position();
                //    fixed.setLocation(wpos.x, vpos.y);
                //    fixed.setSize(vpos.w + wpos.w, vpos.h);
                //}
                //if (fixed == null) {
                    rvg.forEach ((v)=>{
                        //console.log ("Fix Right -> fixed:" + rvg.fixed);
                        var vpos = v.position();
                        var wpos = merge.position();
                        v.setLocation(wpos.x, vpos.y);
                        v.setSize(vpos.w + wpos.w, vpos.h);
                    });
                //}
            }
        };
        var policy = ()=>{
            var p = {
                count: 0,
                doact: function(){},
            };
            if (p.count < tvg.length && tvg.length != 0) {
                p.count = tvg.length;
                p.doact = dot;
            }
            if (p.count < lvg.length && lvg.length != 0) {
                p.count = lvg.length;
                p.doact = dol;
            }
            if (p.count < rvg.length && rvg.length != 0) {
                p.count = rvg.length;
                p.doact = dor;
            }
            if (p.count < bvg.length && bvg.length != 0) {
                p.count = bvg.length;
                p.doact = dob;
            }
            p.doact();
        };
        //console.log ("tvg fixed:" + tvg.fixed + "  " + "bvg fixed:" + bvg.fixed);
        //console.log ("lvg fixed:" + lvg.fixed + "  " + "rvg fixed:" + rvg.fixed);

        var bFixed = false;
        if (tvg.fixed == true) {
            bFixed = true;
            dot();
        }
        if (rvg.fixed == true && bFixed == false) {
            bFixed = true;
            dor();
        }
        if (bvg.fixed == true && bFixed == false) {
            bFixed = true;
            dob();
        }
        if (lvg.fixed == true && bFixed == false) {
            bFixed = true;
            dol();
        }
        if (bFixed == false) {
            policy();
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
        var v = this.focusMgr.focusPOP();
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

        var closeEdit = (w)=>{
        };

        var closeNerd = (w)=>{
            var s = w.position();
            var l = s.x + s.w;
            var match = [];
            this.views.forEach((v, k) => {
                var p = v.position();
                var x = p.x;
                if (Math.abs(l - x) <= 5) {
                    match.push(v);
                }
            });

            var wpos = w.position();
            match.forEach((v)=>{
                var vpos = v.position();
                v.setLocation(wpos.x, vpos.y);
                v.setSize(vpos.w + wpos.w, vpos.h);
            });
        };

        switch (widget.type) {
            case "Edit":
                this.focusMgr.removeEdit(widget);
                this.focusMgr.removeCtrl(widget);
                closeEdit(widget);
                break;
            case "Nerd":
                this.focusMgr.removeCtrl(widget);
                closeNerd(widget);
                break;
            case "Inet":
            case "Snap":
            default:
                break;
        }

        this.views.forEach((v, k, m) => {
            if (widget === v) {
                switch (widget.type) {
                    case "Edit":
                    case "Nerd":
                        widget.edit.handle.document.direct = "./CodeTor.txt";
                        break;
                    case "Inet":
                    case "Snap":
                    default:
                        break;
                }
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

    Windows.prototype.moveFocus2L = function () {
        var findLeft = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x + vpos.w;
                if (Math.abs(x - (wpos.x)) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var focus = this.focusMgr.focusCtrl();
        var match = findLeft(focus);
        if (match.length > 0) {
            match [0].setFocus();
        }
    }

    Windows.prototype.moveFocus2R = function () {
        var findRight = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x;
                if (Math.abs(x - (wpos.x + wpos.w)) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var focus = this.focusMgr.focusCtrl();
        var match = findRight(focus);
        if (match.length > 0) {
            match[0].setFocus();
        }
    }

    Windows.prototype.moveFocus2T = function () {
        var findTop = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y + vpos.h;
                if (Math.abs(y - (wpos.y)) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var focus = this.focusMgr.focusCtrl();
        var match = findTop (focus);
        if (match.length > 0) {
            match[0].setFocus();
        }
    }

    Windows.prototype.moveFocus2B = function () {
        var findBottom = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y;
                if (Math.abs(y - (wpos.y + wpos.h)) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var focus = this.focusMgr.focusCtrl();
        var match = findBottom (focus);
        if (match.length > 0) {
            match [0].setFocus();
        }
    }

    Windows.prototype.septClick = function (widget, pos, stat) {
        if (stat == 0) {
            var vpos = widget.position();
            widget.click = {};
            widget.click.x = vpos.x;
            widget.click.y = vpos.y;
            widget.click.w = vpos.w;
            widget.click.h = vpos.h;
        }

        var nearR = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x + vpos.w;
                if (Math.abs(x - wpos.x) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var align = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var x = vpos.x;
                if (Math.abs(x - wpos.x) <= 5 && vpos.y != wpos.y) {
                    match.push(v);
                }
            });
            return match;
        };

        var r = nearR(widget);
        var s = align(widget);

        if (stat == 2) {
            var offsetX = (pos.currX - pos.origX);
            var wpos = widget.position();

            widget.setLocation (widget.click.x + offsetX, wpos.y);
            widget.setSize (widget.click.w - offsetX, wpos.h);

            wpos = widget.position();
            s.forEach((v)=>{
                var vpos = v.position();
                v.setLocation(wpos.x, vpos.y);
                v.setSize(vpos.w - offsetX, vpos.h);
            });

            wpos = widget.position();
            r.forEach((v)=>{
                var vpos = v.position();
                v.setSize(wpos.x - vpos.x, vpos.h);
            });
        }
    }

    Windows.prototype.statClick = function (widget, pos, stat) {
        if (stat == 0) {
            var vpos = widget.position();
            widget.click = {};
            widget.click.x = vpos.x;
            widget.click.y = vpos.y;
            widget.click.w = vpos.w;
            widget.click.h = vpos.h;
        }

        var nearB = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y;
                if (Math.abs(y - (wpos.y + wpos.h)) <= 5) {
                    match.push(v);
                }
            });
            return match;
        };

        var align = (w)=>{
            var match = [];
            this.views.forEach((v, k) => {
                var vpos = v.position();
                var wpos = w.position();
                var y = vpos.y + vpos.h;
                if (Math.abs(y - (wpos.y + wpos.h)) <= 5 && vpos.x != wpos.x) {
                    match.push(v);
                }
            });
            return match;
        };

        var b = nearB (widget);
        var s = align (widget);

        if (stat == 2) {
            var offsetY = (pos.currY - pos.origY);
            var wpos = widget.position();
            var mins = 50;
            var size = wpos.h + offsetY;
            if (size < mins) {
                size = mins;
            }
            widget.setSize (wpos.w, size);

            wpos = widget.position();
            b.forEach((v)=>{
                var vpos = v.position ();
                v.setLocation(vpos.x, wpos.y + wpos.h);
                v.setSize(vpos.w, vpos.h - offsetY);
            });

            wpos = widget.position();
            s.forEach((v)=>{
                var vpos = v.position ();
                v.setSize(vpos.w, vpos.h + offsetY);
            });
        }
    }
    return Windows;
})();
