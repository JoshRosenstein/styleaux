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

import { createPaddingBottom } from '../paddingBottom';

describe('paddingBottom', () => {
  it('should return a function', () => {
    const result = createPaddingBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingBottom` as component and css prop', () => {
    const result = createPaddingBottom()({ paddingBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingBottom<'a'>()({ paddingBottom: 'a' });
    expect(toStyles(result)).toEqual({ paddingBottom: 'a' });
  });

  it('should use an interface which marks `paddingBottom` as optional', () => {
    const result = createPaddingBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPaddingBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingBottom<
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
