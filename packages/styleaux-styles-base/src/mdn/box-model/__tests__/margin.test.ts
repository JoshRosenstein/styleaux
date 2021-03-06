import { createMargin } from '../margin';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMargin', () => {
  it('should return a function', () => {
    const result = createMargin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMargin` as component and css prop', () => {
    const result = createMargin()({ margin: 'inherit' });
    expect(toStyles(result)).toEqual({ margin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMargin<'a'>()({ margin: 'a' });
    expect(toStyles(result)).toEqual({ margin: 'a' });
  });

  it('should use an interface which marks `createMargin` as optional', () => {
    const result = createMargin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMargin<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ margin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      margin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMargin<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      margin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      margin: 'a',
      [MQ.D]: {
        margin: 'b',
      },
      [MQ.T]: {
        margin: 'c',
      },
      [MQ.M]: {
        margin: 'd',
      },
    });
  });
});
