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

import { alignContent } from '../alignContent';

describe('alignContent', () => {
  it('should return a function', () => {
    const result = alignContent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `alignContent` as component and css prop', () => {
    const result = alignContent()({ alignContent: 'inherit' });
    expect(toStyles(result)).toEqual({ alignContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = alignContent<'a'>()({ alignContent: 'a' });
    expect(toStyles(result)).toEqual({ alignContent: 'a' });
  });

  it('should use an interface which marks `alignContent` as optional', () => {
    const result = alignContent<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = alignContent<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ alignContent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      alignContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = alignContent<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      alignContent: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      alignContent: 'a',
      [MQ.D]: {
        alignContent: 'b',
      },
      [MQ.T]: {
        alignContent: 'c',
      },
      [MQ.M]: {
        alignContent: 'd',
      },
    });
  });
});
