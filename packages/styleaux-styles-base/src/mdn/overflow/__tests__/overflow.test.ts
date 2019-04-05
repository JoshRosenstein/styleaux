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

import { createOverflow } from '../overflow';

describe('overflow', () => {
  it('should return a function', () => {
    const result = createOverflow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `overflow` as component and css prop', () => {
    const result = createOverflow()({ overflow: 'inherit' });
    expect(toStyles(result)).toEqual({ overflow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOverflow<'a'>()({ overflow: 'a' });
    expect(toStyles(result)).toEqual({ overflow: 'a' });
  });

  it('should use an interface which marks `overflow` as optional', () => {
    const result = createOverflow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createOverflow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOverflow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      overflow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflow: 'a',
      [MQ.D]: {
        overflow: 'b',
      },
      [MQ.T]: {
        overflow: 'c',
      },
      [MQ.M]: {
        overflow: 'd',
      },
    });
  });
});
