import { TransitionPropertyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSITIONPROPERTY='transitionProperty'

export interface ITransitionPropertyProps<T> {
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty: T;
}

export const createTransitionProperty = <
  T = TransitionPropertyProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITransitionPropertyProps<T>, Theme, Breakpoints>({
    cssProp: TRANSITIONPROPERTY,
    prop: TRANSITIONPROPERTY,
    alias,
    key,
    transformValue,
  })

export const createTransitionPropertyRule = <T = TransitionPropertyProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSITIONPROPERTY, getValue: transformer})

export const transitionProperty =createTransitionProperty()

export const transitionPropertyRule =createTransitionPropertyRule()
