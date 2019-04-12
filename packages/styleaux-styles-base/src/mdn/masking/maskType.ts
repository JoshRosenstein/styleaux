import { MaskTypeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MASKTYPE='maskType'

export interface MaskTypeProps<T=MaskTypeProperty> {
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  [MASKTYPE]: T;
}

export const createMaskType = <
  T = MaskTypeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaskTypeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaskTypeProps<T>,Theme,Media>({
    cssProp:MASKTYPE,
    prop:MASKTYPE,
    key,
    transformValue,
  })

export const createMaskTypeRule = <T = MaskTypeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MASKTYPE, getValue: transformer})

export const maskType =createMaskType()

export const maskTypeRule =createMaskTypeRule()
