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

import { createBreakBefore } from '../breakBefore';

describe('breakBefore', () => {
  it('should return a function', () => {
    const result = createBreakBefore();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `breakBefore` as component and css prop', () => {
    const result = createBreakBefore()({ breakBefore: 'inherit' });
    expect(toStyles(result)).toEqual({ breakBefore: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBreakBefore<'a'>()({ breakBefore: 'a' });
    expect(toStyles(result)).toEqual({ breakBefore: 'a' });
  });

  it('should use an interface which marks `breakBefore` as optional', () => {
    const result = createBreakBefore<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBreakBefore<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ breakBefore: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      breakBefore: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBreakBefore<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      breakBefore: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      breakBefore: 'a',
      [MQ.D]: {
        breakBefore: 'b',
      },
      [MQ.T]: {
        breakBefore: 'c',
      },
      [MQ.M]: {
        breakBefore: 'd',
      },
    });
  });
});
