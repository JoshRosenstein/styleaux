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

import { flex } from '../flex';

describe('flex', () => {
  it('should return a function', () => {
    const result = flex();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `flex` as component and css prop', () => {
    const result = flex()({ flex: 'inherit' });
    expect(toStyles(result)).toEqual({ flex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = flex<'a'>()({ flex: 'a' });
    expect(toStyles(result)).toEqual({ flex: 'a' });
  });

  it('should use an interface which marks `flex` as optional', () => {
    const result = flex<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = flex<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flex: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = flex<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      flex: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flex: 'a',
      [MQ.D]: {
        flex: 'b',
      },
      [MQ.T]: {
        flex: 'c',
      },
      [MQ.M]: {
        flex: 'd',
      },
    });
  });
});
