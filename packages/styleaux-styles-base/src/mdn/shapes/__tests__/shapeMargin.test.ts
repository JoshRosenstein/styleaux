import { createShapeMargin } from '../shapeMargin';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createShapeMargin', () => {
  it('should return a function', () => {
    const result = createShapeMargin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createShapeMargin` as component and css prop', () => {
    const result = createShapeMargin()({ shapeMargin: 'inherit' });
    expect(toStyles(result)).toEqual({ shapeMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createShapeMargin<'a'>()({ shapeMargin: 'a' });
    expect(toStyles(result)).toEqual({ shapeMargin: 'a' });
  });

  it('should use an interface which marks `createShapeMargin` as optional', () => {
    const result = createShapeMargin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createShapeMargin<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ shapeMargin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      shapeMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createShapeMargin<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      shapeMargin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      shapeMargin: 'a',
      [MQ.D]: {
        shapeMargin: 'b',
      },
      [MQ.T]: {
        shapeMargin: 'c',
      },
      [MQ.M]: {
        shapeMargin: 'd',
      },
    });
  });
});
