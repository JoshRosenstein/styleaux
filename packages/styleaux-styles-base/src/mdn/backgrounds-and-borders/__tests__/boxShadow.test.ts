import { createBoxShadow } from '../boxShadow';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBoxShadow', () => {
  it('should return a function', () => {
    const result = createBoxShadow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBoxShadow` as component and css prop', () => {
    const result = createBoxShadow()({ boxShadow: 'inherit' });
    expect(toStyles(result)).toEqual({ boxShadow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBoxShadow<'a'>()({ boxShadow: 'a' });
    expect(toStyles(result)).toEqual({ boxShadow: 'a' });
  });

  it('should use an interface which marks `createBoxShadow` as optional', () => {
    const result = createBoxShadow<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBoxShadow<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ boxShadow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      boxShadow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBoxShadow<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      boxShadow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      boxShadow: 'a',
      [MQ.D]: {
        boxShadow: 'b',
      },
      [MQ.T]: {
        boxShadow: 'c',
      },
      [MQ.M]: {
        boxShadow: 'd',
      },
    });
  });
});
