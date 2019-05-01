import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createMarginLeft } from '../marginLeft';

describe('createMarginLeft', () => {
  it('should return a function', () => {
    const result = createMarginLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMarginLeft` as component and css prop', () => {
    const result = createMarginLeft()({ marginLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ marginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginLeft<'a'>()({ marginLeft: 'a' });
    expect(toStyles(result)).toEqual({ marginLeft: 'a' });
  });

  it('should use an interface which marks `createMarginLeft` as optional', () => {
    const result = createMarginLeft<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMarginLeft<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      marginLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      marginLeft: 'a',
      [MQ.D]: {
        marginLeft: 'b',
      },
      [MQ.T]: {
        marginLeft: 'c',
      },
      [MQ.M]: {
        marginLeft: 'd',
      },
    });
  });
});
