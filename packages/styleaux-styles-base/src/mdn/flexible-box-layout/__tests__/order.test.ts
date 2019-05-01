import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createOrder } from '../order';

describe('createOrder', () => {
  it('should return a function', () => {
    const result = createOrder();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOrder` as component and css prop', () => {
    const result = createOrder()({ order: 'inherit' });
    expect(toStyles(result)).toEqual({ order: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOrder<'a'>()({ order: 'a' });
    expect(toStyles(result)).toEqual({ order: 'a' });
  });

  it('should use an interface which marks `createOrder` as optional', () => {
    const result = createOrder<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOrder<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ order: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      order: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOrder<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      order: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      order: 'a',
      [MQ.D]: {
        order: 'b',
      },
      [MQ.T]: {
        order: 'c',
      },
      [MQ.M]: {
        order: 'd',
      },
    });
  });
});
