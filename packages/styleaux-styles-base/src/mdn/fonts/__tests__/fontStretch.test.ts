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

import { fontStretch } from '../fontStretch';

describe('fontStretch', () => {
  it('should return a function', () => {
    const result = fontStretch();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontStretch` as component and css prop', () => {
    const result = fontStretch()({ fontStretch: 'inherit' });
    expect(toStyles(result)).toEqual({ fontStretch: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontStretch<'a'>()({ fontStretch: 'a' });
    expect(toStyles(result)).toEqual({ fontStretch: 'a' });
  });

  it('should use an interface which marks `fontStretch` as optional', () => {
    const result = fontStretch<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontStretch<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontStretch: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontStretch: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontStretch<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontStretch: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontStretch: 'a',
      [MQ.D]: {
        fontStretch: 'b',
      },
      [MQ.T]: {
        fontStretch: 'c',
      },
      [MQ.M]: {
        fontStretch: 'd',
      },
    });
  });
});
