(function(){
    function ExecuteScript (thiz, editor) {
        var copen = thiz.document;
        try {
            var content = "";
            for (idx = 0; idx < copen.length; ++idx) {
                content += (String.fromCharCode(copen.charAt(idx))); 
            }

            if (content.length <= 0) {
                return;
            }

            var caller = function (copen, editor, arg) {
                copen.deleteChars(0, copen.length);
                copen.insertChars(LANGUAGE.interact.Error01 + ": " + arg);
            };

            var opeRunner = function (t, editor, content) {
                eval(content);
            }

            content = content.substr(1, content.length)
            opeRunner (copen, editor, content);
        }
        catch (e) {
            copen.deleteChars(0, copen.length);
            copen.insertChars(e.toString());
        }
    }

    function ExecuteSlash (thiz, editor) {
        var copen = thiz.document;
        try {
            var content = "";
            for (idx = 0; idx < copen.length; ++idx) {
                content += (String.fromCharCode(copen.charAt(idx))); 
            }

            if (content.length <= 0) {
                return;
            }

            var caller = function (copen, editor, arg) {
                copen.deleteChars(0, copen.length);
                copen.insertChars(LANGUAGE.interact.Error01 + ": " + arg);
            };

            var opeRunner = function (t, editor, content, cmd) {
                var args = content.split(" ");
                args[0] = args[0].substr(1, args[0].length);
                fs = new FileSystem();

                args = args.filter(v=>v!='');
                script = fs.readFile(set.runtime.path + "/runtime/script/command/" + cmd+ ".js");
                script = eval(script);
                if (script) {
                    script(t, editor, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
                else {
                    caller(t, editor, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
            }
            var firstChar = content.charAt(0);
            switch (firstChar) {
                case "/":
                    opeRunner (copen, editor, content, "slash");
                    break;
                default:
                    break;
            }

        }
        catch (e) {
            copen.deleteChars(0, copen.length);
            copen.insertChars(e.toString());
        }
    }

    function ExecuteCommand (thiz, editor){
        copen = thiz.document;
        try {
            var content = "";
            for (idx = 0; idx < copen.length; ++idx) {
                content += (String.fromCharCode(copen.charAt(idx))); 
            }
            if (content.length <= 0) {
                return;
            }

            var caller = function (copen, editor, arg) {
                copen.deleteChars(0, copen.length);
                copen.insertChars("Not command: " + arg);
            };

            var opeRunner = function (t, e, content) {
                args = content.split(" ");
                cmd = args[0].substr(1, args[0].length)
                fs = new FileSystem();

                args = args.filter(v => v != '');
                script = fs.readFile(set.runtime.path + "/runtime/script/command/" + cmd + ".js");
                script = eval(script);
                if (script) {
                    script(t, e, args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
                else {
                    caller(t, e, args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
            }

            var firstChar = content.charAt(0);
            switch (firstChar) {
                case ":":
                    opeRunner (copen, editor, content);
                    break;
                default:
                    break;
            }

        }
        catch (e) {
            copen.deleteChars(0, copen.length);
            copen.insertChars(e.toString());
        }
    };

    function Execute (evt, key, thiz, editor) {
        var copen = thiz.document;

        var content = "";
        for (idx = 0; idx < copen.length && idx < 5; ++idx) {
            content += (String.fromCharCode(copen.charAt(idx))); 
        }
        if (content.length <= 0) {
            return;
        }

        var firstChar = content.charAt(0);
        switch (firstChar) {
            case ":":
                if (evt == "SYS:KEY" && key == 13) {
                    ExecuteCommand(thiz, thiz.focusView);
                }
                break;
            case ">":
                if (evt == "SYS:KEY" && key == 13) {
                    ExecuteScript(thiz, thiz.focusView);
                }
                break;
            case "/":
                ExecuteSlash(thiz, thiz.focusView);
                break;
            default:
                break;
        }
    };

    function Interact (parent) {
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:INPUTTEXT":
                    Execute(evt, argument.key, this.handle, this.handle.focusView);
                    break;
                case "SYS:KEY":
                    switch (argument.key) {
                        case 13:  /* enter  */
                            Execute(evt, argument.key, this.handle, this.handle.focusView);
                            var edit = windows.focusMgr.focusEdit();
                            edit.setFocus();
                            return true;
                        case 27:  /* escape */
                            var edit = windows.focusMgr.focusEdit();
                            edit.setFocus();
                            this.handle.document.deleteChars(0, this.handle.document.length);
                            return true;
                        default:
                            break;
                    }
                    break;
                case "SYS:SIZECHANGE":
                    this.handle.width = this.handle.parent.width;
                    this.handle.locY  = this.handle.parent.height - this.handle.height;
                    break;
                case "SYS:FOCUSIN":
                    //SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                    break;
                default:
                    break;
            }
            return false;
        };

        this.handle = NewEditor (parent, OnEvt.bind(this));
        this.parent = parent;

        this.x = 0;
        this.y = parent.height - 24;
        this.h = 24;
        this.w = parent.width;

        this.handle.locX = this.x;
        this.handle.locY = this.y;
        this.handle.width  = this.w;
        this.handle.height = this.h;

        this.type = "Inet";

        this.handle.lexerSync(lexer_commander);
    };

    return Inherite(Interact, BaseObj);
})();
