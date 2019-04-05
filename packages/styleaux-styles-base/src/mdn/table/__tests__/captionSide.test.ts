import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { createCaptionSide } from '../captionSide';

describe('captionSide', () => {
  it('should return a function', () => {
    const result = createCaptionSide();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `captionSide` as component and css prop', () => {
    const result = createCaptionSide()({ captionSide: 'inherit' });
    expect(toStyles(result)).toEqual({ captionSide: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createCaptionSide<'a'>()({ captionSide: 'a' });
    expect(toStyles(result)).toEqual({ captionSide: 'a' });
  });

  it('should use an interface which marks `captionSide` as optional', () => {
    const result = createCaptionSide<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createCaptionSide<'value',never,IThemeWithoutBreakpoints>({
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
