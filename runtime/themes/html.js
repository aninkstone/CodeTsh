function* lexer_html (){
    yield* lexer_default();
    yield [SCI_SETLEXERLANGUAGE, 0x00, "html"];
};

