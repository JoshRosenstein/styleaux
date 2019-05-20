import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ListStyleTypeProperty } from '@styleaux/csstype';

const LISTSTYLETYPE = 'listStyleType';

export interface ListStyleTypeProps<T = ListStyleTypeProperty> {
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  [LISTSTYLETYPE]: T;
}

export const createListStyleType = <
  T = ListStyleTypeProperty,
  Media = never,
  Theme = never
>(
  config: Config<ListStyleTypeProps<T>, Theme> = {},
) =>
  style<ListStyleTypeProps<T>, Theme, Media>({
    cssProp: LISTSTYLETYPE,
    prop: LISTSTYLETYPE,
    ...config,
  });

export const createListStyleTypeRule = <T = ListStyleTypeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LISTSTYLETYPE, getValue: transformer });

export const listStyleType = createListStyleType();

export const listStyleTypeRule = createListStyleTypeRule();
