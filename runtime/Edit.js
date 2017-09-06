(function (){
    function Edit (parent, view) {
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:EDITUPDATEUI":
                    //this.parent.stat.inval();
                    break;
                case "SYS:KEYUP":
                    return HandlerDefault.OnKeyU.bind(this.handle)(argument.key);
                case "SYS:KEY":
                    return HandlerDefault.OnKeyD.bind(this.handle)(argument.key, argument.shift, argument.alt, argument.ctrl);
                default:
                    break;
            }
            return false;
        }

        this.handle = NewEditor (parent, OnEvt.bind(this));
        this.handle.lexerSync(lexer_c);
        this.handle.ro(true);
        this.view = view;
    }
    return Inherite(Edit, BaseObj);
})();
