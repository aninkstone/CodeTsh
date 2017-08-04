(function (){
    function CodeAnalyze (doc) {
        doc.indentmks = [];
        doc.indentSize = 0;

        function IndentMark (charc) {
            function arrayLastChar () {
                if (doc.indentmks.length == 0) {
                    return null;
                }
                return doc.indentmks[doc.indentmks.length - 1];
            }
            switch (charc) {
                case "{":
                case "[":
                case "(":
                    doc.indentmks.push (charc);
                    break;
                case ")":
                    if (arrayLastChar(doc.indentmks) == '(') {
                        doc.indentmks.pop();
                    }
                case "]":
                    if (arrayLastChar(doc.indentmks) == '[') {
                        doc.indentmks.pop();
                    }
                case "}":
                    if (arrayLastChar(doc.indentmks) == '{') {
                        doc.indentmks.pop();
                    }
                    break;
                default:
                    break;
            }
        }

        var word = "";
        var wbeg = 0;
        for (var idx = 0; idx < doc.length; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                case "{":
                case "}":
                    if (typeof doc.caretP != 'undefined') {
                        var ln = doc.lineFromPosition (doc.caretP);
                        var le = doc.lineEnd(ln);
                        if (le >= idx) {
                            IndentMark (c);
                        }
                    }
                default:
                    break;
            };
        }
        console.debug (doc.indentmks.toString()); 
    }
    function doIndent (editor, doc, ch) {
        if (ch == '\n') {
            console.debug ("bbbbbbbbbbbbbbbbbbbbbbbb");
            if (doc.indentmks != 'undefined') {
                var cp = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
                var ln = editor.sync(SCI_LINEFROMPOSITION, cp, 0x00); 
                var id = editor.sync(SCI_GETLINEINDENTATION, ln, 0x00);
                var sz = editor.sync(SCI_GETINDENT, 0x00, 0x00);
                var le = editor.sync(SCI_GETLINEENDPOSITION);

                var block = 0;
                var space = "";
                doc.indentmks.forEach((v)=>{
                    if (v == '{') {
                        block += 1;
                        for (var i = 0; i < sz; ++i) {
                            space += ' ';
                        }
                    }
                });
                console.debug ("SCI_SETLINEINDENTATION, " + ln + ", " + block * sz);
                editor.sync(SCI_INSERTTEXT, -1, space);
                editor.sync(SCI_GOTOPOS, cp + space.length);
            }
        }
        if (ch == '}') {
            if (doc.indentmks != 'undefined') {
                var cp = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
                var ln = editor.sync(SCI_LINEFROMPOSITION, cp, 0x00); 
                var id = editor.sync(SCI_GETLINEINDENTATION, ln, 0x00);
                var sz = editor.sync(SCI_GETINDENT, 0x00, 0x00);
                var le = editor.sync(SCI_GETLINEENDPOSITION);

                var block = 0;
                doc.indentmks.forEach((v)=>{
                    if (v == '{') {
                        block += 1;
                    }
                });
                var space = "";
                for (var i = 0; i < sz * block; ++i) {
                    space += ' ';
                }
                console.debug ("indent size = " + (sz * block) + " sz: " + sz + " block:" + block);
                editor.sync(SCI_SETLINEINDENTATION, ln, sz * block); 
            }
        }
    }
    return function indent (editor, ch) {
        console.debug (ch.charCodeAt(0));
        var doc = editor.document;
        CodeAnalyze(doc);
        switch (ch) {
            case '}':
            case '\n':
                doIndent(editor, doc, ch);
                break;
            default:
                return;
        }
    }
})();
