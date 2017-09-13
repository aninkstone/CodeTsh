(function (){  
    return function (editor, cmd, shift, alt, ctrl) {
        var nerd = windows.instanceOfTypeName ("Nerd");
        if (nerd != null) {
            windows.delWidget(nerd);
        }
        else {
            windows.addWidget(new NerdTree(windows.parent));
        }
        return true;
    }
})();
