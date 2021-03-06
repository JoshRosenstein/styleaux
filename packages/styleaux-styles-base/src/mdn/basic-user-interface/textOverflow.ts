import { Config } from '../../types';
import { TextOverflowProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const TEXTOVERFLOW = 'textOverflow';

export interface TextOverflowProps<T = TextOverflowProperty> {
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  [TEXTOVERFLOW]: T;
}

export const createTextOverflow = <
  T = TextOverflowProperty,
  Media = never,
  Theme = never
>(
  config: Config<TextOverflowProps<T>, Theme> = {},
) =>
  style<TextOverflowProps<T>, Theme, Media>({
    cssProp: TEXTOVERFLOW,
    prop: TEXTOVERFLOW,
    ...config,
  });

export const createTextOverflowRule = <T = TextOverflowProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTOVERFLOW, getValue: transformer });

export const textOverflow = createTextOverflow();

export const textOverflowRule = createTextOverflowRule();
