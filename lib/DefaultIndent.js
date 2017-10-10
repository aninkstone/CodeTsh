(function (){
    function CodeAnalyze (editor, doc) {
        doc.indentmks = [];
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

        doc.indent = "";

        var beg = 0;
        var end = 0;

        var ln = doc.lineFromPosition (editor.cursor());
        for (var idx = ln; idx >= 0; --idx) {
            var leng = editor.sync(SCI_LINELENGTH, ln, 0x00);
            if (leng == 0) {
                continue;
            }

            var lnbeg = doc.lineStart(idx);
            var lnend = doc.lineEnd(idx);

            for (var i = lnbeg; i < lnend; ++i) {
                var c = String.fromCharCode(doc.charAt(i));
                if (c == " " || c == "\t") {
                    doc.indent += c;
                } 
                else {
                    break;
                }
            }

            beg = lnbeg;
            end = doc.lineEnd(ln);
            if (doc.indent.length > 0) {
                break;
            }
        }

        for (var idx = beg; idx < end; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                case "{":
                case "}":
                    var ln = doc.lineFromPosition (editor.cursor());
                    var le = doc.lineEnd(ln);
                    if (le >= idx) {
                        IndentMark (c);
                    }
                default:
                    break;
            };
        }
    }

    function doIndentLine (editor, doc, beg, end) {
    }

    function doIndent (editor, doc, ch) {
        if (ch == '\n') {
            if (doc.indentmks != undefined) {
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
                if (doc.indent != undefined) {
                    space += doc.indent;
                }
                editor.sync(SCI_INSERTTEXT, -1, space);
                editor.sync(SCI_GOTOPOS, cp + space.length);
            }
        }
        if (ch == '}') {
            if (doc.indentmks != undefined) {
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
                if (doc.indent != undefined) {
                    space += doc.indent;
                }
                for (var i = 0; i < sz * block; ++i) {
                    space += ' ';
                }
                if (space.length > sz) {
                    space = space.substring(0, space.length - sz);
                }
                else {
                    space = "";
                }
                editor.sync(SCI_SETLINEINDENTATION, ln, id - sz); 
            }
        }
    }
    return function (editor, ch, beg, end) {
        try {
            var doc = editor.document;
            if (ch.length >= 1) {
                switch (ch) {
                case '}':
                case '\n':
                case 'a':
                    CodeAnalyze(editor, doc);
                    doIndent(editor, doc, ch);
                    break;
                default:
                    return;
                }
            }
            if (ch.length == 0) {
                CodeAnalyze(doc);
                doIndentLine(editor, doc, beg, end);
            }
        }
        catch (e) {
            console.log (e.toString());
        }
    }
})();
