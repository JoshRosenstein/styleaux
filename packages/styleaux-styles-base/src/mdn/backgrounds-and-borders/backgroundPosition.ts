import { BackgroundPositionProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDPOSITION='backgroundPosition'

export interface IBackgroundPositionProps<T> {
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition: T;
}

export const backgroundPosition = <
  T = BackgroundPositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundPositionProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDPOSITION,
    prop: BACKGROUNDPOSITION,
    alias,
    key,
    transformValue,
  })

export const backgroundPositionRule = <T = BackgroundPositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDPOSITION, getValue: transformer})
