import { Config } from '../../types';
import { IsolationProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const ISOLATION = 'isolation';

export interface IsolationProps<T = IsolationProperty> {
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  [ISOLATION]: T;
}

export const createIsolation = <
  T = IsolationProperty,
  Media = never,
  Theme = never
>(
  config: Config<IsolationProps<T>, Theme> = {},
) =>
  style<IsolationProps<T>, Theme, Media>({
    cssProp: ISOLATION,
    prop: ISOLATION,
    ...config,
  });

export const createIsolationRule = <T = IsolationProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ISOLATION, getValue: transformer });

export const isolation = createIsolation();

export const isolationRule = createIsolationRule();
