(function(){
    function ExpandFolds(line, expand, level) {
        // Expand or contract line and all subordinates
        // level is the fold level of line
        var lineMaxSubord = editor.sync(SCI_GETLASTCHILD, line, LevelNumber(level));
        line++;
        editor.sync(expand ? SCI_SHOWLINES : SCI_HIDELINES, line, lineMaxSubord);
        while (line <= lineMaxSubord) {
            var levelLine = editor.sync(SCI_GETFOLDLEVEL, line);
            if (levelLine & SC_FOLDLEVELHEADERFLAG) {
                editor.sync(SCI_SETFOLDEXPANDED, line, expand ? 1 : 0);
            }
            line++;
        }
    }

    return function (doc, editor, arg) {
        editor.sync(SCI_COLOURISE, 0, -1);
        var maxLine = editor.sync(SCI_GETLINECOUNT);
        var expanding = true;
        for (var lineSeek = 0; lineSeek < maxLine; lineSeek++) {
            if (editor.sync(SCI_GETFOLDLEVEL, lineSeek) & SC_FOLDLEVELHEADERFLAG) {
                expanding = !editor.sync(SCI_GETFOLDEXPANDED, lineSeek);
                break;
            }
        }
        for (var line = 0; line < maxLine; line++) {
            var level = editor.sync(SCI_GETFOLDLEVEL, line);
            if ((level & SC_FOLDLEVELHEADERFLAG) && (SC_FOLDLEVELBASE == (level & 0xFFF))) {
                var lineMaxSubord = editor.sync(SCI_GETLASTCHILD, line, -1);
                if (expanding) {
                    editor.sync(SCI_SETFOLDEXPANDED, line, 1);
                    ExpandFolds(line, true, level);
                    line = lineMaxSubord;
                }
                else {
                    editor.sync(SCI_SETFOLDEXPANDED, line, 0);
                    if (lineMaxSubord > line) {
                        editor.sync(SCI_HIDELINES, line + 1, lineMaxSubord);
                    }
                }
            }
        }
    }
})();
