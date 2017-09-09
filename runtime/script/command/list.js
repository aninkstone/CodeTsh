(function(){
    function OnStyleNeededHandle (doc, endPos) {
        for (var idx = 0; idx < endPos; ++idx) {
            var c = String.fromCharCode(doc.charAt(idx));
            switch (c) {
                default:
                    break;
            }
        }
    };

    var BrowserCB= {
        OnModifyAttempt: function(){ }, 
        OnLexerChanged:  function(){ }, 
        OnSavePoint:     function(){ }, 
        OnStyleNeeded:   function(doc, end) { OnStyleNeededHandle(doc, end); }, 
        OnErrorOccurred: function(){ },
        OnDeleted:       function(){ },
        OnModified:      function(){ },
    };
    return function(doc, editor, fpath){
        fs = new FileSystem();
        if (typeof fpath !== 'string') {
            fpath = fs.getcwd();
        }
        array = new Array ();
        var dir = $.api.document.createDocument("browser", BrowserCB);

        nameMax = 0;
        pathMax = 0;

        array.forEach (function (ele) {
            if (nameMax < ele[0].length) {
                nameMax = ele[0].length;
            }
            if (pathMax < ele[1].length) {
                pathMax = ele[1].length;
            }
        });

        set.documents.forEach((v,k)=>{
            array.push ([FilePath.basename(k), k]);
        });

        var comment = '" Press <F1> for Help \n';
        comment +=    '" Sorted by js sort | Locate buffer | Absolute Split path\n';
        comment +=    '"=\n';

        formatter_beg = " 10 %a     "; 
        formatter_end = "          line 20"; 
        dir.deleteChars (0, dir.length);
        dir.insertChars (comment);

        array.forEach (function (ele){
            name = ele[0];
            for (idx = name.length; idx < nameMax; ++idx) {
                name += " ";
            }
            path = ele[1];
            for (idx = path.length; idx < pathMax; ++idx) {
                path += " ";
            }

            //var insert = formatter_beg + name + "             " + path + formatter_end + "\n"
            var insert = formatter_beg + name;
            for (var space = 24; space - name.length >= 0; --space) {
                insert += " ";
            }
            insert += path;
            for (var space = 24; space - path.length >= 0; --space) {
                insert += " ";
            }
            insert += formatter_end;
            insert += "\n";

            dir.insertChars (insert);
        });

        editor.parent.changeDocument(dir);
        editor.sync(SCI_SETREADONLY, 0x01, 0x00);

        lexerSync (editor, lexer_browser);
    }
})();
