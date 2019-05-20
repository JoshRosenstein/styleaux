import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBlockStyleProperty } from '@styleaux/csstype';

const BORDERBLOCKSTYLE = 'borderBlockStyle';

export interface BorderBlockStyleProps<T = BorderBlockStyleProperty> {
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  [BORDERBLOCKSTYLE]: T;
}

export const createBorderBlockStyle = <
  T = BorderBlockStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBlockStyleProps<T>, Theme> = {},
) =>
  style<BorderBlockStyleProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKSTYLE,
    prop: BORDERBLOCKSTYLE,
    ...config,
  });

export const createBorderBlockStyleRule = <
  T = BorderBlockStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKSTYLE, getValue: transformer });

export const borderBlockStyle = createBorderBlockStyle();

export const borderBlockStyleRule = createBorderBlockStyleRule();
