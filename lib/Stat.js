(function (){
    var MARGIN = 10;

    function draw_00 (context, canvas, paint, offset) {
        paint.fontSize = 18;
        paint.fontFamily = "Courier New";

        var text = "Unknow";
        try {
            var doc = context.view.edit.handle.document;
            if (doc.readonly == true) {
                text = "NORMAL";
                paint.color = 0xFF005252;
            }
            else {
                text = "INSERT";
                paint.color = 0xFFF00000;
            }
        }
        catch (e) {
        }

        var measure = paint.measureText(text);
        measure.bounds.x = Math.abs(measure.bounds.x);
        measure.bounds.y = Math.abs(measure.bounds.y);
        measure.bounds.w = Math.abs(measure.bounds.w);
        measure.bounds.h = Math.abs(measure.bounds.h);

        var path = new Path();
        path.moveTo(0.0, 0.0);
        path.lineTo(measure.length + MARGIN * 2, 0.0);
        path.lineTo(measure.length + MARGIN * 2 + context.handle.height / 2, context.handle.height / 2 - 1);
        path.lineTo(measure.length + MARGIN * 2, context.handle.height);
        path.lineTo(0.0, context.handle.height);
        path.close();
        canvas.drawPath(path, paint);

        paint.color = 0xFFF0F0F0;
        offset = (context.handle.height - measure.bounds.y) / 2 + measure.bounds.y;
        canvas.drawText(text, MARGIN, offset, paint);

        return measure.length + MARGIN * 2 + context.handle.height / 2;
    }

    function draw_01 (context, canvas, paint, offset) {
        paint.color = 0xFFF0F0F0;
        var p = "";
        try {
            var doc = context.view.edit.handle.document;
            let fp = new FilePath ();
            p = doc.path; //fp.baseName (doc.path);
            if (doc.savepoint == false) {
                p += " [Unsaved]"
            }
        }
        catch (e) {
        }
        canvas.drawText(p, offset + MARGIN, context.handle.height / 2 + 5, paint) ;
        return 0;
    }

    function draw_99 (context, canvas, paint, offset) {
        try {
            var cp = context.view.edit.handle.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var ln = context.view.edit.handle.lineNumber('.');
            var lc = context.view.edit.handle.sync(SCI_GETLINECOUNT);

            var beg = context.view.edit.handle.document.lineStart(ln);
            var end = context.view.edit.handle.document.lineEnd(ln);

            var ps = Math.round((ln/lc)*100);
            var lp = (cp - beg) + 1; ln = ln + 1;

            ps = ps.toString(); ln = ln.toString();

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

            var text = ps + "%  " + ln + ":" + lp;
            var measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFFF00000;
            var path = new Path();
            path.moveTo(context.handle.width, 0.0);
            path.lineTo(context.handle.width - (measure.length + MARGIN * 2), 0.0);
            path.lineTo(context.handle.width - (measure.length + MARGIN * 2 + context.handle.height / 2), context.handle.height / 2 - 1);
            path.lineTo(context.handle.width - (measure.length + MARGIN * 2), context.handle.height);
            path.lineTo(context.handle.width, context.handle.height);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            vert = (context.handle.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, context.handle.width - (measure.length + MARGIN * 2) + MARGIN, vert, paint);
            offset = measure.bounds.w + MARGIN * 2;
        }
        catch (e) {
        }
        return offset;
    }

    function draw_98 (context, canvas, paint, offset) {
        try {
            let text = "Unknow";
            var cp = context.view.edit.handle.codepage();
            var lf = context.view.edit.handle.eol();
            text = cp;
            text = text + "[" + lf + "]";
            var measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFF005252; //0xFF003F3F
            let path = new Path();
            path.moveTo(context.handle.width - offset, 0.0);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2) - context.handle.height / 2, 0.0);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2 + context.handle.height), context.handle.height / 2);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2) - context.handle.height / 2, context.handle.height);
            path.lineTo(context.handle.width - offset, context.handle.height);
            path.lineTo(context.handle.width - offset - context.handle.height / 2, context.handle.height / 2);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            vpos = (context.handle.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, context.handle.width - (measure.length + MARGIN * 2) + MARGIN - offset - context.handle.height / 2, vpos, paint);

            offset = measure.length + MARGIN * 2 + context.handle.height / 2 + offset;
        }
        catch (e) {
        }
        return offset;
    }
    function draw_97 (context, canvas, paint, offset) {
        try {
            let text = "master";
            let measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFF003F3F
            let path = new Path();
            path.moveTo(context.handle.width - offset, 0.0);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2) - context.handle.height / 2, 0.0);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2 + context.handle.height), context.handle.height / 2);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2) - context.handle.height / 2, context.handle.height);
            path.lineTo(context.handle.width - offset, context.handle.height);
            path.lineTo(context.handle.width - offset - context.handle.height / 2, context.handle.height / 2);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            vpos = (context.handle.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, context.handle.width - (measure.length + MARGIN * 2) + MARGIN - offset - context.handle.height / 2, vpos, paint);

            offset = measure.boundss.w + MARGIN * 2 + offset;;
        }
        catch (e) {
        }
        return offset;
    }
    function draw_96 (context, canvas, paint, offset) {
        try {
            let charset = context.view.edit.handle.sync(SCI_STYLEGETCHARACTERSET, STYLE_DEFAULT);
            let scs = "ISO 8859-1";
            switch (charset) {
                case SC_CHARSET_SYMBOL:
                case SC_CHARSET_ANSI:
                case SC_CHARSET_OEM:
                    break;
                case SC_CHARSET_DEFAULT:
                    scs = "ISO 8859-1";
                    break;
                case SC_CHARSET_BALTIC:
                    scs = ("ISO 8859-13");
                    break;
                case SC_CHARSET_CHINESEBIG5:
                    scs = ("Big5");
                    break;
                case SC_CHARSET_EASTEUROPE:
                    scs = ("ISO 8859-2");
                    break;
                case SC_CHARSET_GB2312:
                    scs = ("GB18030-0");
                    break;
                case SC_CHARSET_GREEK:
                    scs = ("ISO 8859-7");
                    break;
                case SC_CHARSET_HANGUL:
                    scs = ("CP949");
                    break;
                case SC_CHARSET_MAC:
                    scs = ("Apple Roman");
                    break;
                case SC_CHARSET_RUSSIAN:
                    scs = ("KOI8-R");
                    break;
                case SC_CHARSET_CYRILLIC:
                    scs = ("Windows-1251");
                    break;
                case SC_CHARSET_SHIFTJIS:
                    scs = ("Shift-JIS");
                    break;
                case SC_CHARSET_TURKISH:
                    scs = ("ISO 8859-9");
                    break;
                case SC_CHARSET_JOHAB:
                    scs = ("CP1361");
                    break;
                case SC_CHARSET_HEBREW:
                    scs = ("ISO 8859-8");
                    break;
                case SC_CHARSET_ARABIC:
                    scs = ("ISO 8859-6");
                    break;
                case SC_CHARSET_VIETNAMESE:
                    scs = ("Windows-1258");
                    break;
                case SC_CHARSET_THAI:
                    scs = ("TIS-620");
                    break;
                case SC_CHARSET_8859_15:
                    scs = ("ISO 8859-15");
                    break;
            }
            let measure = paint.measureText(scs);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFF003F3F
            let path = new Path();
            path.moveTo(context.handle.width - offset, 0.0);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2) - context.handle.height / 2, 0.0);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2 + context.handle.height), context.handle.height / 2);
            path.lineTo(context.handle.width - offset - (measure.length + MARGIN * 2) - context.handle.height / 2, context.handle.height);
            path.lineTo(context.handle.width - offset, context.handle.height);
            path.lineTo(context.handle.width - offset - context.handle.height / 2, context.handle.height / 2);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            vpos = (context.handle.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(scs, context.handle.width - (measure.length + MARGIN * 2) + MARGIN - offset - context.handle.height / 2, vpos, paint);

            offset = measure.boundss.w + MARGIN * 2 + offset;;
        }
        catch (e) {
        }
        return offset;
    }

    function Stat (p, view) {
        function OnDrw (canvas) {
            let p = new Paint();
            p.style = 0x00;
            p.color = 0xFF525252;
            canvas.drawRect(0, 0, this.handle.width, this.handle.height, p);

            if (view.type == "Edit") {
                var l = 0;
                l = draw_00 (this, canvas, p, l);
                l = draw_01 (this, canvas, p, l);
                var r = 0;
                r = draw_99 (this, canvas, p, r);
                r = draw_98 (this, canvas, p, r);
                r = draw_97 (this, canvas, p, r);
                r = draw_96 (this, canvas, p, r);
            }
            else {
                var l = 0;
                l = draw_00 (this, canvas, p, l);
            }
        }

        function OnEvt (evt, argument) {
            function click (argument){
                switch (argument.state) {
                    case 0: /* mouse down */
                        windows.statClick (this.parent, argument, 0);
                        break;
                    case 1: /* mouse move */
                        windows.statClick (this.parent, argument, 1);
                        break;
                    case 2: /* mouse up */
                        windows.statClick (this.parent, argument, 2);
                        break;
                    default:
                        break;
                }
            }

            switch (evt) {
                case "SYS:CLICK":
                    click.bind(this)(argument);
                    break;
                default:
                    break;
            }
        }

        this.view = view;
        this.handle = NewWidget (p.handle, OnEvt.bind(this), OnDrw.bind(this));
        this.parent = p;
    };
    return Inherite(Stat, BaseObj); 
})();
