import { PlaceContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PLACECONTENT = 'placeContent';

export interface PlaceContentProps<T = PlaceContentProperty> {
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** |   Yes   |  Yes   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** | **53**  |  Yes   |  No  | No  |
   *
   * ---
   *
   * _You can only specify a single value if it is valid for both <code>align-content</code> and <code>justify-content</code>_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **60**  |  Yes   |  No  | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  [PLACECONTENT]: T;
}

export const createPlaceContent = <
  T = PlaceContentProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<PlaceContentProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<PlaceContentProps<T>, Theme, Media>({
    cssProp: PLACECONTENT,
    prop: PLACECONTENT,
    key,
    transform,
  });

export const createPlaceContentRule = <T = PlaceContentProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PLACECONTENT, getValue: transformer });

export const placeContent = createPlaceContent();

export const placeContentRule = createPlaceContentRule();
