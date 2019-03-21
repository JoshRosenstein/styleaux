import { rule } from "@styleaux/core";
import { BorderProperty , BorderColorProperty } from "csstype"

export type BorderProp<TLength=string | 0>=BorderProperty<TLength>
export type BorderKeys =
  | "border"
  | "borderLeft"
  | "borderRight"
  | "borderTop"
  | "borderBottom" | "borderColor";


  export const borderRule = <T>(name: BorderKeys) =>
  rule<T>(
    name
  );

  export const border=borderRule<BorderProp>("border")
  export const borderLeft=borderRule<BorderProp>("borderLeft")
  export const borderRight=borderRule<BorderProp>("borderRight")
  export const borderTop=borderRule<BorderProp>("borderTop")
  export const borderBottom= borderRule<BorderProp>("borderBottom")
  export const borderX= [borderLeft,borderRight]
  export const borderY= [borderTop, borderBottom]
  export const borderColor= borderRule<BorderColorProperty>("borderColor")

