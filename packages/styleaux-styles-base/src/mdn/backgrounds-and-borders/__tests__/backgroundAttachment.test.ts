import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBackgroundAttachment } from '../backgroundAttachment';

describe('createBackgroundAttachment', () => {
  it('should return a function', () => {
    const result = createBackgroundAttachment();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundAttachment` as component and css prop', () => {
    const result = createBackgroundAttachment()({ backgroundAttachment: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundAttachment: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundAttachment<'a'>()({ backgroundAttachment: 'a' });
    expect(toStyles(result)).toEqual({ backgroundAttachment: 'a' });
  });

  it('should use an interface which marks `createBackgroundAttachment` as optional', () => {
    const result = createBackgroundAttachment<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundAttachment<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundAttachment: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundAttachment: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundAttachment<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundAttachment: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      backgroundAttachment: 'a',
      [MQ.D]: {
        backgroundAttachment: 'b',
      },
      [MQ.T]: {
        backgroundAttachment: 'c',
      },
      [MQ.M]: {
        backgroundAttachment: 'd',
      },
    });
  });
});
