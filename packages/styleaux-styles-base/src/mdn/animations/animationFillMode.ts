import { AnimationFillModeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ANIMATIONFILLMODE='animationFillMode'

export interface AnimationFillModeProps<T=AnimationFillModeProperty> {
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  [ANIMATIONFILLMODE]: T;
}

export const createAnimationFillMode = <
  T = AnimationFillModeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AnimationFillModeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AnimationFillModeProps<T>,Theme,Media>({
    cssProp:ANIMATIONFILLMODE,
    prop:ANIMATIONFILLMODE,
    key,
    transformValue,
  })

export const createAnimationFillModeRule = <T = AnimationFillModeProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: ANIMATIONFILLMODE, getValue: transformer})

export const animationFillMode =createAnimationFillMode()

export const animationFillModeRule =createAnimationFillModeRule()
