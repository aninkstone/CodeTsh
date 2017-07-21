function* lexer_default (){
    yield [SCI_STYLERESETDEFAULT, 0x00, 0x00];
    yield* lexer_background_color();
    yield* lexer_foreground_color();
    yield* lexer_font();
    yield* lexer_margin_zero();
    //yield* lexer_margin_linenumber();
    yield* lexer_caret();
    yield* lexer_tab_width();
    yield* lexer_eolmode();
    yield* lexer_linemode();

    yield [SCI_STYLECLEARALL, 0x00, 0x00];
    //yield [SCI_SETLEXERLANGUAGE, 0x00, "null"];
};

function* lexer_caret() {
    yield [SCI_SETCARETWIDTH, 10, 0x00];
    yield [SCI_SETCARETSTYLE, 2, 0x00];
    yield [SCI_SETCARETPERIOD, 400, 0x00];
    yield [SCI_SETCARETLINEVISIBLEALWAYS, 0x00, 0x00];
    yield [SCI_SETCARETLINEVISIBLE, 0x01, 0x00];
    yield [SCI_SETCARETLINEBACK, 0x222827, 0x00];
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

function* lexer_margin_zero (){
    yield [SCI_SETMARGINS, 0x00, 0x00];
};

function* lexer_margin_linenumber (){
    yield [SCI_SETMARGINS, 0x01, 0x00];
    yield [SCI_SETMARGINTYPEN,  0x00, SC_MARGIN_NUMBER];
    yield [SCI_SETMARGINWIDTHN, 0x00, 50];
};

function* lexer_tab_width() {
    yield [SCI_SETTABWIDTH, 0x04, 0x00];
};

function* lexer_eolmode () {
    yield [SCI_SETEOLMODE, SC_EOL_LF, 0x00];
};

function* lexer_linemode() {
    yield [SCI_SETEDGEMODE, EDGE_LINE, 0x00];
    yield [SCI_SETEDGECOLUMN, 80, 0x00];
};
