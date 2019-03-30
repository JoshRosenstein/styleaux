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

import { top } from '../top';

describe('top', () => {
  it('should return a function', () => {
    const result = top();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `top` as component and css prop', () => {
    const result = top()({ top: 'inherit' });
    expect(toStyles(result)).toEqual({ top: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = top<'a'>()({ top: 'a' });
    expect(toStyles(result)).toEqual({ top: 'a' });
  });

  it('should use an interface which marks `top` as optional', () => {
    const result = top<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = top<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ top: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      top: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = top<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      top: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      top: 'a',
      [MQ.D]: {
        top: 'b',
      },
      [MQ.T]: {
        top: 'c',
      },
      [MQ.M]: {
        top: 'd',
      },
    });
  });
});