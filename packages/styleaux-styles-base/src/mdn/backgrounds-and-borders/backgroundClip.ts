import { BackgroundClipProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BACKGROUNDCLIP='backgroundClip'

export interface BackgroundClipProps<T=BackgroundClipProperty> {
  /**
   * The **`background-clip`** CSS property sets whether an element's background `<color>` or `<image>` extends underneath its border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  [BACKGROUNDCLIP]: T;
}

export const createBackgroundClip = <
  T = BackgroundClipProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BackgroundClipProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BackgroundClipProps<T>,Theme,Media>({
    cssProp:BACKGROUNDCLIP,
    prop:BACKGROUNDCLIP,
    key,
    transformValue,
  })

export const createBackgroundClipRule = <T = BackgroundClipProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BACKGROUNDCLIP, getValue: transformer})

export const backgroundClip =createBackgroundClip()

export const backgroundClipRule =createBackgroundClipRule()
