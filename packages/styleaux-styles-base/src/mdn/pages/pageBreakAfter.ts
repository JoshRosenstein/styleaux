import { PageBreakAfterProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PAGEBREAKAFTER='pageBreakAfter'

export interface PageBreakAfterProps<T=PageBreakAfterProperty> {
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  [PAGEBREAKAFTER]: T;
}

export const createPageBreakAfter = <
  T = PageBreakAfterProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PageBreakAfterProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PageBreakAfterProps<T>,Theme,Media>({
    cssProp:PAGEBREAKAFTER,
    prop:PAGEBREAKAFTER,
    key,
    transformValue,
  })

export const createPageBreakAfterRule = <T = PageBreakAfterProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PAGEBREAKAFTER, getValue: transformer})

export const pageBreakAfter =createPageBreakAfter()

export const pageBreakAfterRule =createPageBreakAfterRule()
