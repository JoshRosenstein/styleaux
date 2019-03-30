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

import { borderImageSource } from '../borderImageSource';

describe('borderImageSource', () => {
  it('should return a function', () => {
    const result = borderImageSource();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderImageSource` as component and css prop', () => {
    const result = borderImageSource()({ borderImageSource: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageSource: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageSource<'a'>()({ borderImageSource: 'a' });
    expect(toStyles(result)).toEqual({ borderImageSource: 'a' });
  });

  it('should use an interface which marks `borderImageSource` as optional', () => {
    const result = borderImageSource<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderImageSource<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImageSource: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageSource: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageSource<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderImageSource: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageSource: 'a',
      [MQ.D]: {
        borderImageSource: 'b',
      },
      [MQ.T]: {
        borderImageSource: 'c',
      },
      [MQ.M]: {
        borderImageSource: 'd',
      },
    });
  });
});
