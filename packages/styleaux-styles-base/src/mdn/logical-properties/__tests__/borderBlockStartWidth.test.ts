import { createBorderBlockStartWidth } from '../borderBlockStartWidth';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderBlockStartWidth', () => {
  it('should return a function', () => {
    const result = createBorderBlockStartWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBlockStartWidth` as component and css prop', () => {
    const result = createBorderBlockStartWidth()({
      borderBlockStartWidth: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderBlockStartWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockStartWidth<'a'>()({
      borderBlockStartWidth: 'a',
    });
    expect(toStyles(result)).toEqual({ borderBlockStartWidth: 'a' });
  });

  it('should use an interface which marks `createBorderBlockStartWidth` as optional', () => {
    const result = createBorderBlockStartWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockStartWidth<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderBlockStartWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStartWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockStartWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBlockStartWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStartWidth: 'a',
      [MQ.D]: {
        borderBlockStartWidth: 'b',
      },
      [MQ.T]: {
        borderBlockStartWidth: 'c',
      },
      [MQ.M]: {
        borderBlockStartWidth: 'd',
      },
    });
  });
});
