import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextDecorationSkipProperty } from '@styleaux/csstype';

const TEXTDECORATIONSKIP = 'textDecorationSkip';

export interface TextDecorationSkipProps<T = TextDecorationSkipProperty> {
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | 57-64  |   No    | **12.1** |  No  | No  |
   * |        |         | 8 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  [TEXTDECORATIONSKIP]: T;
}

export const createTextDecorationSkip = <
  T = TextDecorationSkipProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextDecorationSkipProps<T>, Theme> = {},
) =>
  style<TextDecorationSkipProps<T>, Theme, Media>({
    cssProp: TEXTDECORATIONSKIP,
    prop: TEXTDECORATIONSKIP,
    ...config,
  });

export const createTextDecorationSkipRule = <
  T = TextDecorationSkipProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTDECORATIONSKIP, getValue: transformer });

export const textDecorationSkip = createTextDecorationSkip();

export const textDecorationSkipRule = createTextDecorationSkipRule();
