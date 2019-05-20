import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { MarginBlockEndProperty } from '@styleaux/csstype';

const MARGINBLOCKEND = 'marginBlockEnd';

export interface MarginBlockEndProps<T = MarginBlockEndProperty> {
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  [MARGINBLOCKEND]: T;
}

export const createMarginBlockEnd = <
  T = MarginBlockEndProperty,
  Media = never,
  Theme = never
>(
  config: Config<MarginBlockEndProps<T>, Theme> = {},
) =>
  style<MarginBlockEndProps<T>, Theme, Media>({
    cssProp: MARGINBLOCKEND,
    prop: MARGINBLOCKEND,
    ...config,
  });

export const createMarginBlockEndRule = <
  T = MarginBlockEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGINBLOCKEND, getValue: transformer });

export const marginBlockEnd = createMarginBlockEnd();

export const marginBlockEndRule = createMarginBlockEndRule();
