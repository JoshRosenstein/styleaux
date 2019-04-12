import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderStyle } from '../borderStyle';

describe('createBorderStyle', () => {
  it('should return a function', () => {
    const result = createBorderStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderStyle` as component and css prop', () => {
    const result = createBorderStyle()({ borderStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderStyle<'a'>()({ borderStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderStyle: 'a' });
  });

  it('should use an interface which marks `createBorderStyle` as optional', () => {
    const result = createBorderStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderStyle: 'a',
      [MQ.D]: {
        borderStyle: 'b',
      },
      [MQ.T]: {
        borderStyle: 'c',
      },
      [MQ.M]: {
        borderStyle: 'd',
      },
    });
  });
});
