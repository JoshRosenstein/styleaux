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

import { transition } from '../transition';

describe('transition', () => {
  it('should return a function', () => {
    const result = transition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transition` as component and css prop', () => {
    const result = transition()({ transition: 'inherit' });
    expect(toStyles(result)).toEqual({ transition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transition<'a'>()({ transition: 'a' });
    expect(toStyles(result)).toEqual({ transition: 'a' });
  });

  it('should use an interface which marks `transition` as optional', () => {
    const result = transition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = transition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transition: 'a',
      [MQ.D]: {
        transition: 'b',
      },
      [MQ.T]: {
        transition: 'c',
      },
      [MQ.M]: {
        transition: 'd',
      },
    });
  });
});
