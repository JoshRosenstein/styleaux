import { createBorderImageOutset } from '../borderImageOutset';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderImageOutset', () => {
  it('should return a function', () => {
    const result = createBorderImageOutset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderImageOutset` as component and css prop', () => {
    const result = createBorderImageOutset()({ borderImageOutset: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageOutset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderImageOutset<'a'>()({ borderImageOutset: 'a' });
    expect(toStyles(result)).toEqual({ borderImageOutset: 'a' });
  });

  it('should use an interface which marks `createBorderImageOutset` as optional', () => {
    const result = createBorderImageOutset<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderImageOutset<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderImageOutset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageOutset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderImageOutset<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderImageOutset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageOutset: 'a',
      [MQ.D]: {
        borderImageOutset: 'b',
      },
      [MQ.T]: {
        borderImageOutset: 'c',
      },
      [MQ.M]: {
        borderImageOutset: 'd',
      },
    });
  });
});
