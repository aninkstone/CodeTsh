(function(){
    function ExecuteScript (thiz, editor) {
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

    return function (parent, x, y, w, h) {
        var thiz = $.api.editor.createEditor(parent);
        var CB = {
            OnDraw: function (thiz, canvas) {
            },
            OnEvent: function (thiz, evt, argument) {
                switch (evt) {
                    case "SYS:INPUTTEXT":
                        Execute(evt, argument.key, thiz, thiz.focusView);
                        break;
                    case "SYS:KEY":
                        switch (argument.key) {
                            case 47:  /* / */
                                break;
                            case 9:   /* tab */
                                break;
                            case 13:  /* enter  */
                                Execute(evt, argument.key, thiz, thiz.focusView);
                                thiz.focusView.setFocus();
                                return true;
                            case 27:  /* escape */
                                thiz.focusView.setFocus();
                                thiz.document.deleteChars(0, thiz.document.length);
                                return true;
                            default:
                                break;
                        }
                        break;
                    case "SYS:SIZECHANGE":
                        thiz.OnSizeChange();
                        break;
                    case "SYS:CLICK":
                        thiz.OnClick (argument)
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
            },
        };
        thiz.setCB (CB);

        thiz.locX = x;
        thiz.locY = y;
        thiz.width  = w;
        thiz.height = h;

        thiz.OnSizeChange = function () {
            thiz.width = parent.width;
            thiz.locY  = parent.height - thiz.height;
        }

        lexerSync(thiz, lexer_commander);
        return thiz;
    };
})();
