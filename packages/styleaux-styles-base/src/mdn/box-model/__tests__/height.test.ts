import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createHeight } from '../height';

describe('createHeight', () => {
  it('should return a function', () => {
    const result = createHeight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createHeight` as component and css prop', () => {
    const result = createHeight()({ height: 'inherit' });
    expect(toStyles(result)).toEqual({ height: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createHeight<'a'>()({ height: 'a' });
    expect(toStyles(result)).toEqual({ height: 'a' });
  });

  it('should use an interface which marks `createHeight` as optional', () => {
    const result = createHeight<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createHeight<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ height: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      height: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createHeight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      height: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      height: 'a',
      [MQ.D]: {
        height: 'b',
      },
      [MQ.T]: {
        height: 'c',
      },
      [MQ.M]: {
        height: 'd',
      },
    });
  });
});
