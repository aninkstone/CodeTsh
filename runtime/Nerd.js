(function (){
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
            comment += '|+.. (Up directory)\n';
            array.forEach((ele)=>{
                comment += ele[0] + ele[1] + "\n";
            });

            thiz.document.readonly = false;
            thiz.document.deleteChars (0, thiz.document.length);
            thiz.document.insertChars (comment);
            thiz.document.readonly = true;
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
            return HandlerDefault.OnKeyD.bind(thiz)(argument.key, argument.shift, argument.alt, argument.ctrl);
        }

        thiz.OnKeyUp = function (thiz, argument) {
            return HandlerDefault.OnKeyU.bind(thiz)(argument.key);
        }

        f = (e,lex) => { 
            l = lex(); v = l.next();
            while(v.done == false) {
                e.sync(v.value[0], v.value[1], v.value[2]);
                v = l.next();
            }
        };

        f(thiz, lexer_default); thiz.ro(true);
        return thiz;
    };
    return Nerd;
})();

