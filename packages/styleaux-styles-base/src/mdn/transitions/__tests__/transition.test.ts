import { createTransition } from '../transition';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTransition', () => {
  it('should return a function', () => {
    const result = createTransition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTransition` as component and css prop', () => {
    const result = createTransition()({ transition: 'inherit' });
    expect(toStyles(result)).toEqual({ transition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransition<'a'>()({ transition: 'a' });
    expect(toStyles(result)).toEqual({ transition: 'a' });
  });

  it('should use an interface which marks `createTransition` as optional', () => {
    const result = createTransition<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTransition<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransition<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      transition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transition: 'a',
      [MQ.D]: {
        transition: 'b',
      },
      [MQ.T]: {
        transition: 'c',
      },
      [MQ.M]: {
        transition: 'd',
      },
    });
  });
});
