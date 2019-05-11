import { createTouchAction } from '../touchAction';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTouchAction', () => {
  it('should return a function', () => {
    const result = createTouchAction();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTouchAction` as component and css prop', () => {
    const result = createTouchAction()({ touchAction: 'inherit' });
    expect(toStyles(result)).toEqual({ touchAction: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTouchAction<'a'>()({ touchAction: 'a' });
    expect(toStyles(result)).toEqual({ touchAction: 'a' });
  });

  it('should use an interface which marks `createTouchAction` as optional', () => {
    const result = createTouchAction<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTouchAction<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ touchAction: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      touchAction: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTouchAction<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      touchAction: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      touchAction: 'a',
      [MQ.D]: {
        touchAction: 'b',
      },
      [MQ.T]: {
        touchAction: 'c',
      },
      [MQ.M]: {
        touchAction: 'd',
      },
    });
  });
});
