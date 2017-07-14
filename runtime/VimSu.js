set.vim.cmd = "";

var $ = {};
$.editor = {};
$.window = {};
$.status = {};
$.nerdtr = {};
$.script = {};
$.sepera = {};

var layout = {
    editor: {
        y: 0,
    },
    nerdtr: {
        x: 0,
        y: 0,
        w: 180,
        //w: 0,
    },
    status: {
        x: 0,
        h: 22,
    },
    sepera: {
        w: 6,
        //w: 0,
    },
    script: {
        x: 0,
        h: 22,
    },
};

(function namespace_none () {
    $.window = new Window(null, {"onDraw":function(canvas){
        p = $.window.paint;
        p.color = 0xFFE0E0E0;
        canvas.drawRect (0, 0, $.window.width, $.window.height, p);

        p.color = 0xFF00E000;
        path = new Path();
        path.moveTo(0.0,  0.0);
        path.lineTo(0.0,  80.0);
        path.lineTo(20.0, 100.0);
        path.lineTo(40.0, 80.0);
        path.lineTo(40.0, 0.0);
        path.close();
        canvas.drawPath(path, $.window.paint);
    },"onEvent":function(event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                $.window.onResize();
                break;
            case "SYS:CLICK":
                $.window.onClick (argument)
                break;
            default:
                break;
        }
        return false;
    }});

    $.window.onClick = function (argument) {
    }

    $.window.paint = new Paint();
    obj = new Layout();
    obj.init($.window);

    $.window.onResize = function () {
        obj.resize ($.window);
    }

    //$.editor = createEditor($.window);
    //$.status = createStsBar($.window);
    //$.nerdtr = createNerdTr($.window);
    //$.script = createScript($.window);
    //$.sepera = createSepterator ($.window);

    $.window.run(function(){});
})();

