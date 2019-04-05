
import * as CSS from '@styleaux/csstype'


export interface CSSProperties<TLength = CSS.StringHack | number> extends CSS.StandardProperties<TLength>, CSS.SvgProperties<TLength> {}

export type CSSPropertiesKeys= keyof CSSProperties

export type CSSPropertiesWithMultiValues = {
  [K in CSSPropertiesKeys]:
    | CSSProperties[K]
    //| Array<Extract<CSSProperties[K], string>>
}
/**
 * @desc Following type exists for autocompletion of key.
 */
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }
export interface CSSOthersObject {
  [propertiesName: string]: CSSObject
}



export interface ArrayCSSObject extends Array<CSSObject> {}



export interface CSSObject
  extends CSSPropertiesWithMultiValues,
  CSSPseudos  {}



export type NestedCSSObject=CSSObject &{
  [propertiesName: string]: CSSObject
}



export type FunctionCSSObject= (mergedProps) => CSSObject

