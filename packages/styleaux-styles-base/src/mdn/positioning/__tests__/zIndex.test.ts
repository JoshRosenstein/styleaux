import { createZIndex } from '../zIndex';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createZIndex', () => {
  it('should return a function', () => {
    const result = createZIndex();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createZIndex` as component and css prop', () => {
    const result = createZIndex()({ zIndex: 'inherit' });
    expect(toStyles(result)).toEqual({ zIndex: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createZIndex<'a'>()({ zIndex: 'a' });
    expect(toStyles(result)).toEqual({ zIndex: 'a' });
  });

  it('should use an interface which marks `createZIndex` as optional', () => {
    const result = createZIndex<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createZIndex<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ zIndex: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      zIndex: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createZIndex<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      zIndex: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      zIndex: 'a',
      [MQ.D]: {
        zIndex: 'b',
      },
      [MQ.T]: {
        zIndex: 'c',
      },
      [MQ.M]: {
        zIndex: 'd',
      },
    });
  });
});
