import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { MaxInlineSizeProperty } from '@styleaux/csstype';

const MAXINLINESIZE = 'maxInlineSize';

export interface MaxInlineSizeProps<T = MaxInlineSizeProperty> {
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |   Safari   | Edge | IE  |
   * | :----: | :-----: | :--------: | :--: | :-: |
   * | **57** | **41**  |  **12.1**  |  No  | No  |
   * |        |         | 10.1 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  [MAXINLINESIZE]: T;
}

export const createMaxInlineSize = <
  T = MaxInlineSizeProperty,
  Media = never,
  Theme = never
>(
  config: Config<MaxInlineSizeProps<T>, Theme> = {},
) =>
  style<MaxInlineSizeProps<T>, Theme, Media>({
    cssProp: MAXINLINESIZE,
    prop: MAXINLINESIZE,
    ...config,
  });

export const createMaxInlineSizeRule = <T = MaxInlineSizeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MAXINLINESIZE, getValue: transformer });

export const maxInlineSize = createMaxInlineSize();

export const maxInlineSizeRule = createMaxInlineSizeRule();
