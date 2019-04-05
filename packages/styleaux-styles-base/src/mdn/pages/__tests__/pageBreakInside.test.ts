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

import { createPageBreakInside } from '../pageBreakInside';

describe('pageBreakInside', () => {
  it('should return a function', () => {
    const result = createPageBreakInside();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `pageBreakInside` as component and css prop', () => {
    const result = createPageBreakInside()({ pageBreakInside: 'inherit' });
    expect(toStyles(result)).toEqual({ pageBreakInside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPageBreakInside<'a'>()({ pageBreakInside: 'a' });
    expect(toStyles(result)).toEqual({ pageBreakInside: 'a' });
  });

  it('should use an interface which marks `pageBreakInside` as optional', () => {
    const result = createPageBreakInside<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPageBreakInside<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ pageBreakInside: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      pageBreakInside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPageBreakInside<
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
