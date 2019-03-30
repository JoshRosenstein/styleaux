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

import { flexDirection } from '../flexDirection';

describe('flexDirection', () => {
  it('should return a function', () => {
    const result = flexDirection();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `flexDirection` as component and css prop', () => {
    const result = flexDirection()({ flexDirection: 'inherit' });
    expect(toStyles(result)).toEqual({ flexDirection: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flexDirection<'a'>()({ flexDirection: 'a' });
    expect(toStyles(result)).toEqual({ flexDirection: 'a' });
  });

  it('should use an interface which marks `flexDirection` as optional', () => {
    const result = flexDirection<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = flexDirection<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexDirection: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexDirection: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flexDirection<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      flexDirection: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flexDirection: 'a',
      [MQ.D]: {
        flexDirection: 'b',
      },
      [MQ.T]: {
        flexDirection: 'c',
      },
      [MQ.M]: {
        flexDirection: 'd',
      },
    });
  });
});
