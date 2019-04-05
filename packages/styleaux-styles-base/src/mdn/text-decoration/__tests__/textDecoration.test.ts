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

import { createTextDecoration } from '../textDecoration';

describe('textDecoration', () => {
  it('should return a function', () => {
    const result = createTextDecoration();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textDecoration` as component and css prop', () => {
    const result = createTextDecoration()({ textDecoration: 'inherit' });
    expect(toStyles(result)).toEqual({ textDecoration: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextDecoration<'a'>()({ textDecoration: 'a' });
    expect(toStyles(result)).toEqual({ textDecoration: 'a' });
  });

  it('should use an interface which marks `textDecoration` as optional', () => {
    const result = createTextDecoration<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTextDecoration<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textDecoration: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textDecoration: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextDecoration<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textDecoration: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textDecoration: 'a',
      [MQ.D]: {
        textDecoration: 'b',
      },
      [MQ.T]: {
        textDecoration: 'c',
      },
      [MQ.M]: {
        textDecoration: 'd',
      },
    });
  });
});
