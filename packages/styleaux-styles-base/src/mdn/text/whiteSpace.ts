import { Config } from '../../types';
import { WhiteSpaceProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const WHITESPACE = 'whiteSpace';

export interface WhiteSpaceProps<T = WhiteSpaceProperty> {
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  [WHITESPACE]: T;
}

export const createWhiteSpace = <
  T = WhiteSpaceProperty,
  Media = never,
  Theme = never
>(
  config: Config<WhiteSpaceProps<T>, Theme> = {},
) =>
  style<WhiteSpaceProps<T>, Theme, Media>({
    cssProp: WHITESPACE,
    prop: WHITESPACE,
    ...config,
  });

export const createWhiteSpaceRule = <T = WhiteSpaceProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: WHITESPACE, getValue: transformer });

export const whiteSpace = createWhiteSpace();

export const whiteSpaceRule = createWhiteSpaceRule();
