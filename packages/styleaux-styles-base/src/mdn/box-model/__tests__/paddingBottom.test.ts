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

import { paddingBottom } from '../paddingBottom';

describe('paddingBottom', () => {
  it('should return a function', () => {
    const result = paddingBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingBottom` as component and css prop', () => {
    const result = paddingBottom()({ paddingBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBottom<'a'>()({ paddingBottom: 'a' });
    expect(toStyles(result)).toEqual({ paddingBottom: 'a' });
  });

  it('should use an interface which marks `paddingBottom` as optional', () => {
    const result = paddingBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingBottom: 'a',
      [MQ.D]: {
        paddingBottom: 'b',
      },
      [MQ.T]: {
        paddingBottom: 'c',
      },
      [MQ.M]: {
        paddingBottom: 'd',
      },
    });
  });
});
