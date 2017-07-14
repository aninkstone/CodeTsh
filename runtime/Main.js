require("runtime/InnerDef.js");

var set = {
    font : {
        family:"新宋体",
        size: 1900,
    },
    vim: {
        search: {},
    },
    runtime: {
        path : "",
        curr : "",
    },
};

set.runtime.path = (new FileSystem()).getcwd();
set.runtime.curr = (new FileSystem()).getcwd();

Console.log (set.runtime.path);
Console.log (set.runtime.curr);

var Document = require(set.runtime.path + "/runtime/Document.js");
var Editor = require(set.runtime.path + "/runtime/Editor.js");
var Widget = require(set.runtime.path + "/runtime/Widget.js");
var Complete = require(set.runtime.path + "/runtime/AutoComp.js");
var KeyInvoker = require(set.runtime.path + "/runtime/KeyBind.js");
var FilePath = require(set.runtime.path + "/runtime/Path.js");

var defaultDocHandle = {
    onModifyAttempt: function(){
    }, 
    onLexerChanged: function() {
    }, 
    onSavePoint: function() {
    }, 
    onStyleNeeded: function() {
    }, 
    onErrorOccurred: function() {
    },
    onDeleted: function() {
    },
    onModified: function() {
    },
};

var defaultDoc = new Document("./CodeTor.txt", defaultDocHandle);
Console.log ("E:/新建文件夹/a.txt");

require(set.runtime.path + "/runtime/themes/default.js");
require(set.runtime.path + "/runtime/themes/c.js");
require(set.runtime.path + "/runtime/themes/javascript.js");
require(set.runtime.path + "/runtime/themes/html.js");
require(set.runtime.path + "/runtime/themes/commander.js");
require(set.runtime.path + "/runtime/themes/sb.js");

Interact = require(set.runtime.path + "/runtime/Interact.js");
NerdTree = require(set.runtime.path + "/runtime/NerdTree.js");
EditView = require(set.runtime.path + "/runtime/EditView.js");
WindowMgr = require(set.runtime.path + "/runtime/WindowMgr.js");
Windows = new WindowMgr ();

//var t = new Thread ();
//t.run (function (){
//    for (i = 0;i < 1000; ++i) {
//        Console.log ("hey " + i);
//    }
//});

function lexerSync (e, lex) {
    l = lex(); v = l.next();
    while(v.done == false) {
        e.sync(v.value[0], v.value[1], v.value[2]);
        v = l.next();
    }
};

function loadLexer (editor, path) {
    ext = FilePath.extname(path);
    switch (ext) {
        case ".cpp":
        case ".c":
        case ".h":
            lexerSync (editor, lexer_c);
            break;
        default:
            lexerSync (editor, lexer_default);
            break;
    };
}

require(set.runtime.path + "/runtime/MainWnd.js");
