function Inherite (c, p) {
    var f = function(){};
    f.prototype = p.prototype;
    c.prototype = new f();
    c.prototype.constructor = c;
    c.uber = p.prototype;
    return c;
}

Object.prototype.copy = function (c, p) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } 
        else {
            c[i] = p[i];
        }
    }
    return c;
}

require("runtime/object/InnerDef.js");

var set = {
    font : {
        //family:"新宋体",
        family:"Courier New",
        size: 1900,
    },
    vim: {
        search: {},
        cmd:"",
        reg_X: {},
        reg_0: {},
        reg_1: {},
        reg_2: {},
        reg_3: {},
        reg_4: {},
        reg_5: {},
        reg_6: {},
        reg_7: {},
        reg_8: {},
        reg_9: {},
        reg_a: {},
        reg_b: {},
        reg_c: {},
        reg_d: {},
        reg_e: {},
        reg_f: {},
        reg_g: {},
        reg_h: {},
        reg_i: {},
        reg_j: {},
        reg_k: {},
        reg_l: {},
        reg_m: {},
        reg_n: {},
        reg_o: {},
        reg_p: {},
        reg_q: {},
        reg_r: {},
        reg_s: {},
        reg_t: {},
        reg_u: {},
        reg_v: {},
        reg_w: {},
        reg_x: {},
        reg_y: {},
        reg_z: {},
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

require(set.runtime.path + "/runtime/object/BaseObj.js");
require(set.runtime.path + "/runtime/Language.js");
require(set.runtime.path + "/runtime/object/Document.js");

var NewWidget = require(set.runtime.path + "/runtime/object/Widget.js");
var NewEditor = require(set.runtime.path + "/runtime/object/Editor.js");

var FilePath = require(set.runtime.path + "/runtime/Path.js");
//var defaultDoc = $.api.document.createDocument("./CodeTor.txt");
var defaultDoc = $.api.document.createDocument("runtime/Windows.js");
var consoleDoc = $.api.document.createDocument("./tmp/copen.txt");

console.log = function (l) {
    debug (l);
    consoleDoc.readonly = false;
    consoleDoc.insertChars(l.toString() + "\n");
    consoleDoc.readonly = true;
}

console.debug = function (l) {
    debug (l);
};

var Sept = require(set.runtime.path + "/runtime/Sept.js");
var Stat = require(set.runtime.path + "/runtime/Stat.js");
var Edit = require(set.runtime.path + "/runtime/Edit.js");
var Nerd = require(set.runtime.path + "/runtime/Nerd.js");

var Complete = require(set.runtime.path + "/runtime/DefaultAC.js");
var HandlerDefault = require(set.runtime.path + "/runtime/DefaultHandler.js");
var Indent = require(set.runtime.path + "/runtime/DefaultIndent.js");

require(set.runtime.path + "/runtime/themes/default.js");
require(set.runtime.path + "/runtime/themes/c.js");
require(set.runtime.path + "/runtime/themes/javascript.js");
require(set.runtime.path + "/runtime/themes/html.js");
require(set.runtime.path + "/runtime/themes/commander.js");
require(set.runtime.path + "/runtime/themes/sb.js");
require(set.runtime.path + "/runtime/themes/customize.js");
require(set.runtime.path + "/runtime/themes/nerdtree.js");
require(set.runtime.path + "/runtime/themes/javascript.js");
require(set.runtime.path + "/runtime/themes/browser.js");

Interact = require(set.runtime.path + "/runtime/Interact.js");
NerdTree = require(set.runtime.path + "/runtime/NerdTree.js");
EditView = require(set.runtime.path + "/runtime/EditView.js");
Windows =  require(set.runtime.path + "/runtime/Windows.js");


//var t = new Thread ();
//t.run (function (){
//    for (i = 0;i < 1000; ++i) {
//        console.log ("hey " + i);
//    }
//});

//var pip = execute("grep.exe", "-in CTEditComplete ./*");
//console.log (pip);

function lexerSync (handle, lex) {
    l = lex(); v = l.next();
    while(v.done == false) {
        handle.sync(v.value[0], v.value[1], v.value[2]);
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

function ExecuteCommand (widget, cmd, shift, alt, ctrl){
    try {
        fs = new FileSystem();
        script = fs.readFile(set.runtime.path + "/runtime/script/keymap/" + cmd + ".js");
        script = eval(script);
        if (ctrl == true) {
            set.vim.cmd += "C_";
        }
        if (alt == true) {
            set.vim.cmd += "A_";
        }
        if (shift == true) {
            set.vim.cmd += "S_";
        }
        set.vim.cmd += cmd;
        if (script) {
            bConsume = script(widget, set.vim.cmd, shift, alt, ctrl);
            if (bConsume == true) {
                set.vim.pre = set.vim.cmd;
                set.vim.cmd = "";
                clearTimeOut(set.vim.timerID);
            }
            else {
                set.vim.timerID = setTimeOut(function (){
                    set.vim.cmd = "";
                }, 1000);
            }
        }
    }
    catch (e) {
        console.log ("[Error][ExecuteCommand]: " + e.toString());
    }
}

require(set.runtime.path + "/runtime/MainWnd.js");
