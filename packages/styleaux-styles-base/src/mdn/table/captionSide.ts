import { Config } from '../../types';
import { CaptionSideProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const CAPTIONSIDE = 'captionSide';

export interface CaptionSideProps<T = CaptionSideProperty> {
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  [CAPTIONSIDE]: T;
}

export const createCaptionSide = <
  T = CaptionSideProperty,
  Media = never,
  Theme = never
>(
  config: Config<CaptionSideProps<T>, Theme> = {},
) =>
  style<CaptionSideProps<T>, Theme, Media>({
    cssProp: CAPTIONSIDE,
    prop: CAPTIONSIDE,
    ...config,
  });

export const createCaptionSideRule = <T = CaptionSideProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CAPTIONSIDE, getValue: transformer });

export const captionSide = createCaptionSide();

export const captionSideRule = createCaptionSideRule();
