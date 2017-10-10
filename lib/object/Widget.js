(function(){
    Widget.prototype.onDrw = function (canvas) {
        var p = new Paint();
        p.style = 0x00;
        p.color = 0xFF035200;
        canvas.drawRect(0, 0, this.width, this.height, p);
    }

    Widget.prototype.onEvt = function (evt, argument) {
        switch (evt) {
            case "SYS:WHEEL":
                break;
            case "SYS:TIMER":
                break;
            case "SYS:KEY":
                break;
            case "SYS:KEYUP":
                break;
            case "SYS:SIZECHANGE":
                break;
            case "SYS:CLICK":
                this.click();
                break;
            case "SYS:FOCUSIN":
                SDL.setCursor(SDL_SYSTEM_CURSOR_HAND);
                this.focusIn();
                break;
            case "SYS:FOCUSOUT":
                this.focusOut();
                break;
            default:
                break;
        }
        return false;
    }

    Widget.prototype.focusIn = function () {
    }

    Widget.prototype.focusOut = function () {
    }

    Widget.prototype.sizeChange = function () {
    }

    Widget.prototype.click = function () {
    }

    var binder = {
        OnDrw: function (canvas) {
            this.onDrw (canvas);
        },
        OnEvt:function (evt, argument) {
            this.onEvt(evt, argument);
        },
    };

    var defaultCB = {
        OnDrw: function (canvas) {},
        OnEvt: function (evt, argument) { return true; },
    };

    return function (parent, evntH, drawH) {
        var widget = new Widget (parent, { OnDrw: function (context, canvas) {
                try {
                    context.binder.OnDrw.bind(context)(canvas);
                    return context.handle.OnDrw(canvas);
                }
                catch (e) {
                    console.log (e + " " + (new Error().stack));
                }
            },
            OnEvt: function (context, evt, argument) {
                try {
                    context.binder.OnEvt.bind(context)(evt, argument);
                    return context.handle.OnEvt(evt, argument);
                }
                catch (e) {
                    console.log (e + " " + (new Error().stack));
                }
                return false;
            },
        });

        widget.handle = {};
        widget.handle.OnDrw = ((typeof drawH == 'undefined' || drawH == null) ? defaultCB.OnDrw : drawH);
        widget.handle.OnEvt = ((typeof evntH == 'undefined' || evntH == null) ? defaultCB.OnEvt : evntH);
        widget.binder = binder;

        widget.parent = parent;
        return widget;
    };
})();
