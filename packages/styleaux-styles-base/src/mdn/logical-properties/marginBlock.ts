import { Config } from '../../types';
import { MarginBlockProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MARGINBLOCK = 'marginBlock';

export interface MarginBlockProps<T = MarginBlockProperty> {
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  [MARGINBLOCK]: T;
}

export const createMarginBlock = <
  T = MarginBlockProperty,
  Media = never,
  Theme = never
>(
  config: Config<MarginBlockProps<T>, Theme> = {},
) =>
  style<MarginBlockProps<T>, Theme, Media>({
    cssProp: MARGINBLOCK,
    prop: MARGINBLOCK,
    ...config,
  });

export const createMarginBlockRule = <T = MarginBlockProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGINBLOCK, getValue: transformer });

export const marginBlock = createMarginBlock();

export const marginBlockRule = createMarginBlockRule();
