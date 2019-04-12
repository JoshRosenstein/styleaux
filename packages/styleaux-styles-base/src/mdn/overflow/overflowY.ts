import { OverflowYProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OVERFLOWY='overflowY'

export interface OverflowYProps<T=OverflowYProperty> {
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  [OVERFLOWY]: T;
}

export const createOverflowY = <
  T = OverflowYProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OverflowYProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OverflowYProps<T>,Theme,Media>({
    cssProp:OVERFLOWY,
    prop:OVERFLOWY,
    key,
    transformValue,
  })

export const createOverflowYRule = <T = OverflowYProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OVERFLOWY, getValue: transformer})

export const overflowY =createOverflowY()

export const overflowYRule =createOverflowYRule()
