(function(){
    function showLineNumber (editor) {
        var marginWidth = editor.sync(SCI_GETMARGINS);
        var marginTypen0 = editor.sync(SCI_GETMARGINTYPEN, 0x00);
        var marginTypen1 = editor.sync(SCI_GETMARGINTYPEN, 0x01);
        var marginTypen2 = editor.sync(SCI_GETMARGINTYPEN, 0x02);
        var marginTypen3 = editor.sync(SCI_GETMARGINTYPEN, 0x03);
        var marginTypen4 = editor.sync(SCI_GETMARGINTYPEN, 0x04);
        var margins = editor.sync(SCI_GETMARGINS);

        function printMarginTypen (id, typen) {
            switch (typen) {
                case SC_MARGIN_SYMBOL:
                    console.log (id + ":" + "SC_MARGIN_SYMBOL");
                    break;
                case SC_MARGIN_NUMBER:
                    console.log (id + ":" + "SC_MARGIN_NUMBER");
                    break;
                case SC_MARGIN_BACK:
                    console.log (id + ":" + "SC_MARGIN_BACK");
                    break;
                case SC_MARGIN_FORE:
                    console.log (id + ":" + "SC_MARGIN_FORE");
                    break;
                case SC_MARGIN_TEXT:
                    console.log (id + ":" + "SC_MARGIN_TEXT");
                    break;
                case SC_MARGIN_RTEXT:
                    console.log (id + ":" + "SC_MARGIN_RTEXT");
                    break;
                case SC_MARGIN_COLOUR:
                    console.log (id + ":" + "SC_MARGIN_COLOUR");
                    break;
                default:
                    break;
            }
        }
        printMarginTypen("Typen0", marginTypen0);
        printMarginTypen("Typen1", marginTypen1);
        printMarginTypen("Typen2", marginTypen2);
        printMarginTypen("Typen3", marginTypen3);
        printMarginTypen("Typen4", marginTypen4);

        console.log ("Width:" + marginWidth);
        console.log ("Margins:" + margins);

        editor.sync (SCI_SETMARGINTYPEN, 0x00, SC_MARGIN_NUMBER);
        var lineC = editor.sync(SCI_GETLINECOUNT);
        var width = editor.sync(SCI_TEXTWIDTH, STYLE_LINENUMBER, lineC.toString());
        console.log ("lineC = " + lineC + "->" + width.toString());
        editor.sync (SCI_SETMARGINWIDTHN, 0x00, width + 5);
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

