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

import { perspectiveOrigin } from '../perspectiveOrigin';

describe('perspectiveOrigin', () => {
  it('should return a function', () => {
    const result = perspectiveOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `perspectiveOrigin` as component and css prop', () => {
    const result = perspectiveOrigin()({ perspectiveOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ perspectiveOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = perspectiveOrigin<'a'>()({ perspectiveOrigin: 'a' });
    expect(toStyles(result)).toEqual({ perspectiveOrigin: 'a' });
  });

  it('should use an interface which marks `perspectiveOrigin` as optional', () => {
    const result = perspectiveOrigin<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = perspectiveOrigin<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ perspectiveOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      perspectiveOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = perspectiveOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      perspectiveOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      perspectiveOrigin: 'a',
      [MQ.D]: {
        perspectiveOrigin: 'b',
      },
      [MQ.T]: {
        perspectiveOrigin: 'c',
      },
      [MQ.M]: {
        perspectiveOrigin: 'd',
      },
    });
  });
});
