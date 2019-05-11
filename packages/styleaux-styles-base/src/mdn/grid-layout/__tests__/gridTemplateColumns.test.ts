import { createGridTemplateColumns } from '../gridTemplateColumns';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createGridTemplateColumns', () => {
  it('should return a function', () => {
    const result = createGridTemplateColumns();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGridTemplateColumns` as component and css prop', () => {
    const result = createGridTemplateColumns()({
      gridTemplateColumns: 'inherit',
    });
    expect(toStyles(result)).toEqual({ gridTemplateColumns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridTemplateColumns<'a'>()({
      gridTemplateColumns: 'a',
    });
    expect(toStyles(result)).toEqual({ gridTemplateColumns: 'a' });
  });

  it('should use an interface which marks `createGridTemplateColumns` as optional', () => {
    const result = createGridTemplateColumns<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGridTemplateColumns<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ gridTemplateColumns: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridTemplateColumns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridTemplateColumns<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      gridTemplateColumns: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridTemplateColumns: 'a',
      [MQ.D]: {
        gridTemplateColumns: 'b',
      },
      [MQ.T]: {
        gridTemplateColumns: 'c',
      },
      [MQ.M]: {
        gridTemplateColumns: 'd',
      },
    });
  });
});
