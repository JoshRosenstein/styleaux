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

import { fontWeight } from '../fontWeight';

describe('fontWeight', () => {
  it('should return a function', () => {
    const result = fontWeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontWeight` as component and css prop', () => {
    const result = fontWeight()({ fontWeight: 'inherit' });
    expect(toStyles(result)).toEqual({ fontWeight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontWeight<'a'>()({ fontWeight: 'a' });
    expect(toStyles(result)).toEqual({ fontWeight: 'a' });
  });

  it('should use an interface which marks `fontWeight` as optional', () => {
    const result = fontWeight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontWeight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontWeight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontWeight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontWeight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontWeight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontWeight: 'a',
      [MQ.D]: {
        fontWeight: 'b',
      },
      [MQ.T]: {
        fontWeight: 'c',
      },
      [MQ.M]: {
        fontWeight: 'd',
      },
    });
  });
});