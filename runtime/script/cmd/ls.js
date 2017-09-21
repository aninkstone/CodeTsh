(function(){
    function OnStyleNeededHandle (doc, endPos) {
        for (var idx = 0; idx < endPos; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                default:
                    break;
            }
        }
    };

    var BrowserCB= {
        OnModifyAttempt: function(){ }, 
        OnLexerChanged:  function(){ }, 
        OnSavePoint:     function(){ }, 
        OnStyleNeeded:   function(doc, end) { OnStyleNeededHandle(doc, end); }, 
        OnErrorOccurred: function(){ },
        OnDeleted:       function(){ },
        OnModified:      function(){ },
    };

    function OnEnter () {
        console.log ("Enter");
        console.log ("Enter");
        console.log ("Enter");
    }

    function _OnKeyD (key, shift, alt, ctrl) {
        var ro = this.sync(SCI_GETREADONLY, 0x00, 0x00);
        switch (key) {
            case 27:  /* escape */
                this.ro(true);
                break;
            default:
                break;
        }

        if (ro == 1) {
            switch (key) {
                case 27:  /* esc */
                    ExecuteCommand(this, "Esc", shift, alt, ctrl);
                    break;
                case 61:  /* = */
                    ExecuteCommand(this, "ESign", shift, alt, ctrl);
                    break;
                case 9: /* tab */
                    ExecuteCommand(this, "Tab", shift, alt, ctrl);
                    break;
                case 13:  /* enter */
                    OnEnter.bind(this)();
                    break;
                case 56:  /* * */
                    ExecuteCommand(this, "Asterisk", shift, alt, ctrl);
                    break;
                case 44:  /* , */
                    break;
                case 46:  /* . */
                    break;
                case 48:  /* 0 */
                case 49:  /* 1 */
                case 50:  /* 2 */
                case 51:  /* 3 */
                case 52:  /* 4 */
                case 53:  /* 5 */
                case 54:  /* 6 */
                case 55:  /* 7 */
                case 56:  /* 8 */
                case 57:  /* 9 */
                    break;
                case 92:  /* \ */
                    break;
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
                    //case 111: /* o */
                    //this.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
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
            //return Complete(this, key);
        }
        return false;
    }

    function OnKeyU (key) {
        switch (key) {
            default:
                break;
        }
        return false;
    }

    return function(doc, editor, fpath){
        let fs = new FileSystem();
        if (typeof fpath !== 'string') {
            fpath = fs.getcwd();
        }
        let array = new Array ();
        let dir = $.api.document.createDocument("tmp/browser", BrowserCB);

        let nameMax = 0;
        let pathMax = 0;

        array.forEach (function (ele) {
            if (nameMax < ele[0].length) {
                nameMax = ele[0].length;
            }
            if (pathMax < ele[1].length) {
                pathMax = ele[1].length;
            }
        });

        let fp = new FilePath();
        set.documents.forEach((v,k)=>{
            array.push ([fp.fileName(k), fp.baseName(k)]);
        });

        let comment = '" Press <F1> for Help \n';
        comment +=    '" Sorted by js sort | Locate buffer | Absolute Split path\n';
        comment +=    '"=\n';

        formatter_beg = " 10 %a     "; 
        formatter_end = "          line 20"; 
        dir.deleteChars (0, dir.length);
        dir.insertChars (comment);

        array.forEach (function (ele){
            let name = ele[0];
            for (idx = name.length; idx < nameMax; ++idx) {
                name += " ";
            }
            let path = ele[1];
            for (idx = path.length; idx < pathMax; ++idx) {
                path += " ";
            }

            let insert = formatter_beg + name;
            for (var space = 24; space - name.length >= 0; --space) {
                insert += " ";
            }
            insert += path;
            for (var space = 24; space - path.length >= 0; --space) {
                insert += " ";
            }
            insert += formatter_end;
            insert += "\n";

            dir.insertChars (insert);
        });

        dir.direct = "ls.js";
        editor.doc(dir, lexer_browser);
        editor.ro (true);
    }
})();
