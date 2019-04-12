import { MixBlendModeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MIXBLENDMODE='mixBlendMode'

export interface MixBlendModeProps<T=MixBlendModeProperty> {
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  [MIXBLENDMODE]: T;
}

export const createMixBlendMode = <
  T = MixBlendModeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MixBlendModeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MixBlendModeProps<T>,Theme,Media>({
    cssProp:MIXBLENDMODE,
    prop:MIXBLENDMODE,
    key,
    transformValue,
  })

export const createMixBlendModeRule = <T = MixBlendModeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MIXBLENDMODE, getValue: transformer})

export const mixBlendMode =createMixBlendMode()

export const mixBlendModeRule =createMixBlendModeRule()
