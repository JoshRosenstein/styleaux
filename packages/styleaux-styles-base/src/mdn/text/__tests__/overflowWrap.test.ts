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

import { overflowWrap } from '../overflowWrap';

describe('overflowWrap', () => {
  it('should return a function', () => {
    const result = overflowWrap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `overflowWrap` as component and css prop', () => {
    const result = overflowWrap()({ overflowWrap: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowWrap<'a'>()({ overflowWrap: 'a' });
    expect(toStyles(result)).toEqual({ overflowWrap: 'a' });
  });

  it('should use an interface which marks `overflowWrap` as optional', () => {
    const result = overflowWrap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = overflowWrap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowWrap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowWrap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      overflowWrap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflowWrap: 'a',
      [MQ.D]: {
        overflowWrap: 'b',
      },
      [MQ.T]: {
        overflowWrap: 'c',
      },
      [MQ.M]: {
        overflowWrap: 'd',
      },
    });
  });
});
