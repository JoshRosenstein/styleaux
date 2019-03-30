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

import { backdropFilter } from '../backdropFilter';

describe('backdropFilter', () => {
  it('should return a function', () => {
    const result = backdropFilter();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backdropFilter` as component and css prop', () => {
    const result = backdropFilter()({ backdropFilter: 'inherit' });
    expect(toStyles(result)).toEqual({ backdropFilter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backdropFilter<'a'>()({ backdropFilter: 'a' });
    expect(toStyles(result)).toEqual({ backdropFilter: 'a' });
  });

  it('should use an interface which marks `backdropFilter` as optional', () => {
    const result = backdropFilter<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backdropFilter<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backdropFilter: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backdropFilter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backdropFilter<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backdropFilter: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backdropFilter: 'a',
      [MQ.D]: {
        backdropFilter: 'b',
      },
      [MQ.T]: {
        backdropFilter: 'c',
      },
      [MQ.M]: {
        backdropFilter: 'd',
      },
    });
  });
});
