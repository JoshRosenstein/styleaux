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

import { createMarginBlockStart } from '../marginBlockStart';

describe('marginBlockStart', () => {
  it('should return a function', () => {
    const result = createMarginBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginBlockStart` as component and css prop', () => {
    const result = createMarginBlockStart()({ marginBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginBlockStart<'a'>()({ marginBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ marginBlockStart: 'a' });
  });

  it('should use an interface which marks `marginBlockStart` as optional', () => {
    const result = createMarginBlockStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMarginBlockStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginBlockStart<
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
