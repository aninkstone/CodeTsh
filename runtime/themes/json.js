function* lexer_json(){
    yield* lexer_default();
    yield* lexer_json_default();
    yield* lexer_json_number();
    yield* lexer_json_string();
    yield* lexer_json_stringeol();
    yield* lexer_json_propertyname();
    yield* lexer_json_escapesequence();
    yield* lexer_json_linecomment();
    yield* lexer_json_blockcomment();
    yield* lexer_json_operator();
    yield* lexer_json_uri();
    yield* lexer_json_compactiri();
    yield* lexer_json_word();
    yield* lexer_json_ldkeyword();
    yield* lexer_json_error();
    yield* lexer_json_keywords();

    yield [SCI_SETLEXERLANGUAGE, 0x00, "json"];
};

function* lexer_json_default () {
    yield [SCI_STYLESETFORE, SCE_JSON_DEFAULT, 0xE0E0E0];
    yield [SCI_STYLESETBACK, SCE_JSON_DEFAULT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_DEFAULT, set.font.size];
};

function* lexer_json_number() {
    yield [SCI_STYLESETFORE, SCE_JSON_NUMBER, 0x6F73FF];
    yield [SCI_STYLESETBACK, SCE_JSON_NUMBER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_NUMBER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_NUMBER, set.font.size];
};

function* lexer_json_string () {
    yield [SCI_STYLESETFORE, SCE_JSON_STRING, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_JSON_STRING, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_STRING, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_STRING, set.font.size];
};

function* lexer_json_stringeol () {
    yield [SCI_STYLESETFORE, SCE_JSON_STRINGEOL, 0x008080];
    yield [SCI_STYLESETBACK, SCE_JSON_STRINGEOL, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_STRINGEOL, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_STRINGEOL, set.font.size];
};

function* lexer_json_propertyname() {
    yield [SCI_STYLESETFORE, SCE_JSON_PROPERTYNAME, 0x7226F9];
    yield [SCI_STYLESETBACK, SCE_JSON_PROPERTYNAME, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_PROPERTYNAME, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_PROPERTYNAME, set.font.size];
};

function* lexer_json_escapesequence() {
    yield [SCI_STYLESETFORE, SCE_JSON_PROPERTYNAME, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_JSON_PROPERTYNAME, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_PROPERTYNAME, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_PROPERTYNAME, set.font.size];
};

function* lexer_json_linecomment(){
    yield [SCI_STYLESETFORE, SCE_JSON_LINECOMMENT, 0xA0A0A0];
    yield [SCI_STYLESETBACK, SCE_JSON_LINECOMMENT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_LINECOMMENT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_LINECOMMENT, set.font.size];
};

function* lexer_json_blockcomment(){
    yield [SCI_STYLESETFORE, SCE_JSON_BLOCKCOMMENT, 0xA000A0];
    yield [SCI_STYLESETBACK, SCE_JSON_BLOCKCOMMENT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_BLOCKCOMMENT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_BLOCKCOMMENT, set.font.size];
};

function* lexer_json_operator (){
    yield [SCI_STYLESETFORE, SCE_JSON_OPERATOR, 0xE0E0E0];
    yield [SCI_STYLESETBACK, SCE_JSON_OPERATOR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_OPERATOR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_OPERATOR, set.font.size];
};

function* lexer_json_uri(){
    yield [SCI_STYLESETFORE, SCE_JSON_URI, 0x00E0E0];
    yield [SCI_STYLESETBACK, SCE_JSON_URI, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_URI, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_URI, set.font.size];
};

function* lexer_json_compactiri(){
    yield [SCI_STYLESETFORE, SCE_JSON_COMPACTIRI, 0x0000E0];
    yield [SCI_STYLESETBACK, SCE_JSON_COMPACTIRI, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_COMPACTIRI, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_URI, set.font.size];
};

function* lexer_json_word(){
    yield [SCI_STYLESETFORE, SCE_JSON_KEYWORD, 0xEFD966];
    yield [SCI_STYLESETBACK, SCE_JSON_KEYWORD, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_KEYWORD, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_KEYWORD, set.font.size];
};

function* lexer_json_ldkeyword(){
    yield [SCI_STYLESETFORE, SCE_JSON_LDKEYWORD, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_JSON_LDKEYWORD, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_LDKEYWORD, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_LDKEYWORD, set.font.size];
};

function* lexer_json_error (){
    yield [SCI_STYLESETFORE, SCE_JSON_ERROR, 0x804080];
    yield [SCI_STYLESETBACK, SCE_JSON_ERROR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_JSON_ERROR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_JSON_ERROR, set.font.size];
}

function* lexer_json_keywords () {
    yield [SCI_SETKEYWORDS, 0x00, "function var typeof null new delete switch default case break continue if else => document window console event true false"];
};
