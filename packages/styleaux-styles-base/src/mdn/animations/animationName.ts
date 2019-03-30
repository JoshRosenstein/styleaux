import { AnimationNameProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ANIMATIONNAME='animationName'

export interface IAnimationNameProps<T> {
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName: T;
}

export const animationName = <
  T = AnimationNameProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAnimationNameProps<T>, Theme, Breakpoints>({
    cssProp: ANIMATIONNAME,
    prop: ANIMATIONNAME,
    alias,
    key,
    transformValue,
  })

export const animationNameRule = <T = AnimationNameProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ANIMATIONNAME, getValue: transformer})
