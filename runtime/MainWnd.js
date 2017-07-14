var window = {};

(function namespace_none () {
    window = new Window(null, {"onDraw":function(canvas){
        p = window.paint;
        p.color = 0xFFE0E0E0;
        canvas.drawRect (0, 0, window.width, window.height, p);

        p.color = 0xFF00E000;
        path = new Path();
        path.moveTo(0.0,  0.0);
        path.lineTo(0.0,  80.0);
        path.lineTo(20.0, 100.0);
        path.lineTo(40.0, 80.0);
        path.lineTo(40.0, 0.0);
        path.close();
        canvas.drawPath(path, window.paint);
    },"onEvent":function(event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                window.onResize();
                break;
            case "SYS:CLICK":
                window.onClick (argument)
                break;
            default:
                break;
        }
        return false;
    }});

    window.onClick = function (argument) {
    }

    window.paint = new Paint();

    window.onResize = function () {
        Windows.resize (window);
    }

    Windows.init(window);

    window.run(function(){
    });
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
