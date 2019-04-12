import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createCaptionSide } from '../captionSide';

describe('createCaptionSide', () => {
  it('should return a function', () => {
    const result = createCaptionSide();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createCaptionSide` as component and css prop', () => {
    const result = createCaptionSide()({ captionSide: 'inherit' });
    expect(toStyles(result)).toEqual({ captionSide: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createCaptionSide<'a'>()({ captionSide: 'a' });
    expect(toStyles(result)).toEqual({ captionSide: 'a' });
  });

  it('should use an interface which marks `createCaptionSide` as optional', () => {
    const result = createCaptionSide<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createCaptionSide<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ captionSide: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      captionSide: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createCaptionSide<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      captionSide: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      captionSide: 'a',
      [MQ.D]: {
        captionSide: 'b',
      },
      [MQ.T]: {
        captionSide: 'c',
      },
      [MQ.M]: {
        captionSide: 'd',
      },
    });
  });
});
