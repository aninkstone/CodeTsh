(function(){
    var defaultCB = {
        OnModifyAttempt: function(){ Console.log ("OnModifyAttempt"); }, 
        OnLexerChanged:  function(){ Console.log ("OnLexerChanged"); }, 
        OnSavePoint:     function(){ Console.log ("OnSavePoint"); }, 
        //OnStyleNeeded:   function(){ Console.log ("OnStyleNeeded");  }, 
        OnStyleNeeded:   function(thiz, endPos) { OnStyleNeeded(thiz, endPos); }, 
        OnErrorOccurred: function(){ Console.log ("OnErrorOccurred"); },
        OnDeleted:       function(){ Console.log ("OnDeleted"); },
        OnModified:      function(){ Console.log ("OnModified"); },
    };

    var OnStyleNeeded = function (thiz, endPos) {
        var startPos = thiz.endStyled ();
        var lineNumber = thiz.lineFromPosition(startPos);
        startPos = thiz.lineStart(lineNumber);
        Console.log (startPos);
        Console.log (endPos);
    };

    $.api.document = {
        createDocument: function (fpath) {
            return $.api.document.openDocument(fpath);
        },

        deleteDocument: function (fpath) {
            set.documents.delete (fpath);
        },

        openDocument: function (fpath) {
            var doc = null;
            if (set.documents.has (fpath) == false) {
                doc = new Document (fpath, defaultCB);
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
