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

import { borderImage } from '../borderImage';

describe('borderImage', () => {
  it('should return a function', () => {
    const result = borderImage();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderImage` as component and css prop', () => {
    const result = borderImage()({ borderImage: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImage<'a'>()({ borderImage: 'a' });
    expect(toStyles(result)).toEqual({ borderImage: 'a' });
  });

  it('should use an interface which marks `borderImage` as optional', () => {
    const result = borderImage<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderImage<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImage: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImage<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderImage: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImage: 'a',
      [MQ.D]: {
        borderImage: 'b',
      },
      [MQ.T]: {
        borderImage: 'c',
      },
      [MQ.M]: {
        borderImage: 'd',
      },
    });
  });
});
