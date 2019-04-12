import { TransitionDelayProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSITIONDELAY='transitionDelay'

export interface TransitionDelayProps<T=TransitionDelayProperty> {
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  [TRANSITIONDELAY]: T;
}

export const createTransitionDelay = <
  T = TransitionDelayProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransitionDelayProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransitionDelayProps<T>,Theme,Media>({
    cssProp:TRANSITIONDELAY,
    prop:TRANSITIONDELAY,
    key,
    transformValue,
  })

export const createTransitionDelayRule = <T = TransitionDelayProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TRANSITIONDELAY, getValue: transformer})

export const transitionDelay =createTransitionDelay()

export const transitionDelayRule =createTransitionDelayRule()
