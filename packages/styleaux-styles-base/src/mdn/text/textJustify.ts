import { TextJustifyProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTJUSTIFY = 'textJustify';

export interface TextJustifyProps<T = TextJustifyProperty> {
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  [TEXTJUSTIFY]: T;
}

export const createTextJustify = <
  T = TextJustifyProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextJustifyProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextJustifyProps<T>, Theme, Media>({
    cssProp: TEXTJUSTIFY,
    prop: TEXTJUSTIFY,
    key,
    transform,
  });

export const createTextJustifyRule = <T = TextJustifyProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTJUSTIFY, getValue: transformer });

export const textJustify = createTextJustify();

export const textJustifyRule = createTextJustifyRule();
