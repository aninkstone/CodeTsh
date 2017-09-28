function* lexer_customize(){
    yield [SCI_SETLEXER, 0x00, 0];
    yield* lexer_default();

    yield* lexer_customize_font();
    yield* lexer_customize_tab_width();
    yield* lexer_customize_eolmode();
    yield* lexer_customize_caret();
    yield* lexer_customize_linemode();
    yield* lexer_customize_word();
};

function* lexer_customize_caret() {
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

function* lexer_customize_font() {
    yield [SCI_STYLESETFONT, STYLE_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, STYLE_DEFAULT, set.font.size];
};

function* lexer_customize_tab_width() {
    yield [SCI_SETTABWIDTH, 0x04, 0x00];
};

function* lexer_customize_eolmode () {
    yield [SCI_SETEOLMODE, SC_EOL_LF, 0x00];
};

function* lexer_customize_linemode() {
    yield [SCI_SETEDGEMODE, EDGE_LINE, 0x00];
    yield [SCI_SETEDGECOLUMN, 80, 0x00];
};

function* lexer_customize_word(){
    yield [SCI_STYLESETFORE, 100, 0x00FF00];
    yield [SCI_STYLESETBACK, 100, 0x222827];
    yield [SCI_STYLESETFONT, 100, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, 100, set.font.size];
};
