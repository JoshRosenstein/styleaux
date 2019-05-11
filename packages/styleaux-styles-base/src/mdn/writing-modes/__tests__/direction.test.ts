import { createDirection } from '../direction';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createDirection', () => {
  it('should return a function', () => {
    const result = createDirection();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createDirection` as component and css prop', () => {
    const result = createDirection()({ direction: 'inherit' });
    expect(toStyles(result)).toEqual({ direction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createDirection<'a'>()({ direction: 'a' });
    expect(toStyles(result)).toEqual({ direction: 'a' });
  });

  it('should use an interface which marks `createDirection` as optional', () => {
    const result = createDirection<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createDirection<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ direction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      direction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createDirection<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      direction: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      direction: 'a',
      [MQ.D]: {
        direction: 'b',
      },
      [MQ.T]: {
        direction: 'c',
      },
      [MQ.M]: {
        direction: 'd',
      },
    });
  });
});
