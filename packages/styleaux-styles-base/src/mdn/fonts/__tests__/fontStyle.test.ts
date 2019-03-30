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

import { fontStyle } from '../fontStyle';

describe('fontStyle', () => {
  it('should return a function', () => {
    const result = fontStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontStyle` as component and css prop', () => {
    const result = fontStyle()({ fontStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ fontStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontStyle<'a'>()({ fontStyle: 'a' });
    expect(toStyles(result)).toEqual({ fontStyle: 'a' });
  });

  it('should use an interface which marks `fontStyle` as optional', () => {
    const result = fontStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontStyle: 'a',
      [MQ.D]: {
        fontStyle: 'b',
      },
      [MQ.T]: {
        fontStyle: 'c',
      },
      [MQ.M]: {
        fontStyle: 'd',
      },
    });
  });
});
