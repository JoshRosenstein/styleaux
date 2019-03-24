import { rule } from "@styleaux/core";
import { BorderProperty , BorderColorProperty } from "@roseys/csstype"

export type BorderProp=BorderProperty<string | 0>
export type BorderKeys =
  | "border"
  | "borderLeft"
  | "borderRight"
  | "borderTop"
  | "borderBottom" | "borderColor";


  const borderRule = (name: BorderKeys) =>
  rule<BorderProp>(
    name
  );

  export const border=borderRule("border")
  export const borderLeft=borderRule("borderLeft")
  export const borderRight=borderRule("borderRight")
  export const borderTop=borderRule("borderTop")
  export const borderBottom= borderRule("borderBottom")
  export const borderX= [borderLeft,borderRight]
  export const borderY= [borderTop, borderBottom]
  export const borderColor= rule<BorderColorProperty>("borderColor")

