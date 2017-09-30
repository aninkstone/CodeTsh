(function(){
    return function(doc, editor, path){
        let cmd = "bin/grep.exe";
        let arg = "-irn Stack " + set.runtime.curr + "/*";
        console.log (cmd + " " + arg);
        asyncExecute(cmd, arg, function (l){
            console.log (l);
        });
        return true;
    }
})();

