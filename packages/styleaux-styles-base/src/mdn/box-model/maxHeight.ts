import { MaxHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MAXHEIGHT='maxHeight'

export interface MaxHeightProps<T=MaxHeightProperty> {
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  [MAXHEIGHT]: T;
}

export const createMaxHeight = <
  T = MaxHeightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaxHeightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaxHeightProps<T>,Theme,Media>({
    cssProp:MAXHEIGHT,
    prop:MAXHEIGHT,
    key,
    transformValue,
  })

export const createMaxHeightRule = <T = MaxHeightProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MAXHEIGHT, getValue: transformer})

export const maxHeight =createMaxHeight()

export const maxHeightRule =createMaxHeightRule()
