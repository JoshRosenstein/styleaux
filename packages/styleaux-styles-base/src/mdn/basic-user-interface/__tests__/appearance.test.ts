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

import { createAppearance } from '../appearance';

describe('appearance', () => {
  it('should return a function', () => {
    const result = createAppearance();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `appearance` as component and css prop', () => {
    const result = createAppearance()({ appearance: 'inherit' });
    expect(toStyles(result)).toEqual({ appearance: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAppearance<'a'>()({ appearance: 'a' });
    expect(toStyles(result)).toEqual({ appearance: 'a' });
  });

  it('should use an interface which marks `appearance` as optional', () => {
    const result = createAppearance<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createAppearance<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ appearance: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      appearance: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAppearance<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      appearance: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      appearance: 'a',
      [MQ.D]: {
        appearance: 'b',
      },
      [MQ.T]: {
        appearance: 'c',
      },
      [MQ.M]: {
        appearance: 'd',
      },
    });
  });
});
