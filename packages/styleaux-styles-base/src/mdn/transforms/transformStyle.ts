import { TransformStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TRANSFORMSTYLE = 'transformStyle';

export interface TransformStyleProps<T = TransformStyleProperty> {
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |    Chrome    | Firefox  |   Safari    |  Edge  | IE  |
   * | :----------: | :------: | :---------: | :----: | :-: |
   * | **12** _-x-_ |  **16**  | **4** _-x-_ | **12** | No  |
   * |              | 10 _-x-_ |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  [TRANSFORMSTYLE]: T;
}

export const createTransformStyle = <
  T = TransformStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TransformStyleProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TransformStyleProps<T>, Theme, Media>({
    cssProp: TRANSFORMSTYLE,
    prop: TRANSFORMSTYLE,
    key,
    transform,
  });

export const createTransformStyleRule = <
  T = TransformStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSFORMSTYLE, getValue: transformer });

export const transformStyle = createTransformStyle();

export const transformStyleRule = createTransformStyleRule();
