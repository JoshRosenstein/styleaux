import { TransitionPropertyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSITIONPROPERTY='transitionProperty'

export interface TransitionPropertyProps<T=TransitionPropertyProperty> {
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  [TRANSITIONPROPERTY]: T;
}

export const createTransitionProperty = <
  T = TransitionPropertyProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TransitionPropertyProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TransitionPropertyProps<T>,Theme,Media>({
    cssProp:TRANSITIONPROPERTY,
    prop:TRANSITIONPROPERTY,
    key,
    transformValue,
  })

export const createTransitionPropertyRule = <T = TransitionPropertyProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TRANSITIONPROPERTY, getValue: transformer})

export const transitionProperty =createTransitionProperty()

export const transitionPropertyRule =createTransitionPropertyRule()
