require("runtime/object/InnerDef.js");

var set = {
    font : {
        family:"新宋体",
        family:"Courier New",
        size: 1900,
    },
    vim: {
        search: {},
        cmd:"",
    },
    runtime: {
        path : "",
        curr : "",
    },
    documents: new Map (),
    window: {},
};

var $ = {
    api: {
        document: {},
        editor: {},
        widget: {},
    },
};

var windows = {};

set.runtime.path = (new FileSystem()).getcwd();
set.runtime.curr = (new FileSystem()).getcwd();

require(set.runtime.path + "/runtime/object/Document.js");
require(set.runtime.path + "/runtime/object/Widget.js");
require(set.runtime.path + "/runtime/object/Editor.js");

var Sept = require(set.runtime.path + "/runtime/Sept.js");
var Stat = require(set.runtime.path + "/runtime/Stat.js");
var Edit = require(set.runtime.path + "/runtime/Edit.js");
var Nerd = require(set.runtime.path + "/runtime/Nerd.js");

var Complete = require(set.runtime.path + "/runtime/DefaultAC.js");
var HandlerDefault = require(set.runtime.path + "/runtime/DefaultHandler.js");
var FilePath = require(set.runtime.path + "/runtime/Path.js");

//var defaultDoc = $.api.document.createDocument("./CodeTor.txt");
var defaultDoc = $.api.document.createDocument("./CTEditComplete.cpp");

require(set.runtime.path + "/runtime/themes/default.js");
require(set.runtime.path + "/runtime/themes/c.js");
require(set.runtime.path + "/runtime/themes/javascript.js");
require(set.runtime.path + "/runtime/themes/html.js");
require(set.runtime.path + "/runtime/themes/commander.js");
require(set.runtime.path + "/runtime/themes/sb.js");
require(set.runtime.path + "/runtime/themes/customize.js");
require(set.runtime.path + "/runtime/themes/nerdtree.js");
require(set.runtime.path + "/runtime/themes/javascript.js");

Interact = require(set.runtime.path + "/runtime/Interact.js");
NerdTree = require(set.runtime.path + "/runtime/NerdTree.js");
EditView = require(set.runtime.path + "/runtime/EditView.js");
Windows =  require(set.runtime.path + "/runtime/Windows.js");

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
