import { BreakInsideProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BREAKINSIDE='breakInside'

export interface IBreakInsideProps<T> {
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside: T;
}

export const createBreakInside = <
  T = BreakInsideProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBreakInsideProps<T>, Theme, Breakpoints>({
    cssProp: BREAKINSIDE,
    prop: BREAKINSIDE,
    alias,
    key,
    transformValue,
  })

export const createBreakInsideRule = <T = BreakInsideProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BREAKINSIDE, getValue: transformer})

export const breakInside =createBreakInside()

export const breakInsideRule =createBreakInsideRule()
