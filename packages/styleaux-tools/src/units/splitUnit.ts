import { isNumber } from 'typed-is';

/**
* parses input by prefix unit value if any.
* @param {string | number} input - text or number
* @example
console.log(splitUnit("10px"));
// {prefix: "", value: 10, unit: "px"}
console.log(splitUnit("-10px"));
// {prefix: "", value: -10, unit: "px"}
console.log(splitUnit("a10%"));
// {prefix: "a", value: 10, unit: "%"}
*/
export function splitUnit(
  input: string | number,
): { prefix: string; unit: string; value: number } {
  if (isNumber(input)) {
    return { prefix: '', unit: '', value: input };
  }

  const matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(input);

  if (!matches) {
    return { prefix: '', unit: '', value: NaN };
  }
  const prefix = matches[1];
  const value = matches[2];
  const unit = matches[3];

  return { prefix, unit, value: parseFloat(value) };
}
