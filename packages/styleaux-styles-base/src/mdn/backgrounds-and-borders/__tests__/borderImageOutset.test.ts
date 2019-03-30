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

import { borderImageOutset } from '../borderImageOutset';

describe('borderImageOutset', () => {
  it('should return a function', () => {
    const result = borderImageOutset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderImageOutset` as component and css prop', () => {
    const result = borderImageOutset()({ borderImageOutset: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageOutset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderImageOutset<'a'>()({ borderImageOutset: 'a' });
    expect(toStyles(result)).toEqual({ borderImageOutset: 'a' });
  });

  it('should use an interface which marks `borderImageOutset` as optional', () => {
    const result = borderImageOutset<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderImageOutset<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImageOutset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageOutset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderImageOutset<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderImageOutset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageOutset: 'a',
      [MQ.D]: {
        borderImageOutset: 'b',
      },
      [MQ.T]: {
        borderImageOutset: 'c',
      },
      [MQ.M]: {
        borderImageOutset: 'd',
      },
    });
  });
});
