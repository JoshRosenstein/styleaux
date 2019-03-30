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

import { backgroundImage } from '../backgroundImage';

describe('backgroundImage', () => {
  it('should return a function', () => {
    const result = backgroundImage();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundImage` as component and css prop', () => {
    const result = backgroundImage()({ backgroundImage: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundImage<'a'>()({ backgroundImage: 'a' });
    expect(toStyles(result)).toEqual({ backgroundImage: 'a' });
  });

  it('should use an interface which marks `backgroundImage` as optional', () => {
    const result = backgroundImage<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundImage<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundImage: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundImage<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundImage: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundImage: 'a',
      [MQ.D]: {
        backgroundImage: 'b',
      },
      [MQ.T]: {
        backgroundImage: 'c',
      },
      [MQ.M]: {
        backgroundImage: 'd',
      },
    });
  });
});
