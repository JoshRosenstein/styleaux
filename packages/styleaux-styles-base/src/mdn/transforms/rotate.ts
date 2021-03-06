import { RotateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ROTATE = 'rotate';

export interface RotateProps<T = RotateProperty> {
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  [ROTATE]: T;
}

export const createRotate = <T = RotateProperty, Media = never, Theme = never>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<RotateProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<RotateProps<T>, Theme, Media>({
    cssProp: ROTATE,
    prop: ROTATE,
    key,
    transform,
  });

export const createRotateRule = <T = RotateProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ROTATE, getValue: transformer });

export const rotate = createRotate();

export const rotateRule = createRotateRule();
