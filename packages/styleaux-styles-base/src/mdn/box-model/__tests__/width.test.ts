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

import { width } from '../width';

describe('width', () => {
  it('should return a function', () => {
    const result = width();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `width` as component and css prop', () => {
    const result = width()({ width: 'inherit' });
    expect(toStyles(result)).toEqual({ width: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = width<'a'>()({ width: 'a' });
    expect(toStyles(result)).toEqual({ width: 'a' });
  });

  it('should use an interface which marks `width` as optional', () => {
    const result = width<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = width<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ width: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      width: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = width<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      width: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      width: 'a',
      [MQ.D]: {
        width: 'b',
      },
      [MQ.T]: {
        width: 'c',
      },
      [MQ.M]: {
        width: 'd',
      },
    });
  });
});
