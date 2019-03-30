import { BackgroundPositionXProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDPOSITIONX='backgroundPositionX'

export interface IBackgroundPositionXProps<T> {
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX: T;
}

export const backgroundPositionX = <
  T = BackgroundPositionXProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundPositionXProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDPOSITIONX,
    prop: BACKGROUNDPOSITIONX,
    alias,
    key,
    transformValue,
  })

export const backgroundPositionXRule = <T = BackgroundPositionXProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDPOSITIONX, getValue: transformer})
