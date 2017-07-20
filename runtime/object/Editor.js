(function(){
    var defaultCB = {
        OnDraw: function (thiz, canvas) {
            p = new Paint ();
            p.style = 0x00;
            p.color = 0x11F300FF;
            canvas.drawRect(0, 0, thiz.width, thiz.height, p);

            p.color = 0xFFEEEEEE;
            p.fontSize = 48;
            p.fontFamily = set.font.family;

            canvas.drawText("1", 5, 48, p);
        },
        OnEvent:function (thiz, evt, argument) {
            try {
                switch (evt) {
                    case "SYS:SIZECHANGE":
                        if (typeof thiz.OnSizeChange === 'function') {
                            thiz.OnSizeChange(thiz);
                        }
                        break;
                    case "SYS:CLICK":
                        if (typeof thiz.OnClick === 'function') {
                            thiz.OnClick (thiz, argument);
                        }
                        break;
                    case "SYS:FOCUSIN":
                        SDL.setCursor(SDL_SYSTEM_CURSOR_IBEAM);
                        windows.focusChange (thiz);
                        if (typeof thiz.OnFocusIn === 'function') {
                            thiz.OnFocusIn (thiz);
                        }
                        break;
                    case "SYS:FOCUSOUT":
                        if (typeof thiz.OnFocusOut === 'function') {
                            thiz.OnFocusOut (thiz);
                        }
                        break;
                    case "SYS:KEY":
                        if (typeof thiz.OnKeyDown === 'function') {
                            return thiz.OnKeyDown (thiz, argument);
                        }
                        break;
                    case "SYS:KEYUP":
                        if (typeof thiz.OnKeyUp === 'function') {
                            return thiz.OnKeyUp (thiz, argument);
                        }
                        break;
                    case "SYS:DROPFILE":
                        if (typeof thiz.OnDropFile === 'function') {
                            thiz.OnDropFile (thiz, argument);
                        }
                        //var path = argument.replace(/\\/g,"/");
                        //b = thiz.sync(SCI_GETREADONLY, 0x00, 0x00);
                        //thiz.sync(SCI_SETREADONLY, 0x00, 0x00);
                        //thiz.document.direct = path;
                        //thiz.sync(SCI_SETREADONLY, b, 0x00);
                        break;
                    default:
                        break;
                }
            }
            catch (e) {
            }
        },
    };

    $.api.editor = {
        createEditor: function (parent) {
            var CB = {
                OnDraw: function (thiz, canvas) {
                    return defaultCB.OnDraw (thiz, canvas);
                },
                OnEvent: function (thiz, evt, argument) {
                    return defaultCB.OnEvent (thiz, evt, argument);
                },
            };

            var thiz = new Editor (parent, CB);
            thiz.parent = parent;

            thiz.setCB = function (cb) {
                if (typeof cb !== 'object') {
                    return;
                }
                CB.OnDraw  = (typeof cb.OnDraw  === 'function') ? cb.OnDraw  : defaultCB.OnDraw; 
                CB.OnEvent = (typeof cb.OnEvent === 'function') ? cb.OnEvent : defaultCB.OnEvent; 
            }

            return thiz;
        },

        deleteEditor: function (object) {
        },
    };

    Editor.prototype.searchForward = function (target) {
        if (typeof (target) === 'string'){
            set.vim.search.target = target;
            set.vim.search.beg = 0;
            set.vim.search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.pos = 0;
        }
        else {
            this.sync(SCI_CLEARSELECTIONS, 0x00, 0x00);
            set.vim.search.beg = set.vim.search.pos + set.vim.search.target.length;
            set.vim.search.end = this.sync(SCI_GETLENGTH, 0x00, 0x00);
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
            this.sync(SCI_VERTICALCENTRECARET, 0x00, 0x00);
            this.sync(SCI_SETSELECTION, set.vim.search.pos, set.vim.search.pos + set.vim.search.target.length);
        } 
    };

    Editor.prototype.searchBackward = function (target) {
        if (typeof (target) === 'string'){
            set.vim.search.target = target;
            set.vim.search.beg = this.sync(SCI_GETLENGTH, 0x00, 0x00);
            set.vim.search.end = 0;
            set.vim.search.pos = 0;
        }
        else {
            this.sync(SCI_CLEARSELECTIONS, 0x00, 0x00);
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
            this.sync(SCI_VERTICALCENTRECARET, 0x00, 0x00);
            this.sync(SCI_SETSELECTION, set.vim.search.pos, set.vim.search.pos + set.vim.search.target.length);
        } 
    };
})();
