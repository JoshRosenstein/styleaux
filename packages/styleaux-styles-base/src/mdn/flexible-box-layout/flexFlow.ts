import { Config } from '../../types';
import { FlexFlowProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const FLEXFLOW = 'flexFlow';

export interface FlexFlowProps<T = FlexFlowProperty> {
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  [FLEXFLOW]: T;
}

export const createFlexFlow = <
  T = FlexFlowProperty,
  Media = never,
  Theme = never
>(
  config: Config<FlexFlowProps<T>, Theme> = {},
) =>
  style<FlexFlowProps<T>, Theme, Media>({
    cssProp: FLEXFLOW,
    prop: FLEXFLOW,
    ...config,
  });

export const createFlexFlowRule = <T = FlexFlowProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FLEXFLOW, getValue: transformer });

export const flexFlow = createFlexFlow();

export const flexFlowRule = createFlexFlowRule();
