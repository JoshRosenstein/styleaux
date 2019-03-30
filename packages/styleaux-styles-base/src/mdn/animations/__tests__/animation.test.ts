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

import { animation } from '../animation';

describe('animation', () => {
  it('should return a function', () => {
    const result = animation();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `animation` as component and css prop', () => {
    const result = animation()({ animation: 'inherit' });
    expect(toStyles(result)).toEqual({ animation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = animation<'a'>()({ animation: 'a' });
    expect(toStyles(result)).toEqual({ animation: 'a' });
  });

  it('should use an interface which marks `animation` as optional', () => {
    const result = animation<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = animation<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ animation: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      animation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = animation<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      animation: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      animation: 'a',
      [MQ.D]: {
        animation: 'b',
      },
      [MQ.T]: {
        animation: 'c',
      },
      [MQ.M]: {
        animation: 'd',
      },
    });
  });
});
