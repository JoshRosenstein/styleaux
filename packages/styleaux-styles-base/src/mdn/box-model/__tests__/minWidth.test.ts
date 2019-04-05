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

import { createMinWidth } from '../minWidth';

describe('minWidth', () => {
  it('should return a function', () => {
    const result = createMinWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `minWidth` as component and css prop', () => {
    const result = createMinWidth()({ minWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ minWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMinWidth<'a'>()({ minWidth: 'a' });
    expect(toStyles(result)).toEqual({ minWidth: 'a' });
  });

  it('should use an interface which marks `minWidth` as optional', () => {
    const result = createMinWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMinWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ minWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      minWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMinWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      minWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      minWidth: 'a',
      [MQ.D]: {
        minWidth: 'b',
      },
      [MQ.T]: {
        minWidth: 'c',
      },
      [MQ.M]: {
        minWidth: 'd',
      },
    });
  });
});
