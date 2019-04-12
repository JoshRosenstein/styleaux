import { PaddingBlockStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PADDINGBLOCKSTART='paddingBlockStart'

export interface PaddingBlockStartProps<T=PaddingBlockStartProperty> {
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  [PADDINGBLOCKSTART]: T;
}

export const createPaddingBlockStart = <
  T = PaddingBlockStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingBlockStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingBlockStartProps<T>,Theme,Media>({
    cssProp:PADDINGBLOCKSTART,
    prop:PADDINGBLOCKSTART,
    key,
    transformValue,
  })

export const createPaddingBlockStartRule = <T = PaddingBlockStartProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PADDINGBLOCKSTART, getValue: transformer})

export const paddingBlockStart =createPaddingBlockStart()

export const paddingBlockStartRule =createPaddingBlockStartRule()
