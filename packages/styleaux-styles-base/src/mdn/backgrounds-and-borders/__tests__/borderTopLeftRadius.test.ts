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

import { borderTopLeftRadius } from '../borderTopLeftRadius';

describe('borderTopLeftRadius', () => {
  it('should return a function', () => {
    const result = borderTopLeftRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderTopLeftRadius` as component and css prop', () => {
    const result = borderTopLeftRadius()({ borderTopLeftRadius: 'inherit' });
    expect(toStyles(result)).toEqual({ borderTopLeftRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderTopLeftRadius<'a'>()({ borderTopLeftRadius: 'a' });
    expect(toStyles(result)).toEqual({ borderTopLeftRadius: 'a' });
  });

  it('should use an interface which marks `borderTopLeftRadius` as optional', () => {
    const result = borderTopLeftRadius<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderTopLeftRadius<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderTopLeftRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderTopLeftRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderTopLeftRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderTopLeftRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderTopLeftRadius: 'a',
      [MQ.D]: {
        borderTopLeftRadius: 'b',
      },
      [MQ.T]: {
        borderTopLeftRadius: 'c',
      },
      [MQ.M]: {
        borderTopLeftRadius: 'd',
      },
    });
  });
});
