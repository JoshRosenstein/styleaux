import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderRightStyle } from '../borderRightStyle';

describe('createBorderRightStyle', () => {
  it('should return a function', () => {
    const result = createBorderRightStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderRightStyle` as component and css prop', () => {
    const result = createBorderRightStyle()({ borderRightStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRightStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderRightStyle<'a'>()({ borderRightStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderRightStyle: 'a' });
  });

  it('should use an interface which marks `createBorderRightStyle` as optional', () => {
    const result = createBorderRightStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderRightStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderRightStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRightStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderRightStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderRightStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderRightStyle: 'a',
      [MQ.D]: {
        borderRightStyle: 'b',
      },
      [MQ.T]: {
        borderRightStyle: 'c',
      },
      [MQ.M]: {
        borderRightStyle: 'd',
      },
    });
  });
});
