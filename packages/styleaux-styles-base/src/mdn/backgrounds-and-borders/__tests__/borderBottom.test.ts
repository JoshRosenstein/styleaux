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

import { createBorderBottom } from '../borderBottom';

describe('borderBottom', () => {
  it('should return a function', () => {
    const result = createBorderBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottom` as component and css prop', () => {
    const result = createBorderBottom()({ borderBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBottom<'a'>()({ borderBottom: 'a' });
    expect(toStyles(result)).toEqual({ borderBottom: 'a' });
  });

  it('should use an interface which marks `borderBottom` as optional', () => {
    const result = createBorderBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottom: 'a',
      [MQ.D]: {
        borderBottom: 'b',
      },
      [MQ.T]: {
        borderBottom: 'c',
      },
      [MQ.M]: {
        borderBottom: 'd',
      },
    });
  });
});
