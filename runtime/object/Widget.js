(function(){
    var defaultCB = {
        OnDraw: function (thiz, canvas) {
            var p = thiz.paint;
            p.style = 0x00;
            p.color = 0xFF0352FF;
            canvas.drawRect(0, 0, thiz.width, thiz.height, p);
        },
        OnEvent:function (thiz, evt, argument) {
            console.log (evt);
            try {
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
                        if (typeof thiz.OnSizeChange === 'function') {
                            thiz.OnSizeChange(thiz);
                        }
                        break;
                    case "SYS:CLICK":
                        if (typeof thiz.OnClick === 'function') {
                            thiz.OnClick(thiz, argument);
                        }
                        break;
                    case "SYS:FOCUSIN":
                        SDL.setCursor(SDL_SYSTEM_CURSOR_HAND);
                        if (typeof thiz.OnFocusIn === 'function') {
                            thiz.OnFocusIn (thiz);
                        }
                        break;
                    case "SYS:FOCUSOUT":
                        if (typeof thiz.OnFocusOut === 'function') {
                            thiz.OnFocusOut (thiz);
                        }
                        break;
                    default:
                        break;
                }
            }
            catch (e) {
            }
        },
    };

    $.api.widget = {
        createWidget: function (parent) {
            var CB = {
                OnDraw: function (thiz, canvas) {
                    return defaultCB.OnDraw (thiz, canvas);
                },
                OnEvent: function (thiz, evt, argument) {
                    console.log (evt);
                    return defaultCB.OnEvent (thiz, evt, argument);
                },
            };

            var thiz = new Widget (parent, CB);
            thiz.paint = new Paint ();
            thiz.setCB = function (cb) {
                if (typeof cb !== 'object') {
                    return;
                }
                CB.OnDraw  = (typeof cb.OnDraw  === 'function') ? cb.OnDraw  : defaultCB.OnDraw; 
                CB.OnEvent = (typeof cb.OnEvent === 'function') ? cb.OnEvent : defaultCB.OnEvent; 
            }

            return thiz;
        },
        deleteWidget: function (object) {
        },
    };
})();

