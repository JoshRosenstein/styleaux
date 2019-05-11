import { createAlignSelf } from '../alignSelf';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createAlignSelf', () => {
  it('should return a function', () => {
    const result = createAlignSelf();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAlignSelf` as component and css prop', () => {
    const result = createAlignSelf()({ alignSelf: 'inherit' });
    expect(toStyles(result)).toEqual({ alignSelf: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAlignSelf<'a'>()({ alignSelf: 'a' });
    expect(toStyles(result)).toEqual({ alignSelf: 'a' });
  });

  it('should use an interface which marks `createAlignSelf` as optional', () => {
    const result = createAlignSelf<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAlignSelf<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ alignSelf: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      alignSelf: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAlignSelf<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      alignSelf: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      alignSelf: 'a',
      [MQ.D]: {
        alignSelf: 'b',
      },
      [MQ.T]: {
        alignSelf: 'c',
      },
      [MQ.M]: {
        alignSelf: 'd',
      },
    });
  });
});
