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

import { borderBottom } from '../borderBottom';

describe('borderBottom', () => {
  it('should return a function', () => {
    const result = borderBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottom` as component and css prop', () => {
    const result = borderBottom()({ borderBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBottom<'a'>()({ borderBottom: 'a' });
    expect(toStyles(result)).toEqual({ borderBottom: 'a' });
  });

  it('should use an interface which marks `borderBottom` as optional', () => {
    const result = borderBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBottom<
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
