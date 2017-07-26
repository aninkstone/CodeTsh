(function(){
    return function(copen, editor, fname){
        if (typeof fname === 'undefined') {
            fname = editor.document.path;
        }

        if (typeof fname === 'string') {
            var doc = editor.document;
            var content = "";
            for (idx = 0; idx < doc.length; ++idx) {
                content += (String.fromCharCode(doc.charAt(idx))); 
            }
            fs = new FileSystem();
            fs.saveFile(fname, content);
            doc.setSavePoint();
            copen.deleteChars(0, doc.length);
            copen.insertChars(fname + " 已写入");
        }
        else {
            copen.deleteChars(0, doc.length);
            copen.insertChars("Invalidate Document");
        }
    }
})();

