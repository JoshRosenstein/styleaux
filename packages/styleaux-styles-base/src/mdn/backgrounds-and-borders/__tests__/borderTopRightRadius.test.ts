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

import { borderTopRightRadius } from '../borderTopRightRadius';

describe('borderTopRightRadius', () => {
  it('should return a function', () => {
    const result = borderTopRightRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderTopRightRadius` as component and css prop', () => {
    const result = borderTopRightRadius()({ borderTopRightRadius: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopRightRadius<'a'>()({ borderTopRightRadius: 'a' });
    expect(toStyles(result)).toEqual({ borderTopRightRadius: 'a' });
  });

  it('should use an interface which marks `borderTopRightRadius` as optional', () => {
    const result = borderTopRightRadius<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderTopRightRadius<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTopRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopRightRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderTopRightRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopRightRadius: 'a',
      [MQ.D]: {
        borderTopRightRadius: 'b',
      },
      [MQ.T]: {
        borderTopRightRadius: 'c',
      },
      [MQ.M]: {
        borderTopRightRadius: 'd',
      },
    });
  });
});
