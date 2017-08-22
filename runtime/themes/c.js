function* lexer_c (){
    yield [SCI_SETLEXERLANGUAGE, 0x00, "cpp"];

    yield* lexer_background_color();
    yield* lexer_foreground_color();
    yield [SCI_STYLECLEARALL, 0x00, 0x00];

    yield* lexer_c_setindent();

    //yield* lexer_default_margin_zero ();
    yield* lexer_default_tabwidth();
    yield* lexer_default_caret();
    yield* lexer_default_eolmode();
    yield* lexer_default_linemode();
    //yield* lexer_default_margin_linenumber();
    yield* lexer_default_selection();
    yield* lexer_default_indentguide();
    yield* lexer_default_whitespace();

    yield* lexer_c_keywords();
    yield* lexer_c_font();
    yield* lexer_c_default();
    yield* lexer_c_comment();
    yield* lexer_c_commentline();
    yield* lexer_c_commentdoc();
    yield* lexer_c_commentlinedoc();
    yield* lexer_c_number();
    yield* lexer_c_word();
    yield* lexer_c_word2();
    yield* lexer_c_string();
    yield* lexer_c_character();
    yield* lexer_c_uuid();
    yield* lexer_c_preprocessor();
    yield* lexer_c_operator();
    yield* lexer_c_identifier();
    yield* lexer_c_stringeol();
    yield* lexer_c_verbatim();
    yield* lexer_c_regex();
    yield* lexer_c_commentdockeyword();
    yield* lexer_c_commentdockeyworderror();
    yield* lexer_c_globalclass();
    yield* lexer_c_stringraw();
    yield* lexer_c_tripleverbatim ();
    yield* lexer_c_hashquotedstring ();
    yield* lexer_c_preprocessorcomment();
    yield* lexer_c_preprocessorcommentdoc();
    yield* lexer_c_userliteral ();
    yield* lexer_c_taskmarker();
    yield* lexer_c_escapesequence();
    yield* lexer_c_wordchars();
    yield* lexer_c_usingtab();

    yield* lexer_c_fold();
};

function* lexer_c_fold () {
    yield [SCI_SETPROPERTY, "fold", "1"];
    yield [SCI_SETPROPERTY, "fold.compact", "1"];
    yield [SCI_SETPROPERTY, "fold.comment", "1"];
    yield [SCI_SETPROPERTY, "fold.at.else", "1"];
    yield [SCI_SETPROPERTY, "fold.preprocessor", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.comment", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.syntax.based", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.comment.multiline", "1"]; 
    yield [SCI_SETPROPERTY, "fold.cpp.comment.explicit", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.explicit.start", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.explicit.end", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.explicit.anywhere", "1"];
    yield [SCI_SETPROPERTY, "fold.cpp.preprocessor.at.else", "1"];

    yield [SCI_SETFOLDMARGINCOLOUR, 0x01, 0x222827];
    yield [SCI_SETFOLDMARGINHICOLOUR, 0x01, 0x0B00FF];

    //yield [SCI_SETMARGINTYPEN,  0x02, SC_MARGIN_SYMBOL];
    yield [SCI_SETMARGINTYPEN,  0x02, SC_MARGIN_SYMBOL];
    yield [SCI_SETMARGINWIDTHN, 0x02, 16];
    yield [SCI_SETMARGINMASKN,  0x02, SC_MASK_FOLDERS];
	yield [SCI_SETMARGINSENSITIVEN, 0x02, 1];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDEROPEN, SC_MARK_MINUS];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDEROPEN, 0xFF222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDEROPEN, 0xFFE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDEROPEN, 0xFF];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDER, SC_MARK_PLUS];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDER, 0x222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDER, 0xE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDER, 0xFF];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDERSUB, SC_MARK_EMPTY];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDERSUB, 0x222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDERSUB, 0xE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDERSUB, 0xFF];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDERTAIL, SC_MARK_EMPTY];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDERTAIL, 0x222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDERTAIL, 0xE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDERTAIL, 0xFF];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDEREND, SC_MARK_EMPTY];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDEREND, 0x222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDEREND, 0xE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDEREND, 0xFF];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDEROPENMID, SC_MARK_EMPTY];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDEROPENMID, 0x222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDEROPENMID, 0xE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDEROPENMID, 0xFF];

    yield [SCI_MARKERDEFINE, SC_MARKNUM_FOLDERMIDTAIL, SC_MARK_EMPTY];
    yield [SCI_MARKERSETFORE, SC_MARKNUM_FOLDERMIDTAIL, 0x222827];
    yield [SCI_MARKERSETBACK, SC_MARKNUM_FOLDERMIDTAIL, 0xE0E0E0];
    yield [SCI_MARKERSETBACKSELECTED, SC_MARKNUM_FOLDERMIDTAIL, 0xFF];

    // The highlight is disabled for plus/minus.
    yield [SCI_MARKERENABLEHIGHLIGHT, 0x00, 0x00];
}

