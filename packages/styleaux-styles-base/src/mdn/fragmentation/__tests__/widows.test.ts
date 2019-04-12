import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createWidows } from '../widows';

describe('createWidows', () => {
  it('should return a function', () => {
    const result = createWidows();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createWidows` as component and css prop', () => {
    const result = createWidows()({ widows: 'inherit' });
    expect(toStyles(result)).toEqual({ widows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWidows<'a'>()({ widows: 'a' });
    expect(toStyles(result)).toEqual({ widows: 'a' });
  });

  it('should use an interface which marks `createWidows` as optional', () => {
    const result = createWidows<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createWidows<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ widows: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      widows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWidows<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      widows: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      widows: 'a',
      [MQ.D]: {
        widows: 'b',
      },
      [MQ.T]: {
        widows: 'c',
      },
      [MQ.M]: {
        widows: 'd',
      },
    });
  });
});
