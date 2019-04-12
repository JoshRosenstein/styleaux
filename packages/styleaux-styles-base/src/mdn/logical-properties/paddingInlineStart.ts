import { PaddingInlineStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGINLINESTART='paddingInlineStart'

export interface PaddingInlineStartProps<T=PaddingInlineStartProperty> {
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  [PADDINGINLINESTART]: T;
}

export const createPaddingInlineStart = <
  T = PaddingInlineStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingInlineStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingInlineStartProps<T>,Theme,Media>({
    cssProp:PADDINGINLINESTART,
    prop:PADDINGINLINESTART,
    key,
    transformValue,
  })

export const createPaddingInlineStartRule = <T = PaddingInlineStartProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PADDINGINLINESTART, getValue: transformer})

export const paddingInlineStart =createPaddingInlineStart()

export const paddingInlineStartRule =createPaddingInlineStartRule()
