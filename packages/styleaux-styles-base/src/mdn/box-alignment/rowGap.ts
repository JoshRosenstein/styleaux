import { RowGapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ROWGAP='rowGap'

export interface RowGapProps<T=RowGapProperty> {
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  [ROWGAP]: T;
}

export const createRowGap = <
  T = RowGapProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<RowGapProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<RowGapProps<T>,Theme,Media>({
    cssProp:ROWGAP,
    prop:ROWGAP,
    key,
    transformValue,
  })

export const createRowGapRule = <T = RowGapProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ROWGAP, getValue: transformer})

export const rowGap =createRowGap()

export const rowGapRule =createRowGapRule()
