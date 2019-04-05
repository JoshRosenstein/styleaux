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

import { createMask } from '../mask';

describe('mask', () => {
  it('should return a function', () => {
    const result = createMask();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `mask` as component and css prop', () => {
    const result = createMask()({ mask: 'inherit' });
    expect(toStyles(result)).toEqual({ mask: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMask<'a'>()({ mask: 'a' });
    expect(toStyles(result)).toEqual({ mask: 'a' });
  });

  it('should use an interface which marks `mask` as optional', () => {
    const result = createMask<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMask<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ mask: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      mask: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMask<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      mask: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      mask: 'a',
      [MQ.D]: {
        mask: 'b',
      },
      [MQ.T]: {
        mask: 'c',
      },
      [MQ.M]: {
        mask: 'd',
      },
    });
  });
});
