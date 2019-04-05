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

import { createGap } from '../gap';

describe('gap', () => {
  it('should return a function', () => {
    const result = createGap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gap` as component and css prop', () => {
    const result = createGap()({ gap: 'inherit' });
    expect(toStyles(result)).toEqual({ gap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGap<'a'>()({ gap: 'a' });
    expect(toStyles(result)).toEqual({ gap: 'a' });
  });

  it('should use an interface which marks `gap` as optional', () => {
    const result = createGap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gap: 'a',
      [MQ.D]: {
        gap: 'b',
      },
      [MQ.T]: {
        gap: 'c',
      },
      [MQ.M]: {
        gap: 'd',
      },
    });
  });
});
