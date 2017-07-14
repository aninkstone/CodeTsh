(function(){
    var nodeClick = function (thiz) {
        try {
        var curpos = thiz.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
        var linenu = thiz.sync(SCI_LINEFROMPOSITION, curpos, 0x00); 
        var l = thiz.sync(SCI_GETLINE, linenu, 0x00);

        var ul = l.indexOf('-');
        var pl = l.indexOf('+');
        if (ul != -1) {
            openFile (l.substring(ul + 1));
        }
        if (pl != -1) {
            openNode (l.substring(pl + 1));
        }
        }
        catch (e) {
            Console.log (e.toString());
        }
    }

    var openFile = function (name) {
        name = name.trim('\n').trim(' ').trim('\r');
        var ro = Windows.focusView.edit.view.document.readonly;
        Windows.focusView.edit.view.document.readonly = false;
        Windows.focusView.edit.view.document.direct = set.runtime.curr + "/" + name;
        Windows.focusView.edit.view.document.readonly = ro;
    }

    var openNode = function (name) {
        fs = new FileSystem();
        name = name.trim('\n').trim(' ').trim('\r');
        name = set.runtime.curr + "/" + name;
        Console.log (name);
        l = fs.chdir (name);
        set.runtime.curr = l;
        Console.log (name);
        Console.log (name);
        Console.log (name);
        Console.log (name);
        Console.log (name);
        Windows.chdir(set.runtime.curr);
    }

    var OnKeyD = function (key, shift, alt, ctrl) {
        ro = this.sync(SCI_GETREADONLY, 0x00, 0x00);
        switch (key) {
            case 27:  /* escape */
                this.ro(true);
                break;
            default:
                break;
        }
        if (ro == 1) {
            switch (key) {
                case 13:  /* enter */
                    nodeClick (this);
                    break;
                case 56:  /* * */
                case 52:  /* 4 */
                case 97:  /* a */
                case 98:  /* b */
                case 99:  /* c */
                case 100: /* d */
                case 101: /* e */
                case 102: /* f */
                case 103: /* g */
                case 104: /* h */
                case 106: /* j */
                case 107: /* k */
                case 108: /* l */
                case 109: /* m */
                case 110: /* n */
                case 111: /* o */
                case 112: /* p */
                case 113: /* q */
                case 114: /* r */
                case 115: /* s */
                case 116: /* t */
                case 117: /* u */
                case 118: /* v */
                case 119: /* w */
                case 120: /* x */
                case 121: /* y */
                case 122: /* z */
                    ExecuteCommand(this, String.fromCharCode(key), shift, alt, ctrl);
                    break;
                case 105: /* i */
                    break;
                case 47:  /* / */
                    this.interact.setFocus();
                    this.interact.document.deleteChars(0, this.interact.document.length);
                    this.interact.document.insertChars("/");
                    this.interact.sync(SCI_GOTOPOS, this.interact.document.length, 0x00);
                    break;
                case 59:  /* : */
                    this.interact.setFocus();
                    this.interact.document.deleteChars(0, this.interact.document.length);
                    this.interact.document.insertChars(":");
                    this.interact.sync(SCI_GOTOPOS, this.interact.document.length, 0x00);
                    break;
                default:
                    Console.log(key.toString());
                    break;
            }
        }
        else {
            return Complete(this, key);
            //switch (key) {
            //    case 9:  /* tab */
            //        return Complete(this, key);
            //    default:
            //        return Complete(this, key);
            //        break;
            //}
        }
        return false;
    };
    var OnKeyU = function (key) {
        switch (key) {
            case 111: /* o */
            case 105: /* i */
                break;
            default:
                break;
        }
        return false;
    };

    return function (parent, interact, x, y, w, h){
        var thiz = new Widget (parent, {"onDraw":function(canvas){
            thiz.onDraw(canvas);
        },"onEvent":function(event, argument){
            return thiz.onEvt(event, argument);
        }});
        thiz.onEvt = function (event, argument) {
            switch (event) {
                case "SYS:SIZECHANGE":
                    thiz.onSizeChange ();
                    break;
                case "SYS:CLICK":
                    break;
                case "SYS:FOCUSIN":
                    break;
                case "SYS:FOCUSOUT":
                    break;
                default:
                    break;
            }
            return false;
        }

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.onDraw = function (canvas) {
            p = thiz.paint;
            p.style = 0x00;
            p.color = 0xFF035280;
            canvas.drawRect(0, 0, thiz.width, thiz.height, p);
            //p = thiz.paint;
            //p.style = 0x01;
            //p.color = 0xFFFF000F;
            //p.strokeWidth = 3;
            //canvas.drawRect(0, 0, thiz.width, thiz.height, p);
        }

        thiz.paint = new Paint();

        thiz.onSizeChange = function () {
            thiz.width  = thiz.width;
            thiz.height = parent.height - interact.height;
        }

        thiz.updateSize = function () {
            try {
            }
            catch (e){
            }
        }

        thiz.stat = {};
        thiz.stat.x = 0;
        thiz.stat.h = 23;
        thiz.stat.y = thiz.height - thiz.stat.h;
        thiz.stat.w = thiz.width;
        thiz.stat.margin = 10;

        thiz.edit = {};
        thiz.edit.x = 0;
        thiz.edit.y = 0;
        thiz.edit.h = thiz.height - thiz.stat.h;
        thiz.edit.w = thiz.width;

        thiz.edit.view = _createEdit(thiz, interact);
        thiz.stat.view = _createStat(thiz);

        return thiz;
    };

    function _createEdit(parent, interact) {
        var widget = {};
        widget = new Editor (parent, {"onDraw":function(canvas){
            //p = widget.paint;
            //p.style = 0x00;
            //p.color = config.background.color;
            //canvas.drawRect(0, 0, widget.width, widget.height, p);
        }, "onEvent":function(event, argument){
            switch (event) {
                case "SYS:KEYUP":
                    return OnKeyU.bind(widget)(argument.key);
                case "SYS:KEY":
                    return OnKeyD.bind(widget)(argument.key, argument.shift, argument.alt, argument.ctrl);
                case "SYS:SIZECHANGE":
                    widget.onSizeChange();
                    break;
                case "SYS:CLICK":
                    widget.onClick (argument)
                    return true;
                case "SYS:FOCUSIN":
                    //SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                    //Windows.focusChange (parent);
                    break;
                case "SYS:FOCUSOUT":
                    break;
                default:
                    break;
            }
            return false;
        }});

        widget.locX   = parent.edit.x;
        widget.locY   = parent.edit.y;
        widget.width  = parent.edit.w;
        widget.height = parent.edit.h;

        widget.paint = new Paint();

        widget.onClick = function (arg) {
            switch (arg.state) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    nodeClick (this);
                    break;
                default:
                    break;
            }
        }

        widget.onSizeChange = function () {
            widget.width = parent.width;
            widget.height = parent.height - parent.stat.h;
        }

        widget.ro = function(b) {
            if (b) {
                widget.sync(SCI_SETREADONLY,   0x01, 0x00);
                widget.sync(SCI_SETCARETSTYLE, 0x02, 0x00);
            }
            else {
                widget.sync(SCI_SETREADONLY,   0x00, 0x00);
                widget.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
            }
        }

        widget.update = function (fp) {
            array = new Array ();
            fs = new FileSystem();
            fs.listDir(fp, function(type, name){
                switch (type) {
                    case 0: /* DT_UNKNOWN */
                        obj = ["|-", name, fp];
                        array.push (obj);
                        break;
                    case 1: /* DT_REG */
                        if (name.charAt(0) == ".") {
                            break;
                        }
                        obj = ["|-", name, fp];
                        array.push (obj);
                        break;
                    case 2: /* DT_DIR */
                        if (name.charAt(0) == ".") {
                            break;
                        }
                        obj = ["|+", name, fp];
                        array.push (obj);
                        break;
                        obj = ["|-", name, fp];
                        array.push (obj);
                    case 3: /* DT_LNK */
                        obj = ["|-", name, fp];
                        array.push (obj);
                        break;
                    default:
                        break;
                }
            });

            var comment = fp + '\n';
            comment += '|+.. (Up directory)\n';
            array.forEach((ele)=>{
                comment += ele[0] + ele[1] + "\n";
            });

            widget.document.readonly = false;
            widget.document.deleteChars (0, widget.document.length);
            widget.document.insertChars (comment);
            widget.document.readonly = true;
        }

        widget.chdir = function (p) {
            widget.update (p);
        }

        lexerSync(widget, lexer_default);
        widget.update (set.runtime.curr);

        return widget;
    };

    function _createStat (parent) {
        var widget = {};
        widget = new Widget (parent, {"onDraw":function(canvas){
            try {
                p = widget.paint;
                p.style = 0x00;
                p.color = 0xFF005252;
                canvas.drawRect(0, 0, widget.width, widget.height, p);

                l = 0;
                l = widget.draw_00 (canvas, p, l);
                l = widget.draw_01 (canvas, p, l);
                l = widget.draw_02 (canvas, p, l);
                l = widget.draw_03 (canvas, p, l);

                r = 0;
                r = widget.draw_99 (canvas, p, r);
                r = widget.draw_98 (canvas, p, r);
                r = widget.draw_97 (canvas, p, r);
                r = widget.draw_96 (canvas, p, r);
            }
            catch (e) {
                Console.log (e.toString());
            }
        },"onEvent":function(event, argument){
            switch (event) {
                case "SYS:SIZECHANGE":
                    widget.onSizeChange();
                    break;
                case "SYS:CLICK":
                    widget.onClick (argument)
                    break;
                case "SYS:FOCUSIN":
                    SDL.setCursor(SDL_SYSTEM_CURSOR_ARROW);
                    break;
                default:
                    break;
            }
            return false;
        }});

        widget.locX   = parent.stat.x;
        widget.height = parent.stat.h;
        widget.locY   = parent.height - widget.height;
        widget.width  = parent.width;

        widget.paint = new Paint();

        widget.onClick = function (argument){
            switch (argument.widgete) {
                case 0: /* mouse down */
                    break;
                case 1: /* mouse move */
                    break;
                case 2: /* mouse up */
                    break;
                default:
                    break;
            }
        }
        widget.onSizeChange = function () {
            widget.width = parent.width;
            widget.locY  = parent.height - widget.height;
        }
        widget.draw_00 = function (canvas, paint, offset) {
            paint.fontSize = 18;
            paint.fontFamily = set.font.family;

            text = "NerdTree";
            measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFF002B2B;
            path = new Path();
            path.moveTo(0.0, 0.0);
            path.lineTo(measure.length + parent.stat.margin * 2, 0.0);
            path.lineTo(measure.length + parent.stat.margin * 2 + widget.height / 2, widget.height / 2 - 1);
            path.lineTo(measure.length + parent.stat.margin * 2, widget.height);
            path.lineTo(0.0, widget.height);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            offset = (widget.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, parent.stat.margin, offset, paint);

            return measure.length + parent.stat.margin * 2 + widget.height / 2;
        }
        widget.draw_01 = function (canvas, paint, offset) {
            return 0;
        }
        widget.draw_02 = function (canvas, paint, offset) {
        }
        widget.draw_03 = function (canvas, paint, offset) {
        }
        widget.draw_99 = function (canvas, paint, offset) {
        }
        widget.draw_98 = function (canvas, paint, offset) {
        }
        widget.draw_97 = function (canvas, paint, offset) {
        }
        widget.draw_96 = function (canvas, paint, offset) {
        }
        return widget;
    };

})();

