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

import { boxSizing } from '../boxSizing';

describe('boxSizing', () => {
  it('should return a function', () => {
    const result = boxSizing();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `boxSizing` as component and css prop', () => {
    const result = boxSizing()({ boxSizing: 'inherit' });
    expect(toStyles(result)).toEqual({ boxSizing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = boxSizing<'a'>()({ boxSizing: 'a' });
    expect(toStyles(result)).toEqual({ boxSizing: 'a' });
  });

  it('should use an interface which marks `boxSizing` as optional', () => {
    const result = boxSizing<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = boxSizing<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ boxSizing: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      boxSizing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = boxSizing<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      boxSizing: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      boxSizing: 'a',
      [MQ.D]: {
        boxSizing: 'b',
      },
      [MQ.T]: {
        boxSizing: 'c',
      },
      [MQ.M]: {
        boxSizing: 'd',
      },
    });
  });
});
