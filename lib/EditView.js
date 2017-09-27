(function (){
    function EditView (parent, x, y, w, h) {
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:CHARADDED":
                case "SYS:KEYUP":
                case "SYS:KEY":
                case "SYS:MODIFIED":
                case "SYS:EDITUPDATEUI":
                    break;
                case "SYS:SIZECHANGE":
                    try {
                        var has = windows.hasViewL (this);
                        if (has == true) {
                            this.sept.setLocation(0, 0);
                            this.sept.setSize (8, this.handle.height);
                        }
                        else {
                            this.sept.setLocation(0, 0);
                            this.sept.setSize (0, this.handle.height);
                        }
                    }
                    catch (e) {
                        this.sept.setLocation(0, 0);
                        this.sept.setSize (0, this.handle.height);
                    }

                    try {
                        this.stat.setSize (this.handle.width - this.sept.handle.width, 23);
                        this.stat.setLocation(this.sept.handle.width, this.handle.height - this.stat.handle.height);

                        this.edit.setLocation(this.sept.handle.width, 0);
                        this.edit.setSize(this.handle.width - this.sept.handle.width, this.handle.height - this.stat.handle.height);
                    }
                    catch (e) {
                    }
                    break;
                default:
                    break;
            }
        }

        function OnDrw (canvas) {
            try {
                OnEvt.bind(this)("SYS:SIZECHANGE");
                this.stat.handle.inval();
            }
            catch (e) {
            }
        }

        try {
            this.handle = NewWidget(parent, OnEvt.bind(this), OnDrw.bind(this));
            this.parent = parent;
            this.x = 0;
            this.y = 0;
            this.w = parent.width;
            this.h = parent.height;

            this.edit = new Edit (this, this);
            this.stat = new Stat (this, this);
            this.sept = new Sept (this, this);
            this.type = "Edit";

            this.handle.locX = 0;
            this.handle.loxY = 0;
            this.handle.width  = parent.width;
            this.handle.height = parent.height;

            OnEvt.bind(this)("SYS:SIZECHANGE");
            this.setDocument(defaultDoc);
        }
        catch (e) {
            //console.log (e + " " + (new Error().stack));
        }
    };

    Inherite(EditView, BaseObj);

    EditView.prototype.setFocus = function () {
        this.edit.setFocus();
    }

    EditView.prototype.setName = function (name) {
        this.edit.setName (name);
    }

    EditView.prototype.setDocument = function (doc) {
        var handle = this.edit.handle;
        if (handle.document.savepoint == false) {
            return -1;
        }

        handle.doc (doc);
        handle.sync(SCI_GOTOPOS, handle.document.caretP, 0x00);
        handle.ro (true);
        handle.setFocus();
    }

    return EditView;
})();
