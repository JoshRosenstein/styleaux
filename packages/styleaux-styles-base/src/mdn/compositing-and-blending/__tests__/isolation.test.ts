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

import { createIsolation } from '../isolation';

describe('isolation', () => {
  it('should return a function', () => {
    const result = createIsolation();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `isolation` as component and css prop', () => {
    const result = createIsolation()({ isolation: 'inherit' });
    expect(toStyles(result)).toEqual({ isolation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createIsolation<'a'>()({ isolation: 'a' });
    expect(toStyles(result)).toEqual({ isolation: 'a' });
  });

  it('should use an interface which marks `isolation` as optional', () => {
    const result = createIsolation<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createIsolation<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ isolation: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      isolation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createIsolation<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      isolation: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      isolation: 'a',
      [MQ.D]: {
        isolation: 'b',
      },
      [MQ.T]: {
        isolation: 'c',
      },
      [MQ.M]: {
        isolation: 'd',
      },
    });
  });
});
