import { createListStyleType } from '../listStyleType';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createListStyleType', () => {
  it('should return a function', () => {
    const result = createListStyleType();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createListStyleType` as component and css prop', () => {
    const result = createListStyleType()({ listStyleType: 'inherit' });
    expect(toStyles(result)).toEqual({ listStyleType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createListStyleType<'a'>()({ listStyleType: 'a' });
    expect(toStyles(result)).toEqual({ listStyleType: 'a' });
  });

  it('should use an interface which marks `createListStyleType` as optional', () => {
    const result = createListStyleType<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createListStyleType<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ listStyleType: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      listStyleType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createListStyleType<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()(
      {
        listStyleType: {
          all: 'a',
          D: 'b',
          T: 'c',
          M: 'd',
        },
        theme,
      },
    );
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
