import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BoxDecorationBreakProperty } from '@styleaux/csstype';

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
>(
  config: Config<BoxDecorationBreakProps<T>, Theme> = {},
) =>
  style<BoxDecorationBreakProps<T>, Theme, Media>({
    cssProp: BOXDECORATIONBREAK,
    prop: BOXDECORATIONBREAK,
    ...config,
  });

export const createBoxDecorationBreakRule = <
  T = BoxDecorationBreakProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BOXDECORATIONBREAK, getValue: transformer });

export const boxDecorationBreak = createBoxDecorationBreak();

export const boxDecorationBreakRule = createBoxDecorationBreakRule();
