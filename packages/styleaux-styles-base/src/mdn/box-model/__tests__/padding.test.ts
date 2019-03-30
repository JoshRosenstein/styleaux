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

import { padding } from '../padding';

describe('padding', () => {
  it('should return a function', () => {
    const result = padding();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `padding` as component and css prop', () => {
    const result = padding()({ padding: 'inherit' });
    expect(toStyles(result)).toEqual({ padding: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = padding<'a'>()({ padding: 'a' });
    expect(toStyles(result)).toEqual({ padding: 'a' });
  });

  it('should use an interface which marks `padding` as optional', () => {
    const result = padding<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = padding<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ padding: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      padding: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = padding<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      padding: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      padding: 'a',
      [MQ.D]: {
        padding: 'b',
      },
      [MQ.T]: {
        padding: 'c',
      },
      [MQ.M]: {
        padding: 'd',
      },
    });
  });
});
