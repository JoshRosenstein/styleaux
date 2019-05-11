import { PlaceItemsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PLACEITEMS = 'placeItems';

export interface PlaceItemsProps<T = PlaceItemsProperty> {
  /**
   * The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |  n/a   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |  n/a   | n/a  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  [PLACEITEMS]: T;
}

export const createPlaceItems = <
  T = PlaceItemsProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<PlaceItemsProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<PlaceItemsProps<T>, Theme, Media>({
    cssProp: PLACEITEMS,
    prop: PLACEITEMS,
    key,
    transformValue,
  });

export const createPlaceItemsRule = <T = PlaceItemsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PLACEITEMS, getValue: transformer });

export const placeItems = createPlaceItems();

export const placeItemsRule = createPlaceItemsRule();
