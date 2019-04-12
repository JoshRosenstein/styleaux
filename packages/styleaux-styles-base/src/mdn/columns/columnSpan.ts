import { ColumnSpanProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const COLUMNSPAN='columnSpan'

export interface ColumnSpanProps<T=ColumnSpanProperty> {
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  [COLUMNSPAN]: T;
}

export const createColumnSpan = <
  T = ColumnSpanProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnSpanProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnSpanProps<T>,Theme,Media>({
    cssProp:COLUMNSPAN,
    prop:COLUMNSPAN,
    key,
    transformValue,
  })

export const createColumnSpanRule = <T = ColumnSpanProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: COLUMNSPAN, getValue: transformer})

export const columnSpan =createColumnSpan()

export const columnSpanRule =createColumnSpanRule()
