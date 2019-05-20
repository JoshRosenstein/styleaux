import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PageBreakAfterProperty } from '@styleaux/csstype';

const PAGEBREAKAFTER = 'pageBreakAfter';

export interface PageBreakAfterProps<T = PageBreakAfterProperty> {
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  [PAGEBREAKAFTER]: T;
}

export const createPageBreakAfter = <
  T = PageBreakAfterProperty,
  Media = never,
  Theme = never
>(
  config: Config<PageBreakAfterProps<T>, Theme> = {},
) =>
  style<PageBreakAfterProps<T>, Theme, Media>({
    cssProp: PAGEBREAKAFTER,
    prop: PAGEBREAKAFTER,
    ...config,
  });

export const createPageBreakAfterRule = <
  T = PageBreakAfterProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PAGEBREAKAFTER, getValue: transformer });

export const pageBreakAfter = createPageBreakAfter();

export const pageBreakAfterRule = createPageBreakAfterRule();
