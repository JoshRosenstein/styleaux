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

import { marginBlockStart } from '../marginBlockStart';

describe('marginBlockStart', () => {
  it('should return a function', () => {
    const result = marginBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginBlockStart` as component and css prop', () => {
    const result = marginBlockStart()({ marginBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBlockStart<'a'>()({ marginBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ marginBlockStart: 'a' });
  });

  it('should use an interface which marks `marginBlockStart` as optional', () => {
    const result = marginBlockStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginBlockStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBlockStart: 'a',
      [MQ.D]: {
        marginBlockStart: 'b',
      },
      [MQ.T]: {
        marginBlockStart: 'c',
      },
      [MQ.M]: {
        marginBlockStart: 'd',
      },
    });
  });
});
