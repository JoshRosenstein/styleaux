import { isNumber } from "typed-is";
import { px } from "../utils";

const identity = <T>(a: T) => a;

const percentage = (n: number) => (n > 0 && n <= 1 ? `${n * 100}%` : n);

export function createPercentageValue({
  transformValue = identity
}: {
  transformValue: (v: string | number) => string | number;
}) {
  return function percentageValue<DV>(defaultValue: DV) {
    return function dopercentageValue(
      input: number | string
    ): DV | ReturnType<typeof transformValue> {
      return isNumber(input) ? transformValue(percentage(input)) : defaultValue;
    };
  };
}

export const percentageValue = createPercentageValue({
  transformValue: px
});
