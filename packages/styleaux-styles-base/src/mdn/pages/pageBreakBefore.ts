import { PageBreakBeforeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PAGEBREAKBEFORE='pageBreakBefore'

export interface PageBreakBeforeProps<T=PageBreakBeforeProperty> {
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  [PAGEBREAKBEFORE]: T;
}

export const createPageBreakBefore = <
  T = PageBreakBeforeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PageBreakBeforeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PageBreakBeforeProps<T>,Theme,Media>({
    cssProp:PAGEBREAKBEFORE,
    prop:PAGEBREAKBEFORE,
    key,
    transformValue,
  })

export const createPageBreakBeforeRule = <T = PageBreakBeforeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PAGEBREAKBEFORE, getValue: transformer})

export const pageBreakBefore =createPageBreakBefore()

export const pageBreakBeforeRule =createPageBreakBeforeRule()
