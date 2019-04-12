import { LineHeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const LINEHEIGHT='lineHeight'

export interface LineHeightProps<T=LineHeightProperty> {
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  [LINEHEIGHT]: T;
}

export const createLineHeight = <
  T = LineHeightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<LineHeightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<LineHeightProps<T>,Theme,Media>({
    cssProp:LINEHEIGHT,
    prop:LINEHEIGHT,
    key,
    transformValue,
  })

export const createLineHeightRule = <T = LineHeightProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: LINEHEIGHT, getValue: transformer})

export const lineHeight =createLineHeight()

export const lineHeightRule =createLineHeightRule()
