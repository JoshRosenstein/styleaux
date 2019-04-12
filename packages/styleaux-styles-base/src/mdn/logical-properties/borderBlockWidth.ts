import { BorderBlockWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERBLOCKWIDTH='borderBlockWidth'

export interface BorderBlockWidthProps<T=BorderBlockWidthProperty> {
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  [BORDERBLOCKWIDTH]: T;
}

export const createBorderBlockWidth = <
  T = BorderBlockWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockWidthProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKWIDTH,
    prop:BORDERBLOCKWIDTH,
    key,
    transformValue,
  })

export const createBorderBlockWidthRule = <T = BorderBlockWidthProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKWIDTH, getValue: transformer})

export const borderBlockWidth =createBorderBlockWidth()

export const borderBlockWidthRule =createBorderBlockWidthRule()
