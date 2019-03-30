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

import { listStyleType } from '../listStyleType';

describe('listStyleType', () => {
  it('should return a function', () => {
    const result = listStyleType();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `listStyleType` as component and css prop', () => {
    const result = listStyleType()({ listStyleType: 'inherit' });
    expect(toStyles(result)).toEqual({ listStyleType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = listStyleType<'a'>()({ listStyleType: 'a' });
    expect(toStyles(result)).toEqual({ listStyleType: 'a' });
  });

  it('should use an interface which marks `listStyleType` as optional', () => {
    const result = listStyleType<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = listStyleType<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ listStyleType: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      listStyleType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = listStyleType<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      listStyleType: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      listStyleType: 'a',
      [MQ.D]: {
        listStyleType: 'b',
      },
      [MQ.T]: {
        listStyleType: 'c',
      },
      [MQ.M]: {
        listStyleType: 'd',
      },
    });
  });
});