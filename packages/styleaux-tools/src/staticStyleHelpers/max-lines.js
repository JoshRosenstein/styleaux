"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var units_1 = require("../units");
function applyMaxLines(lines, lineHeight) {
    return {
        overflow: "hidden",
        boxSizing: "content-box",
        maxHeight: units_1.px(lines * lineHeight),
        whiteSpace: lines === 1 ? "nowrap" : undefined,
    };
}
exports.applyMaxLines = applyMaxLines;
