import { TransitionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSITION='transition'

export interface TransitionProps<T=TransitionProperty> {
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  [TRANSITION]: T;
}

export const createTransition = <
  T = TransitionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransitionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransitionProps<T>,Theme,Media>({
    cssProp:TRANSITION,
    prop:TRANSITION,
    key,
    transformValue,
  })

export const createTransitionRule = <T = TransitionProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TRANSITION, getValue: transformer})

export const transition =createTransition()

export const transitionRule =createTransitionRule()
