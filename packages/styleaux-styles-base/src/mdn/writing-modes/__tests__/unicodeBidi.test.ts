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

import { unicodeBidi } from '../unicodeBidi';

describe('unicodeBidi', () => {
  it('should return a function', () => {
    const result = unicodeBidi();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `unicodeBidi` as component and css prop', () => {
    const result = unicodeBidi()({ unicodeBidi: 'inherit' });
    expect(toStyles(result)).toEqual({ unicodeBidi: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = unicodeBidi<'a'>()({ unicodeBidi: 'a' });
    expect(toStyles(result)).toEqual({ unicodeBidi: 'a' });
  });

  it('should use an interface which marks `unicodeBidi` as optional', () => {
    const result = unicodeBidi<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = unicodeBidi<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ unicodeBidi: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      unicodeBidi: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = unicodeBidi<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      unicodeBidi: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      unicodeBidi: 'a',
      [MQ.D]: {
        unicodeBidi: 'b',
      },
      [MQ.T]: {
        unicodeBidi: 'c',
      },
      [MQ.M]: {
        unicodeBidi: 'd',
      },
    });
  });
});
