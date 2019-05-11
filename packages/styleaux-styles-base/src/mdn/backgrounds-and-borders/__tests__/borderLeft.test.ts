import { createBorderLeft } from '../borderLeft';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderLeft', () => {
  it('should return a function', () => {
    const result = createBorderLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderLeft` as component and css prop', () => {
    const result = createBorderLeft()({ borderLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ borderLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderLeft<'a'>()({ borderLeft: 'a' });
    expect(toStyles(result)).toEqual({ borderLeft: 'a' });
  });

  it('should use an interface which marks `createBorderLeft` as optional', () => {
    const result = createBorderLeft<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderLeft<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderLeft<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      borderLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderLeft: 'a',
      [MQ.D]: {
        borderLeft: 'b',
      },
      [MQ.T]: {
        borderLeft: 'c',
      },
      [MQ.M]: {
        borderLeft: 'd',
      },
    });
  });
});
