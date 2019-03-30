import { MaskTypeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASKTYPE='maskType'

export interface IMaskTypeProps<T> {
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType: T;
}

export const maskType = <
  T = MaskTypeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskTypeProps<T>, Theme, Breakpoints>({
    cssProp: MASKTYPE,
    prop: MASKTYPE,
    alias,
    key,
    transformValue,
  })

export const maskTypeRule = <T = MaskTypeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKTYPE, getValue: transformer})
