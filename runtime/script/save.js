(function(){
    function doSave (doc, fname) {
        var content = "";
        for (idx = 0; idx < doc.length; ++idx) {
            content += (String.fromCharCode(doc.charAt(idx))); 
        }
        fs = new FileSystem();
        var ok = fs.saveFile(fname, content);
        return ok;
    }

    return function(copen, editor, fname){
        if (typeof fname === 'undefined') {
            fname = editor.document.path;
        }

        if (typeof fname !== 'string') {
            copen.deleteChars(0, doc.length);
            copen.insertChars(fname + " 无效的文件名");
            return;
        }

        var doc = editor.document;

        if (fname != editor.document.path) {
            var ok = doSave(doc, fname);
            if (ok) {
                doc.setSavePoint();
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " 已写入");
            }
            else {
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " 写入失败");
            }
        }
        else {
            if (doc.savepoint == true) {
                copen.deleteChars(0, doc.length);
                copen.insertChars(fname + " 无变更");
            }
            else {
                var ok = doSave(doc, fname);
                if (ok) {
                    doc.setSavePoint();
                    copen.deleteChars(0, doc.length);
                    copen.insertChars(fname + " 已写入");
                }
                else {
                    copen.deleteChars(0, doc.length);
                    copen.insertChars(fname + " 写入失败");
                }
            }
        }
    }
})();

