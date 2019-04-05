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

import { createListStylePosition } from '../listStylePosition';

describe('listStylePosition', () => {
  it('should return a function', () => {
    const result = createListStylePosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `listStylePosition` as component and css prop', () => {
    const result = createListStylePosition()({ listStylePosition: 'inherit' });
    expect(toStyles(result)).toEqual({ listStylePosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createListStylePosition<'a'>()({ listStylePosition: 'a' });
    expect(toStyles(result)).toEqual({ listStylePosition: 'a' });
  });

  it('should use an interface which marks `listStylePosition` as optional', () => {
    const result = createListStylePosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createListStylePosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ listStylePosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      listStylePosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createListStylePosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      listStylePosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      listStylePosition: 'a',
      [MQ.D]: {
        listStylePosition: 'b',
      },
      [MQ.T]: {
        listStylePosition: 'c',
      },
      [MQ.M]: {
        listStylePosition: 'd',
      },
    });
  });
});
