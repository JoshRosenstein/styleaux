import { MaskOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MASKORIGIN='maskOrigin'

export interface MaskOriginProps<T=MaskOriginProperty> {
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  [MASKORIGIN]: T;
}

export const createMaskOrigin = <
  T = MaskOriginProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaskOriginProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaskOriginProps<T>,Theme,Media>({
    cssProp:MASKORIGIN,
    prop:MASKORIGIN,
    key,
    transformValue,
  })

export const createMaskOriginRule = <T = MaskOriginProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MASKORIGIN, getValue: transformer})

export const maskOrigin =createMaskOrigin()

export const maskOriginRule =createMaskOriginRule()
