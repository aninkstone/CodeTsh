function* lexer_nerdtree(){
    yield [SCI_SETLEXER, 0x00, 0];
    yield [SCI_STYLERESETDEFAULT, 0x00, 0x00];

    yield* lexer_background_color();
    yield* lexer_foreground_color();

    yield* lexer_font();
    yield* lexer_margin_zero ();
    yield* lexer_tab_width();
    yield* lexer_eolmode ();
    yield* lexer_caret();
    yield* lexer_linemode();

    yield [SCI_STYLECLEARALL, 0x00, 0x00];

    yield* lexer_nerdtree_vline();
    yield* lexer_nerdtree_hline();
    yield* lexer_nerdtree_plus();
    yield* lexer_nerdtree_directory();

    yield* lexer_default_caret();
    yield* lexer_default_selection();
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
    //yield [SCI_STYLESETBACK, STYLE_DEFAULT, 0x222827];
    yield [SCI_STYLESETBACK, STYLE_DEFAULT, 0xA0A0A0];
};

function* lexer_foreground_color () {
    //yield [SCI_STYLESETFORE, STYLE_DEFAULT, 0xE0E0E0];
    yield [SCI_STYLESETFORE, STYLE_DEFAULT, 0x0D0D0D];
};

function* lexer_font() {
    yield [SCI_STYLESETFONT, STYLE_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, STYLE_DEFAULT, set.font.size];
};

function* lexer_margin_zero (){
    yield [SCI_SETMARGINS, 0x00, 0x00];
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

function* lexer_nerdtree_vline(){
    yield [SCI_STYLESETFORE, 128, 0x5FA9FF];
    yield [SCI_STYLESETBACK, 128, 0x222827];
    yield [SCI_STYLESETFONT, 128, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, 128, set.font.size];
};

function* lexer_nerdtree_hline(){
    yield [SCI_STYLESETFORE, 130, 0x6BB7BD];
    yield [SCI_STYLESETBACK, 130, 0x222827];
    yield [SCI_STYLESETFONT, 130, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, 130, set.font.size];
};

function* lexer_nerdtree_plus(){
    yield [SCI_STYLESETFORE, 129, 0x5C5CCD];
    yield [SCI_STYLESETBACK, 129, 0x222827];
    yield [SCI_STYLESETFONT, 129, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, 129, set.font.size];
};

function* lexer_nerdtree_directory(){
    yield [SCI_STYLESETFORE, 131, 0xFFC124];
    yield [SCI_STYLESETBACK, 131, 0x222827];
    yield [SCI_STYLESETFONT, 131, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, 131, set.font.size];
};
