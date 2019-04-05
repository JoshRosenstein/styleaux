import { OpacityProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OPACITY='opacity'

export interface IOpacityProps<T> {
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity: T;
}

export const createOpacity = <
  T = OpacityProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOpacityProps<T>, Theme, Breakpoints>({
    cssProp: OPACITY,
    prop: OPACITY,
    alias,
    key,
    transformValue,
  })

export const createOpacityRule = <T = OpacityProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OPACITY, getValue: transformer})

export const opacity =createOpacity()

export const opacityRule =createOpacityRule()
