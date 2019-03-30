import { BackgroundPositionYProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDPOSITIONY='backgroundPositionY'

export interface IBackgroundPositionYProps<T> {
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY: T;
}

export const backgroundPositionY = <
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

export const backgroundPositionYRule = <T = BackgroundPositionYProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDPOSITIONY, getValue: transformer})
