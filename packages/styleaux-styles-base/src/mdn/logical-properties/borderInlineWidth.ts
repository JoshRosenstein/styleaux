import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderInlineWidthProperty } from '@styleaux/csstype';

const BORDERINLINEWIDTH = 'borderInlineWidth';

export interface BorderInlineWidthProps<T = BorderInlineWidthProperty> {
  /**
   * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
   */
  [BORDERINLINEWIDTH]: T;
}

export const createBorderInlineWidth = <
  T = BorderInlineWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineWidthProps<T>, Theme> = {},
) =>
  style<BorderInlineWidthProps<T>, Theme, Media>({
    cssProp: BORDERINLINEWIDTH,
    prop: BORDERINLINEWIDTH,
    ...config,
  });

export const createBorderInlineWidthRule = <
  T = BorderInlineWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINEWIDTH, getValue: transformer });

export const borderInlineWidth = createBorderInlineWidth();

export const borderInlineWidthRule = createBorderInlineWidthRule();
