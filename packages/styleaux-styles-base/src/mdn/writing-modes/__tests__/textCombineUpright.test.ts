import { createTextCombineUpright } from '../textCombineUpright';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextCombineUpright', () => {
  it('should return a function', () => {
    const result = createTextCombineUpright();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextCombineUpright` as component and css prop', () => {
    const result = createTextCombineUpright()({
      textCombineUpright: 'inherit',
    });
    expect(toStyles(result)).toEqual({ textCombineUpright: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextCombineUpright<'a'>()({ textCombineUpright: 'a' });
    expect(toStyles(result)).toEqual({ textCombineUpright: 'a' });
  });

  it('should use an interface which marks `createTextCombineUpright` as optional', () => {
    const result = createTextCombineUpright<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextCombineUpright<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ textCombineUpright: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textCombineUpright: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextCombineUpright<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textCombineUpright: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textCombineUpright: 'a',
      [MQ.D]: {
        textCombineUpright: 'b',
      },
      [MQ.T]: {
        textCombineUpright: 'c',
      },
      [MQ.M]: {
        textCombineUpright: 'd',
      },
    });
  });
});
