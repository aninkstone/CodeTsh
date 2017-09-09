(function(){
    return function(doc, editor, text){
        editor.searchForward(text);
        return true;
    }
})();
