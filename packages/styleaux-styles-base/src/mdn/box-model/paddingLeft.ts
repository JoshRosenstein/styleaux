import { Config } from '../../types';
import { PaddingLeftProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const PADDINGLEFT = 'paddingLeft';

export interface PaddingLeftProps<T = PaddingLeftProperty> {
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  [PADDINGLEFT]: T;
}

export const createPaddingLeft = <
  T = PaddingLeftProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingLeftProps<T>, Theme> = {},
) =>
  style<PaddingLeftProps<T>, Theme, Media>({
    cssProp: PADDINGLEFT,
    prop: PADDINGLEFT,
    ...config,
  });

export const createPaddingLeftRule = <T = PaddingLeftProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGLEFT, getValue: transformer });

export const paddingLeft = createPaddingLeft();

export const paddingLeftRule = createPaddingLeftRule();
