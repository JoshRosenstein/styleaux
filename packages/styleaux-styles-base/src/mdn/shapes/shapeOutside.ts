import { Config } from '../../types';
import { ShapeOutsideProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const SHAPEOUTSIDE = 'shapeOutside';

export interface ShapeOutsideProps<T = ShapeOutsideProperty> {
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  [SHAPEOUTSIDE]: T;
}

export const createShapeOutside = <
  T = ShapeOutsideProperty,
  Media = never,
  Theme = never
>(
  config: Config<ShapeOutsideProps<T>, Theme> = {},
) =>
  style<ShapeOutsideProps<T>, Theme, Media>({
    cssProp: SHAPEOUTSIDE,
    prop: SHAPEOUTSIDE,
    ...config,
  });

export const createShapeOutsideRule = <T = ShapeOutsideProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SHAPEOUTSIDE, getValue: transformer });

export const shapeOutside = createShapeOutside();

export const shapeOutsideRule = createShapeOutsideRule();
