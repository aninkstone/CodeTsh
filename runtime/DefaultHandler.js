(function (){
    return {
        OnKeyD: function (key, shift, alt, ctrl) {
            ro = this.sync(SCI_GETREADONLY, 0x00, 0x00);
            switch (key) {
                case 27:  /* escape */
                    this.ro(true);
                    break;
                default:
                    break;
            }
            if (ro == 1) {
                switch (key) {
                    case 13:  /* enter */
                        ExecuteCommand(this, "Enter", shift, alt, ctrl);
                        break;
                    case 56:  /* * */
                        ExecuteCommand(this, "Asterisk", shift, alt, ctrl);
                        break;
                    case 52:  /* 4 */
                    case 97:  /* a */
                    case 98:  /* b */
                    case 99:  /* c */
                    case 100: /* d */
                    case 101: /* e */
                    case 102: /* f */
                    case 103: /* g */
                    case 104: /* h */
                    case 106: /* j */
                    case 107: /* k */
                    case 108: /* l */
                    case 109: /* m */
                    case 110: /* n */
                    case 111: /* o */
                    case 112: /* p */
                    case 113: /* q */
                    case 114: /* r */
                    case 115: /* s */
                    case 116: /* t */
                    case 117: /* u */
                    case 118: /* v */
                    case 119: /* w */
                    case 120: /* x */
                    case 121: /* y */
                    case 122: /* z */
                        ExecuteCommand(this, String.fromCharCode(key), shift, alt, ctrl);
                        break;
                    case 105: /* i */
                        //case 111: /* o */
                        this.sync(SCI_SETCARETSTYLE, 0x01, 0x00);
                        break;
                    case 47:  /* / */
                        this.interact.setFocus();
                        this.interact.document.deleteChars(0, this.interact.document.length);
                        this.interact.document.insertChars("/");
                        this.interact.sync(SCI_GOTOPOS, this.interact.document.length, 0x00);
                        break;
                    case 59:  /* : */
                        this.interact.setFocus();
                        this.interact.document.deleteChars(0, this.interact.document.length);
                        this.interact.document.insertChars(":");
                        this.interact.sync(SCI_GOTOPOS, this.interact.document.length, 0x00);
                        break;
                    default:
                        Console.log(key.toString());
                        break;
                }
            }
            else {
                return Complete(this, key);
            }
            return false;
        },
        OnKeyU: function (key) {
            switch (key) {
                case 111: /* o */
                case 105: /* i */
                    this.ro(false);
                    break;
                default:
                    break;
            }
            return false;
        },
    }
})();
