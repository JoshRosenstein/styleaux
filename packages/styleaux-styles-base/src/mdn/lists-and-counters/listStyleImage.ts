import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ListStyleImageProperty } from '@styleaux/csstype';

const LISTSTYLEIMAGE = 'listStyleImage';

export interface ListStyleImageProps<T = ListStyleImageProperty> {
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  [LISTSTYLEIMAGE]: T;
}

export const createListStyleImage = <
  T = ListStyleImageProperty,
  Media = never,
  Theme = never
>(
  config: Config<ListStyleImageProps<T>, Theme> = {},
) =>
  style<ListStyleImageProps<T>, Theme, Media>({
    cssProp: LISTSTYLEIMAGE,
    prop: LISTSTYLEIMAGE,
    ...config,
  });

export const createListStyleImageRule = <
  T = ListStyleImageProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LISTSTYLEIMAGE, getValue: transformer });

export const listStyleImage = createListStyleImage();

export const listStyleImageRule = createListStyleImageRule();
