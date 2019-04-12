import { BorderBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBLOCKEND='borderBlockEnd'

export interface BorderBlockEndProps<T=BorderBlockEndProperty> {
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  [BORDERBLOCKEND]: T;
}

export const createBorderBlockEnd = <
  T = BorderBlockEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockEndProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKEND,
    prop:BORDERBLOCKEND,
    key,
    transformValue,
  })

export const createBorderBlockEndRule = <T = BorderBlockEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKEND, getValue: transformer})

export const borderBlockEnd =createBorderBlockEnd()

export const borderBlockEndRule =createBorderBlockEndRule()
