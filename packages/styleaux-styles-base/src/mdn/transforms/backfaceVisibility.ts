import { BackfaceVisibilityProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKFACEVISIBILITY='backfaceVisibility'

export interface IBackfaceVisibilityProps<T> {
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility: T;
}

export const backfaceVisibility = <
  T = BackfaceVisibilityProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackfaceVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: BACKFACEVISIBILITY,
    prop: BACKFACEVISIBILITY,
    alias,
    key,
    transformValue,
  })

export const backfaceVisibilityRule = <T = BackfaceVisibilityProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKFACEVISIBILITY, getValue: transformer})