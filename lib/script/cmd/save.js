(function(){
    function doSave (doc, fname) {
        var content = "";
        for (idx = 0; idx < doc.length; ++idx) {
            content += (String.fromCharCode(doc.charAt(idx))); 
        }
        fs = new FileSystem();
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
            }
            else {
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " Write file failed");
            }
        }
        else {
            if (doc.savepoint == true) {
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " No change");
            }
            else {
                var ok = doSave(doc, fname);
                if (ok) {
                    doc.setSavePoint();
                    copen.deleteChars(0, doc.length);
                    copen.insertChars(fname + " Written");
                }
                else {
                    copen.deleteChars(0, doc.length);
                    copen.insertChars(fname + " Write file failed");
                }
            }
        }
    }
})();

