import { RightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const RIGHT = 'right';

export interface RightProps<T = RightProperty> {
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  [RIGHT]: T;
}

export const createRight = <T = RightProperty, Media = never, Theme = never>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<RightProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<RightProps<T>, Theme, Media>({
    cssProp: RIGHT,
    prop: RIGHT,
    key,
    transformValue,
  });

export const createRightRule = <T = RightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: RIGHT, getValue: transformer });

export const right = createRight();

export const rightRule = createRightRule();
