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

import { createInsetBlockStart } from '../insetBlockStart';

describe('insetBlockStart', () => {
  it('should return a function', () => {
    const result = createInsetBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `insetBlockStart` as component and css prop', () => {
    const result = createInsetBlockStart()({ insetBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ insetBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInsetBlockStart<'a'>()({ insetBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ insetBlockStart: 'a' });
  });

  it('should use an interface which marks `insetBlockStart` as optional', () => {
    const result = createInsetBlockStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createInsetBlockStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInsetBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      insetBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetBlockStart: 'a',
      [MQ.D]: {
        insetBlockStart: 'b',
      },
      [MQ.T]: {
        insetBlockStart: 'c',
      },
      [MQ.M]: {
        insetBlockStart: 'd',
      },
    });
  });
});
