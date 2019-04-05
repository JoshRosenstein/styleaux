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

import { createOffset } from '../offset';

describe('offset', () => {
  it('should return a function', () => {
    const result = createOffset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `offset` as component and css prop', () => {
    const result = createOffset()({ offset: 'inherit' });
    expect(toStyles(result)).toEqual({ offset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOffset<'a'>()({ offset: 'a' });
    expect(toStyles(result)).toEqual({ offset: 'a' });
  });

  it('should use an interface which marks `offset` as optional', () => {
    const result = createOffset<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createOffset<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ offset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      offset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOffset<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      offset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      offset: 'a',
      [MQ.D]: {
        offset: 'b',
      },
      [MQ.T]: {
        offset: 'c',
      },
      [MQ.M]: {
        offset: 'd',
      },
    });
  });
});
