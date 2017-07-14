(function (){
    function handleBasicAC (editor, ch) {
        act = editor.sync(SCI_AUTOCACTIVE, 0, 0);
        switch (ch) {
            case 13:  /* enter */
                return false;
            case 9:   /* tab */
                if (act) {
                    editor.sync(SCI_AUTOCCOMPLETE, 0x00, 0x00);
                    return true;
                }
                break;
            default:
                break;
        }
        var currPos = editor.sync (SCI_GETCURRENTPOS, 0x00, 0x00);
        var wordBeg = editor.sync (SCI_WORDSTARTPOSITION, currPos, 1);

        var lenEntered = currPos - wordBeg;
        if (lenEntered <= 0) {
            return false;
        }

        var chars = "";
        for (var idx = 0; idx < lenEntered; ++idx) {
            var c = editor.sync (SCI_GETCHARAT, currPos - lenEntered + idx, 0x00);
            chars += String.fromCharCode(c);
        }

        var pip = execute ("global", "-c", chars);
        //var pip = execute ("/usr/local/Cellar/global/6.5.6/bin/global", "-c", chars);

        if (pip == undefined || pip.length == 0) {
            return false;
        }

        var array = pip.split("\n").filter(v=>v!='');
        if (array.length == 1) {
            substr = array[0].substring(lenEntered);
            editor.sync(SCI_ADDTEXT, substr.length, substr);
        }
        if (array.length > 1) {
            editor.sync(SCI_AUTOCSETSEPARATOR, 0x2C/*,*/, 0);
            editor.sync(SCI_AUTOCSHOW, lenEntered, array.toString());
        }
        return true;
    };

    return function (editor, ch) {
        switch (ch) {
            case 9: /* tab */
                return handleBasicAC(editor, ch);
            default:
                break;
        }
        return false;
    }
})();
