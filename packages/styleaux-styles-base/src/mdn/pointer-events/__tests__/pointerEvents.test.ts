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

import { createPointerEvents } from '../pointerEvents';

describe('pointerEvents', () => {
  it('should return a function', () => {
    const result = createPointerEvents();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `pointerEvents` as component and css prop', () => {
    const result = createPointerEvents()({ pointerEvents: 'inherit' });
    expect(toStyles(result)).toEqual({ pointerEvents: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPointerEvents<'a'>()({ pointerEvents: 'a' });
    expect(toStyles(result)).toEqual({ pointerEvents: 'a' });
  });

  it('should use an interface which marks `pointerEvents` as optional', () => {
    const result = createPointerEvents<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPointerEvents<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ pointerEvents: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      pointerEvents: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPointerEvents<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      pointerEvents: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      pointerEvents: 'a',
      [MQ.D]: {
        pointerEvents: 'b',
      },
      [MQ.T]: {
        pointerEvents: 'c',
      },
      [MQ.M]: {
        pointerEvents: 'd',
      },
    });
  });
});
