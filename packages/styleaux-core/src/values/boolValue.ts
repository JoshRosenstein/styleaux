import { isBoolean } from 'typed-is';
export function boolValue<TV = never, FV = never, DV = any>(
  trueValue: TV,
  falseValue?: FV,
  defaultValue?: DV,
): <T>(input: T) => T extends boolean ? TV | FV : DV | undefined;

export function boolValue(
  trueValue: any,
  falseValue?: any,
  defaultValue?: any,
) {
  return function boolValueInner(input: unknown) {
    return isBoolean(input)
      ? input === true
        ? trueValue
        : falseValue
      : defaultValue;
  };
}
