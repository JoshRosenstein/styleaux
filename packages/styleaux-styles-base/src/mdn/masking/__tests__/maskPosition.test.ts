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

import { createMaskPosition } from '../maskPosition';

describe('maskPosition', () => {
  it('should return a function', () => {
    const result = createMaskPosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maskPosition` as component and css prop', () => {
    const result = createMaskPosition()({ maskPosition: 'inherit' });
    expect(toStyles(result)).toEqual({ maskPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaskPosition<'a'>()({ maskPosition: 'a' });
    expect(toStyles(result)).toEqual({ maskPosition: 'a' });
  });

  it('should use an interface which marks `maskPosition` as optional', () => {
    const result = createMaskPosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMaskPosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskPosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaskPosition<
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
