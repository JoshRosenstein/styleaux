import { BorderCollapseProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERCOLLAPSE='borderCollapse'

export interface BorderCollapseProps<T=BorderCollapseProperty> {
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  [BORDERCOLLAPSE]: T;
}

export const createBorderCollapse = <
  T = BorderCollapseProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderCollapseProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderCollapseProps<T>,Theme,Media>({
    cssProp:BORDERCOLLAPSE,
    prop:BORDERCOLLAPSE,
    key,
    transformValue,
  })

export const createBorderCollapseRule = <T = BorderCollapseProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERCOLLAPSE, getValue: transformer})

export const borderCollapse =createBorderCollapse()

export const borderCollapseRule =createBorderCollapseRule()
