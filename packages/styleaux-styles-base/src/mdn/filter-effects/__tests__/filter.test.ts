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

import { createFilter } from '../filter';

describe('filter', () => {
  it('should return a function', () => {
    const result = createFilter();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `filter` as component and css prop', () => {
    const result = createFilter()({ filter: 'inherit' });
    expect(toStyles(result)).toEqual({ filter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFilter<'a'>()({ filter: 'a' });
    expect(toStyles(result)).toEqual({ filter: 'a' });
  });

  it('should use an interface which marks `filter` as optional', () => {
    const result = createFilter<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFilter<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ filter: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      filter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFilter<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      filter: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      filter: 'a',
      [MQ.D]: {
        filter: 'b',
      },
      [MQ.T]: {
        filter: 'c',
      },
      [MQ.M]: {
        filter: 'd',
      },
    });
  });
});
