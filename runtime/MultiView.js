(function (){
    return function (object, interact) {
        container = new Widget (object, {"onDraw":function(canvas){
            container.onDraw(canvas);
        },"onEvent":function(event, argument){
            return container.onEvt(event, argument);
        }});
        container.paint = new Paint();

        container.onEvt = function (event, argument) {
            switch (event) {
                case "SYS:SIZECHANGE":
                    container.onSizeChange ();
                    break;
                case "SYS:CLICK":
                    break;
                case "SYS:FOCUSIN":
                    break;
                default:
                    break;
            }
            return false;
        }

        container.onDraw = function (canvas) {
            p = container.paint;
            p.style = 0x00;
            p.color = 0xFF0352FF;
            canvas.drawRect(0, 0, container.width, container.height, p);
        }

        container.onSizeChange = function () {
            container.width  = object.width;
            container.height = object.height - interact.height;
        }

        container.locX = 0;
        container.locY = 0;
        container.width  = 100;
        container.height = 200;
        container.width  = object.width;
        container.height = object.height - interact.height;

        container.stat = {};
        container.stat.x = 0;
        container.stat.y = container.height - 23;
        container.stat.w = container.width;
        container.stat.h = 23;
        container.stat.margin = 10;

        container.edit = {};
        container.edit.x = 0;
        container.edit.y = 0;
        container.edit.w = container.width;
        container.edit.h = container.height - container.stat.h;

        //function _createSept(object, interact) {
        //    var widget = {};
        //    widget = new Widget (object, {"onDraw":function(canvas){
        //        p = widget.paint;
        //        p.style = 0x00;
        //        p.color = 0xFFC2BFA5;
        //        canvas.drawRect(0, 0, widget.width, widget.height, p);
        //    },"onEvent":function(event, argument){
        //        switch (event) {
        //            case "SYS:SIZECHANGE":
        //                break;
        //            case "SYS:CLICK":
        //                widget.onClick (argument)
        //                break;
        //            case "SYS:FOCUSIN":
        //                SDL.setCursor(SDL_SYSTEM_CURSOR_ARROW);
        //                break;
        //            case "SYS:FOCUSOUT":
        //                break;
        //            default:
        //                break;
        //        }
        //    }});

        //    widget.paint = new Paint();

        //    widget.onClick = function (argument){
        //        switch (argument.state) {
        //            case 0: /* mouse down */
        //                break;
        //            case 1: /* mouse move */
        //                break;
        //            case 2: /* mouse up */
        //                break;
        //            default:
        //                break;
        //        }
        //    }
        //};

        function _createStat (object, interact) {
            var widget = {};
            widget = new Widget (object, {"onDraw":function(canvas){
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
                    //Console.log (e.toString());
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

            widget.locX   = object.stat.x;
            widget.locY   = object.stat.y;
            widget.width  = object.stat.w;
            widget.height = object.stat.h;

            widget.paint = new Paint();

            widget.layout = {};
            widget.layout.view = {};
            widget.layout.view.locY = 0;
            widget.layout.view.height = 0;

            widget.onClick = function (argument){
                switch (argument.widgete) {
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
                widget.width = object.width;
                widget.locY  = object.height - widget.height;
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
                path.lineTo(measure.length + container.stat.margin * 2, 0.0);
                path.lineTo(measure.length + container.stat.margin * 2 + widget.height / 2, widget.height / 2 - 1);
                path.lineTo(measure.length + container.stat.margin * 2, widget.height);
                path.lineTo(0.0, widget.height);
                path.close();
                canvas.drawPath(path, paint);

                paint.color = 0xFFF0F0F0;
                offset = (widget.height - measure.bounds.y) / 2 + measure.bounds.y;
                canvas.drawText(text, container.stat.margin, offset, paint);

                return measure.length + container.stat.margin * 2 + widget.height / 2;
            }
            widget.draw_01 = function (canvas, paint, offset) {
                paint.color = 0xFFF0F0F0;
                posix = require ("runtime/Path.js");
                var p = posix.basename (container.edit.view.document.path);

                //measure = paint.measureText(p);
                //measure.bounds.x = Math.abs(measure.bounds.x);
                //measure.bounds.y = Math.abs(measure.bounds.y);
                //measure.bounds.w = Math.abs(measure.bounds.w);
                //measure.bounds.h = Math.abs(measure.bounds.h);

                canvas.drawText(p, offset + container.stat.margin, widget.height / 2 + 5, paint) ;

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
                path.lineTo(widget.width - (measure.length + container.stat.margin * 2), 0.0);
                path.lineTo(widget.width - (measure.length + container.stat.margin * 2 + widget.height / 2), widget.height / 2 - 1);
                path.lineTo(widget.width - (measure.length + container.stat.margin * 2), widget.height);
                path.lineTo(widget.width, widget.height);
                path.close();
                canvas.drawPath(path, paint);

                paint.color = 0xFFF0F0F0;
                offset = (widget.height - measure.bounds.y) / 2 + measure.bounds.y;
                canvas.drawText(text, widget.width - (measure.length + container.stat.margin * 2) + container.stat.margin, offset, paint);
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
        function _createEdit (object, interact) {
            widget = new Editor (object, {"onDraw":function(canvas){
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
                            break;
                        case "SYS:FOCUSOUT":
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
                    Console.log(e.toString());
                }
                return false;
            }});

            widget.interact = interact;

            widget.locX   = object.edit.x;
            widget.locY   = object.edit.y;
            widget.width  = object.edit.w;
            widget.height = object.edit.h;

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
                widget.width  = object.width;
                widget.height = object.height - object.stat.h;
            }

            //widget.document.direct = "/Volumes/Disk/Development/CodeTor/runtime/VimSu.js"
            widget.document.direct = "e:/Code/CT/CTCommandView.cpp"
            //ls = require("runtime/script/list.js");
            //set.vim.list = ls (widget.document, widget, "e:/Code/iTron/goni/SysLib/NSMemory/");

            f = (e,lex) => { 
                l = lex(); v = l.next();
                while(v.done == false) {
                    e.sync(v.value[0], v.value[1], v.value[2]);
                    v = l.next();
                }
            };

            //f(widget, lexer_default);
            f(widget, lexer_c);
            widget.ro(true);
            return widget;
        };
        container.edit.view = _createEdit(container, interact);
        container.stat.view = _createStat(container, interact);
        return container;
    };
})();
