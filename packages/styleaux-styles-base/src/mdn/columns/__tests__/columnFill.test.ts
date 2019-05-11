import { createColumnFill } from '../columnFill';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createColumnFill', () => {
  it('should return a function', () => {
    const result = createColumnFill();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createColumnFill` as component and css prop', () => {
    const result = createColumnFill()({ columnFill: 'inherit' });
    expect(toStyles(result)).toEqual({ columnFill: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColumnFill<'a'>()({ columnFill: 'a' });
    expect(toStyles(result)).toEqual({ columnFill: 'a' });
  });

  it('should use an interface which marks `createColumnFill` as optional', () => {
    const result = createColumnFill<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createColumnFill<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnFill: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnFill: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColumnFill<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      columnFill: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnFill: 'a',
      [MQ.D]: {
        columnFill: 'b',
      },
      [MQ.T]: {
        columnFill: 'c',
      },
      [MQ.M]: {
        columnFill: 'd',
      },
    });
  });
});
