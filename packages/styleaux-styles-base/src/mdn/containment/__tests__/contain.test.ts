import { createContain } from '../contain';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createContain', () => {
  it('should return a function', () => {
    const result = createContain();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createContain` as component and css prop', () => {
    const result = createContain()({ contain: 'inherit' });
    expect(toStyles(result)).toEqual({ contain: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createContain<'a'>()({ contain: 'a' });
    expect(toStyles(result)).toEqual({ contain: 'a' });
  });

  it('should use an interface which marks `createContain` as optional', () => {
    const result = createContain<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createContain<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ contain: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      contain: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createContain<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      contain: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      contain: 'a',
      [MQ.D]: {
        contain: 'b',
      },
      [MQ.T]: {
        contain: 'c',
      },
      [MQ.M]: {
        contain: 'd',
      },
    });
  });
});
