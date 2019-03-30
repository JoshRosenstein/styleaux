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

import { zIndex } from '../zIndex';

describe('zIndex', () => {
  it('should return a function', () => {
    const result = zIndex();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `zIndex` as component and css prop', () => {
    const result = zIndex()({ zIndex: 'inherit' });
    expect(toStyles(result)).toEqual({ zIndex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = zIndex<'a'>()({ zIndex: 'a' });
    expect(toStyles(result)).toEqual({ zIndex: 'a' });
  });

  it('should use an interface which marks `zIndex` as optional', () => {
    const result = zIndex<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = zIndex<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ zIndex: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      zIndex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = zIndex<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      zIndex: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      zIndex: 'a',
      [MQ.D]: {
        zIndex: 'b',
      },
      [MQ.T]: {
        zIndex: 'c',
      },
      [MQ.M]: {
        zIndex: 'd',
      },
    });
  });
});