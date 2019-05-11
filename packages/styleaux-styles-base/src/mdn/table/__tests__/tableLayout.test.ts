import { createTableLayout } from '../tableLayout';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTableLayout', () => {
  it('should return a function', () => {
    const result = createTableLayout();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTableLayout` as component and css prop', () => {
    const result = createTableLayout()({ tableLayout: 'inherit' });
    expect(toStyles(result)).toEqual({ tableLayout: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTableLayout<'a'>()({ tableLayout: 'a' });
    expect(toStyles(result)).toEqual({ tableLayout: 'a' });
  });

  it('should use an interface which marks `createTableLayout` as optional', () => {
    const result = createTableLayout<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTableLayout<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ tableLayout: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      tableLayout: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTableLayout<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      tableLayout: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      tableLayout: 'a',
      [MQ.D]: {
        tableLayout: 'b',
      },
      [MQ.T]: {
        tableLayout: 'c',
      },
      [MQ.M]: {
        tableLayout: 'd',
      },
    });
  });
});
