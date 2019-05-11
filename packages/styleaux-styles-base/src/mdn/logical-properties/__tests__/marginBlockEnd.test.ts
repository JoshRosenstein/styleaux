import { createMarginBlockEnd } from '../marginBlockEnd';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMarginBlockEnd', () => {
  it('should return a function', () => {
    const result = createMarginBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMarginBlockEnd` as component and css prop', () => {
    const result = createMarginBlockEnd()({ marginBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginBlockEnd<'a'>()({ marginBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ marginBlockEnd: 'a' });
  });

  it('should use an interface which marks `createMarginBlockEnd` as optional', () => {
    const result = createMarginBlockEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMarginBlockEnd<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ marginBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      marginBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBlockEnd: 'a',
      [MQ.D]: {
        marginBlockEnd: 'b',
      },
      [MQ.T]: {
        marginBlockEnd: 'c',
      },
      [MQ.M]: {
        marginBlockEnd: 'd',
      },
    });
  });
});
