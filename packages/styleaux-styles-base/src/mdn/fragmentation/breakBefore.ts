import { Config } from '../../types';
import { BreakBeforeProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BREAKBEFORE = 'breakBefore';

export interface BreakBeforeProps<T = BreakBeforeProperty> {
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  |   No   | **12** | **10** |
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
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  [BREAKBEFORE]: T;
}

export const createBreakBefore = <
  T = BreakBeforeProperty,
  Media = never,
  Theme = never
>(
  config: Config<BreakBeforeProps<T>, Theme> = {},
) =>
  style<BreakBeforeProps<T>, Theme, Media>({
    cssProp: BREAKBEFORE,
    prop: BREAKBEFORE,
    ...config,
  });

export const createBreakBeforeRule = <T = BreakBeforeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BREAKBEFORE, getValue: transformer });

export const breakBefore = createBreakBefore();

export const breakBeforeRule = createBreakBeforeRule();
