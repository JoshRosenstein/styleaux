import { ClipPathProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const CLIPPATH='clipPath'

export interface ClipPathProps<T=ClipPathProperty> {
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  [CLIPPATH]: T;
}

export const createClipPath = <
  T = ClipPathProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ClipPathProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ClipPathProps<T>,Theme,Media>({
    cssProp:CLIPPATH,
    prop:CLIPPATH,
    key,
    transformValue,
  })

export const createClipPathRule = <T = ClipPathProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: CLIPPATH, getValue: transformer})

export const clipPath =createClipPath()

export const clipPathRule =createClipPathRule()
