//FIXME: panic
(function(){ 
    fs = new FileSystem();
    fs.readFile ("./CodeTor.txt", function (err, ctx){
        consoleDoc.insertChars(ctx + "\n");
    });

    fs.stat ("./CodeTor.txt", function (err, stat) {
        consoleDoc.insertChars("st_dev = " + stat.st_dev + "\n");
        consoleDoc.insertChars("st_mode = " + stat.st_mode + "\n");
        consoleDoc.insertChars("st_size = " + stat.st_size + "\n");
        consoleDoc.insertChars("st_ino = " + stat.st_ino + "\n");
        consoleDoc.insertChars("st_nlink = " + stat.st_nlink + "\n");
        consoleDoc.insertChars("st_gid = " + stat.st_gid + "\n");
        consoleDoc.insertChars("st_uid = " + stat.st_uid + "\n");
        consoleDoc.insertChars("st_rdev = " + stat.st_rdev + "\n");
        consoleDoc.insertChars("st_ino = " + stat.st_ino + "\n");
        consoleDoc.insertChars("st_blksize = " + stat.st_blksize + "\n");
        consoleDoc.insertChars("st_blocks = " + stat.st_blocks + "\n");
        consoleDoc.insertChars("st_flags = " + stat.st_flags + "\n");
        consoleDoc.insertChars("st_gen = " + stat.st_gen + "\n");

        //consoleDoc.insertChars("st_atim = " + stat.st_atim.tv_sec + ":" + stat.st_atim.tv_nsec + "\n");
        //consoleDoc.insertChars("st_mtim = " + stat.st_mtim.tv_sec + ":" + stat.st_mtim.tv_nsec + "\n");
        //consoleDoc.insertChars("st_ctim = " + stat.st_ctim.tv_sec + ":" + stat.st_ctim.tv_nsec + "\n");
        //consoleDoc.insertChars("st_birthtim = " + stat.st_birthtim.tv_sec + ":" + stat.st_birthtim.tv_nsec + "\n");

        consoleDoc.insertChars("Access Time: ");
        var access = new Date(stat.st_atim.tv_sec * 1000);
        consoleDoc.insertChars(access.toDateString() + "\n");
        consoleDoc.insertChars(access.toTimeString() + "\n");
        consoleDoc.insertChars(access.toLocaleString() + "\n");

        consoleDoc.insertChars("Modified Time: ");
        var modify = new Date(stat.st_mtim.tv_sec * 1000);
        consoleDoc.insertChars(modify.toDateString() + "\n");
        consoleDoc.insertChars(modify.toTimeString() + "\n");
        consoleDoc.insertChars(modify.toLocaleString() + "\n");

        consoleDoc.insertChars("Changed Time: ");
        var change = new Date(stat.st_ctim.tv_sec * 1000);
        consoleDoc.insertChars(change.toDateString() + "\n");
        consoleDoc.insertChars(change.toTimeString() + "\n");
        consoleDoc.insertChars(change.toLocaleString() + "\n");

        consoleDoc.insertChars("Create Time: ");
        var create = new Date(stat.st_birthtim.tv_sec * 1000);
        consoleDoc.insertChars(create.toDateString() + "\n");
        consoleDoc.insertChars(create.toTimeString() + "\n");
        consoleDoc.insertChars(create.toLocaleString() + "\n");
    });
})();


//TODO: panic
//(function(){ //panic
//var t = new Thread ();
//t.run (function (){
//    for (i = 0;i < 1000; ++i) {
//        console.log ("hey " + i);
//    }
//});

//var pip = execute("grep.exe", "-in CTEditComplete ./*");
//console.log (pip);
