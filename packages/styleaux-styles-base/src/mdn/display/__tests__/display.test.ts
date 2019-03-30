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

import { display } from '../display';

describe('display', () => {
  it('should return a function', () => {
    const result = display();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `display` as component and css prop', () => {
    const result = display()({ display: 'inherit' });
    expect(toStyles(result)).toEqual({ display: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = display<'a'>()({ display: 'a' });
    expect(toStyles(result)).toEqual({ display: 'a' });
  });

  it('should use an interface which marks `display` as optional', () => {
    const result = display<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = display<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ display: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      display: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = display<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      display: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      display: 'a',
      [MQ.D]: {
        display: 'b',
      },
      [MQ.T]: {
        display: 'c',
      },
      [MQ.M]: {
        display: 'd',
      },
    });
  });
});