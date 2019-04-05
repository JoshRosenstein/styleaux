import { ClipPathProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CLIPPATH='clipPath'

export interface IClipPathProps<T> {
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath: T;
}

export const createClipPath = <
  T = ClipPathProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IClipPathProps<T>, Theme, Breakpoints>({
    cssProp: CLIPPATH,
    prop: CLIPPATH,
    alias,
    key,
    transformValue,
  })

export const createClipPathRule = <T = ClipPathProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CLIPPATH, getValue: transformer})

export const clipPath =createClipPath()

export const clipPathRule =createClipPathRule()
