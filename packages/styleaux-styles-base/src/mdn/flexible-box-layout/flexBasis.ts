import { Config } from '../../types';
import { FlexBasisProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const FLEXBASIS = 'flexBasis';

export interface FlexBasisProps<T = FlexBasisProperty> {
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  [FLEXBASIS]: T;
}

export const createFlexBasis = <
  T = FlexBasisProperty,
  Media = never,
  Theme = never
>(
  config: Config<FlexBasisProps<T>, Theme> = {},
) =>
  style<FlexBasisProps<T>, Theme, Media>({
    cssProp: FLEXBASIS,
    prop: FLEXBASIS,
    ...config,
  });

export const createFlexBasisRule = <T = FlexBasisProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FLEXBASIS, getValue: transformer });

export const flexBasis = createFlexBasis();

export const flexBasisRule = createFlexBasisRule();
