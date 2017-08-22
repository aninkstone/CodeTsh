(function(){
    return function(doc, editor, fpath){
        fs = new FileSystem();
        if (typeof fpath !== 'string') {
            fpath = fs.getcwd();
        }
        array = new Array ();
        dir = new Document();

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
        comment +=    '" Sorted by mru | Locate buffer | One tab/buffer | Absolute Split path\n';
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
            dir.insertChars (formatter_beg + name + "             " + path + formatter_end + "\n");
        });

        editor.changeDocument(dir);
        editor.sync(SCI_SETREADONLY, 0x01, 0x00);
    }
})();
