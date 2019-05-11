import { createOffsetRotate } from '../offsetRotate';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createOffsetRotate', () => {
  it('should return a function', () => {
    const result = createOffsetRotate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createOffsetRotate` as component and css prop', () => {
    const result = createOffsetRotate()({ offsetRotate: 'inherit' });
    expect(toStyles(result)).toEqual({ offsetRotate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createOffsetRotate<'a'>()({ offsetRotate: 'a' });
    expect(toStyles(result)).toEqual({ offsetRotate: 'a' });
  });

  it('should use an interface which marks `createOffsetRotate` as optional', () => {
    const result = createOffsetRotate<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createOffsetRotate<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ offsetRotate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      offsetRotate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createOffsetRotate<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      offsetRotate: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      offsetRotate: 'a',
      [MQ.D]: {
        offsetRotate: 'b',
      },
      [MQ.T]: {
        offsetRotate: 'c',
      },
      [MQ.M]: {
        offsetRotate: 'd',
      },
    });
  });
});
