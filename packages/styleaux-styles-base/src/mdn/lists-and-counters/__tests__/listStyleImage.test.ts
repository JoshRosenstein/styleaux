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

import { listStyleImage } from '../listStyleImage';

describe('listStyleImage', () => {
  it('should return a function', () => {
    const result = listStyleImage();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `listStyleImage` as component and css prop', () => {
    const result = listStyleImage()({ listStyleImage: 'inherit' });
    expect(toStyles(result)).toEqual({ listStyleImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStyleImage<'a'>()({ listStyleImage: 'a' });
    expect(toStyles(result)).toEqual({ listStyleImage: 'a' });
  });

  it('should use an interface which marks `listStyleImage` as optional', () => {
    const result = listStyleImage<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = listStyleImage<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ listStyleImage: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      listStyleImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStyleImage<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      listStyleImage: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      listStyleImage: 'a',
      [MQ.D]: {
        listStyleImage: 'b',
      },
      [MQ.T]: {
        listStyleImage: 'c',
      },
      [MQ.M]: {
        listStyleImage: 'd',
      },
    });
  });
});
