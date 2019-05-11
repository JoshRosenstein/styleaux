import { LineBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LINEBREAK = 'lineBreak';

export interface LineBreakProps<T = LineBreakProperty> {
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE    |
   * | :-----: | :-----: | :---------: | :----: | :-----: |
   * | **58**  |   No    | **3** _-x-_ | **14** | **5.5** |
   * | 1 _-x-_ |         |             |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  [LINEBREAK]: T;
}

export const createLineBreak = <
  T = LineBreakProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<LineBreakProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<LineBreakProps<T>, Theme, Media>({
    cssProp: LINEBREAK,
    prop: LINEBREAK,
    key,
    transformValue,
  });

export const createLineBreakRule = <T = LineBreakProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LINEBREAK, getValue: transformer });

export const lineBreak = createLineBreak();

export const lineBreakRule = createLineBreakRule();
