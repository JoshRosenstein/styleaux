import { BackgroundPositionYProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUNDPOSITIONY='backgroundPositionY'

export interface BackgroundPositionYProps<T=BackgroundPositionYProperty> {
  /**
   * The **`background-position-y`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  [BACKGROUNDPOSITIONY]: T;
}

export const createBackgroundPositionY = <
  T = BackgroundPositionYProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundPositionYProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundPositionYProps<T>,Theme,Media>({
    cssProp:BACKGROUNDPOSITIONY,
    prop:BACKGROUNDPOSITIONY,
    key,
    transformValue,
  })

export const createBackgroundPositionYRule = <T = BackgroundPositionYProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDPOSITIONY, getValue: transformer})

export const backgroundPositionY =createBackgroundPositionY()

export const backgroundPositionYRule =createBackgroundPositionYRule()
