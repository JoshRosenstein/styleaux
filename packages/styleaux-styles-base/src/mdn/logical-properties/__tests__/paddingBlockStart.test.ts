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

import { paddingBlockStart } from '../paddingBlockStart';

describe('paddingBlockStart', () => {
  it('should return a function', () => {
    const result = paddingBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingBlockStart` as component and css prop', () => {
    const result = paddingBlockStart()({ paddingBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBlockStart<'a'>()({ paddingBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ paddingBlockStart: 'a' });
  });

  it('should use an interface which marks `paddingBlockStart` as optional', () => {
    const result = paddingBlockStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingBlockStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingBlockStart: 'a',
      [MQ.D]: {
        paddingBlockStart: 'b',
      },
      [MQ.T]: {
        paddingBlockStart: 'c',
      },
      [MQ.M]: {
        paddingBlockStart: 'd',
      },
    });
  });
});
