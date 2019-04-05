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

import { createBorderRadius } from '../borderRadius';

describe('borderRadius', () => {
  it('should return a function', () => {
    const result = createBorderRadius();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderRadius` as component and css prop', () => {
    const result = createBorderRadius()({ borderRadius: 'inherit' });
    expect(toStyles(result)).toEqual({ borderRadius: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderRadius<'a'>()({ borderRadius: 'a' });
    expect(toStyles(result)).toEqual({ borderRadius: 'a' });
  });

  it('should use an interface which marks `borderRadius` as optional', () => {
    const result = createBorderRadius<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderRadius<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderRadius: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderRadius: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderRadius<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderRadius: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderRadius: 'a',
      [MQ.D]: {
        borderRadius: 'b',
      },
      [MQ.T]: {
        borderRadius: 'c',
      },
      [MQ.M]: {
        borderRadius: 'd',
      },
    });
  });
});
