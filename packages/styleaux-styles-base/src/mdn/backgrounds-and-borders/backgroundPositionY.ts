import { BackgroundPositionYProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDPOSITIONY='backgroundPositionY'

export interface IBackgroundPositionYProps<T> {
  /**
   * The **`background-position-y`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY: T;
}

export const createBackgroundPositionY = <
  T = BackgroundPositionYProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundPositionYProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDPOSITIONY,
    prop: BACKGROUNDPOSITIONY,
    alias,
    key,
    transformValue,
  })

export const createBackgroundPositionYRule = <T = BackgroundPositionYProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDPOSITIONY, getValue: transformer})

export const backgroundPositionY =createBackgroundPositionY()

export const backgroundPositionYRule =createBackgroundPositionYRule()
