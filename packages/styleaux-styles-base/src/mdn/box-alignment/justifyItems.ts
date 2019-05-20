import { Config } from '../../types';
import { JustifyItemsProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const JUSTIFYITEMS = 'justifyItems';

export interface JustifyItemsProps<T = JustifyItemsProperty> {
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **52** | **20**  | **9**  | **12** | **11** |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  [JUSTIFYITEMS]: T;
}

export const createJustifyItems = <
  T = JustifyItemsProperty,
  Media = never,
  Theme = never
>(
  config: Config<JustifyItemsProps<T>, Theme> = {},
) =>
  style<JustifyItemsProps<T>, Theme, Media>({
    cssProp: JUSTIFYITEMS,
    prop: JUSTIFYITEMS,
    ...config,
  });

export const createJustifyItemsRule = <T = JustifyItemsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: JUSTIFYITEMS, getValue: transformer });

export const justifyItems = createJustifyItems();

export const justifyItemsRule = createJustifyItemsRule();
