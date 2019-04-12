import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createJustifyItems } from '../justifyItems';

describe('createJustifyItems', () => {
  it('should return a function', () => {
    const result = createJustifyItems();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createJustifyItems` as component and css prop', () => {
    const result = createJustifyItems()({ justifyItems: 'inherit' });
    expect(toStyles(result)).toEqual({ justifyItems: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createJustifyItems<'a'>()({ justifyItems: 'a' });
    expect(toStyles(result)).toEqual({ justifyItems: 'a' });
  });

  it('should use an interface which marks `createJustifyItems` as optional', () => {
    const result = createJustifyItems<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createJustifyItems<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ justifyItems: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      justifyItems: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createJustifyItems<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      justifyItems: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      justifyItems: 'a',
      [MQ.D]: {
        justifyItems: 'b',
      },
      [MQ.T]: {
        justifyItems: 'c',
      },
      [MQ.M]: {
        justifyItems: 'd',
      },
    });
  });
});
