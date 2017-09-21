(function (){
    function Sept (p) {
        function OnEvt (evt, argument) {
            function click (argument){
                switch (argument.state) {
                    case 0: /* mouse down */
                        windows.septClick (this.parent, argument, 0);
                        break;
                    case 1: /* mouse move */
                        windows.septClick (this.parent, argument, 1);
                        break;
                    case 2: /* mouse up */
                        windows.septClick (this.parent, argument, 2);
                        break;
                    default:
                        break;
                }
            }

            switch (evt) {
                case "SYS:CLICK":
                    click.bind(this)(argument);
                    break;
                case "SYS:FOCUSIN":
                    SDL.setCursor(SDL_SYSTEM_CURSOR_ARROW);
                    break;
                case "SYS:KEY":
                    return OnKeyD.bind(this.handle)(argument.key, argument.shift, argument.alt, argument.ctrl);
                case "SYS:KEYUP":
                    return OnKeyU.bind(this.handle)(argument.key);
                default:
                    break;
            }
        }
        function OnDrw (canvas) {
            var p = new Paint ();
            p.style = 0x00;
            p.color = 0xFFC2BFA5;
            canvas.drawRect(0, 0, this.handle.width, this.handle.height, p);
        }
        this.handle = NewWidget(p.handle, OnEvt.bind(this), OnDrw.bind(this));
        this.parent = p;
    };
    return Inherite(Sept, BaseObj);
})();
