import { createColumnWidth } from '../columnWidth';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createColumnWidth', () => {
  it('should return a function', () => {
    const result = createColumnWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createColumnWidth` as component and css prop', () => {
    const result = createColumnWidth()({ columnWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ columnWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColumnWidth<'a'>()({ columnWidth: 'a' });
    expect(toStyles(result)).toEqual({ columnWidth: 'a' });
  });

  it('should use an interface which marks `createColumnWidth` as optional', () => {
    const result = createColumnWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createColumnWidth<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColumnWidth<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      columnWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnWidth: 'a',
      [MQ.D]: {
        columnWidth: 'b',
      },
      [MQ.T]: {
        columnWidth: 'c',
      },
      [MQ.M]: {
        columnWidth: 'd',
      },
    });
  });
});
