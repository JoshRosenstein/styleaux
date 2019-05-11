import { createPlaceContent } from '../placeContent';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPlaceContent', () => {
  it('should return a function', () => {
    const result = createPlaceContent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPlaceContent` as component and css prop', () => {
    const result = createPlaceContent()({ placeContent: 'inherit' });
    expect(toStyles(result)).toEqual({ placeContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPlaceContent<'a'>()({ placeContent: 'a' });
    expect(toStyles(result)).toEqual({ placeContent: 'a' });
  });

  it('should use an interface which marks `createPlaceContent` as optional', () => {
    const result = createPlaceContent<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPlaceContent<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ placeContent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      placeContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPlaceContent<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      placeContent: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      placeContent: 'a',
      [MQ.D]: {
        placeContent: 'b',
      },
      [MQ.T]: {
        placeContent: 'c',
      },
      [MQ.M]: {
        placeContent: 'd',
      },
    });
  });
});
