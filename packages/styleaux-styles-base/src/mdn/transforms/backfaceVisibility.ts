import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackfaceVisibilityProperty } from '@styleaux/csstype';

const BACKFACEVISIBILITY = 'backfaceVisibility';

export interface BackfaceVisibilityProps<T = BackfaceVisibilityProperty> {
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  [BACKFACEVISIBILITY]: T;
}

export const createBackfaceVisibility = <
  T = BackfaceVisibilityProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackfaceVisibilityProps<T>, Theme> = {},
) =>
  style<BackfaceVisibilityProps<T>, Theme, Media>({
    cssProp: BACKFACEVISIBILITY,
    prop: BACKFACEVISIBILITY,
    ...config,
  });

export const createBackfaceVisibilityRule = <
  T = BackfaceVisibilityProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKFACEVISIBILITY, getValue: transformer });

export const backfaceVisibility = createBackfaceVisibility();

export const backfaceVisibilityRule = createBackfaceVisibilityRule();
