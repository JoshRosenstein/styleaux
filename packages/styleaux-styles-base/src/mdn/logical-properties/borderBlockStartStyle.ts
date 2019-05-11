import { BorderBlockStartStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBLOCKSTARTSTYLE = 'borderBlockStartStyle';

export interface BorderBlockStartStyleProps<T = BorderBlockStartStyleProperty> {
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  [BORDERBLOCKSTARTSTYLE]: T;
}

export const createBorderBlockStartStyle = <
  T = BorderBlockStartStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<BorderBlockStartStyleProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<BorderBlockStartStyleProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKSTARTSTYLE,
    prop: BORDERBLOCKSTARTSTYLE,
    key,
    transformValue,
  });

export const createBorderBlockStartStyleRule = <
  T = BorderBlockStartStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKSTARTSTYLE, getValue: transformer });

export const borderBlockStartStyle = createBorderBlockStartStyle();

export const borderBlockStartStyleRule = createBorderBlockStartStyleRule();
