import { PlaceSelfProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PLACESELF = 'placeSelf';

export interface PlaceSelfProps<T = PlaceSelfProperty> {
  /**
   * The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |   No   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **45**  |   No   | n/a  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  [PLACESELF]: T;
}

export const createPlaceSelf = <
  T = PlaceSelfProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<PlaceSelfProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<PlaceSelfProps<T>, Theme, Media>({
    cssProp: PLACESELF,
    prop: PLACESELF,
    key,
    transformValue,
  });

export const createPlaceSelfRule = <T = PlaceSelfProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PLACESELF, getValue: transformer });

export const placeSelf = createPlaceSelf();

export const placeSelfRule = createPlaceSelfRule();