function* lexer_c_font() {
    yield [SCI_STYLESETFONT, STYLE_DEFAULT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, STYLE_DEFAULT, set.font.size];
};

function* lexer_background_color () {
    yield [SCI_STYLESETBACK, STYLE_DEFAULT, 0x222827];
};

function* lexer_foreground_color () {
    yield [SCI_STYLESETFORE, STYLE_DEFAULT, 0xE0E0E0];
};

function* lexer_c_default(){
    yield [SCI_STYLESETBACK, SCE_C_DEFAULT, 0x222827];
    yield [SCI_STYLESETFORE, SCE_C_DEFAULT, 0xE0E0E0];
};

function* lexer_c_comment(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENT, 0x808080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENT, set.font.size];
};

function* lexer_c_commentline (){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTLINE, 0x808080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTLINE, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTLINE, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTLINE, set.font.size];
};

function* lexer_c_commentdoc(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTDOC, 0x808080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTDOC, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTDOC, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTDOC, set.font.size];
};

function* lexer_c_number(){
    yield [SCI_STYLESETFORE, SCE_C_NUMBER, 0x9FCEB5];
    yield [SCI_STYLESETBACK, SCE_C_NUMBER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_NUMBER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_NUMBER, set.font.size];
};

function* lexer_c_word(){
    yield [SCI_STYLESETFORE, SCE_C_WORD, 0x98FB98];
    yield [SCI_STYLESETBACK, SCE_C_WORD, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_WORD, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_WORD, set.font.size];
};

function* lexer_c_word2(){
    yield [SCI_STYLESETFORE, SCE_C_WORD2, 0x62B7BD];
    yield [SCI_STYLESETBACK, SCE_C_WORD2, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_WORD2, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_WORD2, set.font.size];
};

function* lexer_c_string(){
    yield [SCI_STYLESETFORE, SCE_C_STRING, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_STRING, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_STRING, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_STRING, set.font.size];
};

function* lexer_c_character(){
    yield [SCI_STYLESETFORE, SCE_C_CHARACTER, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_CHARACTER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_CHARACTER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_CHARACTER, set.font.size];
};

function* lexer_c_uuid(){
    yield [SCI_STYLESETFORE, SCE_C_UUID, 0x804080];
    yield [SCI_STYLESETBACK, SCE_C_UUID, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_UUID, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_UUID, set.font.size];
};

function* lexer_c_preprocessor(){
    yield [SCI_STYLESETFORE, SCE_C_PREPROCESSOR, 0x007F7F];
    yield [SCI_STYLESETBACK, SCE_C_PREPROCESSOR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_PREPROCESSOR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_PREPROCESSOR, set.font.size];
};

function* lexer_c_operator(){
    yield [SCI_STYLESETFORE, SCE_C_OPERATOR, 0xF0F0F0];
    yield [SCI_STYLESETBACK, SCE_C_OPERATOR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_OPERATOR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_OPERATOR, set.font.size];
};

function* lexer_c_identifier(){
    yield [SCI_STYLESETFORE, SCE_C_IDENTIFIER, 0xE0E0E0];
    yield [SCI_STYLESETBACK, SCE_C_IDENTIFIER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_IDENTIFIER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_IDENTIFIER, set.font.size];
};

function* lexer_c_stringeol(){
    yield [SCI_STYLESETFORE, SCE_C_STRINGEOL, 0x008080];
    yield [SCI_STYLESETBACK, SCE_C_STRINGEOL, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_STRINGEOL, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_STRINGEOL, set.font.size];
};

function* lexer_c_verbatim(){
    yield [SCI_STYLESETFORE, SCE_C_VERBATIM, 0x008080];
    yield [SCI_STYLESETBACK, SCE_C_VERBATIM, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_VERBATIM, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_VERBATIM, set.font.size];
};

function* lexer_c_regex(){
    yield [SCI_STYLESETFORE, SCE_C_REGEX, 0x66D9EF];
    yield [SCI_STYLESETBACK, SCE_C_REGEX, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_REGEX, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_REGEX, set.font.size];
};

function* lexer_c_commentlinedoc(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTLINEDOC, 0xA0A0A0];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTLINEDOC, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTLINEDOC, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTLINEDOC, set.font.size];
};

function* lexer_c_commentdockeyword(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTDOCKEYWORD, 0xA06030];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTDOCKEYWORD, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTDOCKEYWORD, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTDOCKEYWORD, set.font.size];
};

