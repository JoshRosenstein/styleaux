import { Config } from '../../types';
import { PaintOrderProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const PAINTORDER = 'paintOrder';

export interface PaintOrderProps<T = PaintOrderProperty> {
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **60**  |  Yes   | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  [PAINTORDER]: T;
}

export const createPaintOrder = <
  T = PaintOrderProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaintOrderProps<T>, Theme> = {},
) =>
  style<PaintOrderProps<T>, Theme, Media>({
    cssProp: PAINTORDER,
    prop: PAINTORDER,
    ...config,
  });

export const createPaintOrderRule = <T = PaintOrderProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PAINTORDER, getValue: transformer });

export const paintOrder = createPaintOrder();

export const paintOrderRule = createPaintOrderRule();
