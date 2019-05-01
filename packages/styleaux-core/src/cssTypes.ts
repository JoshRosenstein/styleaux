
import * as CSS from '@styleaux/csstype'

export type CSSKeys = keyof CSS.Properties | CSS.StringHack
export type CSSProperties = CSS.Properties

export type CSSPseudos = { [K in CSS.Pseudos]?: Styles }

export interface CSSObj
  extends CSSProperties,
  CSSPseudos { [propertiesName: string]: Styles }

export type NullableCSSObj = CSSObj | null | undefined

export type Styles =
  | number
  | string
  | NullableCSSObj


