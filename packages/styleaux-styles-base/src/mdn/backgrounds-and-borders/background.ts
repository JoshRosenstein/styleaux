import { BackgroundProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUND='background'

export interface BackgroundProps<T=BackgroundProperty> {
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  [BACKGROUND]: T;
}

export const createBackground = <
  T = BackgroundProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundProps<T>,Theme,Media>({
    cssProp:BACKGROUND,
    prop:BACKGROUND,
    key,
    transformValue,
  })

export const createBackgroundRule = <T = BackgroundProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUND, getValue: transformer})

export const background =createBackground()

export const backgroundRule =createBackgroundRule()
