import { Config } from '../../types';
import { AlignContentProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const ALIGNCONTENT = 'alignContent';

export interface AlignContentProps<T = AlignContentProperty> {
  /**
   * The CSS **`align-content`** property sets how the browser distributes space between and around content items along the cross-axis of a flexbox container, and the main-axis of a grid container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  [ALIGNCONTENT]: T;
}

export const createAlignContent = <
  T = AlignContentProperty,
  Media = never,
  Theme = never
>(
  config: Config<AlignContentProps<T>, Theme> = {},
) =>
  style<AlignContentProps<T>, Theme, Media>({
    cssProp: ALIGNCONTENT,
    prop: ALIGNCONTENT,
    ...config,
  });

export const createAlignContentRule = <T = AlignContentProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ALIGNCONTENT, getValue: transformer });

export const alignContent = createAlignContent();

export const alignContentRule = createAlignContentRule();
