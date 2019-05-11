import { createContent } from '../content';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createContent', () => {
  it('should return a function', () => {
    const result = createContent();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createContent` as component and css prop', () => {
    const result = createContent()({ content: 'inherit' });
    expect(toStyles(result)).toEqual({ content: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createContent<'a'>()({ content: 'a' });
    expect(toStyles(result)).toEqual({ content: 'a' });
  });

  it('should use an interface which marks `createContent` as optional', () => {
    const result = createContent<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createContent<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ content: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      content: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createContent<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      content: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      content: 'a',
      [MQ.D]: {
        content: 'b',
      },
      [MQ.T]: {
        content: 'c',
      },
      [MQ.M]: {
        content: 'd',
      },
    });
  });
});
