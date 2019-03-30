import { AnimationFillModeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONFILLMODE='animationFillMode'

export interface IAnimationFillModeProps<T> {
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode: T;
}

export const animationFillMode = <
  T = AnimationFillModeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationFillModeProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONFILLMODE,
    prop: ANIMATIONFILLMODE,
    alias,
    key,
    transformValue,
  })

export const animationFillModeRule = <T = AnimationFillModeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONFILLMODE, getValue: transformer})
