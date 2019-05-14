import { LeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LEFT = 'left';

export interface LeftProps<T = LeftProperty> {
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  [LEFT]: T;
}

export const createLeft = <T = LeftProperty, Media = never, Theme = never>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<LeftProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<LeftProps<T>, Theme, Media>({
    cssProp: LEFT,
    prop: LEFT,
    key,
    transform,
  });

export const createLeftRule = <T = LeftProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LEFT, getValue: transformer });

export const left = createLeft();

export const leftRule = createLeftRule();
