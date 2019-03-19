import { toArray } from "@roseys/futils";
import { getThemeValue } from "../getters";
import { everyMedia } from "./everyMedia";

type themeStyleConfig={themeKey:string,transformValue?:(...args:any[])=>any,themeGetter?:(...args:any[])=>any}

function themeStyle<T>({
  themeKey,
  transformValue,
  themeGetter = getThemeValue(themeKey, transformValue)
}:themeStyleConfig) {
  return (inputs: T[] | T, props, mediaKey) =>
    toArray(inputs).reduce(
      (acc, input) => ({
        ...acc,
        ...everyMedia(props, themeGetter(input, null, mediaKey)(props))
      }),
      {}
    );
}

export { themeStyle };
