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

import { textSizeAdjust } from '../textSizeAdjust';

describe('textSizeAdjust', () => {
  it('should return a function', () => {
    const result = textSizeAdjust();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textSizeAdjust` as component and css prop', () => {
    const result = textSizeAdjust()({ textSizeAdjust: 'inherit' });
    expect(toStyles(result)).toEqual({ textSizeAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textSizeAdjust<'a'>()({ textSizeAdjust: 'a' });
    expect(toStyles(result)).toEqual({ textSizeAdjust: 'a' });
  });

  it('should use an interface which marks `textSizeAdjust` as optional', () => {
    const result = textSizeAdjust<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textSizeAdjust<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textSizeAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textSizeAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textSizeAdjust<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textSizeAdjust: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textSizeAdjust: 'a',
      [MQ.D]: {
        textSizeAdjust: 'b',
      },
      [MQ.T]: {
        textSizeAdjust: 'c',
      },
      [MQ.M]: {
        textSizeAdjust: 'd',
      },
    });
  });
});
