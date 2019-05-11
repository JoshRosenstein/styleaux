import { HeightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const HEIGHT = 'height';

export interface HeightProps<T = HeightProperty> {
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  [HEIGHT]: T;
}

export const createHeight = <T = HeightProperty, Media = never, Theme = never>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<HeightProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<HeightProps<T>, Theme, Media>({
    cssProp: HEIGHT,
    prop: HEIGHT,
    key,
    transformValue,
  });

export const createHeightRule = <T = HeightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: HEIGHT, getValue: transformer });

export const height = createHeight();

export const heightRule = createHeightRule();
