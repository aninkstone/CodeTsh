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
        var doc = $.api.document.createDocument(set.runtime.curr + "/" + name);
        windows.focusView.edit.view.document = doc;
    }

    var openNode = function (name) {
        fs = new FileSystem();
        name = name.trim('\n').trim(' ').trim('\r');
        name = set.runtime.curr + "/" + name;
        Console.log (name);
        l = fs.chdir (name);
        set.runtime.curr = l;
        windows.chdir(set.runtime.curr);
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

    function _createEdit(parent, interact) {
        var widget = {};
        widget = new Editor (parent, {"OnDraw":function(canvas){
        }, "OnEvent":function(event, argument){
            switch (event) {
                case "SYS:KEYUP":
                    return OnKeyU.bind(widget)(argument.key);
                case "SYS:KEY":
                    return OnKeyD.bind(widget)(argument.key, argument.shift, argument.alt, argument.ctrl);
                case "SYS:SIZECHANGE":
                    widget.OnSizeChange();
                    break;
                case "SYS:CLICK":
                    widget.OnClick (argument)
                    return true;
                case "SYS:FOCUSIN":
                    break;
                case "SYS:FOCUSOUT":
                    break;
                default:
                    break;
            }
            return false;
        }});

        widget.OnClick = function (arg) {
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

        widget.OnSizeChange = function () {
            widget.width  = parent.width;
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

    return function (parent, interact, x, y, w, h){
        var thiz = $.api.widget.createWidget (parent);

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.stat = {};
        thiz.nerd = {};

        thiz.nerd.view = new Nerd (thiz, interact);

        thiz.stat.view = new Stat (thiz, interact);

        thiz.OnSizeChange = function (thiz) {
            thiz.nerd.view.locX = 0;
            thiz.nerd.view.locY = 0;
            thiz.nerd.view.width  = thiz.width;
            thiz.nerd.view.height = thiz.height - 23;

            thiz.stat.view.locX = 0;
            thiz.stat.view.locY = thiz.height - 23;
            thiz.stat.view.width  = thiz.width;
            thiz.stat.view.height = 23;
        }

        thiz.OnSizeChange (thiz);

        return thiz;
    };

})();
