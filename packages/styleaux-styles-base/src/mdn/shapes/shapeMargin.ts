import { Config } from '../../types';
import { ShapeMarginProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const SHAPEMARGIN = 'shapeMargin';

export interface ShapeMarginProps<T = ShapeMarginProperty> {
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  [SHAPEMARGIN]: T;
}

export const createShapeMargin = <
  T = ShapeMarginProperty,
  Media = never,
  Theme = never
>(
  config: Config<ShapeMarginProps<T>, Theme> = {},
) =>
  style<ShapeMarginProps<T>, Theme, Media>({
    cssProp: SHAPEMARGIN,
    prop: SHAPEMARGIN,
    ...config,
  });

export const createShapeMarginRule = <T = ShapeMarginProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SHAPEMARGIN, getValue: transformer });

export const shapeMargin = createShapeMargin();

export const shapeMarginRule = createShapeMarginRule();
