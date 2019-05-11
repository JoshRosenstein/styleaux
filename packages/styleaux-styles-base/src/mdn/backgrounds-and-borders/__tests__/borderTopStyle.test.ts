import { createBorderTopStyle } from '../borderTopStyle';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderTopStyle', () => {
  it('should return a function', () => {
    const result = createBorderTopStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderTopStyle` as component and css prop', () => {
    const result = createBorderTopStyle()({ borderTopStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderTopStyle<'a'>()({ borderTopStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderTopStyle: 'a' });
  });

  it('should use an interface which marks `createBorderTopStyle` as optional', () => {
    const result = createBorderTopStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderTopStyle<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderTopStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderTopStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderTopStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopStyle: 'a',
      [MQ.D]: {
        borderTopStyle: 'b',
      },
      [MQ.T]: {
        borderTopStyle: 'c',
      },
      [MQ.M]: {
        borderTopStyle: 'd',
      },
    });
  });
});
