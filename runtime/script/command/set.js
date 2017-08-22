(function(){
    function showLineNumber (editor) {
        editor.sync (SCI_SETMARGINS, 0x01, 0x00);
        editor.sync (SCI_SETMARGINTYPEN, 0x00, SC_MARGIN_NUMBER);
        var lineC = editor.sync(SCI_GETLINECOUNT);
        var width = editor.sync(SCI_TEXTWIDTH, STYLE_LINENUMBER, ("_" + lineC));
        editor.sync (SCI_SETMARGINWIDTHN, 0x00, width);
    }
    function hideLineNumber (editor) {
        editor.sync (SCI_SETMARGINWIDTHN, 0x00, 0x00);
    }
    return function(doc, editor, arg0, arg1, arg2, arg3){
        switch (arg0) {
            case "nu":
            case "number":
                showLineNumber(editor);
                break;
            case "nonu":
            case "nonumber":
                hideLineNumber(editor);
                break;
            case "test":
                editor.sync(SCI_ANNOTATIONSETTEXT, 5, "aheadfadfadf");
            default:
                break;
        }
    }
})();

