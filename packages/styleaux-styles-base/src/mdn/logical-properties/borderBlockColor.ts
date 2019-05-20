import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBlockColorProperty } from '@styleaux/csstype';

const BORDERBLOCKCOLOR = 'borderBlockColor';

export interface BorderBlockColorProps<T = BorderBlockColorProperty> {
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  [BORDERBLOCKCOLOR]: T;
}

export const createBorderBlockColor = <
  T = BorderBlockColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBlockColorProps<T>, Theme> = {},
) =>
  style<BorderBlockColorProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKCOLOR,
    prop: BORDERBLOCKCOLOR,
    ...config,
  });

export const createBorderBlockColorRule = <
  T = BorderBlockColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKCOLOR, getValue: transformer });

export const borderBlockColor = createBorderBlockColor();

export const borderBlockColorRule = createBorderBlockColorRule();
