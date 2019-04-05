import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { createPaintOrder } from '../paintOrder';

describe('paintOrder', () => {
  it('should return a function', () => {
    const result = createPaintOrder();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paintOrder` as component and css prop', () => {
    const result = createPaintOrder()({ paintOrder: 'inherit' });
    expect(toStyles(result)).toEqual({ paintOrder: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaintOrder<'a'>()({ paintOrder: 'a' });
    expect(toStyles(result)).toEqual({ paintOrder: 'a' });
  });

  it('should use an interface which marks `paintOrder` as optional', () => {
    const result = createPaintOrder<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPaintOrder<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paintOrder: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paintOrder: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaintOrder<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paintOrder: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paintOrder: 'a',
      [MQ.D]: {
        paintOrder: 'b',
      },
      [MQ.T]: {
        paintOrder: 'c',
      },
      [MQ.M]: {
        paintOrder: 'd',
      },
    });
  });
});
