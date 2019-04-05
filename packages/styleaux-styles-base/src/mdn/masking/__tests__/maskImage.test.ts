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

import { createMaskImage } from '../maskImage';

describe('maskImage', () => {
  it('should return a function', () => {
    const result = createMaskImage();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maskImage` as component and css prop', () => {
    const result = createMaskImage()({ maskImage: 'inherit' });
    expect(toStyles(result)).toEqual({ maskImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaskImage<'a'>()({ maskImage: 'a' });
    expect(toStyles(result)).toEqual({ maskImage: 'a' });
  });

  it('should use an interface which marks `maskImage` as optional', () => {
    const result = createMaskImage<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMaskImage<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskImage: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaskImage<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maskImage: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskImage: 'a',
      [MQ.D]: {
        maskImage: 'b',
      },
      [MQ.T]: {
        maskImage: 'c',
      },
      [MQ.M]: {
        maskImage: 'd',
      },
    });
  });
});
