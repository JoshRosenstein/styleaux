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

import { float } from '../float';

describe('float', () => {
  it('should return a function', () => {
    const result = float();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `float` as component and css prop', () => {
    const result = float()({ float: 'inherit' });
    expect(toStyles(result)).toEqual({ float: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = float<'a'>()({ float: 'a' });
    expect(toStyles(result)).toEqual({ float: 'a' });
  });

  it('should use an interface which marks `float` as optional', () => {
    const result = float<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = float<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ float: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      float: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = float<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      float: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      float: 'a',
      [MQ.D]: {
        float: 'b',
      },
      [MQ.T]: {
        float: 'c',
      },
      [MQ.M]: {
        float: 'd',
      },
    });
  });
});
