// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("atsd", function() {
  "use strict";

  var isStringChar = /[^\s\:\=]/;
  var isOperatorChar = /[\:\=]/;
  var prevState = "keyword";
  var isQuoted = false;
  
  function tokenString(stream, state) {
      var escaped = false;
      var next = stream.current();
      do {
        if (next == '"') {
          escaped = stream.peek() == '"';
          if(!escaped && prevState != 'operator op-colon' && prevState != 'operator op-equal') {
            isQuoted = false;
            break;
          }
          next = stream.next();
          prevState = null;
        }
        escaped = !escaped && next == '"';
      } while ((next = stream.next()) != null);
      if (!escaped) state.tokenize = tokenBase;
      return "attribute";
  }
  
  function tokenOperator(operator) {
    return function (stream, state) {
      var style = "operator";
      state.tokenize = tokenBase;
      if (prevState === "attribute")
        return "attribute";
      if (operator === ":")
          return "operator op-colon";
      if (operator === "=")
        return "operator op-equal";
    };
  }

  function tokenWord(ch) {
    return function(stream, state) {
      if (prevState == 'operator op-colon') {
        stream.eatWhile(/[^\s\=]/)
      } else {
        stream.eatWhile(isStringChar);
      }
      var word = stream.current();
      state.tokenize = tokenBase;
      if ((stream.peek() === " " || stream.eol()) && prevState !== "keyword") {
        return "attribute";
      }
      switch (prevState) {
        case "operator op-equal": return "attribute";
        case "operator op-colon": return "property";
        case "keyword": return "keyword";
        case null: return "meta";
        default: return "attribute";
      }
    };
  }

  function tokenBase(stream, state) {
    if (stream.sol()) prevState = "keyword";
    var ch = stream.next();
    if (ch === '"' || isQuoted) {
      if (isQuoted) {
        if (ch === '"' && stream.peek() != '"') {
          isQuoted = false;
          state.tokenize = tokenBase;
          return "attribute";
        }
      } else {
        isQuoted = true;
      }
      state.tokenize = tokenString;
    }
    else if (isOperatorChar.test(ch))
      state.tokenize = tokenOperator(ch);
    else if (isStringChar.test(ch))
      state.tokenize = tokenWord(ch);

    return (state.tokenize != tokenBase) ? state.tokenize(stream, state) : null;
  }

  return {
    startState: function() {
      return {
        tokenize: tokenBase
      };
    },

    token: function(stream, state) {
      if (stream.eatSpace()) prevState = null;
      else prevState = state.tokenize(stream, state);
      return prevState;
    }
  };
});

CodeMirror.defineMIME("text/x-atsd", "atsd");

});
