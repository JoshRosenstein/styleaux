import { TextDecorationColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTDECORATIONCOLOR = 'textDecorationColor';

export interface TextDecorationColorProps<T = TextDecorationColorProperty> {
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  [TEXTDECORATIONCOLOR]: T;
}

export const createTextDecorationColor = <
  T = TextDecorationColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<TextDecorationColorProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<TextDecorationColorProps<T>, Theme, Media>({
    cssProp: TEXTDECORATIONCOLOR,
    prop: TEXTDECORATIONCOLOR,
    key,
    transform,
  });

export const createTextDecorationColorRule = <
  T = TextDecorationColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTDECORATIONCOLOR, getValue: transformer });

export const textDecorationColor = createTextDecorationColor();

export const textDecorationColorRule = createTextDecorationColorRule();
