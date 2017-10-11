(function (){  
    return function (editor, cmd, shift, alt, ctrl) {
        if (cmd == "Tab") {
            var nerd = windows.instanceOfTypeName ("Nerd");
            if (nerd == null) {
                //windows.delWidget(nerd);
                var nerd = new NerdTree(windows.parent);
                windows.addWidget(nerd);
                nerd.setFocus();
            }
            else {
                nerd.setFocus();
            }
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();
