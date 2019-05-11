import { createBorderBlockStart } from '../borderBlockStart';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderBlockStart', () => {
  it('should return a function', () => {
    const result = createBorderBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBlockStart` as component and css prop', () => {
    const result = createBorderBlockStart()({ borderBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockStart<'a'>()({ borderBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockStart: 'a' });
  });

  it('should use an interface which marks `createBorderBlockStart` as optional', () => {
    const result = createBorderBlockStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockStart<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStart: 'a',
      [MQ.D]: {
        borderBlockStart: 'b',
      },
      [MQ.T]: {
        borderBlockStart: 'c',
      },
      [MQ.M]: {
        borderBlockStart: 'd',
      },
    });
  });
});
