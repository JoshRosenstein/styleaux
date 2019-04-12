import { MinHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MINHEIGHT='minHeight'

export interface MinHeightProps<T=MinHeightProperty> {
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  [MINHEIGHT]: T;
}

export const createMinHeight = <
  T = MinHeightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MinHeightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MinHeightProps<T>,Theme,Media>({
    cssProp:MINHEIGHT,
    prop:MINHEIGHT,
    key,
    transformValue,
  })

export const createMinHeightRule = <T = MinHeightProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MINHEIGHT, getValue: transformer})

export const minHeight =createMinHeight()

export const minHeightRule =createMinHeightRule()
