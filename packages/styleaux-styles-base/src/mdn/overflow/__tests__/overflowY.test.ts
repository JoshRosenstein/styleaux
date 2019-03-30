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

import { overflowY } from '../overflowY';

describe('overflowY', () => {
  it('should return a function', () => {
    const result = overflowY();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `overflowY` as component and css prop', () => {
    const result = overflowY()({ overflowY: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowY: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowY<'a'>()({ overflowY: 'a' });
    expect(toStyles(result)).toEqual({ overflowY: 'a' });
  });

  it('should use an interface which marks `overflowY` as optional', () => {
    const result = overflowY<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = overflowY<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowY: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowY: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowY<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      overflowY: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflowY: 'a',
      [MQ.D]: {
        overflowY: 'b',
      },
      [MQ.T]: {
        overflowY: 'c',
      },
      [MQ.M]: {
        overflowY: 'd',
      },
    });
  });
});
