import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PageBreakBeforeProperty } from '@styleaux/csstype';

const PAGEBREAKBEFORE = 'pageBreakBefore';

export interface PageBreakBeforeProps<T = PageBreakBeforeProperty> {
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  [PAGEBREAKBEFORE]: T;
}

export const createPageBreakBefore = <
  T = PageBreakBeforeProperty,
  Media = never,
  Theme = never
>(
  config: Config<PageBreakBeforeProps<T>, Theme> = {},
) =>
  style<PageBreakBeforeProps<T>, Theme, Media>({
    cssProp: PAGEBREAKBEFORE,
    prop: PAGEBREAKBEFORE,
    ...config,
  });

export const createPageBreakBeforeRule = <
  T = PageBreakBeforeProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PAGEBREAKBEFORE, getValue: transformer });

export const pageBreakBefore = createPageBreakBefore();

export const pageBreakBeforeRule = createPageBreakBeforeRule();
