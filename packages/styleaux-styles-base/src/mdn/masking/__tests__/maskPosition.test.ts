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

import { maskPosition } from '../maskPosition';

describe('maskPosition', () => {
  it('should return a function', () => {
    const result = maskPosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maskPosition` as component and css prop', () => {
    const result = maskPosition()({ maskPosition: 'inherit' });
    expect(toStyles(result)).toEqual({ maskPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskPosition<'a'>()({ maskPosition: 'a' });
    expect(toStyles(result)).toEqual({ maskPosition: 'a' });
  });

  it('should use an interface which marks `maskPosition` as optional', () => {
    const result = maskPosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = maskPosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskPosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskPosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maskPosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskPosition: 'a',
      [MQ.D]: {
        maskPosition: 'b',
      },
      [MQ.T]: {
        maskPosition: 'c',
      },
      [MQ.M]: {
        maskPosition: 'd',
      },
    });
  });
});
