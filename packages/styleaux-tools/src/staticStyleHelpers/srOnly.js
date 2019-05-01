"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var important_1 = require("../important");
function srOnly() {
    return {
        border: important_1.important(0),
        clip: important_1.important('rect(0 0 0 0)'),
        height: important_1.important('1px'),
        margin: important_1.important('-1px'),
        overflow: important_1.important('hidden'),
        padding: important_1.important(0),
        position: important_1.important('absolute'),
        width: important_1.important('1px'),
    };
}
exports.srOnly = srOnly;
