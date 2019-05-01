import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createListStyle } from '../listStyle';

describe('createListStyle', () => {
  it('should return a function', () => {
    const result = createListStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createListStyle` as component and css prop', () => {
    const result = createListStyle()({ listStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ listStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createListStyle<'a'>()({ listStyle: 'a' });
    expect(toStyles(result)).toEqual({ listStyle: 'a' });
  });

  it('should use an interface which marks `createListStyle` as optional', () => {
    const result = createListStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createListStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ listStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      listStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createListStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      listStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      listStyle: 'a',
      [MQ.D]: {
        listStyle: 'b',
      },
      [MQ.T]: {
        listStyle: 'c',
      },
      [MQ.M]: {
        listStyle: 'd',
      },
    });
  });
});
