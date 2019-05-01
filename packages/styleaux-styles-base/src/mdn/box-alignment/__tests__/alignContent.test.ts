import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createAlignContent } from '../alignContent';

describe('createAlignContent', () => {
  it('should return a function', () => {
    const result = createAlignContent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createAlignContent` as component and css prop', () => {
    const result = createAlignContent()({ alignContent: 'inherit' });
    expect(toStyles(result)).toEqual({ alignContent: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createAlignContent<'a'>()({ alignContent: 'a' });
    expect(toStyles(result)).toEqual({ alignContent: 'a' });
  });

  it('should use an interface which marks `createAlignContent` as optional', () => {
    const result = createAlignContent<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createAlignContent<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ alignContent: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      alignContent: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createAlignContent<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      alignContent: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      alignContent: 'a',
      [MQ.D]: {
        alignContent: 'b',
      },
      [MQ.T]: {
        alignContent: 'c',
      },
      [MQ.M]: {
        alignContent: 'd',
      },
    });
  });
});
