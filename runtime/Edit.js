(function (){
    function Edit (parent, interact) {
        var thiz = NewEditor (parent, function(evt, argument) {
            switch (evt) {
                case "SYS:EDITUPDATEUI":
                    this.parent.stat.inval();
                    break;
                case "SYS:KEYUP":
                    return HandlerDefault.OnKeyU.bind(this)(argument.key);
                case "SYS:KEY":
                    return HandlerDefault.OnKeyD.bind(this)(argument.key, argument.shift, argument.alt, argument.ctrl);
                default:
                    break;
            }
        });

        thiz.interact = interact;

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
