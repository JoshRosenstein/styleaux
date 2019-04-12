import { BackgroundImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BACKGROUNDIMAGE='backgroundImage'

export interface BackgroundImageProps<T=BackgroundImageProperty> {
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  [BACKGROUNDIMAGE]: T;
}

export const createBackgroundImage = <
  T = BackgroundImageProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundImageProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundImageProps<T>,Theme,Media>({
    cssProp:BACKGROUNDIMAGE,
    prop:BACKGROUNDIMAGE,
    key,
    transformValue,
  })

export const createBackgroundImageRule = <T = BackgroundImageProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDIMAGE, getValue: transformer})

export const backgroundImage =createBackgroundImage()

export const backgroundImageRule =createBackgroundImageRule()
