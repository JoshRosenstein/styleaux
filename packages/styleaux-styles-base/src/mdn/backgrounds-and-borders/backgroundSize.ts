import { BackgroundSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKGROUNDSIZE='backgroundSize'

export interface BackgroundSizeProps<T=BackgroundSizeProperty> {
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  [BACKGROUNDSIZE]: T;
}

export const createBackgroundSize = <
  T = BackgroundSizeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundSizeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundSizeProps<T>,Theme,Media>({
    cssProp:BACKGROUNDSIZE,
    prop:BACKGROUNDSIZE,
    key,
    transformValue,
  })

export const createBackgroundSizeRule = <T = BackgroundSizeProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDSIZE, getValue: transformer})

export const backgroundSize =createBackgroundSize()

export const backgroundSizeRule =createBackgroundSizeRule()
