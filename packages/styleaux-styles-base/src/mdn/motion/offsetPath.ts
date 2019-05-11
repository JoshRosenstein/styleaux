import { OffsetPathProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OFFSETPATH = 'offsetPath';

export interface OffsetPathProps<T = OffsetPathProperty> {
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |   No   |  No  | No  |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  [OFFSETPATH]: T;
}

export const createOffsetPath = <
  T = OffsetPathProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<OffsetPathProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<OffsetPathProps<T>, Theme, Media>({
    cssProp: OFFSETPATH,
    prop: OFFSETPATH,
    key,
    transformValue,
  });

export const createOffsetPathRule = <T = OffsetPathProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OFFSETPATH, getValue: transformer });

export const offsetPath = createOffsetPath();

export const offsetPathRule = createOffsetPathRule();
