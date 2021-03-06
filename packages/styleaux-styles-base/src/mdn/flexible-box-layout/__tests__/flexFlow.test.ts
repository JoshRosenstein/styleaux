import { createFlexFlow } from '../flexFlow';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFlexFlow', () => {
  it('should return a function', () => {
    const result = createFlexFlow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFlexFlow` as component and css prop', () => {
    const result = createFlexFlow()({ flexFlow: 'inherit' });
    expect(toStyles(result)).toEqual({ flexFlow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFlexFlow<'a'>()({ flexFlow: 'a' });
    expect(toStyles(result)).toEqual({ flexFlow: 'a' });
  });

  it('should use an interface which marks `createFlexFlow` as optional', () => {
    const result = createFlexFlow<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFlexFlow<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ flexFlow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      flexFlow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFlexFlow<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      flexFlow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      flexFlow: 'a',
      [MQ.D]: {
        flexFlow: 'b',
      },
      [MQ.T]: {
        flexFlow: 'c',
      },
      [MQ.M]: {
        flexFlow: 'd',
      },
    });
  });
});
