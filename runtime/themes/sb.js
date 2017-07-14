function* lexer_slidebar (){
    yield [SCI_STYLERESETDEFAULT, 0x00, 0x00];
    yield* lexer_slidebar_background_color();
    yield* lexer_slidebar_foreground_color();
    yield* lexer_slidebar_font();
    yield* lexer_slidebar_caret();
    yield* lexer_slidebar_margin_zero();

    yield [SCI_STYLECLEARALL, 0x00, 0x00];
    yield [SCI_SETLEXERLANGUAGE, 0x00, "null"];
};

function* lexer_slidebar_caret() {
    yield [SCI_SETCARETWIDTH, 10, 0x00];
    yield [SCI_SETCARETSTYLE, 2, 0x00];
    yield [SCI_SETCARETPERIOD, 400, 0x00];
    yield [SCI_SETCARETLINEVISIBLEALWAYS, 0x00, 0x00];
    yield [SCI_SETCARETLINEVISIBLE, 0x01, 0x00];
    yield [SCI_SETCARETLINEBACK, 0x222827, 0x00];
    yield [SCI_SETCARETFORE, 0x787878, 0x00];
};

function* lexer_slidebar_background_color () {
    yield [SCI_STYLESETBACK, STYLE_DEFAULT, 0x222827];
};

function* lexer_slidebar_foreground_color () {
    yield [SCI_STYLESETFORE, STYLE_DEFAULT, 0xE0E0E0];
};

function* lexer_slidebar_font() {
    yield [SCI_STYLESETFONT, STYLE_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, STYLE_DEFAULT, set.font.size];
};

function* lexer_slidebar_margin_zero (){
    yield [SCI_SETMARGINS, 0x00, 0x00];
};

