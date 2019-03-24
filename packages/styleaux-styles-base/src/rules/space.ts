import { rule } from "@styleaux/core";
import { MarginProperty } from "@roseys/csstype"


export type SpaceType = MarginProperty<0 | number> ;

export type SpaceKeys =
  | "margin"
  | "marginLeft"
  | "marginRight"
  | "marginTop"
  | "marginBottom"
  | "padding"
  | "paddingLeft"
  | "paddingRight"
  | "paddingTop"
  | "paddingBottom"


   const spaceRule = (name: SpaceKeys) =>
  rule<SpaceType>(
    name
  );

  export const margin=spaceRule("margin")
  export const marginLeft=spaceRule("marginLeft")
  export const marginRight=spaceRule("marginRight")
  export const marginTop=spaceRule("marginTop")
  export const marginBottom= spaceRule("marginBottom")
  export const marginX= [marginLeft,marginRight]
  export const marginY= [marginTop, marginBottom]

  export const padding=spaceRule("padding")
  export const paddingLeft=spaceRule("paddingLeft")
  export const paddingRight=spaceRule("paddingRight")
  export const paddingTop=spaceRule("paddingTop")
  export const paddingBottom= spaceRule("paddingBottom")
  export const paddingX= [paddingLeft,paddingRight]
  export const paddingY= [paddingTop, paddingBottom]


