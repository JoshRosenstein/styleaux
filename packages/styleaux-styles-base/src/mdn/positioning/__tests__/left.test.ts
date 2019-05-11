import { createLeft } from '../left';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createLeft', () => {
  it('should return a function', () => {
    const result = createLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createLeft` as component and css prop', () => {
    const result = createLeft()({ left: 'inherit' });
    expect(toStyles(result)).toEqual({ left: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createLeft<'a'>()({ left: 'a' });
    expect(toStyles(result)).toEqual({ left: 'a' });
  });

  it('should use an interface which marks `createLeft` as optional', () => {
    const result = createLeft<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createLeft<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ left: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      left: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createLeft<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      left: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      left: 'a',
      [MQ.D]: {
        left: 'b',
      },
      [MQ.T]: {
        left: 'c',
      },
      [MQ.M]: {
        left: 'd',
      },
    });
  });
});
