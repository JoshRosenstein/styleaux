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

import { createHyphens } from '../hyphens';

describe('hyphens', () => {
  it('should return a function', () => {
    const result = createHyphens();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `hyphens` as component and css prop', () => {
    const result = createHyphens()({ hyphens: 'inherit' });
    expect(toStyles(result)).toEqual({ hyphens: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createHyphens<'a'>()({ hyphens: 'a' });
    expect(toStyles(result)).toEqual({ hyphens: 'a' });
  });

  it('should use an interface which marks `hyphens` as optional', () => {
    const result = createHyphens<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createHyphens<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ hyphens: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      hyphens: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createHyphens<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      hyphens: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      hyphens: 'a',
      [MQ.D]: {
        hyphens: 'b',
      },
      [MQ.T]: {
        hyphens: 'c',
      },
      [MQ.M]: {
        hyphens: 'd',
      },
    });
  });
});
