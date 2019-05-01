"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
function quote(val) {
    var val2 = (val || val === 0 ? val.toString() : '').replace(/\'/g, "\\'");
    return "'" + val2 + "'";
}
exports.quote = quote;
