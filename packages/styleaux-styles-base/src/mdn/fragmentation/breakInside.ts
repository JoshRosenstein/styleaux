import { BreakInsideProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BREAKINSIDE = 'breakInside';

export interface BreakInsideProps<T = BreakInsideProperty> {
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
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
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  [BREAKINSIDE]: T;
}

export const createBreakInside = <
  T = BreakInsideProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BreakInsideProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BreakInsideProps<T>, Theme, Media>({
    cssProp: BREAKINSIDE,
    prop: BREAKINSIDE,
    key,
    transformValue,
  });

export const createBreakInsideRule = <T = BreakInsideProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BREAKINSIDE, getValue: transformer });

export const breakInside = createBreakInside();

export const breakInsideRule = createBreakInsideRule();
