import { MarginBlockStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGINBLOCKSTART='marginBlockStart'

export interface MarginBlockStartProps<T=MarginBlockStartProperty> {
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  [MARGINBLOCKSTART]: T;
}

export const createMarginBlockStart = <
  T = MarginBlockStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginBlockStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginBlockStartProps<T>,Theme,Media>({
    cssProp:MARGINBLOCKSTART,
    prop:MARGINBLOCKSTART,
    key,
    transformValue,
  })

export const createMarginBlockStartRule = <T = MarginBlockStartProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MARGINBLOCKSTART, getValue: transformer})

export const marginBlockStart =createMarginBlockStart()

export const marginBlockStartRule =createMarginBlockStartRule()
