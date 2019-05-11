import { createGridColumnEnd } from '../gridColumnEnd';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createGridColumnEnd', () => {
  it('should return a function', () => {
    const result = createGridColumnEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGridColumnEnd` as component and css prop', () => {
    const result = createGridColumnEnd()({ gridColumnEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ gridColumnEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridColumnEnd<'a'>()({ gridColumnEnd: 'a' });
    expect(toStyles(result)).toEqual({ gridColumnEnd: 'a' });
  });

  it('should use an interface which marks `createGridColumnEnd` as optional', () => {
    const result = createGridColumnEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGridColumnEnd<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ gridColumnEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridColumnEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridColumnEnd<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()(
      {
        gridColumnEnd: {
          all: 'a',
          D: 'b',
          T: 'c',
          M: 'd',
        },
        theme,
      },
    );
    expect(toStyles(result)).toEqual({
      gridColumnEnd: 'a',
      [MQ.D]: {
        gridColumnEnd: 'b',
      },
      [MQ.T]: {
        gridColumnEnd: 'c',
      },
      [MQ.M]: {
        gridColumnEnd: 'd',
      },
    });
  });
});
