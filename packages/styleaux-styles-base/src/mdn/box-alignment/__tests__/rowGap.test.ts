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

import { createRowGap } from '../rowGap';

describe('rowGap', () => {
  it('should return a function', () => {
    const result = createRowGap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `rowGap` as component and css prop', () => {
    const result = createRowGap()({ rowGap: 'inherit' });
    expect(toStyles(result)).toEqual({ rowGap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createRowGap<'a'>()({ rowGap: 'a' });
    expect(toStyles(result)).toEqual({ rowGap: 'a' });
  });

  it('should use an interface which marks `rowGap` as optional', () => {
    const result = createRowGap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createRowGap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ rowGap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      rowGap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createRowGap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      rowGap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      rowGap: 'a',
      [MQ.D]: {
        rowGap: 'b',
      },
      [MQ.T]: {
        rowGap: 'c',
      },
      [MQ.M]: {
        rowGap: 'd',
      },
    });
  });
});
