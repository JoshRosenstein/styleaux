import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBackdropFilter } from '../backdropFilter';

describe('createBackdropFilter', () => {
  it('should return a function', () => {
    const result = createBackdropFilter();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackdropFilter` as component and css prop', () => {
    const result = createBackdropFilter()({ backdropFilter: 'inherit' });
    expect(toStyles(result)).toEqual({ backdropFilter: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackdropFilter<'a'>()({ backdropFilter: 'a' });
    expect(toStyles(result)).toEqual({ backdropFilter: 'a' });
  });

  it('should use an interface which marks `createBackdropFilter` as optional', () => {
    const result = createBackdropFilter<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackdropFilter<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backdropFilter: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backdropFilter: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackdropFilter<
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
