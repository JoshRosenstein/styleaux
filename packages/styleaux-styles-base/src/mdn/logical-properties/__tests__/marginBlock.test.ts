import { createMarginBlock } from '../marginBlock';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createMarginBlock', () => {
  it('should return a function', () => {
    const result = createMarginBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMarginBlock` as component and css prop', () => {
    const result = createMarginBlock()({ marginBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMarginBlock<'a'>()({ marginBlock: 'a' });
    expect(toStyles(result)).toEqual({ marginBlock: 'a' });
  });

  it('should use an interface which marks `createMarginBlock` as optional', () => {
    const result = createMarginBlock<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMarginBlock<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMarginBlock<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      marginBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBlock: 'a',
      [MQ.D]: {
        marginBlock: 'b',
      },
      [MQ.T]: {
        marginBlock: 'c',
      },
      [MQ.M]: {
        marginBlock: 'd',
      },
    });
  });
});
