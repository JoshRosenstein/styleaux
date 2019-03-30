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

import { offsetDistance } from '../offsetDistance';

describe('offsetDistance', () => {
  it('should return a function', () => {
    const result = offsetDistance();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `offsetDistance` as component and css prop', () => {
    const result = offsetDistance()({ offsetDistance: 'inherit' });
    expect(toStyles(result)).toEqual({ offsetDistance: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = offsetDistance<'a'>()({ offsetDistance: 'a' });
    expect(toStyles(result)).toEqual({ offsetDistance: 'a' });
  });

  it('should use an interface which marks `offsetDistance` as optional', () => {
    const result = offsetDistance<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = offsetDistance<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ offsetDistance: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      offsetDistance: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = offsetDistance<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      offsetDistance: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      offsetDistance: 'a',
      [MQ.D]: {
        offsetDistance: 'b',
      },
      [MQ.T]: {
        offsetDistance: 'c',
      },
      [MQ.M]: {
        offsetDistance: 'd',
      },
    });
  });
});
