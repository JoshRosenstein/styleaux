import { isBoolean } from "typed-is";
// import { isPlainObject } from "typed-is";
// import { mapObj,defaultTo } from "@roseys/futils";
export function boolValue<TV = never, FV = never, DV = any>(
  trueValue: TV,
  falseValue?: FV,
  defaultValue?: DV
): <T>(input: T) => T extends boolean ? TV | FV : DV | undefined;

export function boolValue(trueValue:any, falseValue?: any, defaultValue?: any) {

  return function boolValueInner(input) {

    return isBoolean(input)
    ? input=== true
      ? trueValue
      : falseValue
    : defaultValue
  };
}


// export function boolValue(trueValue:any, falseValue?: any, defaultValue?: any) {

//   const checker=(v)=>isBoolean(v)
//     ? v === true
//       ? trueValue
//       : falseValue
//     : defaultValue

//   return function boolValueInner(input) {

//     return isPlainObject(input)?mapObj(input,(value, k) => ({[k]: defaultTo(value,checker(value))  }))  :checker(input)
//   };
// }
