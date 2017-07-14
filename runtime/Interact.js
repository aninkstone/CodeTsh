(function(){
    function ExecuteScriptSlash (widget, editor) {
        copen = widget.document;
        try {
            var content = "";
            for (idx = 0; idx < copen.length; ++idx) {
                content += (String.fromCharCode(copen.charAt(idx))); 
            }
            if (content.length <= 0) {
                return;
            }

            caller = function (copen, editor, arg) {
                copen.deleteChars(0, copen.length);
                copen.insertChars("不是编辑器的命令: " + arg);
            };

            opeRunner = function (t, editor, content, cmd) {
                args = content.split(" ");
                args[0] = args[0].substr(1, args[0].length);
                fs = new FileSystem();

                args = args.filter(v=>v!='');
                script = fs.readFile(set.runtime.path + "/runtime/script/" + cmd+ ".js");
                script = eval(script);
                if (script) {
                    script(t, editor, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
                else {
                    caller(t, editor, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
            }
            firstChar = content.charAt(0);
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

    function ExecuteScriptEnter (widget, editor){
        copen = widget.document;
        try {
            var content = "";
            for (idx = 0; idx < copen.length; ++idx) {
                content += (String.fromCharCode(copen.charAt(idx))); 
            }
            if (content.length <= 0) {
                return;
            }

            caller = function (copen, editor, arg) {
                copen.deleteChars(0, copen.length);
                copen.insertChars("Not command: " + arg);
            };

            opeRunner = function (t, e, content) {
                args = content.split(" ");
                cmd = args[0].substr(1, args[0].length)
                fs = new FileSystem();

                args = args.filter(v=>v!='');
                script = fs.readFile(set.runtime.path + "/runtime/script/" + cmd + ".js");
                script = eval(script);
                if (script) {
                    script(t, e, args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
                else {
                    caller(t, e, args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
                }
            }

            firstChar = content.charAt(0);
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
    return function (parent, x, y, w, h) {
        var widget = {};
        widget = new Editor (parent, {"onDraw":function(canvas){
            //p = widget.paint;
            //p.style = 0x00;
            //p.color = config.background.color;
            //canvas.drawRect(0, 0, widget.width, widget.height, p);
        }, "onEvent":function(event, argument){
            switch (event) {
                case "SYS:INPUTTEXT":
                    ExecuteScriptSlash(widget, widget.focusView);
                    break;
                case "SYS:KEY":
                    Console.log (argument.key);
                    switch (argument.key) {
                        case 47:  /* / */
                            break;
                        case 9:   /* tab */
                            break;
                        case 13:  /* enter  */
                            ExecuteScriptEnter (widget, widget.focusView);
                            widget.focusView.setFocus();
                            return true;
                        case 27:  /* escape */
                            widget.focusView.setFocus();
                            widget.document.deleteChars(0, widget.document.length);
                            return true;
                        default:
                            break;
                    }
                    break;
                case "SYS:SIZECHANGE":
                    widget.onSizeChange();
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

        widget.locX = x;
        widget.locY = y;
        widget.width  = w;
        widget.height = h;

        widget.paint = new Paint();

        widget.onClick = function (state) {
        }

        widget.onSizeChange = function () {
            widget.width = parent.width;
            widget.locY  = parent.height - widget.height;
        }

        lexerSync(widget, lexer_commander);
        return widget;
    };
})();
