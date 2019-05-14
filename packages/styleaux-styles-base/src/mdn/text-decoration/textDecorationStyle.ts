import { TextDecorationStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTDECORATIONSTYLE = 'textDecorationStyle';

export interface TextDecorationStyleProps<T = TextDecorationStyleProperty> {
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  [TEXTDECORATIONSTYLE]: T;
}

export const createTextDecorationStyle = <
  T = TextDecorationStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<TextDecorationStyleProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<TextDecorationStyleProps<T>, Theme, Media>({
    cssProp: TEXTDECORATIONSTYLE,
    prop: TEXTDECORATIONSTYLE,
    key,
    transform,
  });

export const createTextDecorationStyleRule = <
  T = TextDecorationStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTDECORATIONSTYLE, getValue: transformer });

export const textDecorationStyle = createTextDecorationStyle();

export const textDecorationStyleRule = createTextDecorationStyleRule();