function createStsBar (object) {
    var widget = {};
    widget = new Widget (object, {"onDraw":function(canvas){
        p = widget.paint;
        p.style = 0x00;
        p.color = 0xFF005252;
        canvas.drawRect(0, 0, widget.width, widget.height, p);

        p.fontSize = 18;
        p.fontFamily = set.font.family;

        text = "CodeTor";
        measure = p.measureText(text);
        measure.bounds.x = Math.abs(measure.bounds.x);
        measure.bounds.y = Math.abs(measure.bounds.y);
        measure.bounds.w = Math.abs(measure.bounds.w);
        measure.bounds.h = Math.abs(measure.bounds.h);

        p.color = 0xFF002B2B;
        path = new Path();
        path.moveTo(0.0,  0.0);
        path.lineTo(measure.length, 0.0);
        path.lineTo(measure.length + widget.height / 2, widget.height / 2 - 1);
        path.lineTo(measure.length, widget.height);
        path.lineTo(0.0,  widget.height);
        path.close();
        canvas.drawPath(path, p);

        p.color = 0xFFF0F0F0;
        offset = (widget.height - measure.bounds.y) / 2 + measure.bounds.y;
        canvas.drawText(text, 2, offset, p);
        canvas.drawText("E:/Code/CodeTor/FakeEditor.c", measure.length + widget.height / 2 + 5, offset, p) ;
    },"onEvent":function(event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
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

    widget.locX   = layout.status.x;
    widget.locY   = $.window.height - layout.status.h - layout.script.h;

    widget.width  = $.window.width;
    widget.height = layout.status.h;

    widget.paint = new Paint();

    widget.layout = {};
    widget.layout.status = {};
    widget.layout.status.locY = 0;

    widget.layout.editor = {};
    widget.layout.editor.locY = 0;
    widget.layout.editor.height = 0;

    widget.layout.nerdtr = {};
    widget.layout.nerdtr.locY = 0;
    widget.layout.nerdtr.height = 0;

    widget.layout.script = {};
    widget.layout.script.locY = 0;
    widget.layout.script.height = 0;

    widget.layout.sepera = {};
    widget.layout.sepera.locY = 0;
    widget.layout.sepera.height = 0;

    widget.onClick = function (argument){
        switch (argument.state) {
            case 0: /* mouse down */
                widget.layout.status.locY   = $.status.locY;
                widget.layout.editor.locY   = $.editor.locY;
                widget.layout.editor.height = $.editor.height;
                widget.layout.nerdtr.locY   = $.nerdtr.locY;
                widget.layout.nerdtr.height = $.nerdtr.height;
                widget.layout.script.locY   = $.script.locY;
                widget.layout.script.height = $.script.height;
                widget.layout.sepera.locY   = $.script.locY;
                widget.layout.sepera.height = $.script.height;
                break;
            case 1: /* mouse move */
                offset = (argument.currY - argument.origY) / 2;
                $.editor.height = widget.layout.editor.height + offset;
                $.status.locY   = widget.layout.status.locY   + offset;
                $.nerdtr.height = widget.layout.nerdtr.height + offset;
                $.script.height = widget.layout.script.height - offset;
                $.script.locY   = widget.layout.script.locY   + offset;
                $.sepera.height = widget.layout.sepera.height + offset;
                break;
            case 2: /* mouse up */
                break;
            default:
                break;
        }
    }
    return widget;
}

function createSepterator (object) {
    var widget = {};
    widget = new Widget (object, {"onDraw":function(canvas){
        p = widget.paint;
        p.style = 0x00;
        p.color = 0xFFC2BFA5;
        canvas.drawRect(0, 0, widget.width, widget.height, p);
    },"onEvent":function(event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
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

    widget.paint = new Paint();

    widget.locX = $.nerdtr.width;
    widget.locY = $.nerdtr.locY;
    widget.width  = layout.sepera.w;
    widget.height = $.nerdtr.height;

    widget.layout = {};
    widget.layout.editor = {};
    widget.layout.editor.locX = 0;
    widget.layout.editor.width = 0;

    widget.layout.nerdtr = {};
    widget.layout.nerdtr.locX = 0;
    widget.layout.nerdtr.width = 0;

    widget.layout.sepera = {};
    widget.layout.sepera.locX = 0;

    widget.onClick = function (argument){
        switch (argument.state) {
            case 0: /* mouse down */
                widget.layout.editor.locX  = $.editor.locX;
                widget.layout.editor.width = $.editor.width;
                widget.layout.nerdtr.locX  = $.nerdtr.locX;
                widget.layout.nerdtr.width = $.nerdtr.width;
                widget.layout.sepera.locX  = $.sepera.locX;
                break;
            case 1: /* mouse move */
                offset = (argument.currX - argument.origX) / 2;
                $.editor.locX = widget.layout.editor.locX + offset;
                $.editor.width = widget.layout.editor.width - offset;
                $.nerdtr.width = widget.layout.nerdtr.width + offset;
                $.sepera.locX = widget.layout.sepera.locX + offset;
                break;
            case 2: /* mouse up */
                break;
            default:
                break;
        }
    }
    return widget;
}

function createNerdTr (object) {
    var widget = {};
    widget = new Editor (object, {"onDraw":function(canvas){
        p = widget.paint;
        p.style = 0x00;
        p.color = 0xFFF0F0F0;
        canvas.drawRect(0, 0, widget.width, widget.height, p);
    },"onEvent":function(event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                break;
            case "SYS:CLICK":
                widget.onClick (argument)
                break;
            case "SYS:FOCUSIN":
                SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                break;
            case "SYS:FOCUSOUT":
                break;
            default:
                break;
        }
    }});

    widget.locX = layout.nerdtr.x;
    widget.locY = layout.nerdtr.y;
    widget.width = layout.nerdtr.w;
    widget.height = $.window.height - layout.status.h - layout.script.h;

    widget.paint = new Paint();

    widget.onClick = function (state) {
    }

    lexerSync (widget, lexer_slidebar);
    return widget;
}

function createEditor (object) {
    var widget = {};
    widget = new Editor (object, {"onDraw":function(canvas){
        widget.onDraw (canvas);
    },"onEvent":function(event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                break;
            case "SYS:CLICK":
                widget.onClick (argument)
                break;
            case "SYS:KEYUP":
                widget.onKeyUp (argument.key);
                break;
            case "SYS:KEY":
                widget.onKeyDown (argument.key, argument.shift, argument.alt, argument.ctrl);
                break;
            case "SYS:INPUTTEXT":
                break;
            case "SYS:FOCUSIN":
                SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                break;
            case "SYS:FOCUSOUT":
                break;
            default:
                break;
        }
        return false;
    }});

    widget.locX   = layout.nerdtr.w + layout.sepera.w;
    widget.locY   = layout.editor.y;
    widget.width  = $.window.width - layout.sepera.w - layout.nerdtr.w;
    widget.height = $.window.height - layout.status.h - layout.script.h;

    widget.paint = new Paint();

    widget.onDraw = function (canvas) {
        //p = widget.paint;
        //p.style = 0x00;
        //p.color = config.background.color;
        //canvas.drawRect(0, 0, widget.width, widget.height, p);
    }

    widget.readonly = function(b) {
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

    widget.onKeyUp = function (key) {
        switch (key) {
            case 105: /* i */
                widget.readonly(false);
                break;
            default:
                break;
        }
    }

    widget.onKeyDown = function (key, shift, alt, ctrl) {
        ro = widget.sync(SCI_GETREADONLY, 0x00, 0x00);
        switch (key) {
            case 27:  /* escape */
                widget.readonly(true);
                set.vim.cmd = "";
                clearTimeOut(set.vim.timerID);
                break;
            default:
                break;
        }
        if (ro == 1) {
            Console.log (key.toString());
            switch (key) {
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
                case 114: /* r */
                case 121: /* y */
                case 122: /* z */
                    ExecuteCommand(widget, String.fromCharCode(key), shift, alt, ctrl);
                    break;
                case 105: /* i */
                //case 111: /* o */
                    widget.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
                    break;
                case 47:  /* / */
                    $.script.setFocus();
                    $.script.document.deleteChars(0, $.script.document.length);
                    $.script.document.insertChars("/");
                    $.script.sync(SCI_GOTOPOS, $.script.document.length, 0x00);
                    break;
                case 59:  /* : */
                    $.script.setFocus();
                    $.script.document.deleteChars(0, $.script.document.length);
                    $.script.document.insertChars(":");
                    $.script.sync(SCI_GOTOPOS, $.script.document.length, 0x00);
                    break;
                default:
                    break;
            }
        }
        else {
            switch (key) {
                case 105:
                    break;
                default:
                    break;
            }
        }
    }

    //widget.document.direct = "/Volumes/Disk/Development/CodeTor/runtime/VimSu.js"
    widget.document.direct = "e:/Code/CT/external/v7/v7.c"

    f = (e,lex) => { 
        l = lex(); v = l.next();
        while(v.done == false) {
            e.sync(v.value[0], v.value[1], v.value[2]);
            v = l.next();
        }
    };

    //f(widget, lexer_default);
    f(widget, lexer_c);
    //f(widget, lexer_javascript);
    //f(widget, lexer_html);

    widget.readonly(true);
    return widget;
}

function ExecuteCommand (widget, cmd, shift, alt, ctrl){
    fs = new FileSystem();
    script = fs.readFile("runtime/script/keymap/" + cmd + ".js");
    script = eval(script);
    set.vim.cmd += cmd;
    if (script) {
        bConsume = script(widget, set.vim.cmd, shift, alt, ctrl);
        if (bConsume == true) {
            set.vim.cmd = "";
            clearTimeOut(set.vim.timerID);
        }
        else {
            set.vim.timerID = setTimeOut(function (){
                set.vim.cmd = "";
            }, 1000);
        }
    }
}

//function ExecuteScript (widget){
//    try {
//        copen = widget.document;
//        var content = "";
//        for (idx = 0; idx < copen.length; ++idx) {
//            content += (String.fromCharCode(copen.charAt(idx))); 
//        }
//        if (content.length <= 0) {
//            return;
//        }
//
//        caller = function (copen, editor, arg) {
//            copen.deleteChars(0, copen.length);
//            copen.insertChars("Command " + arg + " not found");
//        };
//
//        this.cmdRunner = function (t, e, content) {
//            args = content.split(" ");
//            cmd = args[0].substr(1, args[0].length)
//            fs = new FileSystem();
//
//            args = args.filter(v=>v!='');
//            script = fs.readFile("runtime/script/" + cmd + ".js");
//            script = eval(script);
//            if (script) {
//                script(t, e, args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
//            }
//            else {
//                caller(t, e, args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
//            }
//        }
//
//        firstChar = content.charAt(0);
//        switch (firstChar) {
//            case ":":
//                this.cmdRunner (copen, $.editor, content);
//                break;
//            case "/":
//                break;
//            default:
//                break;
//        }
//
//    }
//    catch (e) {
//        Console.log (e.toString());
//    }
//}

function createScript (object) {
    var widget = {};
    widget = new Editor (object, {"onDraw":function(canvas){
        //p = widget.paint;
        //p.style = 0x00;
        //p.color = config.background.color;
        //canvas.drawRect(0, 0, widget.width, widget.height, p);
    }, "onEvent":function(event, argument){
        switch (event) {
            case "SYS:INPUTTEXT":
                break;
            case "SYS:KEY":
                switch (argument.key) {
                    case 13:  /* enter  */
                        //ExecuteScript (widget); $.editor.setFocus();
                        return true;
                    case 27:  /* escape */
                        $.editor.setFocus();
                        break;
                    default:
                        break;
                }
                break;
            case "SYS:SIZECHANGE":
                break;
            case "SYS:CLICK":
                widget.onClick (argument)
                break;
            case "SYS:FOCUSIN":
                SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                break;
            case "SYS:FOCUSOUT":
                break;
            default:
                break;
        }
        return false;
    }});

    widget.locX = layout.script.x;
    widget.locY = $.window.height - layout.script.h;
    widget.width = $.window.width;
    widget.height = layout.script.h;

    widget.paint = new Paint();
    widget.onClick = function (state) {}

    lexerSync(widget, lexer_commander);
    return widget;
}
