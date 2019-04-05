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

import { createInsetBlockEnd } from '../insetBlockEnd';

describe('insetBlockEnd', () => {
  it('should return a function', () => {
    const result = createInsetBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `insetBlockEnd` as component and css prop', () => {
    const result = createInsetBlockEnd()({ insetBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ insetBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInsetBlockEnd<'a'>()({ insetBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ insetBlockEnd: 'a' });
  });

  it('should use an interface which marks `insetBlockEnd` as optional', () => {
    const result = createInsetBlockEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createInsetBlockEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInsetBlockEnd<
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
