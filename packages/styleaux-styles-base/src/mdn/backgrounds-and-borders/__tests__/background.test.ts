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

import { createBackground } from '../background';

describe('background', () => {
  it('should return a function', () => {
    const result = createBackground();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `background` as component and css prop', () => {
    const result = createBackground()({ background: 'inherit' });
    expect(toStyles(result)).toEqual({ background: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackground<'a'>()({ background: 'a' });
    expect(toStyles(result)).toEqual({ background: 'a' });
  });

  it('should use an interface which marks `background` as optional', () => {
    const result = createBackground<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBackground<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ background: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      background: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackground<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      background: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      background: 'a',
      [MQ.D]: {
        background: 'b',
      },
      [MQ.T]: {
        background: 'c',
      },
      [MQ.M]: {
        background: 'd',
      },
    });
  });
});
