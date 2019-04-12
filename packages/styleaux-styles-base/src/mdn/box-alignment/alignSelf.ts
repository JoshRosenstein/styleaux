import { AlignSelfProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ALIGNSELF='alignSelf'

export interface AlignSelfProps<T=AlignSelfProperty> {
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  [ALIGNSELF]: T;
}

export const createAlignSelf = <
  T = AlignSelfProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AlignSelfProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AlignSelfProps<T>,Theme,Media>({
    cssProp:ALIGNSELF,
    prop:ALIGNSELF,
    key,
    transformValue,
  })

export const createAlignSelfRule = <T = AlignSelfProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ALIGNSELF, getValue: transformer})

export const alignSelf =createAlignSelf()

export const alignSelfRule =createAlignSelfRule()
