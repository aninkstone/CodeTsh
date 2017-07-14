(function(){
    Document.prototype.open = function (name) {
        if (typeof script !== 'undefined') {
            var ro = this.readonly;
            this.readonly = false;
            this.document.direct = name;
            this.readonly = ro;
        }
        return this;
    }
    Document.prototype.save = function (path) {
        if (typeof path == 'string') {
            var content = "";
            for (idx = 0; idx < this.length; ++idx) {
                content += (String.fromCharCode(this.charAt(idx))); 
            }
            fs = new FileSystem();
            fs.saveFile(path, content);
            return this;
        }
        if (typeof this.path !== 'undefined') {
            var content = "";
            for (idx = 0; idx < this.length; ++idx) {
                content += (String.fromCharCode(this.charAt(idx))); 
            }
            Console.log(content);
            fs = new FileSystem();
            fs.saveFile(this.path, content);
            return this;
        }
        return this;
    };
    return Document;
})();
