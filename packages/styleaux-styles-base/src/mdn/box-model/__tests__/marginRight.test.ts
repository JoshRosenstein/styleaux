import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createMarginRight } from '../marginRight';

describe('createMarginRight', () => {
  it('should return a function', () => {
    const result = createMarginRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMarginRight` as component and css prop', () => {
    const result = createMarginRight()({ marginRight: 'inherit' });
    expect(toStyles(result)).toEqual({ marginRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginRight<'a'>()({ marginRight: 'a' });
    expect(toStyles(result)).toEqual({ marginRight: 'a' });
  });

  it('should use an interface which marks `createMarginRight` as optional', () => {
    const result = createMarginRight<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMarginRight<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginRight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      marginRight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      marginRight: 'a',
      [MQ.D]: {
        marginRight: 'b',
      },
      [MQ.T]: {
        marginRight: 'c',
      },
      [MQ.M]: {
        marginRight: 'd',
      },
    });
  });
});
