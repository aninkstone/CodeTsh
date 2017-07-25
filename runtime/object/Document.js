(function(){
    var OnStyleNeededHandle = function (doc, endPos) {

        function WordMatch (beg, end, words) {
            switch (words) {
                case "CodeTor":
                case ":h":
                case ":q":
                case "thatways.c@aliyun.com":
                    doc.startStyling(beg, 0xFF);
                    doc.setStyleFor(end - beg, 100);
                    break;
                default:
                    break;
            }
        }

        var word = "";
        var wbeg = 0;
        for (var idx = 0; idx < endPos; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                case " ":
                    WordMatch (wbeg, idx, word);
                    word = "";
                    break;
                case "\t":
                    WordMatch (wbeg, idx, word);
                    word = "";
                    break;
                case "\n":
                    WordMatch (wbeg, idx, word);
                    word = "";
                    break;
                case "\r":
                    WordMatch (wbeg, idx, word);
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
        OnModifyAttempt: function(){ Console.log ("OnModifyAttempt"); }, 
        OnLexerChanged:  function(){ Console.log ("OnLexerChanged"); }, 
        OnSavePoint:     function(){ Console.log ("OnSavePoint"); }, 
        OnStyleNeeded:   function(doc, end) { OnStyleNeededHandle(doc, end); }, 
        OnErrorOccurred: function(){ Console.log ("OnErrorOccurred"); },
        OnDeleted:       function(){ Console.log ("OnDeleted"); },
        OnModified:      function(){ Console.log ("OnModified"); },
    };

    $.api.document = {
        createDocument: function (fpath, cb) {
            return $.api.document.openDocument(fpath, cb);
        },

        deleteDocument: function (fpath) {
            set.documents.delete (fpath);
        },

        openDocument: function (fpath, cb) {
            var doc = null;
            if (set.documents.has (fpath) == false) {
                if (typeof cb == 'undefined') {
                    doc = new Document (fpath, defaultCB);
                }
                else {
                    doc = new Document (fpath, cb);
                }
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
                fs.saveFile(path, content);
                return this;
            }
            if (typeof this.path !== 'undefined') {
                var content = "";
                for (idx = 0; idx < this.length; ++idx) {
                    content += (String.fromCharCode(this.charAt(idx))); 
                }
                var fs = new FileSystem();
                fs.saveFile(this.path, content);
                return this;
            }
            return this;
        },
    };
})();
