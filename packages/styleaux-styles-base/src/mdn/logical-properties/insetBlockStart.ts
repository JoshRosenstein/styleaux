import { InsetBlockStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const INSETBLOCKSTART='insetBlockStart'

export interface InsetBlockStartProps<T=InsetBlockStartProperty> {
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  [INSETBLOCKSTART]: T;
}

export const createInsetBlockStart = <
  T = InsetBlockStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<InsetBlockStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<InsetBlockStartProps<T>,Theme,Media>({
    cssProp:INSETBLOCKSTART,
    prop:INSETBLOCKSTART,
    key,
    transformValue,
  })

export const createInsetBlockStartRule = <T = InsetBlockStartProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: INSETBLOCKSTART, getValue: transformer})

export const insetBlockStart =createInsetBlockStart()

export const insetBlockStartRule =createInsetBlockStartRule()
