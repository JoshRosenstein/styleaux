import { MarginBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGINBLOCKEND='marginBlockEnd'

export interface MarginBlockEndProps<T=MarginBlockEndProperty> {
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  [MARGINBLOCKEND]: T;
}

export const createMarginBlockEnd = <
  T = MarginBlockEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginBlockEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginBlockEndProps<T>,Theme,Media>({
    cssProp:MARGINBLOCKEND,
    prop:MARGINBLOCKEND,
    key,
    transformValue,
  })

export const createMarginBlockEndRule = <T = MarginBlockEndProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MARGINBLOCKEND, getValue: transformer})

export const marginBlockEnd =createMarginBlockEnd()

export const marginBlockEndRule =createMarginBlockEndRule()
