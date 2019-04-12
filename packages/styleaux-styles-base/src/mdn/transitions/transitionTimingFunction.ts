import { TransitionTimingFunctionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TRANSITIONTIMINGFUNCTION='transitionTimingFunction'

export interface TransitionTimingFunctionProps<T=TransitionTimingFunctionProperty> {
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  [TRANSITIONTIMINGFUNCTION]: T;
}

export const createTransitionTimingFunction = <
  T = TransitionTimingFunctionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransitionTimingFunctionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransitionTimingFunctionProps<T>,Theme,Media>({
    cssProp:TRANSITIONTIMINGFUNCTION,
    prop:TRANSITIONTIMINGFUNCTION,
    key,
    transformValue,
  })

export const createTransitionTimingFunctionRule = <T = TransitionTimingFunctionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TRANSITIONTIMINGFUNCTION, getValue: transformer})

export const transitionTimingFunction =createTransitionTimingFunction()

export const transitionTimingFunctionRule =createTransitionTimingFunctionRule()
