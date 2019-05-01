import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderBlockEndWidth } from '../borderBlockEndWidth';

describe('createBorderBlockEndWidth', () => {
  it('should return a function', () => {
    const result = createBorderBlockEndWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBlockEndWidth` as component and css prop', () => {
    const result = createBorderBlockEndWidth()({ borderBlockEndWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockEndWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBlockEndWidth<'a'>()({ borderBlockEndWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockEndWidth: 'a' });
  });

  it('should use an interface which marks `createBorderBlockEndWidth` as optional', () => {
    const result = createBorderBlockEndWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBlockEndWidth<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockEndWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockEndWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBlockEndWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBlockEndWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderBlockEndWidth: 'a',
      [MQ.D]: {
        borderBlockEndWidth: 'b',
      },
      [MQ.T]: {
        borderBlockEndWidth: 'c',
      },
      [MQ.M]: {
        borderBlockEndWidth: 'd',
      },
    });
  });
});
