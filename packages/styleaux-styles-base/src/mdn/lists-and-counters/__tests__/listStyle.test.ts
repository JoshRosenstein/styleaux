import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { listStyle } from '../listStyle';

describe('listStyle', () => {
  it('should return a function', () => {
    const result = listStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `listStyle` as component and css prop', () => {
    const result = listStyle()({ listStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ listStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStyle<'a'>()({ listStyle: 'a' });
    expect(toStyles(result)).toEqual({ listStyle: 'a' });
  });

  it('should use an interface which marks `listStyle` as optional', () => {
    const result = listStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = listStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ listStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      listStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStyle<
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
