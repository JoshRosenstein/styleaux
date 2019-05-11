import { DirectionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const DIRECTION = 'direction';

export interface DirectionProps<T = DirectionProperty> {
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  [DIRECTION]: T;
}

export const createDirection = <
  T = DirectionProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<DirectionProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<DirectionProps<T>, Theme, Media>({
    cssProp: DIRECTION,
    prop: DIRECTION,
    key,
    transformValue,
  });

export const createDirectionRule = <T = DirectionProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: DIRECTION, getValue: transformer });

export const direction = createDirection();

export const directionRule = createDirectionRule();
