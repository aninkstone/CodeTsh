(function (){
    function readCurrentLine (editor) {
        var curPos = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
        var linenu = editor.sync(SCI_LINEFROMPOSITION, curPos, 0x00); 
        return editor.sync(SCI_GETLINE, linenu, 0x00);
    }

    function filePath (editor, chars) {
        col = chars.split(" ");
        col = col.filter(v => v != '');
        return col[3] + FilePath.win32.sep + col[2];
    }

    return function Enter (editor, ctrl, shift, k) {
        //chars = readCurrentLine (editor);

        //var path = filePath (editor, chars);
        //var fs = new FileSystem();

        //if (fs.isRegularFile(path)) {
        //    b = editor.sync(SCI_GETREADONLY, 0x00, 0x00);
        //    editor.sync(SCI_SETREADONLY, 0x00, 0x00);
        //    editor.document.direct = path;
        //    editor.sync(SCI_SETREADONLY, b, 0x00);

        //    loadLexer(editor, path);
        //}

        //if (fs.isDirectory(path)) {
        //}
        return true;
    }
})();
