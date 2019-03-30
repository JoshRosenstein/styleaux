import { OverflowAnchorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OVERFLOWANCHOR='overflowAnchor'

export interface IOverflowAnchorProps<T> {
  /**
   * The **`overflow-anchor`** CSS property provides a way to opt out browser scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
   */
  overflowAnchor: T;
}

export const overflowAnchor = <
  T = OverflowAnchorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOverflowAnchorProps<T>, Theme, Breakpoints>({
    cssProp: OVERFLOWANCHOR,
    prop: OVERFLOWANCHOR,
    alias,
    key,
    transformValue,
  })

export const overflowAnchorRule = <T = OverflowAnchorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OVERFLOWANCHOR, getValue: transformer})
