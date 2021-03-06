import { Config } from '../../types';
import { TopProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const TOP = 'top';

export interface TopProps<T = TopProperty> {
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  [TOP]: T;
}

export const createTop = <T = TopProperty, Media = never, Theme = never>(
  config: Config<TopProps<T>, Theme> = {},
) =>
  style<TopProps<T>, Theme, Media>({
    cssProp: TOP,
    prop: TOP,
    ...config,
  });

export const createTopRule = <T = TopProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TOP, getValue: transformer });

export const top = createTop();

export const topRule = createTopRule();
