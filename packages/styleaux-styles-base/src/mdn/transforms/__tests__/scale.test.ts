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

import { scale } from '../scale';

describe('scale', () => {
  it('should return a function', () => {
    const result = scale();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scale` as component and css prop', () => {
    const result = scale()({ scale: 'inherit' });
    expect(toStyles(result)).toEqual({ scale: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scale<'a'>()({ scale: 'a' });
    expect(toStyles(result)).toEqual({ scale: 'a' });
  });

  it('should use an interface which marks `scale` as optional', () => {
    const result = scale<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scale<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scale: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scale: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scale<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scale: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scale: 'a',
      [MQ.D]: {
        scale: 'b',
      },
      [MQ.T]: {
        scale: 'c',
      },
      [MQ.M]: {
        scale: 'd',
      },
    });
  });
});
