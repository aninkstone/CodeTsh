(function (){
    function OnStyleNeededHandle (doc, endPos) {
        for (var idx = 0; idx < endPos; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                case "|":
                    doc.startStyling(idx, 0xFF);
                    doc.setStyleFor(1, 128);
                    break;
                case "-":
                    doc.startStyling(idx, 0xFF);
                    doc.setStyleFor(1, 130);
                    break;
                case "+":
                    var n = doc.lineFromPosition(idx);
                    var s = doc.lineStart(n);
                    var e = doc.lineStart(n + 1);
                    doc.startStyling(idx, 0xFF);
                    doc.setStyleFor(1, 129);
                    doc.startStyling(idx + 1, 0xFF);
                    doc.setStyleFor(e - idx, 131);
                    break;
                default:
                    break;
            }
        }
    };

    var NerdTreeCB= {
        OnModifyAttempt: function(){ }, 
        OnLexerChanged:  function(){ }, 
        OnSavePoint:     function(){ }, 
        OnStyleNeeded:   function(doc, end) { OnStyleNeededHandle(doc, end); }, 
        OnErrorOccurred: function(){ },
        OnDeleted:       function(){ },
        OnModified:      function(){ },
    };

    var nodeClick = function () {
        try {
            var curpos = this.handle.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var linenu = this.handle.sync(SCI_LINEFROMPOSITION, curpos, 0x00); 

            var beg = this.handle.document.lineStart(linenu);
            var end = this.handle.document.lineEnd(linenu);

            var l = this.handle.sync(SCI_GETTEXTRANGE, beg, end);
            //var l = "";
            //for (idx = beg; idx < end; ++idx) {
            //    l += (String.fromCharCode(this.handle.document.charAt(idx))); 
            //}

            var ul = l.indexOf('-');
            var pl = l.indexOf('+');

            if (ul != -1) {
                openFile.bind(this) (l.substring(ul + 1));
            }

            if (pl != -1) {
                openNode.bind(this) (l.substring(pl + 1));
            }
        }
        catch (e) {
            console.log (e + " " + (new Error().stack));
        }
    }

    var openFile = function (name) {
        name = name.trim('\n').trim(' ').trim('\r');
        var doc = $.api.document.createDocument(set.runtime.curr + "/" + name);
        var v = windows.focusMgr.focusEdit();
        v.setDocument(doc);
    }

    var openNode = function (name) {
        fs = new FileSystem();
        name = name.trim('\n').trim(' ').trim('\r');
        name = set.runtime.curr + "/" + name;
        l = fs.chdir (name);
        set.runtime.curr = l;
        this.chdir(set.runtime.curr);
    }

    var OnKeyD = function (key, shift, alt, ctrl) {
        ro = this.handle.sync(SCI_GETREADONLY, 0x00, 0x00);
        if (ro == 1) {
            switch (key) {
                case 9: /* tab */
                    var nerd = windows.instanceOfTypeName ("Nerd");
                    if (nerd != null) {
                        windows.delWidget(nerd);
                        var v = windows.focusMgr.focusEdit();
                        v.setFocus();
                    }
                    break;
                case 114: /* r */
                    this.chdir(set.runtime.curr);
                    break;
                case 117: /* u */
                    if (ctrl) {
                        ExecuteCommand(this.handle, String.fromCharCode(key), shift, alt, ctrl);
                    }
                    else {
                        openNode.bind(this)("..");
                    }
                    break;
                case 13:  /* enter */
                    nodeClick.bind(this)();
                    break;
                case 98:  /* b */
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
                case 118: /* v */
                case 119: /* w */
                case 121: /* y */
                    ExecuteCommand(this.handle, String.fromCharCode(key), shift, alt, ctrl);
                    break;
                case 47:  /* / */
                    var inet = windows.namedCtrl("Inet");
                    inet.handle.setFocus();
                    inet.handle.document.deleteChars(0, inet.handle.document.length);
                    inet.handle.document.insertChars("/");
                    inet.handle.sync(SCI_GOTOPOS, inet.handle.document.length, 0x00);
                    break;
                case 59:  /* : */
                    var inet = windows.namedCtrl("Inet");
                    inet.handle.setFocus();
                    inet.handle.document.deleteChars(0, inet.handle.document.length);
                    inet.handle.document.insertChars(":");
                    inet.handle.sync(SCI_GOTOPOS, inet.handle.document.length, 0x00);
                    break;
                default:
                    console.log(key.toString());
                    break;
            }
        }
        else {
            //do nothing
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

    function Nerd (p) {
        function OnEvt (evt, argument) {
            function click (arg) {
                switch (arg.state) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        nodeClick.bind(this)();
                        break;
                    default:
                        break;
                }
            }
            switch (evt) {
                case "SYS:SIZECHANGE":
                    break;
                case "SYS:CLICK":
                    click.bind(this)(argument);
                    break;
                case "SYS:FOCUSIN":
                    this.handle.sync(SCI_SETCURSOR, SC_CURSORARROW, 0x00);
                    break;
                case "SYS:KEY":
                    return OnKeyD.bind(this)(argument.key, argument.shift, argument.alt, argument.ctrl);
                case "SYS:KEYUP":
                    return OnKeyU.bind(this)(argument.key);
                default:
                    break;
            }
        }

        this.handle = NewEditor(p.handle, OnEvt.bind(this));
        this.handle.lexerSync(lexer_nerdtree); 
        this.handle.ro(true);
        this.parent = p;

        this.update(set.runtime.curr);
    }

    Inherite(Nerd, BaseObj);

    Nerd.prototype.chdir = function (fp) {
        this.update(fp);
    }

    Nerd.prototype.update = function (fp) {
        var array = new Array ();
        var fs = new FileSystem();
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
        comment += '|+..\n';
        array.forEach((ele)=>{
            comment += ele[0] + ele[1] + "\n";
        });

        var doc = $.api.document.createDocument("nerdtree", NerdTreeCB);
        doc.readonly = false;
        doc.deleteChars (0, doc.length);
        doc.insertChars (comment);
        doc.readonly = true;
        this.handle.document = doc;
    }

    return Nerd;
})();
