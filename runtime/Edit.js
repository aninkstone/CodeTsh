(function (){
    function Edit (parent, interact) {
        var thiz = $.api.editor.createEditor (parent);
        thiz.interact = interact;

        thiz.OnSizeChange = function(widget) {
        }

        thiz.OnKeyDown = function (widget, argument) {
            return HandlerDefault.OnKeyD.bind(widget)(argument.key, argument.shift, argument.alt, argument.ctrl);
        }

        thiz.OnKeyUp = function (widget, argument) {
            return HandlerDefault.OnKeyU.bind(widget)(argument.key);
        }

        thiz.OnUpdateUI = function (thiz) {
            parent.stat.inval();
        }

        var f = (e,lex) => { 
            var l = lex(); var v = l.next();
            while(v.done == false) {
                e.sync(v.value[0], v.value[1], v.value[2]);
                v = l.next();
            }
        };

        f(thiz, lexer_c); thiz.ro(true);
        return thiz;
    };
    return Edit;
})();
