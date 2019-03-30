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

import { insetBlockEnd } from '../insetBlockEnd';

describe('insetBlockEnd', () => {
  it('should return a function', () => {
    const result = insetBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `insetBlockEnd` as component and css prop', () => {
    const result = insetBlockEnd()({ insetBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ insetBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = insetBlockEnd<'a'>()({ insetBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ insetBlockEnd: 'a' });
  });

  it('should use an interface which marks `insetBlockEnd` as optional', () => {
    const result = insetBlockEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = insetBlockEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = insetBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      insetBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetBlockEnd: 'a',
      [MQ.D]: {
        insetBlockEnd: 'b',
      },
      [MQ.T]: {
        insetBlockEnd: 'c',
      },
      [MQ.M]: {
        insetBlockEnd: 'd',
      },
    });
  });
});
