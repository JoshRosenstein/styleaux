import { BackgroundRepeatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDREPEAT='backgroundRepeat'

export interface IBackgroundRepeatProps<T> {
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat: T;
}

export const createBackgroundRepeat = <
  T = BackgroundRepeatProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundRepeatProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDREPEAT,
    prop: BACKGROUNDREPEAT,
    alias,
    key,
    transformValue,
  })

export const createBackgroundRepeatRule = <T = BackgroundRepeatProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDREPEAT, getValue: transformer})

export const backgroundRepeat =createBackgroundRepeat()

export const backgroundRepeatRule =createBackgroundRepeatRule()
