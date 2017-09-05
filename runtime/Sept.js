(function (){
    function Sept (parent, interact) {
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
                    click (argument);
                    break;
                case "SYS:FOCUSIN":
                    this.sync(SCI_SETCURSOR, SC_CURSORARROW, 0x00);
                    break;
                case "SYS:KEY":
                    return OnKeyD.bind(this)(argument.key, argument.shift, argument.alt, argument.ctrl);
                case "SYS:KEYUP":
                    return OnKeyU.bind(this)(argument.key);
                default:
                    break;
            }
        }
        function OnDrw (canvas) {
            var p = new Paint ();
            p.style = 0x00;
            p.color = 0xFFC2BFA5;
            canvas.drawRect(0, 0, this.width, this.height, p);
        }
        return NewWidget(parent, OnEvt, OnDrw);
    };
    return Sept;
})();
