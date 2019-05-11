import { createOffsetPath } from '../offsetPath';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createOffsetPath', () => {
  it('should return a function', () => {
    const result = createOffsetPath();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOffsetPath` as component and css prop', () => {
    const result = createOffsetPath()({ offsetPath: 'inherit' });
    expect(toStyles(result)).toEqual({ offsetPath: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOffsetPath<'a'>()({ offsetPath: 'a' });
    expect(toStyles(result)).toEqual({ offsetPath: 'a' });
  });

  it('should use an interface which marks `createOffsetPath` as optional', () => {
    const result = createOffsetPath<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOffsetPath<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ offsetPath: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      offsetPath: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOffsetPath<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      offsetPath: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      offsetPath: 'a',
      [MQ.D]: {
        offsetPath: 'b',
      },
      [MQ.T]: {
        offsetPath: 'c',
      },
      [MQ.M]: {
        offsetPath: 'd',
      },
    });
  });
});
