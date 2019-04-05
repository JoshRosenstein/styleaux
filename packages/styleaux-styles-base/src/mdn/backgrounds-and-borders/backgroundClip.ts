import { BackgroundClipProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDCLIP='backgroundClip'

export interface IBackgroundClipProps<T> {
  /**
   * The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip: T;
}

export const createBackgroundClip = <
  T = BackgroundClipProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundClipProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDCLIP,
    prop: BACKGROUNDCLIP,
    alias,
    key,
    transformValue,
  })

export const createBackgroundClipRule = <T = BackgroundClipProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDCLIP, getValue: transformer})

export const backgroundClip =createBackgroundClip()

export const backgroundClipRule =createBackgroundClipRule()
