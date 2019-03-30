import { PageBreakAfterProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PAGEBREAKAFTER='pageBreakAfter'

export interface IPageBreakAfterProps<T> {
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter: T;
}

export const pageBreakAfter = <
  T = PageBreakAfterProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPageBreakAfterProps<T>, Theme, Breakpoints>({
    cssProp: PAGEBREAKAFTER,
    prop: PAGEBREAKAFTER,
    alias,
    key,
    transformValue,
  })

export const pageBreakAfterRule = <T = PageBreakAfterProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PAGEBREAKAFTER, getValue: transformer})
