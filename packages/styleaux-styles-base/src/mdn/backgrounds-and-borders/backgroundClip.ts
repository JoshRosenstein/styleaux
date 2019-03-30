import { BackgroundClipProperty } from '@roseys/csstype';

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

export const backgroundClip = <
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

export const backgroundClipRule = <T = BackgroundClipProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDCLIP, getValue: transformer})
