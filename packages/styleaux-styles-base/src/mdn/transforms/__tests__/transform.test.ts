import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTransform } from '../transform';

describe('createTransform', () => {
  it('should return a function', () => {
    const result = createTransform();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTransform` as component and css prop', () => {
    const result = createTransform()({ transform: 'inherit' });
    expect(toStyles(result)).toEqual({ transform: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransform<'a'>()({ transform: 'a' });
    expect(toStyles(result)).toEqual({ transform: 'a' });
  });

  it('should use an interface which marks `createTransform` as optional', () => {
    const result = createTransform<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTransform<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transform: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transform: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransform<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      transform: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      transform: 'a',
      [MQ.D]: {
        transform: 'b',
      },
      [MQ.T]: {
        transform: 'c',
      },
      [MQ.M]: {
        transform: 'd',
      },
    });
  });
});
