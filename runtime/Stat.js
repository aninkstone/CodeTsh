(function (){
    function Stat (parent, interact) {
        var thiz = $.api.widget.createWidget (parent);
        var MARGIN = 10;

        var CB = {
            OnDraw: function (thiz, canvas) {
                try {
                    p = new Paint();
                    p.style = 0x00;
                    p.color = 0xFF005252;
                    canvas.drawRect(0, 0, thiz.width, thiz.height, p);

                    l = 0;
                    l = thiz.draw_00 (canvas, p, l);
                    l = thiz.draw_01 (canvas, p, l);
                    l = thiz.draw_02 (canvas, p, l);
                    l = thiz.draw_03 (canvas, p, l);

                    r = 0;
                    r = thiz.draw_99 (canvas, p, r);
                    r = thiz.draw_98 (canvas, p, r);
                    r = thiz.draw_97 (canvas, p, r);
                    r = thiz.draw_96 (canvas, p, r);
                }
                catch (e) {
                }
            },
        };

        thiz.setCB (CB);

        thiz.OnClick = function (thiz, argument){
            switch (argument.state) {
                case 0: /* mouse down */
                    windows.statClick (parent, argument, 0);
                    break;
                case 1: /* mouse move */
                    windows.statClick (parent, argument, 1);
                    break;
                case 2: /* mouse up */
                    windows.statClick (parent, argument, 2);
                    break;
                default:
                    break;
            }
        }
        thiz.draw_00 = function (canvas, paint, offset) {
            paint.fontSize = 18;
            paint.fontFamily = set.font.family;
            
            var doc = parent.edit.document;
            if (doc.readonly == true) {
                text = "NORMAL";
                paint.color = 0xFF002B2B;
            }
            else {
                text = "INSERT";
                paint.color = 0xFFF00000;
            }

            measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);
            
            path = new Path();
            path.moveTo(0.0, 0.0);
            path.lineTo(measure.length + MARGIN * 2, 0.0);
            path.lineTo(measure.length + MARGIN * 2 + thiz.height / 2, thiz.height / 2 - 1);
            path.lineTo(measure.length + MARGIN * 2, thiz.height);
            path.lineTo(0.0, thiz.height);
            path.close();
            canvas.drawPath(path, paint);
            
            paint.color = 0xFFF0F0F0;
            offset = (thiz.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, MARGIN, offset, paint);

            return measure.length + MARGIN * 2 + thiz.height / 2;
        }
        thiz.draw_01 = function (canvas, paint, offset) {
            paint.color = 0xFFF0F0F0;
            var doc = parent.edit.document;
            var p = FilePath.basename (doc.path);
            if (doc.savepoint == false) {
                p += " [Unsaved]"
            }
            canvas.drawText(p, offset + MARGIN, thiz.height / 2 + 5, paint) ;
            return 0;
        }

        thiz.draw_02 = function (canvas, paint, offset) {
        }

        thiz.draw_03 = function (canvas, paint, offset) {
        }

        thiz.draw_99 = function (canvas, paint, offset) {
            var cp = parent.edit.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var ln = parent.edit.sync(SCI_LINEFROMPOSITION, cp, 0x00); 
            var lc = parent.edit.sync(SCI_GETLINECOUNT);

            var beg = parent.edit.document.lineStart(ln);
            var end = parent.edit.document.lineEnd(ln);

            var ps = Math.round((ln/lc)*100);
            var lp = (cp - beg) + 1;
            ln = ln + 1;

            ps = ps.toString();
            ln = ln.toString();

            if (lp > 99) {
                lp = lp.toString();
            }
            else if (lp > 9) {
                lp = " " + lp.toString();
            }
            else {
                lp = "  " + lp.toString();
            }

            lp = lp.toString();

            text = ps + "%  " + ln + ":" + lp;
            measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFFF00000;
            path = new Path();
            path.moveTo(thiz.width, 0.0);
            path.lineTo(thiz.width - (measure.length + MARGIN * 2), 0.0);
            path.lineTo(thiz.width - (measure.length + MARGIN * 2 + thiz.height / 2), thiz.height / 2 - 1);
            path.lineTo(thiz.width - (measure.length + MARGIN * 2), thiz.height);
            path.lineTo(thiz.width, thiz.height);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            offset = (thiz.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, thiz.width - (measure.length + MARGIN * 2) + MARGIN, offset, paint);
            return 0;
        }
        thiz.draw_98 = function (canvas, paint, offset) {
        }
        thiz.draw_97 = function (canvas, paint, offset) {
        }
        thiz.draw_96 = function (canvas, paint, offset) {
        }
        return thiz;
    };
    return Stat; 
})();
