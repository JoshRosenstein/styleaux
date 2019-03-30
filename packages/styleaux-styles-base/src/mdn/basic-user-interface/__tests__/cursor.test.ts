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

import { cursor } from '../cursor';

describe('cursor', () => {
  it('should return a function', () => {
    const result = cursor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `cursor` as component and css prop', () => {
    const result = cursor()({ cursor: 'inherit' });
    expect(toStyles(result)).toEqual({ cursor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = cursor<'a'>()({ cursor: 'a' });
    expect(toStyles(result)).toEqual({ cursor: 'a' });
  });

  it('should use an interface which marks `cursor` as optional', () => {
    const result = cursor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = cursor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ cursor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      cursor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = cursor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      cursor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      cursor: 'a',
      [MQ.D]: {
        cursor: 'b',
      },
      [MQ.T]: {
        cursor: 'c',
      },
      [MQ.M]: {
        cursor: 'd',
      },
    });
  });
});
