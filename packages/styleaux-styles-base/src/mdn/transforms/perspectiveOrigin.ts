import { PerspectiveOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PERSPECTIVEORIGIN = 'perspectiveOrigin';

export interface PerspectiveOriginProps<T = PerspectiveOriginProperty> {
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |    Chrome    | Firefox  |   Safari    |  Edge  |   IE   |
   * | :----------: | :------: | :---------: | :----: | :----: |
   * | **12** _-x-_ |  **16**  | **4** _-x-_ | **12** | **10** |
   * |              | 10 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  [PERSPECTIVEORIGIN]: T;
}

export const createPerspectiveOrigin = <
  T = PerspectiveOriginProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<PerspectiveOriginProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<PerspectiveOriginProps<T>, Theme, Media>({
    cssProp: PERSPECTIVEORIGIN,
    prop: PERSPECTIVEORIGIN,
    key,
    transformValue,
  });

export const createPerspectiveOriginRule = <
  T = PerspectiveOriginProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PERSPECTIVEORIGIN, getValue: transformer });

export const perspectiveOrigin = createPerspectiveOrigin();

export const perspectiveOriginRule = createPerspectiveOriginRule();
