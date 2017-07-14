(function (){
    return function (parent, interact, x, y, w, h) {
        var thiz = new Widget (parent, {"onDraw":function(canvas){
            thiz.onDraw(canvas);
        },"onEvent":function(event, argument){
            return thiz.onEvt(event, argument);
        }});
        thiz.paint = new Paint();

        thiz.onEvt = function (event, argument) {
            switch (event) {
                case "SYS:SIZECHANGE":
                    thiz.onSizeChange ();
                    break;
                case "SYS:CLICK":
                    break;
                case "SYS:FOCUSIN":
                    Console.log ("thiz focus");
                    break;
                case "SYS:FOCUSOUT":
                    Console.log ("thiz lose focus");
                    break;
                default:
                    break;
            }
            return false;
        }

        thiz.onDraw = function (canvas) {
            p = thiz.paint;
            p.style = 0x00;
            p.color = 0xFF0352FF;
            canvas.drawRect(0, 0, thiz.width, thiz.height, p);
            //p = thiz.paint;
            //p.style = 0x01;
            //p.color = 0xFFFF000F;
            //p.strokeWidth = 3;
            //canvas.drawRect(0, 0, thiz.width, thiz.height, p);
        }

        thiz.onSizeChange = function () {
        }

        thiz.updateSize = function () {
            try {
                thiz.edit.view.onSizeChange();
                thiz.stat.view.onSizeChange();
                thiz.sept.view.onSizeChange();
            }
            catch (e){
            }
        }

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.stat.x = 8;
        thiz.stat.h = 23;
        thiz.stat.y = thiz.height - thiz.stat.h;
        thiz.stat.w = thiz.width;
        thiz.stat.margin = 10;

        thiz.sept = {};
        thiz.sept.x = 0;
        thiz.sept.y = 0;
        thiz.sept.w = 8;
        thiz.sept.h = thiz.height;

        thiz.edit = {};
        thiz.edit.x = thiz.sept.w;
        thiz.edit.y = 0;
        thiz.edit.w = thiz.width - thiz.sept.w;
        thiz.edit.h = thiz.height - thiz.stat.h;

        thiz.sept.view = _createSept(thiz, interact);
        thiz.edit.view = _createEdit(thiz, interact);
        thiz.stat.view = _createStat(thiz, interact);

        thiz.lc = new Set();
        thiz.rc = new Set();
        thiz.bc = new Set();
        thiz.tc = new Set();

        thiz.click = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        };

        thiz.bindL = function (c) {
            try {
                thiz.lc.add(c);
                c.bc.forEach ((v)=>{thiz.lc.add(v);}); /* add active widget's bottoms */
                c.tc.forEach ((v)=>{thiz.lc.add(v);}); /* add active widget's bottoms */
                c.rc.forEach ((v)=>{thiz.rc.add(v);});

                c.rc = new Set ();
                c.rc.add(thiz);
            }
            catch (e) {
                Console.log (e.toString());
            }
        }

        thiz.bindB = function (c) {
        }

        return thiz;
    };

    function _createStat (parent, interact) {
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
        widget.locY   = parent.stat.y;
        widget.width  = parent.stat.w;
        widget.height = parent.stat.h;

        widget.paint = new Paint();

        widget.layout = {};
        widget.layout.view = {};
        widget.layout.view.locY = 0;
        widget.layout.view.height = 0;

        widget.onClick = function (argument){
            switch (argument.state) {
                case 0: /* mouse down */
                    widget.layout.view.locY   = $.view.locY;
                    widget.layout.view.height = $.view.height;
                    break;
                case 1: /* mouse move */
                    offset = (argument.currY - argument.origY) / 2;
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

            text = "CodeTor";
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
            paint.color = 0xFFF0F0F0;
            var p = FilePath.basename (parent.edit.view.document.path);
            canvas.drawText(p, offset + parent.stat.margin, widget.height / 2 + 5, paint) ;
            return 0;
        }

        widget.draw_02 = function (canvas, paint, offset) {
        }

        widget.draw_03 = function (canvas, paint, offset) {
        }

        widget.draw_99 = function (canvas, paint, offset) {
            text = "50%  172:  20";
            measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFFF00000;
            path = new Path();
            path.moveTo(widget.width, 0.0);
            path.lineTo(widget.width - (measure.length + parent.stat.margin * 2), 0.0);
            path.lineTo(widget.width - (measure.length + parent.stat.margin * 2 + widget.height / 2), widget.height / 2 - 1);
            path.lineTo(widget.width - (measure.length + parent.stat.margin * 2), widget.height);
            path.lineTo(widget.width, widget.height);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            offset = (widget.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, widget.width - (measure.length + parent.stat.margin * 2) + parent.stat.margin, offset, paint);
            return 0;
        }
        widget.draw_98 = function (canvas, paint, offset) {
        }
        widget.draw_97 = function (canvas, paint, offset) {
        }
        widget.draw_96 = function (canvas, paint, offset) {
        }
        return widget;
    };

    function _createEdit (parent, interact) {
        var widget = new Editor (parent, {"onDraw":function(canvas){
            //widget.onDraw (canvas);
        },"onEvent":function(event, argument){
            try {
                switch (event) {
                    case "SYS:SIZECHANGE":
                        widget.onSizeChange();
                        break;
                    case "SYS:CLICK":
                        widget.onClick (argument)
                        break;
                    case "SYS:KEYUP":
                        return KeyInvoker.up.bind(widget)(argument.key);
                    case "SYS:KEY":
                        return KeyInvoker.down.bind(widget)(argument.key, argument.shift, argument.alt, argument.ctrl);
                    case "SYS:INPUTTEXT":
                        break;
                    case "SYS:FOCUSIN":
                        SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                        Windows.focusChange (parent);
                        break;
                    case "SYS:FOCUSOUT":
                        Console.log ("editor lose focus");
                        break;
                    case "SYS:DROPFILE":
                        path = argument.replace(/\\/g,"/");
                        b = widget.sync(SCI_GETREADONLY, 0x00, 0x00);
                        widget.sync(SCI_SETREADONLY, 0x00, 0x00);
                        widget.document.direct = path;
                        widget.sync(SCI_SETREADONLY, b, 0x00);
                        break;
                    default:
                        break;
                }
            }
            catch (e) {
            }
            return false;
        }});
        widget.interact = interact;

        widget.locX   = parent.edit.x;
        widget.locY   = parent.edit.y;
        widget.width  = parent.edit.w;
        widget.height = parent.edit.h;

        widget.paint = new Paint();

        widget.onDraw = function (canvas) {
            //p = widget.paint;
            //p.style = 0x00;
            //p.color = config.background.color;
            //canvas.drawRect(0, 0, widget.width, widget.height, p);
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

        widget.onClick = function (state) {
        }

        widget.onSizeChange = function () {
            widget.width  = parent.width - parent.sept.w;
            widget.height = parent.height - parent.stat.h;
        }

        //widget.document.direct = "/Volumes/Disk/Development/CodeTor/runtime/VimSu.js"
        //widget.document.direct = "e:/Code/CT/CTDocumentMgr.cpp"
        widget.document = defaultDoc;

        f = (e,lex) => { 
            l = lex(); v = l.next();
            while(v.done == false) {
                e.sync(v.value[0], v.value[1], v.value[2]);
                v = l.next();
            }
        };

        f(widget, lexer_c); widget.ro(true);
        return widget;
    };

    function _createSept(parent, interact) {
        var widget = {};
        widget = new Widget (parent, {"onDraw":function(canvas){
            p = widget.paint;
            p.style = 0x00;
            p.color = 0xFFC2BFA5;
            canvas.drawRect(0, 0, widget.width, widget.height, p);
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
                case "SYS:FOCUSOUT":
                    break;
                default:
                    break;
            }
        }});

        widget.locX   = parent.sept.x;
        widget.locY   = parent.sept.y;
        widget.width  = parent.sept.w;
        widget.height = parent.sept.h;

        widget.onSizeChange = function () {
            widget.widget = parent.sept.w;
            widget.height = parent.height;
        }

        widget.paint = new Paint();

        widget.onClick = function (argument){
            switch (argument.state) {
                case 0: /* mouse down */
                    Windows.septClick (parent, argument, 0);
                    break;
                case 1: /* mouse move */
                    Windows.septMove (parent, argument);
                    break;
                case 2: /* mouse up */
                    Windows.septClick (parent, argument, 1);
                    break;
                default:
                    break;
            }
        }
        return widget;
    };
})();
