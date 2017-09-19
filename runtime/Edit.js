(function (){
    function Edit (p, view) {
        this.view = view;

        this.keyUHandle = function (key) {
            return HandlerDefault.OnKeyU.bind(this.handle)(key);
        };

        this.keyDHandle = function (key, shift, alt, ctrl) {
            return HandlerDefault.OnKeyD.bind(this.handle)(key, shift, alt, ctrl);
        };

        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:EDITUPDATEUI":
                    break;
                case "SYS:KEYUP":
                    return this.keyUHandle.bind(this)(argument.key);
                case "SYS:KEY":
                    return this.keyDHandle.bind(this)(argument.key, argument.shift, argument.alt, argument.ctrl);
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

    Inherite(Edit, BaseObj);

    Edit.prototype.bindKeyDHandle = function (d) {
        var d = this.keyDHandle;
        this.keyDHandle = d;
        return d;
    }

    Edit.prototype.bindKeyUHandle = function (u) {
        var u = this.keyUHandle;
        this.keyUHandle = u;
        return u;
    }

    return Edit;
})();
