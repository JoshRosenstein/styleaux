import { createShapeOutside } from '../shapeOutside';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createShapeOutside', () => {
  it('should return a function', () => {
    const result = createShapeOutside();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createShapeOutside` as component and css prop', () => {
    const result = createShapeOutside()({ shapeOutside: 'inherit' });
    expect(toStyles(result)).toEqual({ shapeOutside: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createShapeOutside<'a'>()({ shapeOutside: 'a' });
    expect(toStyles(result)).toEqual({ shapeOutside: 'a' });
  });

  it('should use an interface which marks `createShapeOutside` as optional', () => {
    const result = createShapeOutside<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createShapeOutside<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ shapeOutside: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      shapeOutside: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createShapeOutside<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      shapeOutside: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      shapeOutside: 'a',
      [MQ.D]: {
        shapeOutside: 'b',
      },
      [MQ.T]: {
        shapeOutside: 'c',
      },
      [MQ.M]: {
        shapeOutside: 'd',
      },
    });
  });
});
