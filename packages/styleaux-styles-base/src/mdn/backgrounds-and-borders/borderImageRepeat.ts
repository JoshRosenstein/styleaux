import { BorderImageRepeatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERIMAGEREPEAT='borderImageRepeat'

export interface BorderImageRepeatProps<T=BorderImageRepeatProperty> {
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  [BORDERIMAGEREPEAT]: T;
}

export const createBorderImageRepeat = <
  T = BorderImageRepeatProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderImageRepeatProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderImageRepeatProps<T>,Theme,Media>({
    cssProp:BORDERIMAGEREPEAT,
    prop:BORDERIMAGEREPEAT,
    key,
    transformValue,
  })

export const createBorderImageRepeatRule = <T = BorderImageRepeatProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERIMAGEREPEAT, getValue: transformer})

export const borderImageRepeat =createBorderImageRepeat()

export const borderImageRepeatRule =createBorderImageRepeatRule()
