(function(){
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

    return Editor;
})();
