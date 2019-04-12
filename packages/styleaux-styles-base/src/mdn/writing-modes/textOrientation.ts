import { TextOrientationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTORIENTATION='textOrientation'

export interface TextOrientationProps<T=TextOrientationProperty> {
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  [TEXTORIENTATION]: T;
}

export const createTextOrientation = <
  T = TextOrientationProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextOrientationProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextOrientationProps<T>,Theme,Media>({
    cssProp:TEXTORIENTATION,
    prop:TEXTORIENTATION,
    key,
    transformValue,
  })

export const createTextOrientationRule = <T = TextOrientationProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTORIENTATION, getValue: transformer})

export const textOrientation =createTextOrientation()

export const textOrientationRule =createTextOrientationRule()
