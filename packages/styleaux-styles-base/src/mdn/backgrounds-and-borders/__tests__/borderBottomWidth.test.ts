import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderBottomWidth } from '../borderBottomWidth';

describe('createBorderBottomWidth', () => {
  it('should return a function', () => {
    const result = createBorderBottomWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderBottomWidth` as component and css prop', () => {
    const result = createBorderBottomWidth()({ borderBottomWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBottomWidth<'a'>()({ borderBottomWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomWidth: 'a' });
  });

  it('should use an interface which marks `createBorderBottomWidth` as optional', () => {
    const result = createBorderBottomWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderBottomWidth<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBottomWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderBottomWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderBottomWidth: 'a',
      [MQ.D]: {
        borderBottomWidth: 'b',
      },
      [MQ.T]: {
        borderBottomWidth: 'c',
      },
      [MQ.M]: {
        borderBottomWidth: 'd',
      },
    });
  });
});
