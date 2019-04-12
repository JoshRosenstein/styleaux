import { BreakInsideProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BREAKINSIDE='breakInside'

export interface BreakInsideProps<T=BreakInsideProperty> {
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  [BREAKINSIDE]: T;
}

export const createBreakInside = <
  T = BreakInsideProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BreakInsideProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BreakInsideProps<T>,Theme,Media>({
    cssProp:BREAKINSIDE,
    prop:BREAKINSIDE,
    key,
    transformValue,
  })

export const createBreakInsideRule = <T = BreakInsideProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BREAKINSIDE, getValue: transformer})

export const breakInside =createBreakInside()

export const breakInsideRule =createBreakInsideRule()
