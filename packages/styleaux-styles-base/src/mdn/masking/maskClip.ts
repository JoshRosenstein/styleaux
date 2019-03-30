import { MaskClipProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASKCLIP='maskClip'

export interface IMaskClipProps<T> {
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip: T;
}

export const maskClip = <
  T = MaskClipProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskClipProps<T>, Theme, Breakpoints>({
    cssProp: MASKCLIP,
    prop: MASKCLIP,
    alias,
    key,
    transformValue,
  })

export const maskClipRule = <T = MaskClipProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKCLIP, getValue: transformer})
