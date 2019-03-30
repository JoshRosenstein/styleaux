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

import { offsetPath } from '../offsetPath';

describe('offsetPath', () => {
  it('should return a function', () => {
    const result = offsetPath();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `offsetPath` as component and css prop', () => {
    const result = offsetPath()({ offsetPath: 'inherit' });
    expect(toStyles(result)).toEqual({ offsetPath: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = offsetPath<'a'>()({ offsetPath: 'a' });
    expect(toStyles(result)).toEqual({ offsetPath: 'a' });
  });

  it('should use an interface which marks `offsetPath` as optional', () => {
    const result = offsetPath<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = offsetPath<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ offsetPath: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      offsetPath: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = offsetPath<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      offsetPath: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      offsetPath: 'a',
      [MQ.D]: {
        offsetPath: 'b',
      },
      [MQ.T]: {
        offsetPath: 'c',
      },
      [MQ.M]: {
        offsetPath: 'd',
      },
    });
  });
});
