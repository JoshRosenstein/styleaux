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

import { maskType } from '../maskType';

describe('maskType', () => {
  it('should return a function', () => {
    const result = maskType();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maskType` as component and css prop', () => {
    const result = maskType()({ maskType: 'inherit' });
    expect(toStyles(result)).toEqual({ maskType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskType<'a'>()({ maskType: 'a' });
    expect(toStyles(result)).toEqual({ maskType: 'a' });
  });

  it('should use an interface which marks `maskType` as optional', () => {
    const result = maskType<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = maskType<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskType: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskType<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maskType: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskType: 'a',
      [MQ.D]: {
        maskType: 'b',
      },
      [MQ.T]: {
        maskType: 'c',
      },
      [MQ.M]: {
        maskType: 'd',
      },
    });
  });
});
