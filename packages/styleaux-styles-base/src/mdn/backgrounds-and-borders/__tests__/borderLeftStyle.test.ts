import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderLeftStyle } from '../borderLeftStyle';

describe('createBorderLeftStyle', () => {
  it('should return a function', () => {
    const result = createBorderLeftStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderLeftStyle` as component and css prop', () => {
    const result = createBorderLeftStyle()({ borderLeftStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderLeftStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderLeftStyle<'a'>()({ borderLeftStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderLeftStyle: 'a' });
  });

  it('should use an interface which marks `createBorderLeftStyle` as optional', () => {
    const result = createBorderLeftStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderLeftStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderLeftStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderLeftStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderLeftStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderLeftStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderLeftStyle: 'a',
      [MQ.D]: {
        borderLeftStyle: 'b',
      },
      [MQ.T]: {
        borderLeftStyle: 'c',
      },
      [MQ.M]: {
        borderLeftStyle: 'd',
      },
    });
  });
});
