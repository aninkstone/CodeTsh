(function (){
    function findName (editor, chars) {
        col = chars.split(" ");
        col = col.filter(v => v != '');
        return col[3] + "\\" + col[2];
    }

    return function Enter (editor, ctrl, shift, k) {
        let chars = editor.line(".");
        let path = findName (editor, chars);
        let doc = set.documents.get(path);

        if (typeof doc == 'object') {
            editor.doc(doc);
            editor.ro (true);
        }
        return CTOR_VIMKEY_CONSUME;
    }
})();
