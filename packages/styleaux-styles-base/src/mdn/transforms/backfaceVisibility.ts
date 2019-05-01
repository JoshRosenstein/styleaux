import { BackfaceVisibilityProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKFACEVISIBILITY='backfaceVisibility'

export interface BackfaceVisibilityProps<T=BackfaceVisibilityProperty> {
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  [BACKFACEVISIBILITY]: T;
}

export const createBackfaceVisibility = <
  T = BackfaceVisibilityProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackfaceVisibilityProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackfaceVisibilityProps<T>,Theme,Media>({
    cssProp:BACKFACEVISIBILITY,
    prop:BACKFACEVISIBILITY,
    key,
    transformValue,
  })

export const createBackfaceVisibilityRule = <T = BackfaceVisibilityProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BACKFACEVISIBILITY, getValue: transformer})

export const backfaceVisibility =createBackfaceVisibility()

export const backfaceVisibilityRule =createBackfaceVisibilityRule()
