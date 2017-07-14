(function(){
    return function(doc, editor, text){
        fs = new FileSystem();
        cwd = fs.getcwd();
        doc.deleteChars(0, doc.length);
        doc.insertChars(cwd);
        return true;
    }
})();
