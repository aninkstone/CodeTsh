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
                this.doubleClick ();
                break;
            case "SYS:STYLENEEDED":
                this.styleNeeded ();
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
                this.focusIn ();
                break;
            case "SYS:FOCUSOUT":
                this.focusOut();
                break;
            case "SYS:KEY":
                this.keyD(argument);
                break;
            case "SYS:KEYUP":
                this.keyU(argument);
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
        }
    }

    Editor.prototype.modified = function () {
    }

    Editor.prototype.sizeChange = function () {
    }

    Editor.prototype.styleNeeded = function () {
        //console.log ("SYS:STYLENEEDED : position = " + argument);
    }

    Editor.prototype.doubleClick = function () {
        //console.log ("SYS:DOUBLECLICK: line number = " + argument.lineNumber + " position = " + argument.position + " modifiers = " + argument.modifiers);
    }

    Editor.prototype.click = function () {
    }

    Editor.prototype.focusIn = function () {
        try {
            windows.focusChange (this);
        }
        catch (e) {
        }
    }

    Editor.prototype.focusOut = function () {
    }

    Editor.prototype.charset = function (charset) {
    }

    Editor.prototype.lineBeg = function (line) {
        if (typeof line == 'number') {
            return this.document.lineStart(line);
        }
        return -1;
    }

    Editor.prototype.lineEnd = function (line) {
        if (typeof line == 'number') {
            return this.document.lineEnd(line);
        }
        return -1;
    }

    Editor.prototype.eol = function (eol) {
        if (typeof eol == 'number') {
            this.sync(SCI_SETEOLMODE, eol);
        }
        let mode = this.sync(SCI_GETEOLMODE);
        switch (mode) {
            case SC_EOL_CRLF:
                return "DOS";
            case SC_EOL_CR:
                return "OSX";
            case SC_EOL_LF:
                return "Unix";
            default:
                break;
        }
    }

    Editor.prototype.codepage = function (codepage) {
        if (typeof codepage == 'number') {
            this.sync(SCI_SETCODEPAGE, codepage);
        }
        let cp = this.sync(SCI_GETCODEPAGE);
        switch (cp) {
            case SC_CP_UTF8: 
                return "utf-8";
            default:
                break;
        }
        return "utf16";
    }

    Editor.prototype.doc = function (doc, lexer) {
        let lex = lexer_default;
        this.document = doc;
        if (typeof lexer == 'undefined'){
            let fp = new FilePath ();
            var ext = fp.extName(doc.path);
            switch (ext) {
                case ".cpp":
                case ".c":
                case ".h":
                    lex = lexer_c;
                    break;
                case ".js":
                    lex = lexer_javascript;
                    break;
                case ".html":
                case ".htm":
                    lex = lexer_html;
                    break;
                case ".txt":
                    lex = lexer_customize;
                    break;
                default:
                    break;
            };
        }
        this.lexerSync (lex);
    }

    Editor.prototype.updateUI = function () {
        var caretP = this.lineNumber(0, 0);
        this.document.caretP = caretP;
    }

    Editor.prototype.marginClick = function (position, margin, modifiers) {
        //var l = this.sync(SCI_LINEFROMPOSITION, position, 0x00); 
        console.log("SYS:MARGINCLICK-> lineNu:" + (l + 1) + " margin:" + margin );
    }

    Editor.prototype.marginRightClick = function (position, margin, modifiers) {
        //var l = this.sync(SCI_LINEFROMPOSITION, position, 0x00); 
        console.log("SYS:MARGINCLICK-> lineNu:" + (l + 1) + " margin:" + margin );
    }

    Editor.prototype.keyU = function (args) {
    }

    Editor.prototype.keyD = function (args) {
    }

    Editor.prototype.dropFile = function (path) {
        console.log ("On drop file [" + path + "]");
        //var path = path.replace(/\\/g,"/");
        //b = this.sync(SCI_GETREADONLY, 0x00, 0x00);
        //this.sync(SCI_SETREADONLY, 0x00, 0x00);
        //this.document.direct = path;
        //this.sync(SCI_SETREADONLY, b, 0x00);
    }

    /*
    {flags} is a string, which can contain these character flags:
    'b' search backward instead of forward
    'n' do not move the cursor
    's' set the ' mark at the previous location of the cursor
    */
    Editor.prototype.search = function (pattern, flags, stopline) {
        set.vim.search.target = pattern;
        set.vim.search.flags = SCFIND_REGEXP | SCFIND_MATCHCASE;
        set.vim.search.stopline = 0;

        let search = set.vim.search;

        search.beg = this.cursor(0, 0) - search.target.length;
        search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);

        this.sync(SCI_SETSEARCHFLAGS, search.flags, 0x00);
        this.sync(SCI_SETTARGETSTART, search.beg, 0x00);
        this.sync(SCI_SETTARGETEND,   search.end, 0x00);

        let r = this.sync(SCI_SEARCHINTARGET, search.target.length, search.target);
        if (r != -1) {
            this.sync(SCI_GOTOPOS, r, 0x00);
            this.sync(SCI_SETSEL, r, r + set.vim.search.target.length);
        }
        else {
            //FIXME: show error
        }
    }

    Editor.prototype.line = function (lnum, end) {
        let arr = [];

        let l = (n) => {
            let s = this.document.lineStart(n);
            let e = this.document.lineEnd(n);
            var t = "";
            for (let b = s; b <= e; ++b) {
                let c = String.fromCharCode(this.document.charAt(b));
                t += c;
            }
            return t;
        }

        let s = (expr) => {
            switch (expr) {
                case '.':
                    let n = this.lineNumber('.');
                    return l (n);
                default:
                    break;
            }
        };

        switch (typeof lnum) {
            case 'string':
                return s (lnum);
            case 'number':
            default:
                break;
        }

        return arr;
    }

    /*
    {expr} the result is a number, which is the line number of the file position given with {expr}. The accepted positions are:
    .  the cursor position
    $  the last line in the current buffer
    'x position of mark x (if the mark is not set, 0 is returned)
    w0 first line visible in current window
    w$ last visiable in current window
    */
    Editor.prototype.lineNumber = function (expr) {
        var cur = this.sync(SCI_GETCURRENTPOS);
        switch (expr) {
            case '.':
                return this.sync(SCI_LINEFROMPOSITION, cur);
            default:
                break;
        }
    }

    /*
    Positions the cursor at the column (byte count) {col} in the
    line {lnum}.  The first column is one.

    If {lnum} is greater than the number of lines in the buffer,
    the cursor will be positioned at the last line in the buffer.
    If {lnum} is zero, the cursor will stay in the current line.
    If {col} is greater than the number of bytes in the line,
    the cursor will be positioned at the last character in the
    line.
    If {col} is zero, the cursor will stay in the current column.
    */
    Editor.prototype.cursor = function (lnum = 0, col = 0) {
        if (lnum == 0 && col == 0) {
            return this.sync (SCI_GETCURRENTPOS, 0, 0);
        }

        return 0;
    }
    /*
    col({expr})    The result is a Number, which is the byte index of the column
    position given with {expr}.  The accepted positions are:
    .  the cursor position
    $  the end of the cursor line (the result is the
       number of bytes in the cursor line plus one)
    'x position of mark x (if the mark is not set, 0 is
       returned)
    */
    Editor.prototype.col = function (expr) {
        switch (expr) {
            case '.':
                break;
            default:
                break;
        }
    }

    Editor.prototype.searchForward = function (target) {
        var currPos = this.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
        if (typeof (target) === 'string'){
            set.vim.search.target = target;
            set.vim.search.beg = 0;
            set.vim.search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.pos = -1;
            set.vim.search.prv = set.vim.search.pos; 
        }
        else {
            this.sync(SCI_CLEARSELECTIONS, 0x00, 0x00);
            //set.vim.search.prv = currPos; 
            set.vim.search.prv = set.vim.search.pos;
            set.vim.search.beg = set.vim.search.prv + set.vim.search.target.length;
            set.vim.search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.pos = -1;
        }

        if (set.vim.search.target.length < 1) {
            return;
        }

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
            return this.onEvt(evt, argument);
        },
    };

    var defaultCB = {
        OnDrw: function (canvas) {},
        OnEvt: function (evt, argument) { return false; },
    };

    return function (parent, evntH, drawH) {
        var edit = new Editor (parent, { OnDrw: function (context, canvas) {
                try {
                    context.binder.OnDrw.bind(context)(canvas);
                    return context.handle.OnDrw (canvas);
                }
                catch (e) {
                    console.log (e + " " + (new Error().stack));
                }
            },
            OnEvt: function (context, evt, argument) {
                try {
                    context.binder.OnEvt.bind(context)(evt, argument);
                    return context.handle.OnEvt (evt, argument);
                }
                catch (e) {
                    console.log (e + " " + (new Error().stack));
                }
                return false;
            },
        });

        edit.handle = {};
        edit.handle.OnDrw = (typeof drawH == 'undefined' ? defaultCB.OnDrw : drawH);
        edit.handle.OnEvt = (typeof evntH == 'undefined' ? defaultCB.OnEvt : evntH);
        edit.binder = binder;

        edit.parent = parent;
        edit.name = "";

        edit.codepage(SC_CP_UTF8);

        return edit;
    };
})();
