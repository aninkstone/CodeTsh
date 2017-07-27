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
                    var nu = doc.lineFromPosition(idx);
                    var s = doc.lineStart(nu);
                    var e = doc.lineStart(nu + 1);
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

    var nerdTreeCB= {
        OnModifyAttempt: function(){ }, 
        OnLexerChanged:  function(){ }, 
        OnSavePoint:     function(){ }, 
        OnStyleNeeded:   function(doc, end) { OnStyleNeededHandle(doc, end); }, 
        OnErrorOccurred: function(){ },
        OnDeleted:       function(){ },
        OnModified:      function(){ },
    };

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
        Console.log ("Create document");
        var doc = $.api.document.createDocument(set.runtime.curr + "/" + name);
        windows.prevFocus.setDocument(doc);
    }

    var openNode = function (name) {
        fs = new FileSystem();
        name = name.trim('\n').trim(' ').trim('\r');
        name = set.runtime.curr + "/" + name;
        l = fs.chdir (name);
        set.runtime.curr = l;
        Console.log (l);
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
            //return Complete(this, key);
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

    function Nerd (parent, interact) {
        var thiz = $.api.editor.createEditor (parent);
        thiz.interact = interact;

        thiz.OnClick = function (arg) {
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

        thiz.OnSizeChange = function (thiz) {
        }

        thiz.ro = function(b) {
            if (b) {
                thiz.sync(SCI_SETREADONLY,   0x01, 0x00);
                thiz.sync(SCI_SETCARETSTYLE, 0x02, 0x00);
            }
            else {
                thiz.sync(SCI_SETREADONLY,   0x00, 0x00);
                thiz.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
            }
        }

        thiz.update = function (fp) {
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
            comment += '|+..\n';
            array.forEach((ele)=>{
                comment += ele[0] + ele[1] + "\n";
            });

            var doc = $.api.document.createDocument("nerdtree", nerdTreeCB);
            doc.readonly = false;
            doc.deleteChars (0, doc.length);
            doc.insertChars (comment);
            doc.readonly = true;

            thiz.document = doc;
        }

        thiz.chdir = function (p) {
            thiz.update (p);
        }
        thiz.update (set.runtime.curr);

        thiz.ro = function(b) {
            if (b) {
                thiz.sync(SCI_SETREADONLY,   0x01, 0x00);
                thiz.sync(SCI_SETCARETSTYLE, 0x02, 0x00);
            }
            else {
                thiz.sync(SCI_SETREADONLY,   0x00, 0x00);
                thiz.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
            }
        }

        thiz.OnSizeChange = function(thiz) {
        }

        thiz.OnKeyDown = function (thiz, argument) {
            return OnKeyD.bind(thiz)(argument.key, argument.shift, argument.alt, argument.ctrl);
        }

        thiz.OnKeyUp = function (thiz, argument) {
            return OnKeyU.bind(thiz)(argument.key);
        }

        f = (e,lex) => { 
            l = lex(); v = l.next();
            while(v.done == false) {
                e.sync(v.value[0], v.value[1], v.value[2]);
                v = l.next();
            }
        };

        f(thiz, lexer_nerdtree); 
        thiz.ro(true);
        return thiz;
    };
    return Nerd;
})();

