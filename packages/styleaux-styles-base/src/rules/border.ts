import { rule } from "@styleaux/core";
import { BorderProperty , BorderColorProperty } from "@roseys/csstype"

export type BorderProp=BorderProperty<string | 0>
export type BorderKeys =
  | "border"
  | "borderLeft"
  | "borderRight"
  | "borderTop"
  | "borderBottom" | "borderColor";


  const borderRuleHelper = (name: BorderKeys) =>
  rule<BorderProp>(
    name
  );

  export const borderRule =borderRuleHelper("border")
  export const borderLeftRule =borderRuleHelper("borderLeft")
  export const borderRightRule =borderRuleHelper("borderRight")
  export const borderTopRule =borderRuleHelper("borderTop")
  export const borderBottomRule= borderRuleHelper("borderBottom")
  export const borderXRule= [borderLeftRule,borderRightRule]
  export const borderYRule= [borderTopRule, borderBottomRule]
  export const borderColorRule= rule<BorderColorProperty>("borderColor")

