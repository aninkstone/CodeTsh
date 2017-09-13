(function (){
    function Edit (p, view) {
        this.view = view;

        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:EDITUPDATEUI":
                    //this.parent.stat.inval();
                    break;
                case "SYS:KEYUP":
                    return HandlerDefault.OnKeyU.bind(this.handle)(argument.key);
                case "SYS:KEY":
                    return HandlerDefault.OnKeyD.bind(this.handle)(argument.key, argument.shift, argument.alt, argument.ctrl);
                case "SYS:MODIFIED":
                    if (this.handle.document.path == "./tmp/copen.txt") {
                        this.handle.sync(SCI_DOCUMENTEND);
                    }
                    break;
                default:
                    break;
            }
            return false;
        }

        this.handle = NewEditor (p.handle, OnEvt.bind(this));
        this.handle.lexerSync(lexer_c);
        this.handle.ro(true);
    }
    return Inherite(Edit, BaseObj);
})();
