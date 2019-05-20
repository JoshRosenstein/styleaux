import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextCombineUprightProperty } from '@styleaux/csstype';

const TEXTCOMBINEUPRIGHT = 'textCombineUpright';

export interface TextCombineUprightProps<T = TextCombineUprightProperty> {
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |                  Edge                  |                   IE                   |
   * | :----: | :-----: | :----: | :------------------------------------: | :------------------------------------: |
   * | **48** | **48**  |  Yes   | **12** _(-ms-text-combine-horizontal)_ | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  [TEXTCOMBINEUPRIGHT]: T;
}

export const createTextCombineUpright = <
  T = TextCombineUprightProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextCombineUprightProps<T>, Theme> = {},
) =>
  style<TextCombineUprightProps<T>, Theme, Media>({
    cssProp: TEXTCOMBINEUPRIGHT,
    prop: TEXTCOMBINEUPRIGHT,
    ...config,
  });

export const createTextCombineUprightRule = <
  T = TextCombineUprightProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTCOMBINEUPRIGHT, getValue: transformer });

export const textCombineUpright = createTextCombineUpright();

export const textCombineUprightRule = createTextCombineUprightRule();
