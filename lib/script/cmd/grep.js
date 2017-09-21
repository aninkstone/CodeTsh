(function(){
    return function(doc, editor, path){
        asyncExecute("grep.exe", "-in CTEditComplete ./*", function (l){
            console.log (l);
        });
        return true;
    }
})();

