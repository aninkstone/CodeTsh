function* lexer_javascript (){
    yield [SCI_SETLEXERLANGUAGE, 0x00, "cpp"];

    yield* lexer_background_color();
    yield* lexer_foreground_color();
    yield [SCI_STYLECLEARALL, 0x00, 0x00];

    yield* lexer_default_margin_zero ();
    yield* lexer_default_tabwidth();
    yield* lexer_default_caret();
    yield* lexer_default_eolmode();
    yield* lexer_default_linemode();
    yield* lexer_default_margin_linenumber();
    yield* lexer_default_selection();

    yield* lexer_javascript_keywords();
    yield* lexer_javascript_font();
    yield* lexer_javascript_default();
    yield* lexer_javascript_comment();
    yield* lexer_javascript_commentline();
    yield* lexer_javascript_commentdoc();
    yield* lexer_javascript_commentlinedoc();
    yield* lexer_javascript_number();
    yield* lexer_javascript_word();
    yield* lexer_javascript_word2();
    yield* lexer_javascript_string();
    yield* lexer_javascript_character();
    yield* lexer_javascript_uuid();
    yield* lexer_javascript_preprocessor();
    yield* lexer_javascript_operator();
    yield* lexer_javascript_identifier();
    yield* lexer_javascript_stringeol();
    yield* lexer_javascript_verbatim();
    yield* lexer_javascript_regex();
    yield* lexer_javascript_commentdockeyword();
    yield* lexer_javascript_commentdockeyworderror();
    yield* lexer_javascript_globalclass();
    yield* lexer_javascript_stringraw();
    yield* lexer_tripleverbatim ();
    yield* lexer_hashquotedstring ();
    yield* lexer_preprocessorcomment();
    yield* lexer_preprocessorcommentdoc();
    yield* lexer_userliteral ();
    yield* lexer_taskmarker();
    yield* lexer_escapesequence();
    yield* lexer_wordchars();
    yield* lexer_usingtab();
    yield* lexer_setindent();
};

function* lexer_margin_zero (){
    yield [SCI_SETMARGINS, 0x00, 0x00];
};

function* lexer_javascript_font() {
    yield [SCI_STYLESETFONT, STYLE_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, STYLE_DEFAULT, set.font.size];
};

function* lexer_background_color () {
    yield [SCI_STYLESETBACK, STYLE_DEFAULT, 0x222827];
};

function* lexer_foreground_color () {
    yield [SCI_STYLESETFORE, STYLE_DEFAULT, 0xE0E0E0];
};

function* lexer_javascript_default(){
    yield [SCI_STYLESETBACK, SCE_C_DEFAULT, 0x222827];
    yield [SCI_STYLESETFORE, SCE_C_DEFAULT, 0xE0E0E0];
};

function* lexer_javascript_comment(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENT, 0x808080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENT, set.font.size];
};

function* lexer_javascript_commentline (){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTLINE, 0x808080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTLINE, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTLINE, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTLINE, set.font.size];
};

function* lexer_javascript_commentdoc(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTDOC, 0x808080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTDOC, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTDOC, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTDOC, set.font.size];
};

function* lexer_javascript_number(){
    yield [SCI_STYLESETFORE, SCE_C_NUMBER, 0x6F73FF];
    yield [SCI_STYLESETBACK, SCE_C_NUMBER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_NUMBER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_NUMBER, set.font.size];
};

function* lexer_javascript_word(){
    yield [SCI_STYLESETFORE, SCE_C_WORD, 0xEFD966];
    yield [SCI_STYLESETBACK, SCE_C_WORD, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_WORD, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_WORD, set.font.size];
};

function* lexer_javascript_string(){
    yield [SCI_STYLESETFORE, SCE_C_STRING, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_STRING, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_STRING, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_STRING, set.font.size];
};

function* lexer_javascript_character(){
    yield [SCI_STYLESETFORE, SCE_C_CHARACTER, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_CHARACTER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_CHARACTER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_CHARACTER, set.font.size];
};

function* lexer_javascript_uuid(){
    yield [SCI_STYLESETFORE, SCE_C_UUID, 0x804080];
    yield [SCI_STYLESETBACK, SCE_C_UUID, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_UUID, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_UUID, set.font.size];
};

function* lexer_javascript_preprocessor(){
    yield [SCI_STYLESETFORE, SCE_C_PREPROCESSOR, 0x007F7F];
    yield [SCI_STYLESETBACK, SCE_C_PREPROCESSOR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_PREPROCESSOR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_PREPROCESSOR, set.font.size];
};

function* lexer_javascript_operator(){
    yield [SCI_STYLESETFORE, SCE_C_OPERATOR, 0xF0F0F0];
    yield [SCI_STYLESETBACK, SCE_C_OPERATOR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_OPERATOR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_OPERATOR, set.font.size];
};

function* lexer_javascript_identifier(){
    yield [SCI_STYLESETFORE, SCE_C_IDENTIFIER, 0xE0E0E0];
    yield [SCI_STYLESETBACK, SCE_C_IDENTIFIER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_IDENTIFIER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_IDENTIFIER, set.font.size];
};

function* lexer_javascript_stringeol(){
    yield [SCI_STYLESETFORE, SCE_C_STRINGEOL, 0x008080];
    yield [SCI_STYLESETBACK, SCE_C_STRINGEOL, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_STRINGEOL, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_STRINGEOL, set.font.size];
};

