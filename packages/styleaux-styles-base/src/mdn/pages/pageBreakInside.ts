import { PageBreakInsideProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PAGEBREAKINSIDE='pageBreakInside'

export interface IPageBreakInsideProps<T> {
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside: T;
}

export const pageBreakInside = <
  T = PageBreakInsideProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPageBreakInsideProps<T>, Theme, Breakpoints>({
    cssProp: PAGEBREAKINSIDE,
    prop: PAGEBREAKINSIDE,
    alias,
    key,
    transformValue,
  })

export const pageBreakInsideRule = <T = PageBreakInsideProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PAGEBREAKINSIDE, getValue: transformer})
