import { OverflowXProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OVERFLOWX='overflowX'

export interface OverflowXProps<T=OverflowXProperty> {
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  [OVERFLOWX]: T;
}

export const createOverflowX = <
  T = OverflowXProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OverflowXProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OverflowXProps<T>,Theme,Media>({
    cssProp:OVERFLOWX,
    prop:OVERFLOWX,
    key,
    transformValue,
  })

export const createOverflowXRule = <T = OverflowXProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OVERFLOWX, getValue: transformer})

export const overflowX =createOverflowX()

export const overflowXRule =createOverflowXRule()
