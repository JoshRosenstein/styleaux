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

import { tabSize } from '../tabSize';

describe('tabSize', () => {
  it('should return a function', () => {
    const result = tabSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `tabSize` as component and css prop', () => {
    const result = tabSize()({ tabSize: 'inherit' });
    expect(toStyles(result)).toEqual({ tabSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = tabSize<'a'>()({ tabSize: 'a' });
    expect(toStyles(result)).toEqual({ tabSize: 'a' });
  });

  it('should use an interface which marks `tabSize` as optional', () => {
    const result = tabSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = tabSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ tabSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      tabSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = tabSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      tabSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      tabSize: 'a',
      [MQ.D]: {
        tabSize: 'b',
      },
      [MQ.T]: {
        tabSize: 'c',
      },
      [MQ.M]: {
        tabSize: 'd',
      },
    });
  });
});
