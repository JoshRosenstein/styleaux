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

import { pageBreakAfter } from '../pageBreakAfter';

describe('pageBreakAfter', () => {
  it('should return a function', () => {
    const result = pageBreakAfter();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `pageBreakAfter` as component and css prop', () => {
    const result = pageBreakAfter()({ pageBreakAfter: 'inherit' });
    expect(toStyles(result)).toEqual({ pageBreakAfter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakAfter<'a'>()({ pageBreakAfter: 'a' });
    expect(toStyles(result)).toEqual({ pageBreakAfter: 'a' });
  });

  it('should use an interface which marks `pageBreakAfter` as optional', () => {
    const result = pageBreakAfter<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = pageBreakAfter<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ pageBreakAfter: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      pageBreakAfter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakAfter<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      pageBreakAfter: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      pageBreakAfter: 'a',
      [MQ.D]: {
        pageBreakAfter: 'b',
      },
      [MQ.T]: {
        pageBreakAfter: 'c',
      },
      [MQ.M]: {
        pageBreakAfter: 'd',
      },
    });
  });
});
