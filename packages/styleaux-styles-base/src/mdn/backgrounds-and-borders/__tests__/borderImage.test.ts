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

import { createBorderImage } from '../borderImage';

describe('borderImage', () => {
  it('should return a function', () => {
    const result = createBorderImage();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderImage` as component and css prop', () => {
    const result = createBorderImage()({ borderImage: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderImage<'a'>()({ borderImage: 'a' });
    expect(toStyles(result)).toEqual({ borderImage: 'a' });
  });

  it('should use an interface which marks `borderImage` as optional', () => {
    const result = createBorderImage<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderImage<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImage: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderImage<
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
