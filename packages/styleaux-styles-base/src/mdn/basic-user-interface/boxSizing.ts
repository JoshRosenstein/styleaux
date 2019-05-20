import { Config } from '../../types';
import { BoxSizingProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BOXSIZING = 'boxSizing';

export interface BoxSizingProps<T = BoxSizingProperty> {
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  [BOXSIZING]: T;
}

export const createBoxSizing = <
  T = BoxSizingProperty,
  Media = never,
  Theme = never
>(
  config: Config<BoxSizingProps<T>, Theme> = {},
) =>
  style<BoxSizingProps<T>, Theme, Media>({
    cssProp: BOXSIZING,
    prop: BOXSIZING,
    ...config,
  });

export const createBoxSizingRule = <T = BoxSizingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BOXSIZING, getValue: transformer });

export const boxSizing = createBoxSizing();

export const boxSizingRule = createBoxSizingRule();
