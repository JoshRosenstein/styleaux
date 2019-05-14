import { BoxDecorationBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BOXDECORATIONBREAK = 'boxDecorationBreak';

export interface BoxDecorationBreakProps<T = BoxDecorationBreakProperty> {
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  [BOXDECORATIONBREAK]: T;
}

export const createBoxDecorationBreak = <
  T = BoxDecorationBreakProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<BoxDecorationBreakProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<BoxDecorationBreakProps<T>, Theme, Media>({
    cssProp: BOXDECORATIONBREAK,
    prop: BOXDECORATIONBREAK,
    key,
    transform,
  });

export const createBoxDecorationBreakRule = <
  T = BoxDecorationBreakProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BOXDECORATIONBREAK, getValue: transformer });

export const boxDecorationBreak = createBoxDecorationBreak();

export const boxDecorationBreakRule = createBoxDecorationBreakRule();
