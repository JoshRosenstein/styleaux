import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { JustifyContentProperty } from '@styleaux/csstype';

const JUSTIFYCONTENT = 'justifyContent';

export interface JustifyContentProps<T = JustifyContentProperty> {
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **52**  | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
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
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  [JUSTIFYCONTENT]: T;
}

export const createJustifyContent = <
  T = JustifyContentProperty,
  Media = never,
  Theme = never
>(
  config: Config<JustifyContentProps<T>, Theme> = {},
) =>
  style<JustifyContentProps<T>, Theme, Media>({
    cssProp: JUSTIFYCONTENT,
    prop: JUSTIFYCONTENT,
    ...config,
  });

export const createJustifyContentRule = <
  T = JustifyContentProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: JUSTIFYCONTENT, getValue: transformer });

export const justifyContent = createJustifyContent();

export const justifyContentRule = createJustifyContentRule();
