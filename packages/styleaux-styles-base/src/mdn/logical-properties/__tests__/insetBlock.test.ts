import { createInsetBlock } from '../insetBlock';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createInsetBlock', () => {
  it('should return a function', () => {
    const result = createInsetBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createInsetBlock` as component and css prop', () => {
    const result = createInsetBlock()({ insetBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ insetBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInsetBlock<'a'>()({ insetBlock: 'a' });
    expect(toStyles(result)).toEqual({ insetBlock: 'a' });
  });

  it('should use an interface which marks `createInsetBlock` as optional', () => {
    const result = createInsetBlock<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createInsetBlock<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInsetBlock<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      insetBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetBlock: 'a',
      [MQ.D]: {
        insetBlock: 'b',
      },
      [MQ.T]: {
        insetBlock: 'c',
      },
      [MQ.M]: {
        insetBlock: 'd',
      },
    });
  });
});
