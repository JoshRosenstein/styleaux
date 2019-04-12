import { PageBreakInsideProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PAGEBREAKINSIDE='pageBreakInside'

export interface PageBreakInsideProps<T=PageBreakInsideProperty> {
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  [PAGEBREAKINSIDE]: T;
}

export const createPageBreakInside = <
  T = PageBreakInsideProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PageBreakInsideProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PageBreakInsideProps<T>,Theme,Media>({
    cssProp:PAGEBREAKINSIDE,
    prop:PAGEBREAKINSIDE,
    key,
    transformValue,
  })

export const createPageBreakInsideRule = <T = PageBreakInsideProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PAGEBREAKINSIDE, getValue: transformer})

export const pageBreakInside =createPageBreakInside()

export const pageBreakInsideRule =createPageBreakInsideRule()
