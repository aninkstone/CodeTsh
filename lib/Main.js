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

var set = {
    font : {
        family:"幼圆",
        family:"新宋体",
        //family:"Courier New",
        size: 2000,
    },
    vim: {
        search: {},
        cmd:"",
        mark:  {
            a:-1,
            b:-1,
            c:-1,
            d:-1,
            e:-1,
            f:-1,
            g:-1,
            h:-1,
            i:-1,
            j:-1,
            k:-1,
            l:-1,
            m:-1,
            n:-1,
            o:-1,
            p:-1,
            q:-1,
            r:-1,
            s:-1,
            t:-1,
            u:-1,
            v:-1,
            w:-1,
            x:-1,
            y:-1,
            z:-1,
        },
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
    cmd: {},
    documents: new Map (),
    window: {},
    cmdpath: "",
    keypath: "",
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
set.runtime.load = set.runtime.path + "/lib/";
set.runtime.cmdpath = set.runtime.load + "script/cmd/";
set.runtime.keypath = set.runtime.load + "script/key/";

require(set.runtime.load + "object/InnerDef.js");
require(set.runtime.load + "object/BaseObj.js");
require(set.runtime.load + "Language.js");
require(set.runtime.load + "object/Document.js");

var NewWidget = require(set.runtime.load + "object/Widget.js");
var NewEditor = require(set.runtime.load + "object/Editor.js");

//var defaultDoc = $.api.document.createDocument("./CodeTor.txt");
var defaultDoc = $.api.document.createDocument("lib/Windows.js");
var consoleDoc = $.api.document.createDocument("./tmp/copen.txt");

console.log = function (l) {
    debug (l);
    consoleDoc.readonly = false;
    consoleDoc.insertChars(l.toString() + "\n");
    consoleDoc.readonly = true;
}

console.term = function (l) {
    consoleDoc.readonly = false;
    consoleDoc.insertChars(l + "\n");
    consoleDoc.readonly = true;
}

console.debug = function (l) {
    debug (l);
};

var Sept = require(set.runtime.load + "Sept.js");
var Stat = require(set.runtime.load + "Stat.js");
var Edit = require(set.runtime.load + "Edit.js");
var Nerd = require(set.runtime.load + "Nerd.js");

var Complete = require(set.runtime.load + "DefaultAC.js");
var HandlerDefault = require(set.runtime.load + "DefaultHandler.js");
var Indent = require(set.runtime.load + "DefaultIndent.js");

require(set.runtime.load + "themes/mark.js");
require(set.runtime.load + "themes/default.js");
require(set.runtime.load + "themes/c.js");
require(set.runtime.load + "themes/javascript.js");
require(set.runtime.load + "themes/html.js");
require(set.runtime.load + "themes/commander.js");
require(set.runtime.load + "themes/sb.js");
require(set.runtime.load + "themes/customize.js");
require(set.runtime.load + "themes/nerdtree.js");
require(set.runtime.load + "themes/javascript.js");
require(set.runtime.load + "themes/browser.js");

Interact = require(set.runtime.load + "Interact.js");
NerdTree = require(set.runtime.load + "NerdTree.js");
EditView = require(set.runtime.load + "EditView.js");
Windows =  require(set.runtime.load + "Windows.js");

//FIXME: panic
(function(){ 
    fs = new FileSystem();
    fs.readFile ("./CodeTor.txt", function (err, ctx){
        consoleDoc.insertChars(ctx);
    });
})();

//TODO: panic
//(function(){ //panic
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
    let fp = new FilePath();
    ext = fp.extName(path);
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
        script = fs.readFileSync(set.runtime.keypath + cmd + ".js");
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
        var inet = windows.namedCtrl("Inet");
        inet.handle.document.deleteChars(0, inet.handle.document.length);
        inet.handle.document.insertChars("[keymap]:" + set.vim.cmd);
        inet.handle.sync(SCI_GOTOPOS, inet.handle.document.length, 0x00);

        if (script) {
            let bConsume = script(widget, set.vim.cmd, shift, alt, ctrl);
            switch (bConsume) {
                case CTOR_VIMKEY_CONSUME:
                    set.vim.pre = set.vim.cmd;
                    set.vim.cmd = "";
                    clearTimeOut(set.vim.timerID);
                    break;
                case CTOR_VIMKEY_NOTCONCERN:
                    set.vim.timerID = setTimeOut(function (){
                        set.vim.cmd = "";
                    }, 1000);
                    break;
                case CTOR_VIMKEY_USEKEEP:
                    break;
                case CTOR_VIMKEY_INVALID:
                default:
                    break;
            }
        }
    }
    catch (e) {
        console.log ("[Error][ExecuteCommand]: " + e.toString());
    }
}

require(set.runtime.load + "MainWnd.js");
