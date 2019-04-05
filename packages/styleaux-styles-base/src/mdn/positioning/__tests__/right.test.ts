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

import { createRight } from '../right';

describe('right', () => {
  it('should return a function', () => {
    const result = createRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `right` as component and css prop', () => {
    const result = createRight()({ right: 'inherit' });
    expect(toStyles(result)).toEqual({ right: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createRight<'a'>()({ right: 'a' });
    expect(toStyles(result)).toEqual({ right: 'a' });
  });

  it('should use an interface which marks `right` as optional', () => {
    const result = createRight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createRight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ right: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      right: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      right: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      right: 'a',
      [MQ.D]: {
        right: 'b',
      },
      [MQ.T]: {
        right: 'c',
      },
      [MQ.M]: {
        right: 'd',
      },
    });
  });
});
