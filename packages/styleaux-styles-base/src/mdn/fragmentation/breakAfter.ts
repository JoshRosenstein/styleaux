import { BreakAfterProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BREAKAFTER='breakAfter'

export interface BreakAfterProps<T=BreakAfterProperty> {
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  [BREAKAFTER]: T;
}

export const createBreakAfter = <
  T = BreakAfterProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BreakAfterProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BreakAfterProps<T>,Theme,Media>({
    cssProp:BREAKAFTER,
    prop:BREAKAFTER,
    key,
    transformValue,
  })

export const createBreakAfterRule = <T = BreakAfterProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BREAKAFTER, getValue: transformer})

export const breakAfter =createBreakAfter()

export const breakAfterRule =createBreakAfterRule()
