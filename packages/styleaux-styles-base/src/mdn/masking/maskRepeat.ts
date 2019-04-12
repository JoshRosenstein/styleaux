import { MaskRepeatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MASKREPEAT='maskRepeat'

export interface MaskRepeatProps<T=MaskRepeatProperty> {
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  [MASKREPEAT]: T;
}

export const createMaskRepeat = <
  T = MaskRepeatProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaskRepeatProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaskRepeatProps<T>,Theme,Media>({
    cssProp:MASKREPEAT,
    prop:MASKREPEAT,
    key,
    transformValue,
  })

export const createMaskRepeatRule = <T = MaskRepeatProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MASKREPEAT, getValue: transformer})

export const maskRepeat =createMaskRepeat()

export const maskRepeatRule =createMaskRepeatRule()
