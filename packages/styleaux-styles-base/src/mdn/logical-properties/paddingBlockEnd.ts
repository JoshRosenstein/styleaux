import { PaddingBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PADDINGBLOCKEND='paddingBlockEnd'

export interface PaddingBlockEndProps<T=PaddingBlockEndProperty> {
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  [PADDINGBLOCKEND]: T;
}

export const createPaddingBlockEnd = <
  T = PaddingBlockEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingBlockEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingBlockEndProps<T>,Theme,Media>({
    cssProp:PADDINGBLOCKEND,
    prop:PADDINGBLOCKEND,
    key,
    transformValue,
  })

export const createPaddingBlockEndRule = <T = PaddingBlockEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PADDINGBLOCKEND, getValue: transformer})

export const paddingBlockEnd =createPaddingBlockEnd()

export const paddingBlockEndRule =createPaddingBlockEndRule()
