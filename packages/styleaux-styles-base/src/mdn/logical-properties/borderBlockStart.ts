import { BorderBlockStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBLOCKSTART='borderBlockStart'

export interface BorderBlockStartProps<T=BorderBlockStartProperty> {
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  [BORDERBLOCKSTART]: T;
}

export const createBorderBlockStart = <
  T = BorderBlockStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderBlockStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderBlockStartProps<T>,Theme,Media>({
    cssProp:BORDERBLOCKSTART,
    prop:BORDERBLOCKSTART,
    key,
    transformValue,
  })

export const createBorderBlockStartRule = <T = BorderBlockStartProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERBLOCKSTART, getValue: transformer})

export const borderBlockStart =createBorderBlockStart()

export const borderBlockStartRule =createBorderBlockStartRule()
