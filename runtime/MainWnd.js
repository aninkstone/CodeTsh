(function namespace_none () {
    var widget = {};
    widget = new Window(null, {"OnDraw":function(thiz, canvas){
        p = new Paint();
        p.color = 0xFFE0E0E0;
        canvas.drawRect (0, 0, thiz.width, thiz.height, p);

        p.color = 0xFF00E000;
        path = new Path();
        path.moveTo(0.0,  0.0);
        path.lineTo(0.0,  80.0);
        path.lineTo(20.0, 100.0);
        path.lineTo(40.0, 80.0);
        path.lineTo(40.0, 0.0);
        path.close();
        canvas.drawPath(path, p);
    },"OnEvent":function(thiz, event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                thiz.OnSizeChange(thiz);
                break;
            default:
                break;
        }
        return false;
    }});

    windows = new Windows (widget);
    widget.OnSizeChange = function (thiz) {
        windows.resize (thiz);
    }

    widget.run(function(){});
})();

function ExecuteCommand (widget, cmd, shift, alt, ctrl){
    fs = new FileSystem();
    script = fs.readFile(set.runtime.path + "/runtime/script/keymap/" + cmd + ".js");
    script = eval(script);
    set.vim.cmd += cmd;
    if (script) {
        bConsume = script(widget, set.vim.cmd, shift, alt, ctrl);
        if (bConsume == true) {
            set.vim.cmd = "";
            clearTimeOut(set.vim.timerID);
        }
        else {
            set.vim.timerID = setTimeOut(function (){
                set.vim.cmd = "";
            }, 1000);
        }
    }
}
