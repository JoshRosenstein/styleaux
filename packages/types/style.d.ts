import * as CSS from '@styleaux/csstype';

export type Unit = string | number;
export type Nil = null | undefined;

////// csstype //////
type CSSK = keyof CSS.Properties;
export type CSSKeys = CSSK | CSS.StringHack;
export type CSSProperties = CSS.Properties;

export type CSSPseudos = { [K in CSS.Pseudos]?: Styles };

export interface CSSObj extends CSSProperties, CSSPseudos {
  [propertiesName: string]: Styles;
}

export type NullableCSSObj = CSSObj | Nil;

export type Styles = Unit | NullableCSSObj;

export type SimpleStyles = {
  [ruleOrSelector: string]: Unit | SimpleStyles;
};

export type PickCSSProps<K extends keyof CSSProperties> = {
  [P in K]: NonNullable<CSSProperties[P]>
};

export type PickCSSPropsPartial<K extends keyof CSSProperties> = {
  [P in K]?: NonNullable<CSSProperties[P]>
};

////// Gernalized///////
export interface SimpleStyle {
  [propertiesName: string]: StyleValue;
}

export interface NestedStyle<S> {
  [key: string]: S;
}

export type StyleValue = Unit | Nil;

//export type Style<S extends SimpleStyle=SimpleStyle> = S | NestedStyle<S>

//export type StyleArray<S extends SimpleStyle =SimpleStyle> = Style<S>[]

type Style<S extends SimpleStyle = SimpleStyle> = S | { [key: string]: Style };

interface StyleArray extends Array<Style> {}

type StyleResult<S extends SimpleStyle = SimpleStyle> =
  | Unit
  | Nil
  | S
  | { [key: string]: StyleResult }
  | StyleResultArray;

interface StyleResultArray extends Array<StyleResult> {}

/// TODO: Remove , removes StingHack
export type HasLiteralUnion<T extends string> = T extends object ? true : never;

export type CleanLiteralStringUnion<T extends string> = HasLiteralUnion<
  T
> extends true
  ? Exclude<T, object>
  : T;

export type UndoLiteralStringUnion<T extends string> = HasLiteralUnion<
  T
> extends true
  ? Exclude<T, object> | string
  : T;

export type UndoLiteralStringUnionProps<T extends any> = {
  [K in keyof T]: UndoLiteralStringUnion<T[K]>
};
