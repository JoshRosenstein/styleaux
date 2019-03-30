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

import { borderBottomRightRadius } from '../borderBottomRightRadius';

describe('borderBottomRightRadius', () => {
  it('should return a function', () => {
    const result = borderBottomRightRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottomRightRadius` as component and css prop', () => {
    const result = borderBottomRightRadius()({ borderBottomRightRadius: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomRightRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottomRightRadius<'a'>()({ borderBottomRightRadius: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomRightRadius: 'a' });
  });

  it('should use an interface which marks `borderBottomRightRadius` as optional', () => {
    const result = borderBottomRightRadius<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBottomRightRadius<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomRightRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomRightRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottomRightRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBottomRightRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottomRightRadius: 'a',
      [MQ.D]: {
        borderBottomRightRadius: 'b',
      },
      [MQ.T]: {
        borderBottomRightRadius: 'c',
      },
      [MQ.M]: {
        borderBottomRightRadius: 'd',
      },
    });
  });
});
