(function(){
    function doSave (doc, fname) {
        let content = "";
        for (idx = 0; idx < doc.length; ++idx) {
            content += (String.fromCharCode(doc.charAt(idx))); 
        }
        let fs = new FileSystem();
        var ok = fs.writeFileSync(fname, content);
        return ok;
    }

    return function(copen, editor, fname){
        if (typeof fname === 'undefined') {
            fname = editor.document.path;
        }

        if (typeof fname !== 'string') {
            copen.deleteChars(0, doc.length);
            copen.insertChars(fname + " Invalidate file name");
            return;
        }

        var doc = editor.document;

        if (fname != editor.document.path) {
            var ok = doSave(doc, fname);
            if (ok) {
                doc.setSavePoint();
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " Written");
                return;
            }
            copen.deleteChars(0, doc.length);
            copen.insertChars(fname + " Write file failed");
        }
        else {
            if (doc.savepoint == true) {
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " No change");
                return;
            }
            var ok = doSave(doc, fname);
            if (ok) {
                doc.setSavePoint();
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " Written");
                return;
            }
            copen.deleteChars(0, doc.length);
            copen.insertChars(fname + " Write file failed");
        }
    }
})();

