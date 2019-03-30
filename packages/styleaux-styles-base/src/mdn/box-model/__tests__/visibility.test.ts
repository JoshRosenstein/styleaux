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

import { visibility } from '../visibility';

describe('visibility', () => {
  it('should return a function', () => {
    const result = visibility();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `visibility` as component and css prop', () => {
    const result = visibility()({ visibility: 'inherit' });
    expect(toStyles(result)).toEqual({ visibility: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = visibility<'a'>()({ visibility: 'a' });
    expect(toStyles(result)).toEqual({ visibility: 'a' });
  });

  it('should use an interface which marks `visibility` as optional', () => {
    const result = visibility<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = visibility<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ visibility: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      visibility: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = visibility<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      visibility: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      visibility: 'a',
      [MQ.D]: {
        visibility: 'b',
      },
      [MQ.T]: {
        visibility: 'c',
      },
      [MQ.M]: {
        visibility: 'd',
      },
    });
  });
});