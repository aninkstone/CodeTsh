(function(){
    Editor.prototype.lexerSync = function (lex) {
        var l = lex(); var v = l.next();
        while(v.done == false) {
            this.sync(v.value[0], v.value[1], v.value[2]);
            v = l.next();
        }
    }

    Editor.prototype.onDrw = function (canvas) {
        var p = new Paint ();
        p.color = 0xFFEEEEEE;
        p.fontSize = 48;
        p.fontFamily = set.font.family;
        canvas.drawText(this.name, 5, 48, p);
    }

    Editor.prototype.onEvt = function (evt, argument) {
        switch (evt) {
            case "SYS:EDITUPDATEUI":
                var caretP = this.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
                this.document.caretP = caretP;
                this.updateUI ();
                break;
            case "SYS:MODIFIED":
                this.modified ();
                break;
            case "SYS:SAVEPOINTREACHED":
                break;
            case "SYS:SAVEPOINTLEFT":
                break;
            case "SYS:MODIFYATTEMPTRO":
                break;
            case "SYS:DOUBLECLICK":
                //console.log ("SYS:DOUBLECLICK: line number = " + argument.lineNumber + " position = " + argument.position + " modifiers = " + argument.modifiers);
                break;
            case "SYS:STYLENEEDED":
                //console.log ("SYS:STYLENEEDED : position = " + argument);
                break;
            case "SYS:CHARADDED":
                this.charAdded (argument);
                break;
            case "SYS:SIZECHANGE":
                this.sizeChange ();
                break;
            case "SYS:CLICK":
                this.click ();
                break;
            case "SYS:FOCUSIN":
                //SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                windows.focusChange (this);
                this.focusIn ();
                break;
            case "SYS:FOCUSOUT":
                this.focusOut();
                break;
            case "SYS:KEY":
                this.keyDown(argument);
                break;
            case "SYS:KEYUP":
                this.keyUp(argument);
                break;
            case "SYS:DROPFILE":
                this.dropFile(argument);
                break;
            case "SYS:MARGINRIGHTCLICK":
                this.marginRightClick(argument.position, argument.margin, argument.modifiers);
                break;
            case "SYS:MARGINCLICK":
                this.marginClick(argument.position, argument.margin, argument.modifiers);
                break;
            default:
                break;
        }
    }

    Editor.prototype.charAdded = function (argument) {
        var b = this.sync(SCI_GETREADONLY, 0x00, 0x00);
        if (b == 0) {
            Indent(this, String.fromCharCode(argument));
            Complete(this, String.fromCharCode(argument));
        }
    }

    Editor.prototype.modified = function () {
    }

    Editor.prototype.sizeChange = function () {
    }

    Editor.prototype.click = function () {
    }

    Editor.prototype.focusIn = function () {
    }

    Editor.prototype.focusOut = function () {
    }

    Editor.prototype.updateUI = function () {
    }

    Editor.prototype.marginClick = function (position, margin, modifiers) {
        var l = this.sync(SCI_LINEFROMPOSITION, position, 0x00); 
        console.log("SYS:MARGINCLICK-> lineNu:" + (l + 1) + " margin:" + margin );
    }

    Editor.prototype.marginRightClick = function (position, margin, modifiers) {
        var l = this.sync(SCI_LINEFROMPOSITION, position, 0x00); 
        console.log("SYS:MARGINCLICK-> lineNu:" + (l + 1) + " margin:" + margin );
    }

    Editor.prototype.keyUp = function (args) {
    }

    Editor.prototype.keyDown = function (args) {
    }

    Editor.prototype.dropFile = function (path) {
        console.log ("On drop file [" + path + "]");
        //var path = path.replace(/\\/g,"/");
        //b = this.sync(SCI_GETREADONLY, 0x00, 0x00);
        //this.sync(SCI_SETREADONLY, 0x00, 0x00);
        //this.document.direct = path;
        //this.sync(SCI_SETREADONLY, b, 0x00);
    }

    Editor.prototype.searchForward = function (target) {
        if (typeof (target) === 'string'){
            set.vim.search.target = target;
            set.vim.search.beg = 0;
            set.vim.search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.pos = -1;
            set.vim.search.prv = set.vim.search.pos; 
        }
        else {
            this.sync(SCI_CLEARSELECTIONS, 0x00, 0x00);
            set.vim.search.prv = set.vim.search.pos; 
            set.vim.search.beg = set.vim.search.pos + set.vim.search.target.length;
            set.vim.search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.pos = -1;
        }

        if (set.vim.search.target.length < 1) {
            return;
        }

        var currPos = this.sync(SCI_GETCURRENTPOS, 0x00, 0x00);

        this.sync(SCI_SETSEARCHFLAGS, SCFIND_REGEXP | SCFIND_MATCHCASE, 0x00);
        this.sync(SCI_SETTARGETSTART, set.vim.search.beg, 0x00);
        this.sync(SCI_SETTARGETEND, set.vim.search.end, 0x00);

        var targetpos = this.sync(SCI_SEARCHINTARGET, set.vim.search.target.length, set.vim.search.target);
        if (targetpos != -1) {
            set.vim.search.pos = targetpos;
            this.sync(SCI_GOTOPOS, set.vim.search.pos, 0x00);
            //this.sync(SCI_VERTICALCENTRECARET, 0x00, 0x00);
            this.sync(SCI_SETSEL, set.vim.search.pos, set.vim.search.pos + set.vim.search.target.length);
        } 
        else {
            this.sync(SCI_SETSEL, set.vim.search.prv, set.vim.search.prv + set.vim.search.target.length);
        }

    };

    Editor.prototype.ro = function (b) {
        if (b) {
            this.sync(SCI_SETREADONLY,   0x01, 0x00);
            this.sync(SCI_SETCARETSTYLE, 0x02, 0x00);
            this.sync(SCI_SETCURSOR, SC_CURSORARROW, 0x00);
        }
        else {
            this.sync(SCI_SETREADONLY,   0x00, 0x00);
            this.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
            this.sync(SCI_SETCURSOR, SC_CURSORNORMAL, 0x00);
        }
    }

    Editor.prototype.isReadonly = function () {
        return this.sync(SCI_GETREADONLY, 0x00, 0x00);
    }

    Editor.prototype.searchBackward = function (target) {
        if (typeof (target) === 'string'){
            set.vim.search.target = target;
            set.vim.search.beg = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.end = 0;
            set.vim.search.pos = 0;
            set.vim.search.prv = set.vim.search.pos; 
        }
        else {
            this.sync(SCI_CLEARSELECTIONS, 0x00, 0x00);
            set.vim.search.prv = set.vim.search.pos; 
            set.vim.search.beg = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.end = set.vim.search.pos + set.vim.search.target.length;
            set.vim.search.pos = 0;
        }

        if (set.vim.search.target.length < 1) {
            return;
        }

        this.sync(SCI_SETSEARCHFLAGS, SCFIND_REGEXP | SCFIND_MATCHCASE, 0x00);
        this.sync(SCI_SETTARGETSTART, set.vim.search.beg, 0x00);
        this.sync(SCI_SETTARGETEND, set.vim.search.end, 0x00);

        set.vim.search.pos = this.sync(SCI_SEARCHINTARGET, set.vim.search.target.length, set.vim.search.target);
        if (set.vim.search.pos != -1) {
            this.sync(SCI_GOTOPOS, set.vim.search.pos, 0x00);
            //this.sync(SCI_VERTICALCENTRECARET, 0x00, 0x00);
            this.sync(SCI_SETSEL, set.vim.search.pos, set.vim.search.pos + set.vim.search.target.length);
        } 
        else {
            this.sync(SCI_SETSEL, set.vim.search.prv, set.vim.search.prv + set.vim.search.target.length);
        }
    };

    var binder = {
        OnDrw: function (canvas) {
            this.onDrw (canvas);
        },
        OnEvt:function (evt, argument) {
            this.onEvt(evt, argument);
        },
    };

    var defaultCB = {
        OnDrw: function (canvas) {},
        OnEvt: function (evt, argument) { return false; },
    };

    return function (parent, evntH, drawH) {
        var edit = new Editor (parent, { OnDrw: function (context, canvas) {
                context.binder.OnDrw.bind(context)(canvas);
                return context.handle.OnDrw (canvas);
            },
            OnEvt: function (context, evt, argument) {
                context.binder.OnEvt.bind(context)(evt, argument);
                return context.handle.OnEvt (evt, argument);
            },
        });

        edit.handle = {};
        edit.handle.OnDrw = (typeof drawH == 'undefined' ? defaultCB.OnDrw : drawH);
        edit.handle.OnEvt = (typeof evntH == 'undefined' ? defaultCB.OnEvt : evntH);
        edit.binder = binder;

        edit.parent = parent;
        edit.name = "";

        return edit;
    };
})();
