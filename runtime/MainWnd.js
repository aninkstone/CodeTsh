(function namespace_none () {
    var widget = {};
    widget = new Window(null, { OnDrw:function(context, canvas){
        var p = new Paint();
        p.color = 0xFFE0E0E0;
        canvas.drawRect (0, 0, context.width, context.height, p);

        p.color = 0xFF00E000;
        var path = new Path();
        path.moveTo(0.0,  0.0);
        path.lineTo(0.0,  80.0);
        path.lineTo(20.0, 100.0);
        path.lineTo(40.0, 80.0);
        path.lineTo(40.0, 0.0);
        path.close();
        canvas.drawPath(path, p);
    }, OnEvt:function(context, event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                windows.onSizeChange(context);
                break;
            default:
                break;
        }
        return false;
    }});

    set.window = widget;
    try {
        windows = new Windows (widget);
    }
    catch (e) {
        console.log (e + " " + (new Error().stack));
    }
    widget.run(function(){});
})();
