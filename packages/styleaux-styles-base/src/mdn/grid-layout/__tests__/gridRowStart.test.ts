import { createGridRowStart } from '../gridRowStart';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createGridRowStart', () => {
  it('should return a function', () => {
    const result = createGridRowStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createGridRowStart` as component and css prop', () => {
    const result = createGridRowStart()({ gridRowStart: 'inherit' });
    expect(toStyles(result)).toEqual({ gridRowStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridRowStart<'a'>()({ gridRowStart: 'a' });
    expect(toStyles(result)).toEqual({ gridRowStart: 'a' });
  });

  it('should use an interface which marks `createGridRowStart` as optional', () => {
    const result = createGridRowStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createGridRowStart<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ gridRowStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridRowStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridRowStart<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      gridRowStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridRowStart: 'a',
      [MQ.D]: {
        gridRowStart: 'b',
      },
      [MQ.T]: {
        gridRowStart: 'c',
      },
      [MQ.M]: {
        gridRowStart: 'd',
      },
    });
  });
});
