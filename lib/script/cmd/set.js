(function(){
    function showLineNumber (editor) {
        var marginWidth  = editor.sync(SCI_GETMARGINS);
        var marginTypen0 = editor.sync(SCI_GETMARGINTYPEN, 0x00);
        var marginTypen1 = editor.sync(SCI_GETMARGINTYPEN, 0x01);
        var marginTypen2 = editor.sync(SCI_GETMARGINTYPEN, 0x02);
        var marginTypen3 = editor.sync(SCI_GETMARGINTYPEN, 0x03);
        var marginTypen4 = editor.sync(SCI_GETMARGINTYPEN, 0x04);
        var margins = editor.sync(SCI_GETMARGINS);

        editor.sync (SCI_SETMARGINTYPEN, 0x01, SC_MARGIN_NUMBER);
        var lineC = editor.sync(SCI_GETLINECOUNT);
        var width = editor.sync(SCI_TEXTWIDTH, STYLE_LINENUMBER, lineC.toString());
        editor.sync (SCI_SETMARGINWIDTHN, 0x01, width);
    }
    function hideLineNumber (editor) {
        editor.sync (SCI_SETMARGINWIDTHN, 0x01, 0x00);
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

