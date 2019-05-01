import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createClipPath } from '../clipPath';

describe('createClipPath', () => {
  it('should return a function', () => {
    const result = createClipPath();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createClipPath` as component and css prop', () => {
    const result = createClipPath()({ clipPath: 'inherit' });
    expect(toStyles(result)).toEqual({ clipPath: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createClipPath<'a'>()({ clipPath: 'a' });
    expect(toStyles(result)).toEqual({ clipPath: 'a' });
  });

  it('should use an interface which marks `createClipPath` as optional', () => {
    const result = createClipPath<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createClipPath<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ clipPath: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      clipPath: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createClipPath<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      clipPath: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      clipPath: 'a',
      [MQ.D]: {
        clipPath: 'b',
      },
      [MQ.T]: {
        clipPath: 'c',
      },
      [MQ.M]: {
        clipPath: 'd',
      },
    });
  });
});
