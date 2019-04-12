import { BorderBlockStartColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBLOCKSTARTCOLOR='borderBlockStartColor'

export interface BorderBlockStartColorProps<T=BorderBlockStartColorProperty> {
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  [BORDERBLOCKSTARTCOLOR]: T;
}

export const createBorderBlockStartColor = <
  T = BorderBlockStartColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockStartColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockStartColorProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKSTARTCOLOR,
    prop:BORDERBLOCKSTARTCOLOR,
    key,
    transformValue,
  })

export const createBorderBlockStartColorRule = <T = BorderBlockStartColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKSTARTCOLOR, getValue: transformer})

export const borderBlockStartColor =createBorderBlockStartColor()

export const borderBlockStartColorRule =createBorderBlockStartColorRule()
