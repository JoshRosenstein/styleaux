import { BoxSizingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BOXSIZING='boxSizing'

export interface BoxSizingProps<T=BoxSizingProperty> {
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  [BOXSIZING]: T;
}

export const createBoxSizing = <
  T = BoxSizingProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BoxSizingProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BoxSizingProps<T>,Theme,Media>({
    cssProp:BOXSIZING,
    prop:BOXSIZING,
    key,
    transformValue,
  })

export const createBoxSizingRule = <T = BoxSizingProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BOXSIZING, getValue: transformer})

export const boxSizing =createBoxSizing()

export const boxSizingRule =createBoxSizingRule()
