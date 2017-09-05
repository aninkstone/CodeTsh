(function(){
    Widget.prototype.onDrw = function (canvas) {
        var p = new Paint();
        p.style = 0x00;
        p.color = 0xFF0352FF;
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
        var thiz = new Widget (parent, { OnDrw: function (context, canvas) {
                //context.binder.OnDrw.bind(context)(canvas);
                return context.handle.OnDrw.bind(context)(canvas);
            },
            OnEvt: function (context, evt, argument) {
                //context.binder.OnEvt.bind(context)(evt, argument);
                return context.handle.OnEvt.bind(context)(evt, argument);
            },
        });

        thiz.handle = {};
        thiz.handle.OnDrw = ((typeof drawH == 'undefined' || drawH == null) ? defaultCB.OnDrw : drawH);
        thiz.handle.OnEvt = ((typeof evntH == 'undefined' || evntH == null) ? defaultCB.OnEvt : evntH);
        thiz.binder = binder;

        thiz.parent = parent;
        return thiz;
    };
})();
