import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createPaddingRight } from '../paddingRight';

describe('createPaddingRight', () => {
  it('should return a function', () => {
    const result = createPaddingRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPaddingRight` as component and css prop', () => {
    const result = createPaddingRight()({ paddingRight: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingRight<'a'>()({ paddingRight: 'a' });
    expect(toStyles(result)).toEqual({ paddingRight: 'a' });
  });

  it('should use an interface which marks `createPaddingRight` as optional', () => {
    const result = createPaddingRight<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPaddingRight<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingRight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      paddingRight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      paddingRight: 'a',
      [MQ.D]: {
        paddingRight: 'b',
      },
      [MQ.T]: {
        paddingRight: 'c',
      },
      [MQ.M]: {
        paddingRight: 'd',
      },
    });
  });
});