function* lexer_javascript_verbatim(){
    yield [SCI_STYLESETFORE, SCE_C_VERBATIM, 0x008080];
    yield [SCI_STYLESETBACK, SCE_C_VERBATIM, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_VERBATIM, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_VERBATIM, set.font.size];
};

function* lexer_javascript_regex(){
    yield [SCI_STYLESETFORE, SCE_C_REGEX, 0x66D9EF];
    yield [SCI_STYLESETBACK, SCE_C_REGEX, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_REGEX, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_REGEX, set.font.size];
};

function* lexer_javascript_commentlinedoc(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTLINEDOC, 0xA0A0A0];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTLINEDOC, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTLINEDOC, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTLINEDOC, set.font.size];
};

function* lexer_javascript_word2(){
    yield [SCI_STYLESETFORE, SCE_C_WORD2, 0xC05CC5];
    yield [SCI_STYLESETBACK, SCE_C_WORD2, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_WORD2, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_WORD2, set.font.size];
};

function* lexer_javascript_commentdockeyword(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTDOCKEYWORD, 0xA06030];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTDOCKEYWORD, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTDOCKEYWORD, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTDOCKEYWORD, set.font.size];
};

function* lexer_javascript_commentdockeyworderror(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTDOCKEYWORDERROR, 0x204080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTDOCKEYWORDERROR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTDOCKEYWORDERROR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTDOCKEYWORDERROR, set.font.size];
};

function* lexer_javascript_globalclass(){
    yield [SCI_STYLESETFORE, SCE_C_GLOBALCLASS, 0x0099DD];
    yield [SCI_STYLESETBACK, SCE_C_GLOBALCLASS, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_GLOBALCLASS, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_GLOBALCLASS, set.font.size];
};

function* lexer_javascript_stringraw(){
    yield [SCI_STYLESETFORE, SCE_C_GLOBALCLASS, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_GLOBALCLASS, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_GLOBALCLASS, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_GLOBALCLASS, set.font.size];
};

function* lexer_tripleverbatim () {
    yield [SCI_STYLESETFORE, SCE_C_TRIPLEVERBATIM, 0x007F00];
    yield [SCI_STYLESETBACK, SCE_C_TRIPLEVERBATIM, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_TRIPLEVERBATIM, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_TRIPLEVERBATIM, set.font.size];
};

function* lexer_hashquotedstring () {
    yield [SCI_STYLESETFORE, SCE_C_HASHQUOTEDSTRING, 0x007F00];
    yield [SCI_STYLESETBACK, SCE_C_HASHQUOTEDSTRING, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_HASHQUOTEDSTRING, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_HASHQUOTEDSTRING, set.font.size];
};

function* lexer_preprocessorcomment() {
    yield [SCI_STYLESETFORE, SCE_C_PREPROCESSORCOMMENT, 0x009965];
    yield [SCI_STYLESETBACK, SCE_C_PREPROCESSORCOMMENT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_PREPROCESSORCOMMENT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_PREPROCESSORCOMMENT, set.font.size];
};

function* lexer_preprocessorcommentdoc() {
    yield [SCI_STYLESETFORE, SCE_C_PREPROCESSORCOMMENTDOC, 0xA000A0];
    yield [SCI_STYLESETBACK, SCE_C_PREPROCESSORCOMMENTDOC, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_PREPROCESSORCOMMENTDOC, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_PREPROCESSORCOMMENTDOC, set.font.size];
};

function* lexer_userliteral () {
    yield [SCI_STYLESETFORE, SCE_C_USERLITERAL, 0x0060C0];
    yield [SCI_STYLESETBACK, SCE_C_USERLITERAL, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_USERLITERAL, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_USERLITERAL, set.font.size];
};

function* lexer_taskmarker() {
    yield [SCI_STYLESETFORE, SCE_C_TASKMARKER, 0xFF07BE];
    yield [SCI_STYLESETBACK, SCE_C_TASKMARKER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_TASKMARKER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_TASKMARKER, set.font.size];
};

function* lexer_escapesequence() {
    yield [SCI_STYLESETFORE, SCE_C_ESCAPESEQUENCE, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_ESCAPESEQUENCE, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_ESCAPESEQUENCE, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_ESCAPESEQUENCE, set.font.size];
};

function* lexer_usingtab() {
    yield [SCI_SETUSETABS, 0x00, 0x00]; /* don't use tab */
};

function* lexer_setindent() {
    yield [SCI_SETINDENT, 0x04, 0x00];
    yield [SCI_SETTABINDENTS, 0x00, 0x00];
    yield [SCI_SETINDENTATIONGUIDES, SC_IV_LOOKBOTH, 0x00];

    //FIXME: not working
    yield [SCI_STYLESETFORE, STYLE_INDENTGUIDE, 0xE500FF];
    yield [SCI_STYLESETBACK, STYLE_INDENTGUIDE, 0xE5FFFF];
    yield [SCI_STYLESETFORE, STYLE_BRACEBAD, 0xE0E0E0];
    yield [SCI_STYLESETBACK, STYLE_BRACEBAD, 0x222827];
};

function* lexer_wordchars() {
    yield [SCI_SETWORDCHARS, 0x00, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"];
};

function* lexer_javascript_keywords() {
    yield [SCI_SETKEYWORDS, 0x01, "yield switch case default break continue return if else true false this typeof new delete"];
    yield [SCI_SETKEYWORDS, 0x00, "var function undefined string object array map Map Array String Object Document Widget Window Editor"];
};

