import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PageBreakInsideProperty } from '@styleaux/csstype';

const PAGEBREAKINSIDE = 'pageBreakInside';

export interface PageBreakInsideProps<T = PageBreakInsideProperty> {
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  [PAGEBREAKINSIDE]: T;
}

export const createPageBreakInside = <
  T = PageBreakInsideProperty,
  Media = never,
  Theme = never
>(
  config: Config<PageBreakInsideProps<T>, Theme> = {},
) =>
  style<PageBreakInsideProps<T>, Theme, Media>({
    cssProp: PAGEBREAKINSIDE,
    prop: PAGEBREAKINSIDE,
    ...config,
  });

export const createPageBreakInsideRule = <
  T = PageBreakInsideProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PAGEBREAKINSIDE, getValue: transformer });

export const pageBreakInside = createPageBreakInside();

export const pageBreakInsideRule = createPageBreakInsideRule();
