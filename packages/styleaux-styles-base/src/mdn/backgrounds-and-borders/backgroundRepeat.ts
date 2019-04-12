import { BackgroundRepeatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUNDREPEAT='backgroundRepeat'

export interface BackgroundRepeatProps<T=BackgroundRepeatProperty> {
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  [BACKGROUNDREPEAT]: T;
}

export const createBackgroundRepeat = <
  T = BackgroundRepeatProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundRepeatProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundRepeatProps<T>,Theme,Media>({
    cssProp:BACKGROUNDREPEAT,
    prop:BACKGROUNDREPEAT,
    key,
    transformValue,
  })

export const createBackgroundRepeatRule = <T = BackgroundRepeatProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDREPEAT, getValue: transformer})

export const backgroundRepeat =createBackgroundRepeat()

export const backgroundRepeatRule =createBackgroundRepeatRule()
