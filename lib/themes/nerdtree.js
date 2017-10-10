function* lexer_nerdtree(){
    yield [SCI_SETLEXER, 0x00, 0];
    yield* lexer_default();

    yield* lexer_nerdtree_margin_zero ();
    yield* lexer_nerdtree_vline();
    yield* lexer_nerdtree_hline();
    yield* lexer_nerdtree_plus();
    yield* lexer_nerdtree_directory();
    yield* lexer_nerdtree_eolview();
};

function* lexer_nerdtree_eolview (){
    yield [SCI_SETVIEWEOL, 0x00, 0x00];
};

function* lexer_nerdtree_margin_zero (){
    yield [SCI_SETMARGINS, 0x00, 0x00];
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
