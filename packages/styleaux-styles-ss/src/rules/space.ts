import { rule } from "@styleaux/core";
import { MarginProperty } from "@roseys/csstype"
import {spaceValue} from '../values/space-value'

export type SpaceType = MarginProperty< number> ;

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


  export const spaceRule = (name: SpaceKeys) =>
  rule<SpaceType>(
    name,spaceValue()
  );

  export const marginRule=spaceRule("margin")
  export const marginLeftRule=spaceRule("marginLeft")
  export const marginRightRule=spaceRule("marginRight")
  export const marginTopRule=  spaceRule("marginTop")
  export const marginBottomRule= spaceRule("marginBottom")
  export const marginXRule= [marginLeftRule,marginRightRule]
  export const marginYRule= [marginTopRule, marginBottomRule]

  export const paddingRule=spaceRule("padding")
  export const paddingLeftRule=spaceRule("paddingLeft")
  export const paddingRightRule=spaceRule("paddingRight")
  export const paddingTopRule=spaceRule("paddingTop")
  export const paddingBottomRule= spaceRule("paddingBottom")
  export const paddingXRule= [paddingLeftRule,paddingRightRule]
  export const paddingYRule= [paddingTopRule, paddingBottomRule]

