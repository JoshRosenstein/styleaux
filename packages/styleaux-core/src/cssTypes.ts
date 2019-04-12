
import * as CSS from '@styleaux/csstype'

export type CSSProperties = CSS.Properties

export type CSSPseudos = { [K in CSS.Pseudos]?: Styles }

export interface CSSObj
  extends CSSProperties,
  CSSPseudos { [propertiesName: string]: Styles }

export type Styles = | null
  | undefined
  | number
  | string
  | CSSObj


