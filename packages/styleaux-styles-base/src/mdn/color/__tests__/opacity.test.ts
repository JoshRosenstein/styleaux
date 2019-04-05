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

import { createOpacity } from '../opacity';

describe('opacity', () => {
  it('should return a function', () => {
    const result = createOpacity();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `opacity` as component and css prop', () => {
    const result = createOpacity()({ opacity: 'inherit' });
    expect(toStyles(result)).toEqual({ opacity: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOpacity<'a'>()({ opacity: 'a' });
    expect(toStyles(result)).toEqual({ opacity: 'a' });
  });

  it('should use an interface which marks `opacity` as optional', () => {
    const result = createOpacity<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createOpacity<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ opacity: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      opacity: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOpacity<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      opacity: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      opacity: 'a',
      [MQ.D]: {
        opacity: 'b',
      },
      [MQ.T]: {
        opacity: 'c',
      },
      [MQ.M]: {
        opacity: 'd',
      },
    });
  });
});
