import { Config } from '../../types';
import { OffsetProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const OFFSET = 'offset';

export interface OffsetProps<T = OffsetProperty> {
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   No    |   No   |  No  | No  |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  [OFFSET]: T;
}

export const createOffset = <T = OffsetProperty, Media = never, Theme = never>(
  config: Config<OffsetProps<T>, Theme> = {},
) =>
  style<OffsetProps<T>, Theme, Media>({
    cssProp: OFFSET,
    prop: OFFSET,
    ...config,
  });

export const createOffsetRule = <T = OffsetProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OFFSET, getValue: transformer });

export const offset = createOffset();

export const offsetRule = createOffsetRule();
