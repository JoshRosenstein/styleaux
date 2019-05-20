import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { TextUnderlinePositionProperty } from '@styleaux/csstype';

const TEXTUNDERLINEPOSITION = 'textUnderlinePosition';

export interface TextUnderlinePositionProps<T = TextUnderlinePositionProperty> {
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  [TEXTUNDERLINEPOSITION]: T;
}

export const createTextUnderlinePosition = <
  T = TextUnderlinePositionProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextUnderlinePositionProps<T>, Theme> = {},
) =>
  style<TextUnderlinePositionProps<T>, Theme, Media>({
    cssProp: TEXTUNDERLINEPOSITION,
    prop: TEXTUNDERLINEPOSITION,
    ...config,
  });

export const createTextUnderlinePositionRule = <
  T = TextUnderlinePositionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTUNDERLINEPOSITION, getValue: transformer });

export const textUnderlinePosition = createTextUnderlinePosition();

export const textUnderlinePositionRule = createTextUnderlinePositionRule();
