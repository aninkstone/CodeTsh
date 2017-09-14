function* lexer_default (){
    yield [SCI_SETLEXERLANGUAGE, 0x00, "null"];

    yield* lexer_background_color();
    yield* lexer_foreground_color();
    yield* lexer_font();

    //yield* lexer_default_margin_zero();
    //yield* lexer_default_margin_linenumber();
    yield* lexer_default_caret();
    yield* lexer_default_tabwidth();
    yield* lexer_default_eolmode();
    yield* lexer_default_linemode();
    yield* lexer_default_selection();

    yield [SCI_STYLECLEARALL, 0x00, 0x00];
};

function* lexer_default_caret() {
    yield [SCI_SETCARETWIDTH, 10, 0x00];
    yield [SCI_SETCARETSTYLE, 2, 0x00];
    yield [SCI_SETCARETPERIOD, 500, 0x00];
    yield [SCI_SETCARETLINEVISIBLEALWAYS, 0x01, 0x00];
    yield [SCI_SETCARETLINEVISIBLE, 0x01, 0x00];
    yield [SCI_SETCARETLINEBACK, 0x383838, 0x00];
    yield [SCI_SETCARETFORE, 0x787878, 0x00];
};

function* lexer_background_color () {
    yield [SCI_STYLESETBACK, STYLE_DEFAULT, 0x222827];
};

function* lexer_foreground_color () {
    yield [SCI_STYLESETFORE, STYLE_DEFAULT, 0xE0E0E0];
};

function* lexer_font() {
    yield [SCI_STYLESETFONT, STYLE_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, STYLE_DEFAULT, set.font.size];
};

function* lexer_default_margin_zero (){
};

function* lexer_default_margin_linenumber (){
};

function* lexer_default_tabwidth() {
    yield [SCI_SETTABWIDTH, 0x04, 0x00];
};

function* lexer_default_eolmode () {
    yield [SCI_SETEOLMODE, SC_EOL_LF, 0x00];
};

function* lexer_default_linemode() {
    yield [SCI_SETEDGEMODE, EDGE_LINE, 0x00];
    yield [SCI_SETEDGEMODE, 3, 0x00];

    yield [SCI_SETEDGECOLUMN, 80, 0x00];
};

function* lexer_default_selection() {
    yield [SCI_SETSELFORE, 0x01, 0xE0E0E0];
    yield [SCI_SETSELBACK, 0x01, 0x6B8E24];
    yield [SCI_SETSELALPHA, 256, 0x00];
};

function* lexer_default_indentguide () {
    yield [SCI_STYLESETFORE, STYLE_INDENTGUIDE, 0xE500FF];
    yield [SCI_STYLESETBACK, STYLE_INDENTGUIDE, 0x0000FF];
    yield [SCI_SETINDENTATIONGUIDES, SC_IV_LOOKBOTH, 0x00];
};

function* lexer_default_whitespace() {
    //yield [SCI_SETVIEWWS, SCWS_INVISIBLE]; /* disable */
    yield [SCI_SETVIEWWS, SCWS_VISIBLEONLYININDENT];
    //yield [SCI_SETVIEWWS, SCWS_VISIBLEALWAYS];
    //yield [SCI_SETVIEWWS, SCWS_VISIBLEAFTERINDENT, 0x00];
};
