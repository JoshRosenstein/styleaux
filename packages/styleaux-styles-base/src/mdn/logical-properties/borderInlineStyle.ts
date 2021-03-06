import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderInlineStyleProperty } from '@styleaux/csstype';

const BORDERINLINESTYLE = 'borderInlineStyle';

export interface BorderInlineStyleProps<T = BorderInlineStyleProperty> {
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  [BORDERINLINESTYLE]: T;
}

export const createBorderInlineStyle = <
  T = BorderInlineStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineStyleProps<T>, Theme> = {},
) =>
  style<BorderInlineStyleProps<T>, Theme, Media>({
    cssProp: BORDERINLINESTYLE,
    prop: BORDERINLINESTYLE,
    ...config,
  });

export const createBorderInlineStyleRule = <
  T = BorderInlineStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINESTYLE, getValue: transformer });

export const borderInlineStyle = createBorderInlineStyle();

export const borderInlineStyleRule = createBorderInlineStyleRule();
