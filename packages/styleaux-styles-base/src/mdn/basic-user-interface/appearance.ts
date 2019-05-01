import { AppearanceProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const APPEARANCE='appearance'

export interface AppearanceProps<T=AppearanceProperty> {
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  [APPEARANCE]: T;
}

export const createAppearance = <
  T = AppearanceProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<AppearanceProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<AppearanceProps<T>,Theme,Media>({
    cssProp:APPEARANCE,
    prop:APPEARANCE,
    key,
    transformValue,
  })

export const createAppearanceRule = <T = AppearanceProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: APPEARANCE, getValue: transformer})

export const appearance =createAppearance()

export const appearanceRule =createAppearanceRule()
