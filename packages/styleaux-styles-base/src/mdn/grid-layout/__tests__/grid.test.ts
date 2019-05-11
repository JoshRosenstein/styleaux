import { createGrid } from '../grid';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createGrid', () => {
  it('should return a function', () => {
    const result = createGrid();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGrid` as component and css prop', () => {
    const result = createGrid()({ grid: 'inherit' });
    expect(toStyles(result)).toEqual({ grid: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGrid<'a'>()({ grid: 'a' });
    expect(toStyles(result)).toEqual({ grid: 'a' });
  });

  it('should use an interface which marks `createGrid` as optional', () => {
    const result = createGrid<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGrid<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ grid: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      grid: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGrid<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      grid: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      grid: 'a',
      [MQ.D]: {
        grid: 'b',
      },
      [MQ.T]: {
        grid: 'c',
      },
      [MQ.M]: {
        grid: 'd',
      },
    });
  });
});
