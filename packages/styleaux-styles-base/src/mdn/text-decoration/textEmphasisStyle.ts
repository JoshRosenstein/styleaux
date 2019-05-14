import { TextEmphasisStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTEMPHASISSTYLE = 'textEmphasisStyle';

export interface TextEmphasisStyleProps<T = TextEmphasisStyleProperty> {
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  [TEXTEMPHASISSTYLE]: T;
}

export const createTextEmphasisStyle = <
  T = TextEmphasisStyleProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextEmphasisStyleProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextEmphasisStyleProps<T>, Theme, Media>({
    cssProp: TEXTEMPHASISSTYLE,
    prop: TEXTEMPHASISSTYLE,
    key,
    transform,
  });

export const createTextEmphasisStyleRule = <
  T = TextEmphasisStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTEMPHASISSTYLE, getValue: transformer });

export const textEmphasisStyle = createTextEmphasisStyle();

export const textEmphasisStyleRule = createTextEmphasisStyleRule();
