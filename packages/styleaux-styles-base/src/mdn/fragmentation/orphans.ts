import { OrphansProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ORPHANS = 'orphans';

export interface OrphansProps<T = OrphansProperty> {
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  [ORPHANS]: T;
}

export const createOrphans = <
  T = OrphansProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<OrphansProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<OrphansProps<T>, Theme, Media>({
    cssProp: ORPHANS,
    prop: ORPHANS,
    key,
    transformValue,
  });

export const createOrphansRule = <T = OrphansProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ORPHANS, getValue: transformer });

export const orphans = createOrphans();

export const orphansRule = createOrphansRule();
