import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createLineBreak } from '../lineBreak';

describe('createLineBreak', () => {
  it('should return a function', () => {
    const result = createLineBreak();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createLineBreak` as component and css prop', () => {
    const result = createLineBreak()({ lineBreak: 'inherit' });
    expect(toStyles(result)).toEqual({ lineBreak: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createLineBreak<'a'>()({ lineBreak: 'a' });
    expect(toStyles(result)).toEqual({ lineBreak: 'a' });
  });

  it('should use an interface which marks `createLineBreak` as optional', () => {
    const result = createLineBreak<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createLineBreak<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ lineBreak: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      lineBreak: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createLineBreak<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      lineBreak: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      lineBreak: 'a',
      [MQ.D]: {
        lineBreak: 'b',
      },
      [MQ.T]: {
        lineBreak: 'c',
      },
      [MQ.M]: {
        lineBreak: 'd',
      },
    });
  });
});
