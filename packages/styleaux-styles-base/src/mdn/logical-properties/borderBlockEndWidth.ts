import { BorderBlockEndWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBLOCKENDWIDTH='borderBlockEndWidth'

export interface BorderBlockEndWidthProps<T=BorderBlockEndWidthProperty> {
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  [BORDERBLOCKENDWIDTH]: T;
}

export const createBorderBlockEndWidth = <
  T = BorderBlockEndWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockEndWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockEndWidthProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKENDWIDTH,
    prop:BORDERBLOCKENDWIDTH,
    key,
    transformValue,
  })

export const createBorderBlockEndWidthRule = <T = BorderBlockEndWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKENDWIDTH, getValue: transformer})

export const borderBlockEndWidth =createBorderBlockEndWidth()

export const borderBlockEndWidthRule =createBorderBlockEndWidthRule()
