// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        mod(require("../../lib/codemirror"));
    else if (typeof define == "function" && define.amd) // AMD
        define(["../../lib/codemirror"], mod);
    else // Plain browser env
        mod(CodeMirror);
})(function(CodeMirror) {
    "use strict";
    var sections = {
        configuration: {
            maxLevel: 0
        },
        group: {
            maxLevel: 0
        },
        placeholders: {
            maxLevel: 2
        },
        widget: {
            maxLevel: 1
        },
        column: {
            maxLevel: 2
        },
        node: {
            maxLevel: 2
        },
        link: {
            maxLevel: 2
        },
        series: {
            maxLevel: 3
        },
        threshold: {
            maxLevel: 4
        },
        tag: {
            maxLevel: 4
        }
    };

    CodeMirror.defineMode("config", function (config) {
        return {
            startState: function () {
                return {
                    inString: false,
                    stringType: "",
                    lhs: true,
                    rhs: false,
                    level: -1,
                    currentSection: "",
                    inArray: 0,
                    inComment: false
                };
            },
            token: function (stream, state) {
                //check for state changes
                if (stream.sol() && stream.match(/(?:^\s*\[)(\w+)(?:\]$)/, false)) {
                    var matches = stream.match(/(?:^\s*\[)(\w+)(?:\]$)/, false);
                    if (sections[matches[1]]) {
                        state.level = calcLevel(state, matches[1]);
                        state.currentSection = matches[1];
                    }

                }

                if (!state.inComment && !state.inString && ((stream.peek() == '"') || (stream.peek() == "'"))) {
                    state.stringType = stream.peek();
                    stream.next(); // Skip quote
                    state.inString = true; // Update state
                }
                if (!state.inComment && stream.sol() && state.inArray === 0) {
                    state.lhs = true;
                }
                //return state
                if (state.inString) {
                    while (state.inString && !stream.eol()) {
                        if (stream.peek() === state.stringType) {
                            stream.next(); // Skip quote
                            state.inString = false; // Clear flag
                        } else if (stream.peek() === '\\') {
                            stream.next();
                            stream.next();
                        } else {
                            stream.match(/^.[^\\\"\']*/);
                        }
                    }
                    return state.lhs ? "property string" : "string"; // Token style
                } else if (!state.inComment && state.inArray && stream.peek() === ']') {
                    stream.next();
                    state.inArray--;
                    return 'bracket';
                } else if (!state.inComment && state.lhs && stream.peek() === '[' && stream.skipTo(']')) {
                    stream.next();//skip closing ]
                    // array of objects has an extra open & close []
                    if (stream.peek() === ']') stream.next();
                    return "atom";
                } else if (!state.inComment && stream.peek() === "#") {
                    stream.skipToEnd();
                    return "comment";
                } else if (stream.match(/\/\*.*\*\//)) {
                    return "comment";
                } else if (stream.match(/\/\*.*/) || state.inComment) {
                    state.inComment = true;
                    while (state.inComment && !stream.eol()) {
                        if (stream.match(/\*\//)) {
                            state.inComment = false;
                        }
                        stream.next();
                    }
                    return "comment";
                } else if (stream.eatSpace()) {
                    return null;
                } else if (state.lhs && stream.eatWhile(function (c) { return c != '=' && c != ' ' && c != '*' && c != '/'; })) {
                    return "property";
                } else if (state.lhs && stream.peek() === "=") {
                    stream.next();
                    state.rhs = true;
                    state.lhs = false;
                    return null;
                } else if (!state.inComment && !state.lhs && stream.match(/^\d\d\d\d[\d\-\:\.T]*Z/)) {
                    return 'atom'; //date
                } else if (!state.inComment && !state.lhs && (stream.match('true') || stream.match('false'))) {
                    return 'atom';
                } else if (!state.inComment && !state.lhs && stream.peek() === '[') {
                    state.inArray++;
                    stream.next();
                    return 'bracket';
                } else if (!state.inComment && !state.lhs && stream.match(/^\-?\d+(?:\.\d+)?/)) {
                    return 'number';
                } else if (!state.inComment && state.rhs && stream.match(/[\wА-Яа-я]+(?![\\\(\[\{\}\]\)])/)) {
                    stream.next();
                    return "string"; // Token style
                } else if (!stream.eatSpace()) {
                    stream.next();
                }
                return null;
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: "//",
            helperType: "config",
            indent: function(state, textAfter) {
                if (state.inComment) {
                    return  CodeMirror.Pass;
                }
                var level = state.level+1;

                var matches = textAfter.match(/(?:^\s*\[)(\w+)(?:\]$)/);
                if (matches) {
                    if (sections[matches[1]]) {

                        if (state.currentSection === matches[1]) {
                            level = calcLevel(state, matches[1]);
                        } else {
                            level = calcLevel(state, matches[1]);
                        }
                    }
                }


                return level * config.indentUnit;
            }

    };
    });


    function calcLevel(state, newSection) {
        var section = sections[newSection];
        var level = state.level;
        if (section) {
            if (state.level >= section.maxLevel) {
                level = section.maxLevel;
            } else if (state.currentSection !== newSection) {
                level++;
            }
        }
        return level;
    }
    CodeMirror.defineMIME('text/x-config', 'config');
});
