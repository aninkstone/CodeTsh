(function (){
    function CodeAnalyze (editor, doc) {
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

        doc.indent = "";

        var beg = 0;
        var end = 0;

        if (typeof doc.caretP == 'undefined') {
            return;
        }

        var ln = doc.lineFromPosition (doc.caretP);
        console.log ("Indent Line Number = " + ln);
        for (var idx = ln; idx > 0; --idx) {
            var leng = editor.sync(SCI_LINELENGTH, ln, 0x00);
            if (leng == 0) {
                continue;
            }

            console.log ("Indent Check Line = " + idx);
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
            break;
        }

        console.log ("Indent Beg Pos = " + beg);
        console.log ("Indent End Pos = " + end);
        console.log ("Indent Length = " + doc.indent.length);

        for (var idx = beg; idx < end; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                case "{":
                case "}":
                    var ln = doc.lineFromPosition (doc.caretP);
                    var le = doc.lineEnd(ln);
                    if (le >= idx) {
                        console.log (1);
                        IndentMark (c);
                        console.log (2);
                    }
                default:
                    break;
            };
        }

        console.debug (doc.indentmks.toString()); 
    }

    function doIndentLine (editor, doc, beg, end) {
        console.log ("Warning: Not implement.");
    }

    function doIndent (editor, doc, ch) {
        if (ch == '\n') {
            if (doc.indentmks != undefined) {
                var cp = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
                var ln = editor.sync(SCI_LINEFROMPOSITION, cp, 0x00); 
                var id = editor.sync(SCI_GETLINEINDENTATION, ln, 0x00);
                var sz = editor.sync(SCI_GETINDENT, 0x00, 0x00);
                var le = editor.sync(SCI_GETLINEENDPOSITION);
                console.log ("SCI_GETLINEINDENTATION:" + id);
                console.log ("SCI_GETINDENT:" + sz);

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
                console.debug ("SCI_SETLINEINDENTATION, " + ln + ", " + block * sz);
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
                for (var i = 0; i < sz * block; ++i) {
                    space += ' ';
                }
                console.debug ("indent size = " + (sz * block) + " sz: " + sz + " block:" + block);
                editor.sync(SCI_SETLINEINDENTATION, ln, sz * block); 
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
