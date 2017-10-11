(function (){
    return function (editor, cmd, shift, alt, ctrl) {
        let pos = editor.sync(SCI_GETCURRENTPOS);
        editor.sync(SCI_SETEMPTYSELECTION, pos);
        return CTOR_VIMKEY_CONSUME;
    }
})();

