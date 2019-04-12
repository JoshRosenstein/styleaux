import { OverflowAnchorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OVERFLOWANCHOR='overflowAnchor'

export interface OverflowAnchorProps<T=OverflowAnchorProperty> {
  /**
   * The **`overflow-anchor`** CSS property provides a way to opt out browser scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  [OVERFLOWANCHOR]: T;
}

export const createOverflowAnchor = <
  T = OverflowAnchorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OverflowAnchorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OverflowAnchorProps<T>,Theme,Media>({
    cssProp:OVERFLOWANCHOR,
    prop:OVERFLOWANCHOR,
    key,
    transformValue,
  })

export const createOverflowAnchorRule = <T = OverflowAnchorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OVERFLOWANCHOR, getValue: transformer})

export const overflowAnchor =createOverflowAnchor()

export const overflowAnchorRule =createOverflowAnchorRule()
