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

import { pageBreakInside } from '../pageBreakInside';

describe('pageBreakInside', () => {
  it('should return a function', () => {
    const result = pageBreakInside();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `pageBreakInside` as component and css prop', () => {
    const result = pageBreakInside()({ pageBreakInside: 'inherit' });
    expect(toStyles(result)).toEqual({ pageBreakInside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = pageBreakInside<'a'>()({ pageBreakInside: 'a' });
    expect(toStyles(result)).toEqual({ pageBreakInside: 'a' });
  });

  it('should use an interface which marks `pageBreakInside` as optional', () => {
    const result = pageBreakInside<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = pageBreakInside<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ pageBreakInside: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      pageBreakInside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = pageBreakInside<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      pageBreakInside: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      pageBreakInside: 'a',
      [MQ.D]: {
        pageBreakInside: 'b',
      },
      [MQ.T]: {
        pageBreakInside: 'c',
      },
      [MQ.M]: {
        pageBreakInside: 'd',
      },
    });
  });
});
