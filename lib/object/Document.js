(function(){
    function SampleCodeAnalyze (doc) {
        doc.completes = [];

        function unique(a) {
            return a.sort().filter(function(item, pos, ary) {
                return !pos || item != ary[pos - 1];
            })
        }

        function SetComplete (beg, end, word) {
            if (word.length <= 1 ) {
                return;
            }
            doc.completes.push (word);
            doc.completes = unique(doc.completes);
        }

        var word = "";
        var wbeg = 0;
        for (var idx = 0; idx < doc.length; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                case "{":
                case "}":
                case "[":
                case "]":
                case "(":
                case ")":
                case "\r":
                case "\n":
                case "\t":
                case " ":
                case ":":
                case "=":
                case "+":
                case "-":
                case "*":
                case "/":
                case "!":
                case ">":
                case "<":
                case "&":
                case "^":
                case "%":
                case "$":
                case "#":
                case "@":
                case "\\":
                case "/":
                case "~":
                case "`":
                //case "_":
                case ".":
                case ",":
                case ";":
                case '"':
                    SetComplete(wbeg, idx, word);
                    word = "";
                    break;
                default:
                    if (word.length == 0) {
                        wbeg = idx;
                    }
                    word = word + c;
                    break;
            };
        }
    }

    var OnModifiedHandle = function (doc) {
    }

    var OnSavePointHandle = function (doc){
        let fp = new FilePath ();
        let ext = fp.extName(doc.path);
        switch (ext) {
            case ".cpp":
            case ".c":
            case ".h":
            case ".js":
            case ".html":
            case ".htm":
            case ".txt":
                SampleCodeAnalyze (doc);
                break;
            default:
                break;
        };
    }

    var OnStyleNeededHandle = function (doc, endPos) {
        function SetStyle (beg, end, word) {
            if (word.lenth <= 1 ) {
                return;
            }
            switch (word) {
                case "CodeTor":
                    doc.startStyling(beg, 0xFF);
                    doc.setStyleFor(end - beg, 100);
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
                case "\r":
                case "\n":
                case "\t":
                case " ":
                case ":":
                case "=":
                case "+":
                case "-":
                case "*":
                case "/":
                case "!":
                case "(":
                case ")":
                case ">":
                case "<":
                case "[":
                case "]":
                case "{":
                case "}":
                case "&":
                case "^":
                case "%":
                case "$":
                case "#":
                case "@":
                case "\\":
                case "/":
                case "~":
                case "`":
                case "_":
                case ".":
                case ",":
                case ",":
                    SetStyle (wbeg, idx, word);
                    word = "";
                    break;
                default:
                    if (word.length == 0) {
                        wbeg = idx;
                    }
                    word = word + c;
                    break;
            };
        }
    };

    var defaultCB = {
        OnModifyAttempt: function(){ }, 
        OnLexerChanged:  function(){ }, 
        OnSavePoint:     function(doc) { OnSavePointHandle (doc); }, 
        OnStyleNeeded:   function(doc, end) { OnStyleNeededHandle(doc, end); }, 
        OnErrorOccurred: function(){ },
        OnDeleted:       function(){ },
        OnModified:      function(doc){ OnModifiedHandle(doc); },
    };

    Document.prototype.open = function (path) {
    }

    Document.prototype.save = function () {
        let content = "";
        for (idx = 0; idx < this.length; ++idx) {
            content += (String.fromCharCode(this.charAt(idx))); 
        }

        let fs = new FileSystem();
        return fs.writeFileSync(this.path, content);
    }

    Document.prototype.exit = function () {
        set.documents.delete(this);
    }

    return function (fpath, cb) {
        var doc = null;
        fpath = (new FilePath()).absPath(fpath);

        if (set.documents.has (fpath) == false) {
            if (typeof cb == 'undefined') {
                doc = new Document (fpath, defaultCB);
            }
            else {
                doc = new Document (fpath, cb);
            }

            doc.direct = fpath;
            doc.codepage = 65001; /* default code page */
            set.documents.set (fpath, doc);
        }
        else {
            doc = set.documents.get(fpath);
        }

        return doc;
    };
})();
