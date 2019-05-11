import { createPaintOrder } from '../paintOrder';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPaintOrder', () => {
  it('should return a function', () => {
    const result = createPaintOrder();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPaintOrder` as component and css prop', () => {
    const result = createPaintOrder()({ paintOrder: 'inherit' });
    expect(toStyles(result)).toEqual({ paintOrder: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaintOrder<'a'>()({ paintOrder: 'a' });
    expect(toStyles(result)).toEqual({ paintOrder: 'a' });
  });

  it('should use an interface which marks `createPaintOrder` as optional', () => {
    const result = createPaintOrder<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPaintOrder<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paintOrder: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paintOrder: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaintOrder<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
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
