import { MixBlendModeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MIXBLENDMODE='mixBlendMode'

export interface IMixBlendModeProps<T> {
  /**
   * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode: T;
}

export const mixBlendMode = <
  T = MixBlendModeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMixBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: MIXBLENDMODE,
    prop: MIXBLENDMODE,
    alias,
    key,
    transformValue,
  })

export const mixBlendModeRule = <T = MixBlendModeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MIXBLENDMODE, getValue: transformer})