function* lexer_c_commentdockeyworderror(){
    yield [SCI_STYLESETFORE, SCE_C_COMMENTDOCKEYWORDERROR, 0x204080];
    yield [SCI_STYLESETBACK, SCE_C_COMMENTDOCKEYWORDERROR, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_COMMENTDOCKEYWORDERROR, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_COMMENTDOCKEYWORDERROR, set.font.size];
};

function* lexer_c_globalclass(){
    yield [SCI_STYLESETFORE, SCE_C_GLOBALCLASS, 0x0099DD];
    yield [SCI_STYLESETBACK, SCE_C_GLOBALCLASS, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_GLOBALCLASS, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_GLOBALCLASS, set.font.size];
};

function* lexer_c_stringraw(){
    yield [SCI_STYLESETFORE, SCE_C_GLOBALCLASS, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_GLOBALCLASS, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_GLOBALCLASS, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_GLOBALCLASS, set.font.size];
};

function* lexer_c_tripleverbatim () {
    yield [SCI_STYLESETFORE, SCE_C_TRIPLEVERBATIM, 0x007F00];
    yield [SCI_STYLESETBACK, SCE_C_TRIPLEVERBATIM, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_TRIPLEVERBATIM, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_TRIPLEVERBATIM, set.font.size];
};

function* lexer_c_hashquotedstring () {
    yield [SCI_STYLESETFORE, SCE_C_HASHQUOTEDSTRING, 0x007F00];
    yield [SCI_STYLESETBACK, SCE_C_HASHQUOTEDSTRING, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_HASHQUOTEDSTRING, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_HASHQUOTEDSTRING, set.font.size];
};

function* lexer_c_preprocessorcomment() {
    yield [SCI_STYLESETFORE, SCE_C_PREPROCESSORCOMMENT, 0x009965];
    yield [SCI_STYLESETBACK, SCE_C_PREPROCESSORCOMMENT, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_PREPROCESSORCOMMENT, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_PREPROCESSORCOMMENT, set.font.size];
};

function* lexer_c_preprocessorcommentdoc() {
    yield [SCI_STYLESETFORE, SCE_C_PREPROCESSORCOMMENTDOC, 0xA000A0];
    yield [SCI_STYLESETBACK, SCE_C_PREPROCESSORCOMMENTDOC, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_PREPROCESSORCOMMENTDOC, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_PREPROCESSORCOMMENTDOC, set.font.size];
};

function* lexer_c_userliteral () {
    yield [SCI_STYLESETFORE, SCE_C_USERLITERAL, 0x0060C0];
    yield [SCI_STYLESETBACK, SCE_C_USERLITERAL, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_USERLITERAL, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_USERLITERAL, set.font.size];
};

function* lexer_c_taskmarker() {
    yield [SCI_STYLESETFORE, SCE_C_TASKMARKER, 0xFF07BE];
    yield [SCI_STYLESETBACK, SCE_C_TASKMARKER, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_TASKMARKER, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_TASKMARKER, set.font.size];
};

function* lexer_c_escapesequence() {
    yield [SCI_STYLESETFORE, SCE_C_ESCAPESEQUENCE, 0xE6DB74];
    yield [SCI_STYLESETBACK, SCE_C_ESCAPESEQUENCE, 0x222827];
    yield [SCI_STYLESETFONT, SCE_C_ESCAPESEQUENCE, set.font.family];
    yield [SCI_STYLESETSIZEFRACTIONAL, SCE_C_ESCAPESEQUENCE, set.font.size];
};

function* lexer_c_usingtab() {
    yield [SCI_SETUSETABS, 0x00, 0x00]; /* don't use tab */
};

function* lexer_c_setindent() {
    yield [SCI_SETINDENT, 0x04, 0x00];
    yield [SCI_SETTABINDENTS, 0x00, 0x00];
    //yield [SCI_SETINDENTATIONGUIDES, SC_IV_LOOKBOTH, 0x00];
    //yield [SCI_SETINDENTATIONGUIDES, SC_IV_REAL, 0x00];
    yield [SCI_SETINDENTATIONGUIDES, SC_IV_LOOKFORWARD, 0x00];
    yield [SCI_SETINDENTATIONGUIDES, SC_IV_NONE, 0x00];
};

function* lexer_c_wordchars() {
    yield [SCI_SETWORDCHARS, 0x00, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"];
};

function* lexer_c_keywords() {
    yield [SCI_SETKEYWORDS, 0x01, "class define else endif alignas alignof const_cast constexpr const continue decltype default delete do dynamic_cast else enum explicit export extern friend goto if inline mutable namespace new noexcept nullptr operator private protected public register reinterpret_cast return sizeof static static_cast switch case template this throw try typedef typename union using virtual volatile while break for std __func__ __LINE__ __FUNCTION__ __FILE__"];
    yield [SCI_SETKEYWORDS, 0x00, "bool double void int float double char unsigned short string wchar_t vector map set list iterator tr1 regex"];
};
