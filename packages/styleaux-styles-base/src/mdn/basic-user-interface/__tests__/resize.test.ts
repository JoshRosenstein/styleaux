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

import { resize } from '../resize';

describe('resize', () => {
  it('should return a function', () => {
    const result = resize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `resize` as component and css prop', () => {
    const result = resize()({ resize: 'inherit' });
    expect(toStyles(result)).toEqual({ resize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = resize<'a'>()({ resize: 'a' });
    expect(toStyles(result)).toEqual({ resize: 'a' });
  });

  it('should use an interface which marks `resize` as optional', () => {
    const result = resize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = resize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ resize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      resize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = resize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      resize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      resize: 'a',
      [MQ.D]: {
        resize: 'b',
      },
      [MQ.T]: {
        resize: 'c',
      },
      [MQ.M]: {
        resize: 'd',
      },
    });
  });
});
