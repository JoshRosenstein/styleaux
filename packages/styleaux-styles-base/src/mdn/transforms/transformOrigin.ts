import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TransformOriginProperty } from '@styleaux/csstype';

const TRANSFORMORIGIN = 'transformOrigin';

export interface TransformOriginProps<T = TransformOriginProperty> {
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome |  Firefox  |    Safari     |  Edge  |   IE    |
   * | :----: | :-------: | :-----------: | :----: | :-----: |
   * |  Yes   |  **16**   | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  [TRANSFORMORIGIN]: T;
}

export const createTransformOrigin = <
  T = TransformOriginProperty,
  Media = never,
  Theme = never
>(
  config: Config<TransformOriginProps<T>, Theme> = {},
) =>
  style<TransformOriginProps<T>, Theme, Media>({
    cssProp: TRANSFORMORIGIN,
    prop: TRANSFORMORIGIN,
    ...config,
  });

export const createTransformOriginRule = <
  T = TransformOriginProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSFORMORIGIN, getValue: transformer });

export const transformOrigin = createTransformOrigin();

export const transformOriginRule = createTransformOriginRule();
