import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderInlineEndColorProperty } from '@styleaux/csstype';

const BORDERINLINEENDCOLOR = 'borderInlineEndColor';

export interface BorderInlineEndColorProps<T = BorderInlineEndColorProperty> {
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  [BORDERINLINEENDCOLOR]: T;
}

export const createBorderInlineEndColor = <
  T = BorderInlineEndColorProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineEndColorProps<T>, Theme> = {},
) =>
  style<BorderInlineEndColorProps<T>, Theme, Media>({
    cssProp: BORDERINLINEENDCOLOR,
    prop: BORDERINLINEENDCOLOR,
    ...config,
  });

export const createBorderInlineEndColorRule = <
  T = BorderInlineEndColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINEENDCOLOR, getValue: transformer });

export const borderInlineEndColor = createBorderInlineEndColor();

export const borderInlineEndColorRule = createBorderInlineEndColorRule();
