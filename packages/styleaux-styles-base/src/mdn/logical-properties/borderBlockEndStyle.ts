import { BorderBlockEndStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERBLOCKENDSTYLE = 'borderBlockEndStyle';

export interface BorderBlockEndStyleProps<T = BorderBlockEndStyleProperty> {
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  [BORDERBLOCKENDSTYLE]: T;
}

export const createBorderBlockEndStyle = <
  T = BorderBlockEndStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<BorderBlockEndStyleProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<BorderBlockEndStyleProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKENDSTYLE,
    prop: BORDERBLOCKENDSTYLE,
    key,
    transform,
  });

export const createBorderBlockEndStyleRule = <
  T = BorderBlockEndStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKENDSTYLE, getValue: transformer });

export const borderBlockEndStyle = createBorderBlockEndStyle();

export const borderBlockEndStyleRule = createBorderBlockEndStyleRule();
