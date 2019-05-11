import { TextEmphasisPositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTEMPHASISPOSITION = 'textEmphasisPosition';

export interface TextEmphasisPositionProps<T = TextEmphasisPositionProperty> {
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  [TEXTEMPHASISPOSITION]: T;
}

export const createTextEmphasisPosition = <
  T = TextEmphasisPositionProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<TextEmphasisPositionProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<TextEmphasisPositionProps<T>, Theme, Media>({
    cssProp: TEXTEMPHASISPOSITION,
    prop: TEXTEMPHASISPOSITION,
    key,
    transformValue,
  });

export const createTextEmphasisPositionRule = <
  T = TextEmphasisPositionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTEMPHASISPOSITION, getValue: transformer });

export const textEmphasisPosition = createTextEmphasisPosition();

export const textEmphasisPositionRule = createTextEmphasisPositionRule();
