import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFlexWrap } from '../flexWrap';

describe('createFlexWrap', () => {
  it('should return a function', () => {
    const result = createFlexWrap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFlexWrap` as component and css prop', () => {
    const result = createFlexWrap()({ flexWrap: 'inherit' });
    expect(toStyles(result)).toEqual({ flexWrap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexWrap<'a'>()({ flexWrap: 'a' });
    expect(toStyles(result)).toEqual({ flexWrap: 'a' });
  });

  it('should use an interface which marks `createFlexWrap` as optional', () => {
    const result = createFlexWrap<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFlexWrap<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexWrap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexWrap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexWrap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      flexWrap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      flexWrap: 'a',
      [MQ.D]: {
        flexWrap: 'b',
      },
      [MQ.T]: {
        flexWrap: 'c',
      },
      [MQ.M]: {
        flexWrap: 'd',
      },
    });
  });
});
