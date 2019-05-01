import { BoxDecorationBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BOXDECORATIONBREAK='boxDecorationBreak'

export interface BoxDecorationBreakProps<T=BoxDecorationBreakProperty> {
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  [BOXDECORATIONBREAK]: T;
}

export const createBoxDecorationBreak = <
  T = BoxDecorationBreakProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BoxDecorationBreakProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BoxDecorationBreakProps<T>,Theme,Media>({
    cssProp:BOXDECORATIONBREAK,
    prop:BOXDECORATIONBREAK,
    key,
    transformValue,
  })

export const createBoxDecorationBreakRule = <T = BoxDecorationBreakProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BOXDECORATIONBREAK, getValue: transformer})

export const boxDecorationBreak =createBoxDecorationBreak()

export const boxDecorationBreakRule =createBoxDecorationBreakRule()
