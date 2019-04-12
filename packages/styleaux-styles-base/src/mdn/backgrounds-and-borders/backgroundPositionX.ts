import { BackgroundPositionXProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUNDPOSITIONX='backgroundPositionX'

export interface BackgroundPositionXProps<T=BackgroundPositionXProperty> {
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  [BACKGROUNDPOSITIONX]: T;
}

export const createBackgroundPositionX = <
  T = BackgroundPositionXProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundPositionXProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundPositionXProps<T>,Theme,Media>({
    cssProp:BACKGROUNDPOSITIONX,
    prop:BACKGROUNDPOSITIONX,
    key,
    transformValue,
  })

export const createBackgroundPositionXRule = <T = BackgroundPositionXProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDPOSITIONX, getValue: transformer})

export const backgroundPositionX =createBackgroundPositionX()

export const backgroundPositionXRule =createBackgroundPositionXRule()
