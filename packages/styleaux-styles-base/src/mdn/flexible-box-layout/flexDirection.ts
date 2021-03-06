import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FlexDirectionProperty } from '@styleaux/csstype';

const FLEXDIRECTION = 'flexDirection';

export interface FlexDirectionProps<T = FlexDirectionProperty> {
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  [FLEXDIRECTION]: T;
}

export const createFlexDirection = <
  T = FlexDirectionProperty,
  Media = never,
  Theme = never
>(
  config: Config<FlexDirectionProps<T>, Theme> = {},
) =>
  style<FlexDirectionProps<T>, Theme, Media>({
    cssProp: FLEXDIRECTION,
    prop: FLEXDIRECTION,
    ...config,
  });

export const createFlexDirectionRule = <T = FlexDirectionProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FLEXDIRECTION, getValue: transformer });

export const flexDirection = createFlexDirection();

export const flexDirectionRule = createFlexDirectionRule();
