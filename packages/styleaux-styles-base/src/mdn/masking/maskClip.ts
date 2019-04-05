import { MaskClipProperty } from '@styleaux/csstype';

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

export const createMaskClip = <
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

export const createMaskClipRule = <T = MaskClipProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKCLIP, getValue: transformer})

export const maskClip =createMaskClip()

export const maskClipRule =createMaskClipRule()
