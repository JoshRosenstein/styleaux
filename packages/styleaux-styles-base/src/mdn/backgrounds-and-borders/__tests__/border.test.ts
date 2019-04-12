import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorder } from '../border';

describe('createBorder', () => {
  it('should return a function', () => {
    const result = createBorder();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorder` as component and css prop', () => {
    const result = createBorder()({ border: 'inherit' });
    expect(toStyles(result)).toEqual({ border: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorder<'a'>()({ border: 'a' });
    expect(toStyles(result)).toEqual({ border: 'a' });
  });

  it('should use an interface which marks `createBorder` as optional', () => {
    const result = createBorder<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorder<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ border: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      border: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorder<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      border: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      border: 'a',
      [MQ.D]: {
        border: 'b',
      },
      [MQ.T]: {
        border: 'c',
      },
      [MQ.M]: {
        border: 'd',
      },
    });
  });
});
