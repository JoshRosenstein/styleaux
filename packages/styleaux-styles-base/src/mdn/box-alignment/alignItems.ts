import { AlignItemsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ALIGNITEMS='alignItems'

export interface AlignItemsProps<T=AlignItemsProperty> {
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  [ALIGNITEMS]: T;
}

export const createAlignItems = <
  T = AlignItemsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AlignItemsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AlignItemsProps<T>,Theme,Media>({
    cssProp:ALIGNITEMS,
    prop:ALIGNITEMS,
    key,
    transformValue,
  })

export const createAlignItemsRule = <T = AlignItemsProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ALIGNITEMS, getValue: transformer})

export const alignItems =createAlignItems()

export const alignItemsRule =createAlignItemsRule()
