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

import { pageBreakBefore } from '../pageBreakBefore';

describe('pageBreakBefore', () => {
  it('should return a function', () => {
    const result = pageBreakBefore();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `pageBreakBefore` as component and css prop', () => {
    const result = pageBreakBefore()({ pageBreakBefore: 'inherit' });
    expect(toStyles(result)).toEqual({ pageBreakBefore: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakBefore<'a'>()({ pageBreakBefore: 'a' });
    expect(toStyles(result)).toEqual({ pageBreakBefore: 'a' });
  });

  it('should use an interface which marks `pageBreakBefore` as optional', () => {
    const result = pageBreakBefore<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = pageBreakBefore<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ pageBreakBefore: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      pageBreakBefore: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakBefore<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      pageBreakBefore: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      pageBreakBefore: 'a',
      [MQ.D]: {
        pageBreakBefore: 'b',
      },
      [MQ.T]: {
        pageBreakBefore: 'c',
      },
      [MQ.M]: {
        pageBreakBefore: 'd',
      },
    });
  });
});
