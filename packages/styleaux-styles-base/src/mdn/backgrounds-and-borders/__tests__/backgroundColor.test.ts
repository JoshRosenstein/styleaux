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

import { createBackgroundColor } from '../backgroundColor';

describe('backgroundColor', () => {
  it('should return a function', () => {
    const result = createBackgroundColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundColor` as component and css prop', () => {
    const result = createBackgroundColor()({ backgroundColor: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundColor<'a'>()({ backgroundColor: 'a' });
    expect(toStyles(result)).toEqual({ backgroundColor: 'a' });
  });

  it('should use an interface which marks `backgroundColor` as optional', () => {
    const result = createBackgroundColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBackgroundColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundColor: 'a',
      [MQ.D]: {
        backgroundColor: 'b',
      },
      [MQ.T]: {
        backgroundColor: 'c',
      },
      [MQ.M]: {
        backgroundColor: 'd',
      },
    });
  });
});
