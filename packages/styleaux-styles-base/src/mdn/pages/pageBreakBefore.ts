import { PageBreakBeforeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PAGEBREAKBEFORE='pageBreakBefore'

export interface IPageBreakBeforeProps<T> {
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore: T;
}

export const pageBreakBefore = <
  T = PageBreakBeforeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPageBreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: PAGEBREAKBEFORE,
    prop: PAGEBREAKBEFORE,
    alias,
    key,
    transformValue,
  })

export const pageBreakBeforeRule = <T = PageBreakBeforeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PAGEBREAKBEFORE, getValue: transformer})
