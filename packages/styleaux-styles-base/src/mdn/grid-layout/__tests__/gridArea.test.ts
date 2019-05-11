import { createGridArea } from '../gridArea';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createGridArea', () => {
  it('should return a function', () => {
    const result = createGridArea();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGridArea` as component and css prop', () => {
    const result = createGridArea()({ gridArea: 'inherit' });
    expect(toStyles(result)).toEqual({ gridArea: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridArea<'a'>()({ gridArea: 'a' });
    expect(toStyles(result)).toEqual({ gridArea: 'a' });
  });

  it('should use an interface which marks `createGridArea` as optional', () => {
    const result = createGridArea<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGridArea<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridArea: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridArea: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridArea<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      gridArea: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridArea: 'a',
      [MQ.D]: {
        gridArea: 'b',
      },
      [MQ.T]: {
        gridArea: 'c',
      },
      [MQ.M]: {
        gridArea: 'd',
      },
    });
  });
});
