(function (){
    function Edit (parent, interact) {
        var thiz = $.api.editor.createEditor (parent);
        thiz.interact = interact;

        thiz.ro = function(b) {
            if (b) {
                thiz.sync(SCI_SETREADONLY,   0x01, 0x00);
                thiz.sync(SCI_SETCARETSTYLE, 0x02, 0x00);
            }
            else {
                thiz.sync(SCI_SETREADONLY,   0x00, 0x00);
                thiz.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
            }
        }

        thiz.OnSizeChange = function(widget) {
        }

        thiz.OnKeyDown = function (widget, argument) {
            return HandlerDefault.OnKeyD.bind(widget)(argument.key, argument.shift, argument.alt, argument.ctrl);
        }

        thiz.OnKeyUp = function (widget, argument) {
            return HandlerDefault.OnKeyU.bind(widget)(argument.key);
        }

        f = (e,lex) => { 
            l = lex(); v = l.next();
            while(v.done == false) {
                e.sync(v.value[0], v.value[1], v.value[2]);
                v = l.next();
            }
        };

        f(thiz, lexer_default); thiz.ro(true);
        return thiz;
    };
    return Edit;
})();
