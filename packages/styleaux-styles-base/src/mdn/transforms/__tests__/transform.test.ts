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

import { transform } from '../transform';

describe('transform', () => {
  it('should return a function', () => {
    const result = transform();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transform` as component and css prop', () => {
    const result = transform()({ transform: 'inherit' });
    expect(toStyles(result)).toEqual({ transform: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transform<'a'>()({ transform: 'a' });
    expect(toStyles(result)).toEqual({ transform: 'a' });
  });

  it('should use an interface which marks `transform` as optional', () => {
    const result = transform<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = transform<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transform: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transform: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transform<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transform: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transform: 'a',
      [MQ.D]: {
        transform: 'b',
      },
      [MQ.T]: {
        transform: 'c',
      },
      [MQ.M]: {
        transform: 'd',
      },
    });
  });
});
