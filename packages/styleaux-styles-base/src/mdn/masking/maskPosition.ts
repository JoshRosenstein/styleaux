import { MaskPositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MASKPOSITION='maskPosition'

export interface MaskPositionProps<T=MaskPositionProperty> {
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  [MASKPOSITION]: T;
}

export const createMaskPosition = <
  T = MaskPositionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaskPositionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaskPositionProps<T>,Theme,Media>({
    cssProp:MASKPOSITION,
    prop:MASKPOSITION,
    key,
    transformValue,
  })

export const createMaskPositionRule = <T = MaskPositionProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MASKPOSITION, getValue: transformer})

export const maskPosition =createMaskPosition()

export const maskPositionRule =createMaskPositionRule()
