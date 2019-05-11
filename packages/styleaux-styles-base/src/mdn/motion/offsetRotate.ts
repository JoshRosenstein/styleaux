import { OffsetRotateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OFFSETROTATE = 'offsetRotate';

export interface OffsetRotateProps<T = OffsetRotateProperty> {
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   No    |   No   |  No  | No  |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  [OFFSETROTATE]: T;
}

export const createOffsetRotate = <
  T = OffsetRotateProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<OffsetRotateProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<OffsetRotateProps<T>, Theme, Media>({
    cssProp: OFFSETROTATE,
    prop: OFFSETROTATE,
    key,
    transformValue,
  });

export const createOffsetRotateRule = <T = OffsetRotateProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OFFSETROTATE, getValue: transformer });

export const offsetRotate = createOffsetRotate();

export const offsetRotateRule = createOffsetRotateRule();
