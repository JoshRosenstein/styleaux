import { ShapeImageThresholdProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const SHAPEIMAGETHRESHOLD = 'shapeImageThreshold';

export interface ShapeImageThresholdProps<T = ShapeImageThresholdProperty> {
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  [SHAPEIMAGETHRESHOLD]: T;
}

export const createShapeImageThreshold = <
  T = ShapeImageThresholdProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<ShapeImageThresholdProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<ShapeImageThresholdProps<T>, Theme, Media>({
    cssProp: SHAPEIMAGETHRESHOLD,
    prop: SHAPEIMAGETHRESHOLD,
    key,
    transform,
  });

export const createShapeImageThresholdRule = <
  T = ShapeImageThresholdProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: SHAPEIMAGETHRESHOLD, getValue: transformer });

export const shapeImageThreshold = createShapeImageThreshold();

export const shapeImageThresholdRule = createShapeImageThresholdRule();
