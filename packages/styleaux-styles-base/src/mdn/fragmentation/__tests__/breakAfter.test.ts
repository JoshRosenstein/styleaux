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

import { breakAfter } from '../breakAfter';

describe('breakAfter', () => {
  it('should return a function', () => {
    const result = breakAfter();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `breakAfter` as component and css prop', () => {
    const result = breakAfter()({ breakAfter: 'inherit' });
    expect(toStyles(result)).toEqual({ breakAfter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = breakAfter<'a'>()({ breakAfter: 'a' });
    expect(toStyles(result)).toEqual({ breakAfter: 'a' });
  });

  it('should use an interface which marks `breakAfter` as optional', () => {
    const result = breakAfter<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = breakAfter<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ breakAfter: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      breakAfter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = breakAfter<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      breakAfter: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      breakAfter: 'a',
      [MQ.D]: {
        breakAfter: 'b',
      },
      [MQ.T]: {
        breakAfter: 'c',
      },
      [MQ.M]: {
        breakAfter: 'd',
      },
    });
  });
});
