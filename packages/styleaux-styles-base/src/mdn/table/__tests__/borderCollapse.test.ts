import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderCollapse } from '../borderCollapse';

describe('createBorderCollapse', () => {
  it('should return a function', () => {
    const result = createBorderCollapse();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderCollapse` as component and css prop', () => {
    const result = createBorderCollapse()({ borderCollapse: 'inherit' });
    expect(toStyles(result)).toEqual({ borderCollapse: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderCollapse<'a'>()({ borderCollapse: 'a' });
    expect(toStyles(result)).toEqual({ borderCollapse: 'a' });
  });

  it('should use an interface which marks `createBorderCollapse` as optional', () => {
    const result = createBorderCollapse<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderCollapse<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderCollapse: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderCollapse: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderCollapse<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderCollapse: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderCollapse: 'a',
      [MQ.D]: {
        borderCollapse: 'b',
      },
      [MQ.T]: {
        borderCollapse: 'c',
      },
      [MQ.M]: {
        borderCollapse: 'd',
      },
    });
  });
});
