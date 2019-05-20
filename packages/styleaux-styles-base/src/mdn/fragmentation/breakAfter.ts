import { Config } from '../../types';
import { BreakAfterProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BREAKAFTER = 'breakAfter';

export interface BreakAfterProps<T = BreakAfterProperty> {
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |   No   | **12** | **10** |
   *
   * ---
   *
   * _Supported in Paged Media_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * ---
   *
   * _Supported in CSS Regions_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  [BREAKAFTER]: T;
}

export const createBreakAfter = <
  T = BreakAfterProperty,
  Media = never,
  Theme = never
>(
  config: Config<BreakAfterProps<T>, Theme> = {},
) =>
  style<BreakAfterProps<T>, Theme, Media>({
    cssProp: BREAKAFTER,
    prop: BREAKAFTER,
    ...config,
  });

export const createBreakAfterRule = <T = BreakAfterProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BREAKAFTER, getValue: transformer });

export const breakAfter = createBreakAfter();

export const breakAfterRule = createBreakAfterRule();
