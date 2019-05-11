import { createLineHeightStep } from '../lineHeightStep';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createLineHeightStep', () => {
  it('should return a function', () => {
    const result = createLineHeightStep();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createLineHeightStep` as component and css prop', () => {
    const result = createLineHeightStep()({ lineHeightStep: 'inherit' });
    expect(toStyles(result)).toEqual({ lineHeightStep: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createLineHeightStep<'a'>()({ lineHeightStep: 'a' });
    expect(toStyles(result)).toEqual({ lineHeightStep: 'a' });
  });

  it('should use an interface which marks `createLineHeightStep` as optional', () => {
    const result = createLineHeightStep<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createLineHeightStep<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ lineHeightStep: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      lineHeightStep: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createLineHeightStep<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      lineHeightStep: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      lineHeightStep: 'a',
      [MQ.D]: {
        lineHeightStep: 'b',
      },
      [MQ.T]: {
        lineHeightStep: 'c',
      },
      [MQ.M]: {
        lineHeightStep: 'd',
      },
    });
  });
});
