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

import { textOrientation } from '../textOrientation';

describe('textOrientation', () => {
  it('should return a function', () => {
    const result = textOrientation();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textOrientation` as component and css prop', () => {
    const result = textOrientation()({ textOrientation: 'inherit' });
    expect(toStyles(result)).toEqual({ textOrientation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textOrientation<'a'>()({ textOrientation: 'a' });
    expect(toStyles(result)).toEqual({ textOrientation: 'a' });
  });

  it('should use an interface which marks `textOrientation` as optional', () => {
    const result = textOrientation<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textOrientation<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textOrientation: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textOrientation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textOrientation<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textOrientation: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textOrientation: 'a',
      [MQ.D]: {
        textOrientation: 'b',
      },
      [MQ.T]: {
        textOrientation: 'c',
      },
      [MQ.M]: {
        textOrientation: 'd',
      },
    });
  });
});
