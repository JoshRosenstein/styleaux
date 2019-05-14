import { TextEmphasisProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTEMPHASIS = 'textEmphasis';

export interface TextEmphasisProps<T = TextEmphasisProperty> {
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  [TEXTEMPHASIS]: T;
}

export const createTextEmphasis = <
  T = TextEmphasisProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextEmphasisProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextEmphasisProps<T>, Theme, Media>({
    cssProp: TEXTEMPHASIS,
    prop: TEXTEMPHASIS,
    key,
    transform,
  });

export const createTextEmphasisRule = <T = TextEmphasisProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTEMPHASIS, getValue: transformer });

export const textEmphasis = createTextEmphasis();

export const textEmphasisRule = createTextEmphasisRule();
