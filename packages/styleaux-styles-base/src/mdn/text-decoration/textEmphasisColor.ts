import { TextEmphasisColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTEMPHASISCOLOR = 'textEmphasisColor';

export interface TextEmphasisColorProps<T = TextEmphasisColorProperty> {
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  [TEXTEMPHASISCOLOR]: T;
}

export const createTextEmphasisColor = <
  T = TextEmphasisColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextEmphasisColorProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextEmphasisColorProps<T>, Theme, Media>({
    cssProp: TEXTEMPHASISCOLOR,
    prop: TEXTEMPHASISCOLOR,
    key,
    transform,
  });

export const createTextEmphasisColorRule = <
  T = TextEmphasisColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTEMPHASISCOLOR, getValue: transformer });

export const textEmphasisColor = createTextEmphasisColor();

export const textEmphasisColorRule = createTextEmphasisColorRule();
