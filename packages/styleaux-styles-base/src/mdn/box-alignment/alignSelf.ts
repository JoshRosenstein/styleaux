import { Config } from '../../types';
import { AlignSelfProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const ALIGNSELF = 'alignSelf';

export interface AlignSelfProps<T = AlignSelfProperty> {
  /**
   * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **36**  | **20**  |   No   | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  [ALIGNSELF]: T;
}

export const createAlignSelf = <
  T = AlignSelfProperty,
  Media = never,
  Theme = never
>(
  config: Config<AlignSelfProps<T>, Theme> = {},
) =>
  style<AlignSelfProps<T>, Theme, Media>({
    cssProp: ALIGNSELF,
    prop: ALIGNSELF,
    ...config,
  });

export const createAlignSelfRule = <T = AlignSelfProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ALIGNSELF, getValue: transformer });

export const alignSelf = createAlignSelf();

export const alignSelfRule = createAlignSelfRule();
