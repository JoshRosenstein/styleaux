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

import { createBreakInside } from '../breakInside';

describe('breakInside', () => {
  it('should return a function', () => {
    const result = createBreakInside();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `breakInside` as component and css prop', () => {
    const result = createBreakInside()({ breakInside: 'inherit' });
    expect(toStyles(result)).toEqual({ breakInside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBreakInside<'a'>()({ breakInside: 'a' });
    expect(toStyles(result)).toEqual({ breakInside: 'a' });
  });

  it('should use an interface which marks `breakInside` as optional', () => {
    const result = createBreakInside<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBreakInside<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ breakInside: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      breakInside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBreakInside<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      breakInside: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      breakInside: 'a',
      [MQ.D]: {
        breakInside: 'b',
      },
      [MQ.T]: {
        breakInside: 'c',
      },
      [MQ.M]: {
        breakInside: 'd',
      },
    });
  });
});
