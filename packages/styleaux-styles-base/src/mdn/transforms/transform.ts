import { TransformProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSFORM = 'transform';

export interface TransformProps<T = TransformProperty> {
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari   |  Edge  |   IE    |
   * | :----: | :-----: | :-------: | :----: | :-----: |
   * | **36** | **16**  |   **9**   | **12** | **10**  |
   * |        |         | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  [TRANSFORM]: T;
}

export const createTransform = <
  T = TransformProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TransformProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TransformProps<T>, Theme, Media>({
    cssProp: TRANSFORM,
    prop: TRANSFORM,
    key,
    transform,
  });

export const createTransformRule = <T = TransformProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSFORM, getValue: transformer });

export const transform = createTransform();

export const transformRule = createTransformRule();
