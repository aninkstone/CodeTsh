(function (){
    function Sept (parent, interact) {
        var thiz = {};
        thiz = $.api.widget.createWidget(parent);

        var CB = {
            OnDraw: function (thiz, canvas) {
                p = new Paint ();
                p.style = 0x00;
                p.color = 0xFFC2BFA5;
                canvas.drawRect(0, 0, thiz.width, thiz.height, p);
            },
        };
        thiz.setCB(CB);

        thiz.OnClick = function (widget, argument){
            switch (argument.state) {
                case 0: /* mouse down */
                    windows.septClick (parent, argument, 0);
                    break;
                case 1: /* mouse move */
                    windows.septClick (parent, argument, 1);
                    break;
                case 2: /* mouse up */
                    windows.septClick (parent, argument, 2);
                    break;
                default:
                    break;
            }
        }
        return thiz;
    };
    return Sept;
})();
