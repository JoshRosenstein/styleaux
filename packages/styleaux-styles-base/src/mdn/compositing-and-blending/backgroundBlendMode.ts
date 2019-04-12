import { BackgroundBlendModeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUNDBLENDMODE='backgroundBlendMode'

export interface BackgroundBlendModeProps<T=BackgroundBlendModeProperty> {
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  [BACKGROUNDBLENDMODE]: T;
}

export const createBackgroundBlendMode = <
  T = BackgroundBlendModeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundBlendModeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundBlendModeProps<T>,Theme,Media>({
    cssProp:BACKGROUNDBLENDMODE,
    prop:BACKGROUNDBLENDMODE,
    key,
    transformValue,
  })

export const createBackgroundBlendModeRule = <T = BackgroundBlendModeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDBLENDMODE, getValue: transformer})

export const backgroundBlendMode =createBackgroundBlendMode()

export const backgroundBlendModeRule =createBackgroundBlendModeRule()
