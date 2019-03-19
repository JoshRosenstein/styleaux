import { style } from "./style";
import { CSSPropertyKeys } from "../types";

export function rule<T>(cssProp: CSSPropertyKeys, getValue?: any) {
  return style<T>({
    cssProp,
    getValue
  });
}
