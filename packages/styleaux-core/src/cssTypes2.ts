
import * as CSS from '@styleaux/csstype'



export type Equal<A, B, T, F> = A extends B ? (B extends A ? T : F) : F

export type CSSProperties = CSS.PropertiesFallback<number | string>
export type CSSProperties2 = CSS.Properties

export type CSSPropertiesWithMultiValues = CSSProperties
/**
 * @desc Following type exists for autocompletion of key.
 */
export type CSSPseudos<MP> = { [K in CSS.Pseudos]?: ObjectInterpolation<MP> }

export type CSSPseudos2<MP> = { [K in CSS.Pseudos]?: ObjectInterpolation2<MP> }

export type CSSPseudos3<MP> = { [K in CSS.Pseudos]?: ObjectInterpolation3<MP> }

export interface CSSOthersObject<MP> {
  [propertiesName: string]: Interpolation<MP>
}

export interface CSSOthersObject2<MP> {
  [propertiesName: string]: Interpolation2<MP>
}

export interface CSSOthersObject3<MP> {
  [propertiesName: string]: Interpolation3<MP>
}

export type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject }

export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {}

export type CSSInterpolation =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | CSSObject
  | ArrayCSSInterpolation

export interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation
}

export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudosForCSSObject,
    CSSOthersObjectForCSSObject {}

export interface ComponentSelector {
  __emotion_styles: any
}

export type Keyframes = {
  name: string
  styles: string
  anim: number
  toString: () => string
} & string

export interface ArrayInterpolation<MP> extends Array<Interpolation<MP>> {}

export interface ArrayInterpolation2<MP> extends Array<Interpolation2<MP>> {}

export interface ObjectInterpolation<MP>
  extends CSSPropertiesWithMultiValues,
    CSSPseudos<MP>,
    CSSOthersObject<MP> {}

    export interface ObjectInterpolation2<MP>
  extends CSSProperties2,
    CSSPseudos2<MP>,
    CSSOthersObject2<MP> {}

    export interface ObjectInterpolation3<MP=undefined>
    extends CSSProperties2,
    CSSPseudos3<MP>,
      CSSOthersObject3<MP> {}

export type FunctionInterpolation<MP> = (mergedProps: MP) => Interpolation<MP>

export type Interpolation<MP = undefined> =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | ArrayInterpolation<MP>
  | ObjectInterpolation<MP>
  | Equal<MP, undefined, never, FunctionInterpolation<MP>>


  export type Interpolation2<MP = undefined> =    | null
  | undefined
  | boolean
  | number
  | string
  | ObjectInterpolation2<MP>  | Equal<MP, undefined, never, FunctionInterpolation<MP>>

  export type Interpolation3<MP = undefined> =    | null
  | undefined
  | boolean
  | number
  | string
  | ObjectInterpolation3<MP>  | Equal<MP, undefined, never, FunctionInterpolation<MP>>

//  const a:Interpolation2={marginBottom:1}
