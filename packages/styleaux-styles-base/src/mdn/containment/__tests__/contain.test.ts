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

import { contain } from '../contain';

describe('contain', () => {
  it('should return a function', () => {
    const result = contain();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `contain` as component and css prop', () => {
    const result = contain()({ contain: 'inherit' });
    expect(toStyles(result)).toEqual({ contain: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = contain<'a'>()({ contain: 'a' });
    expect(toStyles(result)).toEqual({ contain: 'a' });
  });

  it('should use an interface which marks `contain` as optional', () => {
    const result = contain<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = contain<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ contain: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      contain: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = contain<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      contain: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      contain: 'a',
      [MQ.D]: {
        contain: 'b',
      },
      [MQ.T]: {
        contain: 'c',
      },
      [MQ.M]: {
        contain: 'd',
      },
    });
  });
});
