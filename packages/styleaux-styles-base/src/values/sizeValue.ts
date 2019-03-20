import { SIZES_KEY } from "../constants";
import { px } from "../utils";
import { getThemeValue } from "@styleaux/core";
import { pathOr, identity } from "@roseys/futils";
import { isString } from "typed-is";
import { percentageValue } from "./percentageValue";

const scaleGetter = (scale, transformValue = identity) => (input, fallback) =>
  transformValue(pathOr(input, fallback)(scale));

type O = {
  transformValue?: any;
  themeKey?: string;
  scale?: any;
  getter?: (a: any, b?: any, mediakey?: string) => (props: {}) => any;
};


export function createSizeValue({
  transformValue = identity,
  themeKey = SIZES_KEY,
  scale = null,
  getter = scale
    ? scaleGetter(scale, transformValue)
    : getThemeValue(themeKey, transformValue)
}: O) {



  return <T>(defaultValue: T = (undefined as any)) => (input, props, mediaKey) => {

    if (isString(input)) {
      return getter(input, input, mediaKey)(props)

    }

    return defaultValue;
  };
}
export const siveValuepx = createSizeValue({ transformValue: px });

export const sizeValue = <T>(input: T = (undefined as any)) =>
  siveValuepx(percentageValue<T>(input));
