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

    $.api.document = {
        createDocument: function (fpath, cb) {
            return $.api.document.openDocument(fpath, cb);
        },

        deleteDocument: function (fpath) {
            set.documents.delete (fpath);
        },

        openDocument: function (fpath, cb) {
            let doc = null;
            let fs = new FileSystem ();
            let fp = new FilePath ();
            fpath = fp.absPath(fpath);

            if (set.documents.has (fpath) == false) {
                if (typeof cb == 'undefined') {
                    doc = new Document (fpath, defaultCB);
                }
                else {
                    doc = new Document (fpath, cb);
                }
                doc.codepage = 65001; /* default code page */

                set.documents.set (fpath, doc);
                doc.direct = fpath;
            }
            else {
                doc = set.documents.get(fpath);
            }

            return doc;
        },

        saveDocument: function (fpath) {
            if (typeof path == 'string') {
                var content = "";
                for (idx = 0; idx < this.length; ++idx) {
                    content += (String.fromCharCode(this.charAt(idx))); 
                }
                var fs = new FileSystem();
                fs.writeFileSync(path, content);
                return this;
            }
            if (typeof this.path !== 'undefined') {
                var content = "";
                for (idx = 0; idx < this.length; ++idx) {
                    content += (String.fromCharCode(this.charAt(idx))); 
                }
                var fs = new FileSystem();
                fs.writeFileSync(this.path, content);
                return this;
            }
            return this;
        },
    };
})();
