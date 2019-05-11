import { TextDecorationLineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTDECORATIONLINE = 'textDecorationLine';

export interface TextDecorationLineProps<T = TextDecorationLineProperty> {
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **36**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  [TEXTDECORATIONLINE]: T;
}

export const createTextDecorationLine = <
  T = TextDecorationLineProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<TextDecorationLineProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<TextDecorationLineProps<T>, Theme, Media>({
    cssProp: TEXTDECORATIONLINE,
    prop: TEXTDECORATIONLINE,
    key,
    transformValue,
  });

export const createTextDecorationLineRule = <
  T = TextDecorationLineProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTDECORATIONLINE, getValue: transformer });

export const textDecorationLine = createTextDecorationLine();

export const textDecorationLineRule = createTextDecorationLineRule();
