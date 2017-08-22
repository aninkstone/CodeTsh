(function (){
    return function ac (editor, ch) {
        var active  = editor.sync(SCI_AUTOCACTIVE, 0, 0);
        switch (ch) {
            case 27:  /* escape */
                if (active) {
                    editor.sync(SCI_AUTOCCANCEL, 0x00, 0x00);
                    return true;
                }
                break;
            case 13:  /* enter */
                if (active) {
                    return true;
                }
                break;
            case 9:   /* tab */
                if (active) {
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

        if (chars.length < 1) {
            return false;
        }

        //var pip = execute ("global", "-clM", chars);
        //var pip = execute ("/usr/local/Cellar/global/6.5.6/bin/global", "-c", chars);
        //var array = pip.split("\n").filter(v => v != '').map(s => s.trim());

        var pip = editor.document.completes;

        if (pip == undefined || pip.length == 0) {
            console.log ("AC: Key words list is empty");
            return false;
        }

        var match = [];
        pip.forEach((v)=>{
            if (v.match (chars + ".*")) {
                match.push (v);
            }
        });

        if (match.length == 0) {
            return false;
        }

        editor.sync(SCI_AUTOCSETSEPARATOR, 0x2C/*,*/, 0);
        editor.sync(SCI_AUTOCSHOW, lenEntered, match.toString());
        return true;
    };
})();